from flask import Flask
from flask_restplus import Resource, Api
from flask_cors import CORS
import simple_mongo_op

app = Flask(__name__)
api = Api(app)
cors = CORS(app)


@api.route('/hello')
class HelloWorld(Resource):
    def get(self):
        return {'text': 'hello world'}


@api.route('/api/employee/get/all')
class HelloWorld(Resource):
    def get(self):
        return simple_mongo_op.get_all_employees()


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
