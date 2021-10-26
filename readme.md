# Barracks


## Generate token
```
curl --location --request POST 'http://localhost:8000/api/token/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "dev",
    "password": "1234"
}'
```