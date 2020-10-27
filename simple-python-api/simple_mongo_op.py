from pymongo import MongoClient
import os


mongo_host = os.environ['MONGO_HOST']
mongo_port = os.environ['MONGO_PORT']
mongo_user = os.environ['MONGO_USER']
mongo_passwd = os.environ['MONGO_PASSWD']
print(mongo_host + " , port " + mongo_port)
client = MongoClient('mongodb://' + mongo_user + ':' + mongo_passwd + '@' + mongo_host + ':' + mongo_port + '/')


def get_all_employees():
    db = client['employeedb']
    collection = db['employee']
    employees_records = collection.find()
    print(employees_records)
    employee_list = [{item: data[item] for item in data if item != '_id'} for data in employees_records]
    print(employee_list)
    print(type(employee_list))
    return employee_list


# def insert_data_in_mongo():
# get_emp_names()

