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


## Create user

```
curl --location --request POST 'http://localhost:8000/api/user/register/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "demo@mail.com",
    "password": "1234",
    "username": "demo"
}'
```