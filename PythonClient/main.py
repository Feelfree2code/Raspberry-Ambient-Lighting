import requests
import json

def read_json():
    try:
        with open("configuration.json") as file:
            jsonData = json.load(file)
            data = jsonData["api"]

            print("API Address: " + data["address"])
            #print("Port: " + data["port"])
            #print("useSSL: " + data["useSSL"])
        return jsonData

    except FileNotFoundError:
        with open("configuration.json", "wt") as output:
            api_dict = {
                "api" : {
                "address": "192.168.0.103",
                "port": 5000,
                "useSSL": False
                }
            }

            json.dump(api_dict, output)

def getRequests(apiAddress, port, useSSl):
    URI = "http://" + apiAddress + ":" + str(port)
    print(URI)
    request_data = requests.get(URI + "/ligth")
    json_obj = request_data.json()
    print(request_data)

def getReq():
    request_data = requests.get('http://192.168.0.103:5000/light')
    print(request_data.json())

if __name__ == "__main__":
    #jsonData = read_json()
    #getRequests(jsonData["api"]["address"],jsonData["api"]["port"],jsonData["api"]["useSSL"])

    getReq()