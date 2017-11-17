from flask import Flask, jsonify, request

app = Flask(__name__)
stores = [
    {
        'name': 'store1',
        'items': [
            {
                'name': 'item1',
                'price': 15.99
            }
        ]
    }
]

@app.route('/store')
def get_stores():
    return jsonify({'stores': stores})

@app.route('/store/<string:name>')
def get_store(name):
    filtered = next((store for store in stores if store['name'] == name), None)
    if filtered is None:
        return jsonify({'message': 'store not found (404)'})
    return jsonify(filtered)

@app.route('/store', methods=['POST'])
def create_store():
    request_data = request.get_json()
    new_store = {
        'name': request_data['name'],
        'items': []
    }
    stores.append(new_store)
    return jsonify(new_store)

@app.route('/store/<string:name>/item')
def get_items_in_store(name):
    filtered = next((store for store in stores if store['name'] == name), None)
    if filtered is None:
        return jsonify({'message': 'store not found (404)'})
    return jsonify({'items': filtered['items']})

@app.route('/store/<string:name>/item', methods=['POST'])
def create_item_in_store(name):
    filtered = next((store for store in stores if store['name'] == name), None)
    if filtered is None:
        return jsonify({'message': 'store not found (404)'})

    request_data = request.get_json()
    item = {
        'name': request_data['name'],
        'price': request_data['price']
    }

    filtered['items'].append(item)
    return jsonify({'store': filtered})

app.run(port=5000)
