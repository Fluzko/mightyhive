#nestjs-sockets-basis

## - Bases
The solutions is made within two parts, a client and a server. both uses socket.io library.

- The client is a basic react aplication for visual testing, it implements libraries like: axios, socket.io-client, antd (UI)

- The server is built with [Nestjs Framework](https://nestjs.com) with Express and Typescript. It uses some builtin modules for implementing the routes and the websocket. Some libraries used are: Jest, socket.io, typeorm, sqlite3, etc.

## - Installation

Use the package manager [yarn](https://yarnpkg.com/) to install all the requirements that the project needs.

```bash
cd nestjs-sockets-basis
cd client
yarn
```

```bash
cd nestjs-sockets-basis
cd server
yarn
```

## - Test
The server has some test writen that you can run to verify the solution
```bash
cd server
yarn lint
yarn test
```


## - Usage
First of all you need to start the server and the client:

### server:
```bash
cd server
yarn start
```
### client:
```bash
cd client
yarn start
```
#
### DATABASE
The solution uses sqlite3 to store all the data, you can find the database at *./server/sqlite.db*
#
### API REST
the server runs on port 4000, so the base url will be : **http://localhost:4000/**
 - GET
   -  /:key -> returns the value if the key is valid/exists, otherwhise a 400 error
#
### WEBSOCKET
The websocket is runing at port 4001, so the base url will be : **http://localhost:4001/**

The gateway expects to recibe a json object at **/saveKey** with the form:
```json
{
  "key": "some key",
  "value": "some value"
}
```
Also you can send the string version of the object
#

### CLIENT
The client is a simple react application who has two forms, one for inserting data via the socket, and another one for fetching it via the api.

![webapp](https://i.imgur.com/HQDvG8m.png)]
#

