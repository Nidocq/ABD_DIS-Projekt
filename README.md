## ABD
Last Project from the DIS course at KU datalogi developed by Mahmood Seoud (tbc115@alumni.ku.dk) and Phillip Lundin (kxg220@alumni.ku.dk). The project is a clone from the popular second hand platform https://www.dba.dk called ABD.


# Getting started
Install the necessary libraries in order to launch the server.
Starting the website 
```bash
cd client && npm i
npm start
```

Starting the server \
Start a new terminal
```bash
cd server && npm i
node index.js
```

Remember to create a environment file in order to define your user settings
for effective setup. Create this file in the './server/' folder with the following command `touch ./server/.env`. Paste the text from below into the .env file that you just created.
```
DATABASE_NAME=<database name>
DATABASE_HOST=localhost
DATABASE_PASSWORD=<database password>
DATABASE_PORT=<database port>(most likely 5432)
DATABASE_USER=<database username>

COOKIE_SECRET=keyboard cat
ENVIRONMENT=production
```
where `<database username>` is your currently logged in username e.g 'phillip' as in '/Users/phillip/' or on windows 'C:/Users/phillip'

### PostgresSQL
Be sure to have PostgreSQL installed from [Standalone PostgreSQL](https://www.postgresql.org/download/) or by downloading the latest PostgresSQL from brew `brew install postgresql`. \
Be sure to run SQL file in the server to create the instances of the tables so it can talk with the server and client. You can do that with the `psql -d <database name> < ./server/database.sql && psql -d <database name>`, or you can configure it manually from the [server file](https://github.com/Nidocq/ABD_DIS-Projekt/blob/main/server/database.sql) (Remember `<database name>` should be the same name as the DATABASE_NAME in the .env file). Please configure the .env file to match the rest of the credentials.

#### Software used
:page_facing_up: [React (Front end)]() \
:page_facing_up: [NodeJS (Server)]()

#### How to use the platform
Since this is a clone of DBA. You are of course able to list your items for sale 
- Create li

#### Known issues and shortcomings
- When refreshing the browser, the user is logged out
- The category buttons are not actually quering any items 
- Styling issues.
- The picture in create listing will not appear until you have created the actual listing
- We wanted to emphasize the implementations of the `Uses_ABD`entity in in a correct manner instead of having the functionality of the website. Therefore the since attribute is currently NULL. This applies for the `Sells` table as well.


# DISCLAIMER!
- Don't post any real names, password, or other sensitive data as this website is vulnearable. \
This of course only applies if this project is launched on a server.
# E/R Diagram
```mermaid
---
title: ABD ER Diagram
---
erDiagram
	Listings {
		int id PK
		string title
		string description
		string category
		string material
		string[] pictures
		int price
		bool sold
		string username FK
		string location FK
	}
	Users {
		string username PK
		string fullname 
		string passhash
		string location
		string picture
        string bio
	}

	RELATION_Uses_ABD {
		string username FK
		date
	}

	RELATION_Follower {
		int followerid PK
		int username1 FK
		int username2 FK
	}

	RELATION_Favors {
		string username FK
		int id FK
	}

	listings }|--|| users : Own
	users }|--|{ users : Follows
	users |o--|{ listings : Favorites
```