import os
import time
import sys
import requests
import config	
from requests import ConnectionError
import json
import sys
import MySQLdb
import json
from datetime import datetime
import datetime


def db_connect():
    try:
        db_conn = MySQLdb.connect(host=config.database_host, 
                db=config.database_name, 
                user=config.database_user, 
                passwd=config.database_pwd)
        cursor = db_conn.cursor()        
        return db_conn, cursor
    finally:
        db_conn.commit()

def db_write(query, values):
    try:
        db_conn, cursor = db_connect()
        cursor.execute(query, values)
        db_conn.commit()
        cursor.close()
        db_conn.close()
        return True
    except Exception as e:
        print("Can't Connect to DB", query, e)
        logger.info(e)

def db_readall(query):
    try:
        db_conn, cursor = db_connect()
        cursor.execute(query)
        response = cursor.fetchall()
        cursor.close()
        db_conn.close()
        return response

    except Exception as e:
        print("Can't Connect to DB", query, e)
        logger.info(e)

def get_response_from_twitter_api(BASE_URL, authtoken):
    sys.tracebacklimit = 0
    URL = BASE_URL
    try:
        headers = {'Authorization': 'Bearer' + ' ' + authtoken}
        ResponseData = requests.get(URL, headers=headers)
        if ResponseData.status_code == 200:
            return ResponseData
        else:
            print("Data is not updating from Twitter Server")
    except requests.ConnectionError as e:
        raise(requests.ConnectionError("No Internet Connection"))		
     
def read_and_write_timeline_data(ResponseJson):
    try:
        db_conn, cursor = db_connect()
        for key, val in ResponseJson.items():
            if 'data' in key:
                for val_data in val:
                    id = val_data['id']
                    text = val_data['text']
                    # encode_text = u' '.join(text).encode('utf-8').strip()
                    encode_text = text.encode('utf8', 'replace')
                    now = datetime.datetime.now()
                    date_time = now.strftime("%Y-%m-%d %H:%M:%S")
                    query = "SELECT * FROM TwitterTimeline where id='{0}'".format(id)
                    response_data = db_readall(query)
                    # cursor.execute(query)
                    if len(response_data) != 0:
                        sql = "UPDATE TwitterTimeline set text='{0}',created_date='{1}',last_modified_date='{2}' where id='{3}'".format(encode_text, date_time, date_time, text)
                        cursor.execute(query)
                    else:
                        sql = "INSERT INTO TwitterTimeline (id, text, created_date, last_modified_date) VALUES (%s, %s, %s, %s)"
                        val = (id, encode_text, date_time, date_time)
                        response = db_write(sql, val)
                    print(response)  
        return True
    except Exception as e:
        print("Can't Insert Data to DB", e)
           

def convert_from_encode_to_decode(api_response):
    try:
        ResJsonDataList = []
        ResponseJson = json.loads(api_response.content.decode('utf-8'))
        if len(ResponseJson) != 0:
            response = read_and_write_timeline_data(ResponseJson)
            return response
        else:
            print("Received Empty data from Twitter api")
    except Exception as e:
        print(e.message)
    
def main():
    api_response = get_response_from_twitter_api(config.BASE_URL, config.authtoken)
    response = convert_from_encode_to_decode(api_response)

if __name__ == '__main__':
    main()