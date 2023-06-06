## ABD
### Get everything

# Getting started
Install the necessary libraries in order to launch the server.
Starting the website \
```bash
cd ABD
npm i && node start
```

Starting the server \
Start a new terminal
```bash
cd ../nodeJSServer 
npm i && node start index.js
```
Then you can start the server and

Remember to create a environment file in order to define your user settings
for effective setup. Create this file in the './server/' folder. \
An example file looks like this:
```
DATABASE_NAME=my_database
DATABASE_HOST=localhost
DATABASE_PASSWORD=
DATABASE_PORT=5432
DATABASE_USER=<username>

COOKIE_SECRET=keyboard cat
ENVIRONMENT=production
```
where <username> is the logged in user e.g : '/Users/phillip/' or on windows 'C:/Users/phillip'

#### Software used
:page_facing_up: [Standalone PostgreSQL (Database)](https://www.postgresql.org/download/) \
:page_facing_up: [React (Front end)]() \
:page_facing_up: [NodeJS (Server)]()

### E/R Diagram
```mermaid
---
title: ABD ER Diagram
---
erDiagram
	Listings {
		int listing_id PK
		string title
		string description
		string[] category
		string material
		string[] pictures
		int price
		bool sold
		string username FK
		string_REF_user location 
	}
	User {
		string first_name
		string last_name
		string username PK
		string password 
		date user_since
		string location
		string picture

	}

	RELATION_Following_User_User {
		int follower_username FK
		int followed_username FK
	}

	RELATION_Favorized_User_Listings {
		int username FK
		int listing_id FK
	}

	Listings }|--|| User : Own
	User }|--|{ User : Follows
	User |o--|{ Listings : Favorites
```
