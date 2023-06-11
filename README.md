## ABD - a dba clone
Last Project from the DIS course at KU datalogi developed by Mahmood Seoud (tbc115@alumni.ku.dk) and Phillip Lundin (kxg220@alumni.ku.dk). The project is a clone from the popular second hand platform https://www.dba.dk called ABD.

## KU Tags
Phillip Lundin [kxg220]
Mahmood Mohammed Seoud [tbc115]

# DISCLAIMER!
- Don't post any real names, password, or other sensitive data as this website is vulnearable. \
This of course only applies if this project is launched on a server.

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

## Remember to create a environment file
In order to define your user settings for effective setup. Create this file in the './server/' folder with the following command `touch ./server/.env`. Paste the text from below into the .env file that you just created.
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
Be sure to run SQL file in the server to create the instances of the tables so it can talk with the server and client. You can do that with the command:

```
psql -d <database name> < ./server/database.sql && psql -d <database name>
```

You can also configure it manually from the [server file](https://github.com/Nidocq/ABD_DIS-Projekt/blob/main/server/database.sql) (Remember `<database name>` should be the same name as the DATABASE_NAME in the .env file). Please configure the .env file to match the rest of the credentials.

#### Software used
:page_facing_up: [React (Front end)]() \
:page_facing_up: [NodeJS (Server)]()

#### How to use the platform
Since this is a clone of DBA. You are of course able to list your items for sale 
> Note: We have provided some dummy users, and listings to make improve the experience.
- *Sign up* Sign up with a user to the platform that includes, username, password, fullname etc. Note that username will be your unique identifer.
- *Login* Login with your created account or the dummy accounts provided.
- *Create listing* Create a listing where you enter all the listing data.
- *View other listings* See other users listings
- *Update listing* You can update your listing. Note that you are only able to update the listings that *YOU* have created.


#### Known issues and shortcomings
- When refreshing the browser, the user is logged out
- The category buttons are not actually quering any items 
- Styling issues.
- The picture in create listing will not appear until you have created the actual listing
- If you reevaluate the picture-url when editing a listing, the server will crash
- Integers can be overflow for price and there is no error handling for that
- The `user_since` table has not been implenented

#### Improvements for next time 
In the development of our web app, we want to inform you that not all data tables have been fully implemented. This decision was made to prioritize the quality and functionality of the web app within the available resources and time constraints.

#### Database Tables Documentation

In our web application, we have implemented a database using PostgreSQL to store and manage various data related to users, listings, transactions, and relationships. The following documentation provides an overview of each table and its corresponding columns, along with their data types and constraints.

1. **Users Table**
   - The Users table stores information about registered users.
   - Columns:
     - `username` (VARCHAR): The unique username of the user (primary key).
     - `passhash` (VARCHAR): The password hash of the user (not null).
     - `fullname` (VARCHAR): The full name of the user (not null).
     - `location` (VARCHAR): The location of the user (unique, not null).
     - `bio` (VARCHAR): The bio or description of the user.
     - `picture` (VARCHAR): The URL of the user's profile picture.

2. **Listings Table**
   - The Listings table represents the available listings posted by users.
   - Columns:
     - `lid` (SERIAL): The unique identifier for each listing (primary key).
     - `title` (VARCHAR): The title of the listing (not null).
     - `description` (VARCHAR): The description of the listing.
     - `price` (INTEGER): The price of the listing (not null).
     - `categories` (VARCHAR): The categories associated with the listing.
     - `img` (VARCHAR): The URL of the listing's image (not null).
     - `sold` (BOOLEAN): Indicates whether the listing is sold (default is false).
     - `username` (VARCHAR): The username of the user who created the listing (not null).
     - `location` (VARCHAR): The location associated with the listing.
   - Foreign Key Constraints:
     - `username` references `Users(username)`.
     - `location` references `Users(location)`.

3. **Sells Table**
   - The Sells table represents the transactions of selling listings.
   - Columns:
     - `username` (VARCHAR): The username of the user who sold the listing (not null).
     - `lid` (SERIAL): The identifier of the sold listing (not null).
     - `since` (DATE): The date when the transaction occurred (not null).
   - Primary Key: `(username, lid)`
   - Foreign Key Constraints:
     - `username` references `Users(username)`.
     - `lid` references `Listings(lid)`.

4. **Uses_ABD Table**
   - The Uses_ABD table stores information about the users who have used the application.
   - Columns:
     - `username` (VARCHAR): The username of the user who used the application (not null).
     - `since` (DATE): The date when the user started using the application (not null).
   - Primary Key: `username`
   - Foreign Key Constraints:
     - `username` references `Users(username)`.

5. **Favors Table**
   - The Favors table represents the listings favorited by users.
   - Columns:
     - `username` (VARCHAR): The username of the user who favorited the listing (not null).
     - `lid` (SERIAL): The identifier of the favorited listing (not null).
   - Primary Key: `(username, lid)`
   - Foreign Key Constraints:
     - `username` references `Users(username)`.
     - `lid` references `Listings(lid)`.

6. **Follower Table**
   - The Follower table stores information about user followers.
   - Columns:
     - `followerid` (SERIAL): The unique identifier for each follower (primary key).
     - `username1`

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
		string pictures
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

	RELATION_ENT_Sells {
		string username FK
		int lid FK
		DATE since
	}

	RELATION_ENT_Uses {
		string username FK
		date since 
	}

	RELATION_ENT_Follower {
		int followerid PK
		int username1 FK
		int username2 FK
	}

	RELATION_ENT_Favors {
		string username FK
		int id FK
	}

	Listings }|--|| Users : Own
	Users }|--|{ Users : Follower
	Users |o--|{ Listings : Favors
    Users |o--o| Users : Uses
    Users |o--|{ Listings : Sells
```
Inspiration taken from this (mockup)[https://app.visily.ai/projects/773352af-63fe-49a1-bae3-238087f99ce9/boards/472105/presenter?play-mode=Prototype]
