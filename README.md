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
		string name
		string description
		string category
		string material
		string pictures
		int price
		int user_id FK
	}
	User {
		int user_id PK
		string first_name
		string last_name
		date user_since
		string location
	}

	RELATION_Following_User_User {
		int first_user_id UK
		int second_user_id UK
	}

	RELATION_Favorized_User_Listings {
		int user_id FK
		int listing_id FK
	}

	Listings }|--|| User : Own
	User }|--|{ User : Follows
	User |o--|{ Listings : Favorites 
```
