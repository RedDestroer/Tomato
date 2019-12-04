# Tomato

docker build -t tomato/webapp/api:latest .
docker build -t tomato/auth0/api:latest .
docker build -t tomato/vendor/api:latest .

docker create tomato/webapp/api:latest -p 5050:80 -p 5051:443

https://localhost:5051/api/values