import os
from typing import Optional, List

import pymysql
from dotenv import load_dotenv

load_dotenv()

mysql_user = os.environ.get('MYSQL_USER')
mysql_endpoint = os.environ.get('MYSQL_ENDPOINT')
mysql_password = os.environ.get('MYSQL_PASSWORD')

conn = pymysql.connect(host=mysql_endpoint,
                       user=mysql_user,
                       password=mysql_password,
                       database='lol',)


def sql(query: str) -> Optional[List[tuple]]:
    with conn.cursor() as cur:
        cur.execute(query)
        return cur.fetchall()


if __name__ == '__main__':
    print(sql("SELECT password FROM user WHERE "))
