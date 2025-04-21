# log-parser
Parse log file and return most views and unique views
# Init repo
```
 npm init -y
npx tsc --init
npx ts-jest config:init

```


# Install runtime dependencies
```
npm install express
npm install -D typescript ts-node @types/node @types/express
npm install -D jest ts-jest @types/jest

```
# To run the tests

```
npm test
```


# To run app and use the endpoints

```
npx ts-node src/app.ts

```

# To Endpoints to check 

```
GET http://localhost:3014/ – total page views
GET http://localhost:3014/get-unique-views – unique page views
```


# Option 2) Run using docker image

```
docker build -t log-parser-app .

# Run the container
docker run -p 3000:3000 -v $(pwd)/uploads:/app/uploads log-parser
```

#Note: In case volume permisison error 

```
sudo docker run -p 3000:3000 -v $(pwd)/uploads:/app/uploads log-parser

```
