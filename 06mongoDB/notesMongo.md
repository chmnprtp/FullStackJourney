# Day 2

### Difference between Sql and NoSql
             SQl                                                NoSQL
    1)data is stored in rows and columns        1) data is stored as documents,
      (tabular form)                               key-value pair,graph,wide column
    2)fixed/predefine Schema/structure          2) By default doesn't have fixed 
                                                   Schema(dynamic schema, schema-less)
    3)it supports vertical scaling              3) it supports horizontal scaling
    4)ideal for complex queries(join two        4) not ideal
      or more table, nested queries)            
    5)it is used when relation b/w data         5) when relation b/w data is not imp.
       is important
    6)it is also known as RDBMS                 6) it is also known as Non-RDBMS
    7)not suitable for large amount of data     7) it is use when we have to handle 
                                                   large amount of data(distributed and sharding)

    Scaling --> altering the size/capacity/specifications of the systems
    scaleup --> increace the capacity
    scale down-> decreace the capacity


    Laptop A            ------resource exhausted -----> 
    Ram => 8Gb                                              ram => 7Gb
    Mem => 512Gb                                            Mem => 400Gb

    if i need to add more resource then
        What option we have?
          1-  deleting existing resources ==> not possible

          2- Laptop A
            Ram ==>8GB     
            Mem => 512+512 

            Vertical Scaling => adding new resources to existing system

          3- Laptop A               laptop B
             Ram => 8Gb             Ram => 8Gb
             Mem => 512Gb           Mem => 512GB

             horizontal scaling ==> adding new resources with the existing system



                           Example of Vertical scaling                      
                                    SERVER A            
                            racKN   Ram => 32
                                    mem => 512

                            rack2   Ram => 32
                                    mem => 512
                                    
                            rack1   Ram => 32
                                    mem => 512

        
            Example of Horizontal scaling/distributed and highly available
                     SERVER A                        SERVER B
                racKN   Ram => 32                racKN   Ram => 32
                        mem => 512                       mem => 512

                rack2   Ram => 32                rack 2  Ram => 32
                        mem => 512                       mem => 512
                        
                rack1   Ram => 32                rack1   Ram => 32
                        mem => 512                       mem => 512


### advantae of NoSQL databases ==>
    1) it has dynamic schema
    2) it is highly available and distributed
    3) stores large amount of data
    4) CRUD operations are faster  -> why?
                
    Note: 1) js object ==> string,boolean,numbers,functions,arrays,objects,nested   arrays,nested object,null,undefined and date
          2) JSON => we cannot pass undefined,data and functions.
          3) BSON => binary JSON - to overcome problem of JSON
                      
### disadvantage of NoSql database
    maintain cost
    initial coding is complex
    difficult to form relation

### NoSql
    NoSql ==> (not only SQL) noSQL are type of databases that stores data in other than tabular format.
               they are designed for flexibity,scalibity,high performance when handling large amount of data specically unstructured or semi-structured data.

### MongoDB
    MongoDB ==> it is a popular open-source,cross platform NOSQL database. that stores JSON(document oriented) like documents(called BSON)
        open source => source code is available publically, free to use
        cross platform => it can be used on multiple platform(windows,macOS,linux)
        BSON => binray JSON

# Day 3
    Compass =>
        Steps to install compass => 
                next => accept agreement => next => select complete
                mext => next => install

                if you are getting a pop application it is installed correctly 
                ==> if not install the exe file

    Shell =>
        steps to install shell => next => next => next => install

        => to check whether the shell has been successfully installed
                a) open cmd
                b) type mongosh press enter
                c) if you are getting "test>" as prompt then it is installed
                   correctly 


        SQL                                     NoSQl
        databse-name                            database-name 
        Table-name                              collection-name
        rows,columns                            document {},{} = single document
                                                data-> key:value,


        database - it is a group of collections
        collection - it is a group of documents.
        document - it is a js objects like structure which stores in key value pair.

        compass - it is a GUI(graphical user interface) through which we can interact with database visually
                interacts means CRUD
                C - Create                      much more complex operation like
                R - Read                        indexing, aggretion,etc..
                U - Update
                D - Delete

        mongoshell - it is a CLI(command line interface).
                     it is a javascript based terminal(js objects/json).
                     using this terminal/interface/shell we can perform CRUD operations with the help of some code.

                Note: a) to tap into mongo shell
                          - open cmd
                          - type mongosh            
                      b) if you want to exit the shell
                          - ctrl+c
                          - .exit            

## Command for shell

        1) to list all the databases present
                show dbs
                show datbases

        2) to create a new database
                syntax : use database-name
                example: use college
        
        3) 
                 
        




                    
                
                        
