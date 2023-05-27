# Webserver.rs
## References
- https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/
- https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/

## Notes
- Webserver relies on two protocals: TCP and HTTP
- `Transmission Control Protocol` (TCP) is a communications standard that enables application programs and computing devices to exchange messages over a network.
- TCP describes how data is sent from on host to another but does not specify what kind of information is sent
- HTTP builds on top of TCP and specifies what kind of information needs to be sent
- Both act as interfaces/guidelines that need to be implemented.
- HTTP can work TCP or another network protocal

## unwrap vs expect
- `A variant` in enums represents one of the possible data types an enum can hold.
- `Enums` are a type that can represent data that could be one of several possible variants.
- unwrap takes a `Result<T, E>` enum which has two variants
- if it receives a `Ok(T)` variant, it will just unwrap it and return it else it panics/crashes
- `expect` is used to return a custom error if there is an error
- they both panic if there is an error or nothing or None. Difference being that expect gives you a custom error. Else they all panic
- use `?` similar to try-catch. it will just print the error but your program will continue running.
- you can match on a function that can error
## Declaring types/interfaces in rust
```rust
type value<T> = Result<T, ParseIntError>
```
## Result<T, E> vs Option<T>
- Option has two variants : 
    1. Some(T)
    2. None
- Result is a richer option enum with the ability to return an error instead of return an empty `None`. It has two variants
    1. Ok(T)
    2. Err(E)
## HTTP Requests and Responses
### Requests
- General format
```
Method Request-URI HTTP-Version CRLF
headers CRLF
message-body
```
- Method: GET, POST, ...
- URI: uniform Resource Identifier. The page/resource being requested. URL(Uniform Resource Locator) is the full link, uri is just the resource
- `CRLF`: Carriage Return and Line Feed. Legacy term form typewriters. `\r` - Carriage return and `\n` - new line feed. `\r\n`
```
Get / HTTP/1.1 \r\n
```
- Both request and response end their headers with a an empty line which means that the last header has 2 CRLF
### Response
```
HTTP-Version Status-Code Reason-Phrase CRLF
headers CRLF
message-body
```

# Multithreadeding
- using a thread pool to handle requests
- A thread pool is a set of threads spawned by a process that are standing by to be assigned a task to execute.
- We’ll limit the number of threads in the pool to a small number to protect us from Denial of Service (DoS) attacks; if we had our program create a new thread for each request as it came in, someone making 10 million requests to our server could create havoc by using up all our server’s resources and grinding the processing of requests to a halt.

## Concurency vs Parallelism
- concurency: executing multiple tasks at the same time using an event loop which allocates some time for each task and eventually gives the impression that they are running at the same time
- Parallelism: running multiple tasks/fns at the same time on different CPU cores or threads.
    - Single core cpu or single event loop languages cant achieve parallelism
### Problems
- `Race conditions`: threads accessing same data or resources order of order
- `Deadlocks`: threads waiting for each other, preventing both threads from continuing
```
A deadlock occurs when a process or thread enters a waiting state because a requested system resource is held by another waiting process, which in turn is waiting for another resource held by another waiting process
```
Source: https://en.wikipedia.org/wiki/Deadlock

- Closure: anonymous function
```rust
let x = |y| y*2;
let x = |y|{y*2};
let x = |y:u32|->u32{y*2};
```
- if the main thread exits, the ongoing threads will be terminated
- to address this, store the thread return value `JoinHandle` into a variable and call the join method aggregate the output of the threads
```rust
use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }

    handle.join().unwrap();
}
```
- `handle.join()` will block the current thread from exiting until the spawned threads are done.

## Optimizations
- cache pages
- read www directory once and dynamically determine which resource is requested by the user by parsing their request to get the URI


