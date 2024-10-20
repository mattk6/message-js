# Public messaging app

## System setup

Install [node.js](https://nodejs.org/en/download/package-manager) from the official site following their setup instructions.

In terminal, cd into the message-js directory, and build the environment by running: 
```
npm install
```

### Database Setup
This project uses a mysql database. you will need to install it with instructions availible at: https://dev.mysql.com

Then you need a .env file configured with your database connection information, a sample is supplied as .env(example)

Here is the ddl for creating the nescesarry table in mySQL:

```
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```


## Run the app

Launch the webserver by running the following with port:8001:
```
node index.js
```
Navigate to http://localhost:8001 in the browser
