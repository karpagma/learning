function getMeFuncs() {
    var fooFns = [];
  
    for (var i=0; i<5; i++){        
      fooFns[i] = () => i;
    }
  
    return fooFns;
  }
  
  var funcs = getMeFuncs();
  console.log(funcs[0]());
  