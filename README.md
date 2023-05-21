## ABD
### Get everything
___

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
