FROM python:3.10.8-alpine3.16

WORKDIR /app
RUN pip install poetry==1.2.0

COPY . /app
RUN poetry install

CMD ["poetry", "run", "python", "api/main.py"]
