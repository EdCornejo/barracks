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

## Login user
```
curl --location --request POST 'http://localhost:8000/api/user/login/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "demo",
    "password": "1234"
}'
```

## Refesh token

```
curl --location --request POST 'http://localhost:8000/api/user/refresh/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzNTM2MTAxNCwianRpIjoiNTAzNWUwMThiMTA4NGNhYzkzNGVlMzE5NmYwM2VlZjEiLCJ1c2VyX2lkIjo3fQ.tZbxJ2DvrsuL4qnIN1P1oDU-F_Yi24sizvqY-6cbNIM"
}'
```

## List users
Require staff user
```
curl --location --request GET 'http://localhost:8000/api/user/' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM1Mjc2MTQ1LCJqdGkiOiIxOGRjZmVhMDQ1MzY0MWI3YWU5ZjUxOGIzMWE3Y2MyMSIsInVzZXJfaWQiOjF9.YXlctyHy4q-y1Fwkyme-6FtRnDq-BNkulZU2wQ8BZMA'

```


```
docker-compose -f docker-compose.yml up -d --build
```

docker-compose up

docker-compose up -d --build
