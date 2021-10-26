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