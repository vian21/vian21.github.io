# SOLID
`SOLID` is an acronym for 5 crucial design principles intended to make objected oriented programming more understandable, flexible, and maintainable.understandable, flexible, and maintainable.
- **S**: Single Responsibility Principle
- **O**: Open Closed Principle
- **L** Liskov Substitution Principle
- **I**: Interface Segregation Principle
- **D**: Dependency Injection Principle

## Single Responsibility Principle
- `"There should never be more than one reason for a class to change."`
- In other words, every class should have only one responsibility and should not be filled with excessive functionality
- A rectangle should not have function to calculate volume
- Instead of having a big abstract class, break it down into small reusable class. eg. GeometricShapes -> 2dShapes + 3dShapes

## Open Closed Principle
- `classes should be be open for extension but closed for modification`
- An object should have its accompanying methods to prevent another class from having to use a switch to know how to handle specific objects
- An object should be self sustaining

## Liskov Substitution
- `"Every subclass or derived class should be substitutable with their base or parent class."`
```java
Parent instance = new Child()
```
- This object should work with function that expect objects of the parent class.

## Interface Segregation
- `"Interfaces should not force classes to implement methods/attributes they dont need."`
- Large interfaces should be broken down into smaller ones

## Dependency Injection
- `Components should depend on abstractions not on concretions.`
    - High-level modules should not depend on low-level modules. Both should depend on abstractions/interfaces.
    - Abstractions should not depend upon details. Details should depend upon abstractions.
- High level modules such as business logic or webserver should not depend on the database they use or underlying framework.
- You should abstract dependencies through interfaces that outline the shape of what the modules need to work. with this dependencies can be interchanged as long as they respect this set contract/interface


```java
interface Database{
    public String query();
    public Database();
}

interface QueryBuilder extends Database{
    public String getUserName();
    public Object getAllUsers();
}

class MySQLBuilder implements QueryBuilder{
    private Connection connection;
    public String getUserName(int id){
        return connection.query("SELECT user_name FROM users WHERE id="+id);
    }
}

class MongoDBBuilder implements QueryBuilder{
    public string getUserName(int id);
    public Object getAllUsers();
...
}

String getUser(QueryBuilder db, int user_id){
    return db.getUserName(user_id);
}

public static void main(String args[]){
    MySQLBuilder mysql = new MySQLBuilder();
    MongoDBBuilder mongo = new MongoDBBuilder();

    int user_id =3;
    System.out.println(getUserName(mysql, user_id));
    System.out.println(getUserName(mongo, user_id));
}
```
- By using interfaces that define the shape of the required dependency enables to easily swap out one implementation/concretion with another.


