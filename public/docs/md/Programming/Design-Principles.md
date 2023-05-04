# Design Patterns
- READ: Gang of Four patterns
- Design patterns are ways/templates on how to solve specific problems. They are formalized as `best practices` to solve problems and build software.
- They are categorized in 2 categories:
    - Creational Patterns
    - Structural Patterns
    - Behavioral Patterns
## Creational Patterns
### Abstract factory
- Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
### Builder
- Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.
### Dependency Injection
- A class accepts the objects it requires from an injector instead of creating the objects directly.
### Factory method
- Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
### Object pool
- Avoid expensive acquisition and release of resources by recycling objects that are no longer in use. Can be considered a generalisation of connection pool and thread pool patterns.
### Singleton
- Ensure a class has only one instance, and provide a global point of access to it.
```java
class DBConnection{
    private static DBConnection instance = null; //static in order to be access without being instanciated
    private String parameters;

    private DBConnection(String params){
        this.parameters = param;
    }

    public static DBConnection connect(String params){
        if(instance == null){
            return new DBConnection(params);
        }
    
        return instance;
    }
}
```
## Structural Patterns
- Iterator
- Facade
