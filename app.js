# crawl-monitor Dockerfile

FROM python:3.12-slim

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "main"]

# Code Update 1760905611-2412

# Code Update 1760905611-11329
