import os
from typing import Optional, List

from MySQLdb import _mysql
import pymysql
from dotenv import load_dotenv

load_dotenv()

mysql_user = os.environ.get('MYSQL_USER')
mysql_endpoint = os.environ.get('MYSQL_ENDPOINT')
mysql_password = os.environ.get('MYSQL_PASSWORD')

db = _mysql.connect(host=mysql_endpoint,
                    user=mysql_user,
                    passwd=mysql_password,
                    db='lol',)


def sql(query: str) -> Optional[List[tuple]]:
    db.query(query)

    result = db.store_result()

    print(result.fetch_row())


if __name__ == '__main__':
    sql("SELECT * FROM user")
