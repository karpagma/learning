# pylint: disable=R,C,E0401

import logging
import os

from flask import Flask

app = Flask(__name__, static_url_path='/dist')
basedir = os.path.abspath(os.path.dirname(__file__))
print('#### ' + basedir)
app.static_folder = os.path.join(basedir, '/dist')
#app.config['STATIC_FOLDER'] = os.path.join(basedir, '/dist')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api')
def hello():
    return 'Hello World'

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.' + str(e))
    return 'An internal error occurred.', 500
