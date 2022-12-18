from hashlib import sha256

from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

from .db import sql


class LoginUser(BaseModel):
    id: str
    password: str


app = FastAPI()


@app.get("/")
def root():
    query = "SELECT * FROM test"

    result = sql(query)

    for row in result:
        print(row)

    return {"hello root"}


@app.post("/user/login")
def login(user: LoginUser):
    password = sql(f"SELECT password from user WHERE id='{user.id}'")
    if not password:
        return 'No user found'

    # TODO. add salt
    if sha256(user.password.encode()).hexdigest() == password[0][0]:
        return 'ok'
    else:
        return 'wrong password'


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True)
