# React & Nodejs auth App

## CREATE ssh keys

- In path `api/keys/`, create keys with these commands, see example keys in this path :

```
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
```

```
ssh-keygen -e -m PEM -f jwtRS256.key > jwtRS256.key.pub
```

## INSTALL

```
npm i
```

then run :

```
npm start
```
