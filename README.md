# Port listener 

Simple application listening on two different ports, any GET request (regardless of the route specified)
 will return the data previously stored by any POST request (regardless of the path specified)

### Dependencies

This application has the following dependencies, please see the official installation guide https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
1. `npm` 
1. `node` 

### Running the port listener 

This application will run on ports `8080` and `8888`, additionally if you need to change those numbers you can use the environment variables `PORT_RECEIVER` (with default `8080`) and `PORT_SERVER` (with default `8888`)

To run the application:

1. Install the dependencies `npm install`
2. Build `npm run build`
3. Running the application `npm run start` or `node build/server.js`

### Storing and retrieving data

The application will listen to _any_ POST request and will store the content of the request body as a text.

#### Storing data
Here is this curl example (needs `curl` installed to test it), or you can simply use [Postman](https://www.postman.com/)

```batch
curl --location --request POST 'localhost:8080/set' \
--header 'Content-Type: text/plain' \
--data-raw 'text-or-number-to-store'
```

In the example above we make a POST request to `/set` with the content `text-or-number-to-store` in the request body  

### Retrieving data

The application will listen to any `GET` request to return the stored data

```batch
curl --location --request GET 'localhost:8080/get'
```

In the example above we make a GET request to `/get` to retrieve a plain text value of what was previously stored.


### Choosing ports

Either port will be able to retrieve or store the value, you can use them at your very best convenience 
