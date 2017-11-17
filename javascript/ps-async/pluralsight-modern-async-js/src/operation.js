const delayms = 1;

const expectedForecast = {
  fiveDay: [60, 70, 80, 45, 50]
};

function getCurrentCity(callback) {
  setTimeout(function () {

    const city = "New York, NY";
    callback(null, city);

  }, delayms)
}

function getWeather(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get weather"));
      return;
    }

    const weather = {
      temp: 50
    };

    callback(null, weather)

  }, delayms)
}

function getForecast(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get forecast"));
      return;
    }

    callback(null, expectedForecast)

  }, delayms)
}

suite.only('operations');


function doLater(func) {
  setTimeout(func, 1);
}

function fetchCurrentCityThatFails() {
  const operation = new Operation();
  doLater(() => operation.fail(new Error('GPS broken')));
  return operation;
}

function fetchWeather(city) {
  const operation = new Operation();

  getWeather(city, operation.nodeCallback);

  return operation

}

function fetchCurrentCity() {
  const operation = new Operation();

  getCurrentCity(operation.nodeCallback);

  return operation;
  
}

function fetchForecast(city) {
  const operation = new Operation();

  getForecast(city, operation.nodeCallback);

  return operation;
}

function Operation() {
  const operation = {
    successReactions: [],
    errorReactions: []
  };

  operation.fail = err => {
    operation.state = 'error';
    operation.error = err;
    operation.errorReactions.forEach(r => r(err));
  }

  operation.succeed = result => {
    operation.state = 'success';
    operation.result = result;
    operation.successReactions.forEach(r => r(result));
  }

  operation.onCompletion = (onSuccess, onError) => {
    const noop = () => {};
    const proxyOp = new Operation();

    const successHandler = () => {
      if (onSuccess) {
        let callbackResult;
        try {
          callbackResult = onSuccess(operation.result);
        } catch(error) {
          return proxyOp.fail(error)
        }
        if (callbackResult && callbackResult.onCompletion) {
          callbackResult.forwarCompletion(proxyOp);
          return;
        }
        proxyOp.succeed(callbackResult);
      } else {
        proxyOp.succeed(operation.result);
      }
    }

    const errorHandler = () => {
      if (onError) {
        let callbackResult;
        try {
          callbackResult = onError(operation.error);
        } catch(error) {
          return proxyOp.fail(error);
        }
        if (callbackResult && callbackResult.then) {
          callbackResult.forwarCompletion(proxyOp);
        } else {
          proxyOp.succeed(callbackResult);
        }
      } else {
        proxyOp.fail(operation.error);
      }
    } 

    if (operation.state === 'success') {
      successHandler();
    } else if (operation.state === 'error') {
      //onError(operation.error);
      errorHandler();
    } else {
      operation.successReactions.push(successHandler);
      operation.errorReactions.push(errorHandler);
    }

    return proxyOp;
  }
  operation.then = operation.onCompletion;

  operation.onFailure = onError => {
    return operation.onCompletion(null, onError)
  }
  operation.catch = operation.onFailure;

  operation.nodeCallback = (err, result) => {
    if (err) {
      return operation.fail(err);
    }
    return operation.succeed(result);
  }

  operation.forwarCompletion = op => {
    operation.onCompletion(op.succeed, op.fail);
  }

  return operation;

}

test('sync error recovery', done => {
  fetchCurrentCityThatFails()
    .catch(error => {
      console.log(error);
      return 'default city';
    })
    .then(city => {
      expect(city).toBe('default city');
      done();
    });
});

test('error fallthrough',  done => {
  fetchCurrentCityThatFails()
    .then(fetchForecast)
    .then(forecast => {
      expect(forecast).toBe(expectedForecast);
      done();
    })
    .catch(error => {
      done();
    });
});

test('async error recovery', done => {
  fetchCurrentCityThatFails()
    .catch(error => {
      console.log(error);
      return fetchCurrentCity();
    })
    .then(city => {
      expect(city).toBe('New York, NY');
      done();
    });
});

test('error recovery bypassed if not needed', done => {
  fetchCurrentCity()
    .catch(error => 'default city')
    .then(city => {
      expect(city).toBe('New York, NY');
      done();
    });
});

test('sync result transformation', done => {
  fetchCurrentCity()
    .then(city => {
      return '10091';
    })
    .then(zip => {
      expect(zip).toBe('10091');
      done();
    });
});

test('thrown error recovery', done => {
  fetchCurrentCity()
    .then(city => {
      throw new Error('oh noes');
    })
    .catch(e => done());
});

test('life is full of async, nesting is inevitable, let"s do something about it', (done) => {
  fetchCurrentCity()
    .then(fetchWeather)
    .then(weather => done());
});

test('lexical parallelism', (done) => {
  const city = 'NYC';
  const weatherOp = fetchWeather(city);
  const forecastOp = fetchForecast(city);

  weatherOp.onCompletion(weather => {
    forecastOp.onCompletion(forecast => {
      console.log(`It's currently ${weather.temp} in $(city) with five day forecast ${forecast.fiveDay}`);
      done();
    });
  });
});

test('register success callback async', (done) => {
  var operationThatSucceedes = fetchCurrentCity();
  doLater(() => {
    operationThatSucceedes.onCompletion(city => done());
  });
});

test('register error callback async', (done) => {
  var operationThatErrors = fetchWeather();
  doLater(() => {
    operationThatErrors.onFailure(err => done());
  });
});

test('noop if no success handler passed', (done) => {
  const operation = fetchCurrentCity();

  operation.onFailure(error => done(error));
  operation.onCompletion(result => done());
});

test('noop if no error handler passed', (done) => {
  const operation = fetchWeather();

  operation.onCompletion(result => done(new Error('shouldn"t succeed')));
  operation.onFailure(error => done());
});

test('pass multiple callbacks - all of them are called', (done) => {
  const operation = fetchCurrentCity();
  const multiDone = callDone(done).afterTwoCalls();

  operation.onCompletion(result => multiDone());
  operation.onCompletion(result => multiDone());
});

test('fetchCurrentCity pass the callback later on', (done) => {

  const operation = fetchCurrentCity();
  operation.onCompletion(
    result => done(), 
    error => done(error));
  
});
