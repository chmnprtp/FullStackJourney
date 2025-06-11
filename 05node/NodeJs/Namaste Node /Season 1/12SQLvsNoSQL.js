/*
!What is Database
A database is an organized collection of data that is stored and managed using a 
Database Management System (DBMS).

dbms - is a software that interact with end users, application, and the database
        itself  to capture and analyze the data.

!   Types of Databases   
| #  | **Database Type**          | **Examples**                                  | **Description**                                              |
| -- | -------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| 1  | **Relational (RDBMS)**     | MySQL, PostgreSQL, Oracle, SQLite             | Data in tables (rows & columns), structured with schema      |
| 2  | **NoSQL**                  | MongoDB, Cassandra, DynamoDB                  | Schema-less, handles unstructured/semi-structured data       |
| 3  | **In-Memory**              | Redis, Memcached                              | Stores data in RAM for fast access                           |
| 4  | **Distributed SQL**        | CockroachDB, YugabyteDB, Google Spanner       | SQL + distributed architecture, scalable                     |
| 5  | **Time-Series**            | InfluxDB, TimescaleDB, Prometheus             | Optimized for time-stamped/chronological data                |
| 6  | **Object-Oriented (OODB)** | db4o, ObjectDB, Versant                       | Stores data as objects like in OOP languages                 |
| 7  | **Graph**                  | Neo4j, ArangoDB, Amazon Neptune               | Focused on relationships, uses nodes & edges                 |
| 8  | **Hierarchical**           | IBM IMS, Windows Registry                     | Tree-like parent-child data structure                        |
| 9  | **Network**                | IDMS, TurboIMAGE                              | Flexible model with many-to-many relationships               |
| 10 | **Cloud**                  | Amazon RDS, Google Cloud SQL, Azure Cosmos DB | Hosted & managed in the cloud, scalable and easy to maintain |


! RDMS (MySQL, PostgreSQL)
1970-80's

EF Codd - Codd's 12 Rules - rules were 13(0-12)
                |
            RDB - Relational DB

Michael Widenius - MYSQL
    My  - eldest - MySQL
    Max - MaxDB
    Maria - MariaDB - fork of MySQL - Created after Oracle acquired MySQL.

Michael Stonebreaker - Ingres Project(University of California,Berkely)
                       PostIngres(SQL)
                       PostgreSQL

SQL - languge to interact with databse

! NoSQL (MongoDB) - Notonly - 
    NoSQL - 200s
    MongoDB - 2009 - 10gen(now MongoDB Inc) - Humoungous - Mongo
Document DB
key value DB
Graph DB
wide column DB
MultiModel 

! RDBMS vs NoSQL(Docment)
| **RDBMS (MySQL)**                           | **NoSQL (MongoDB, etc.)**                                                |
| ------------------------------------------- | ------------------------------------------------------------------------ |
| Uses **tables**, **rows**, and **columns**  | Uses **collections**, **documents**, and **fields**                      |
| Stores **structured data**                  | Handles **unstructured** or **semi-structured data**                     |
| Has a **fixed schema**                      | Has a **flexible schema**                                                |
| Uses **SQL** (Structured Query Language)    | Uses query formats specific to the database (e.g., Mongo Query Language) |
| **Harder to scale** horizontally            | **Easier to scale** horizontally and vertically                          |
| Relationships via **foreign keys & joins**  | Relationships via **embedded/nested documents**                          |
| Best for **transaction-heavy** applications | Ideal for **real-time**, **big data**, and **distributed systems**       |
| Example: **Banking systems**, ERP           | Example: **Social media**, IoT, **real-time analytics**                  |


*/


