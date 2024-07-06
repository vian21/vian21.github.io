# Interviews

### Tell me about yourself

- Patrick Igiraneza
- 2nd year software engineering student at the university of Ottawa

- My personal journey started when grade 8 make operating system
- learnt c++
- moved to web development allowed to develop solutions faster and shorter feedback loop
- started working on hacking tools, full stack webapp using php
- cybersecurity - sql injections, RCE,. ..
- SOme of my projects include: school management system, currently rewriting using a clean architecture.

- I believe I have improved and still improving the way I write software
- Rocket code for rocketry club at uOttawa

- written a web server in Rust using raw TCP sockets
- I also have home server on a raspberry pi with port forwarding

- In terms of professional experience, I did an internship at uOttawa as a research assistant in an AI related research. I had a great time working in academic and learn from experts in their fields.

- some other skills/hobbies I have apart from coding include making music
- play most guitars, giving back to my community by volunteer at my local church.

### How do you resolve conflict in a team?

- Athena. Tech stack. provide all the facts and then make a poll.

### Why do you want to work here?

Occurrence: Solace, Cisco

- What do you hope to achieve/learn from this job?

### What is your greatest weakness?

# Solace - Cloud developer

### What is a REST APi?

- Explain what API means
- Explain the various HTTP methods/verbs and what each is used for
  - GET - retrieve a resource
  - POST - create a resource
  - PUT - update a resource
  - PATCH - update a resource
  - DELETE - delete a resource

### what is the difference between PUT and PATCH?

- `PUT` is a destructive operation. It replaces the entire resource with the new one or updates a field and resets all the others (Solace implementation)
- `PATCH` updates a field and leaves the others as they are

### What is an ORM and what does it do?

- Object Relational Mapper
- Talk about builder patterns and how ORM prevent you from using raw SQL queries and why would you want to avoid them

### Explain the various components in this URL? https://api.twitter.com/2/users/1

- `Users`:
  - used to get all the resources
  - it is a collection (set of all the resources)
  - `/1` is id of the user resource
- What does `/2/` mean? -> Indicates the API version being called
- `api.`:
  - subdomain
  - design choice but not required. used to separate the frontend/client from the api server. Just a design choice

### Tell me about yourself and highlight only relevant details to the job

- Know the job description
- company product, you will be working on

# Cisco - Catalyst engineer

### How do you resolve a bug?

- Try a solution. quick and dirty
- read on trusted sources> Stack Overflow, Github issues. Even use AI to stream line the process

### what is IOT?

- refers to all devices, sensors, software that is connected and exchanges data over the internet

### what is a network?

- it is the interconnection of devices that allows them to share data.

### router

- device used to route traffic from one network to another. subnet to another

### Network switch

- networking hardware that connects devices on a network using packet switching to receive and forward data to the destination device using their MAC addresses
- used to direct traffic of packets from source to destination

### What is PoE - Power over Ethernet

### MAC - Medium Access Control address

- unique identifier assigned to every network interface.
- 6 groups of hex
- 2 types: universally assigned and local
- universally assigned, assigned by manufacturer
- locally assigned. assigned by software, network admin to override burned in address
- Packet switching method of transmitting data in `formatted units` portion. Each packet has a header and payload

### subnet

A subnet is a group of machines that can call out to each other.

### OSI - Open Systems Interconnection Model

- standard that provided common basis for systems interconnection
- 7 layers of abstraction
- Physical -> Data Link -> Network -> Transport -> Session -> Presentation -> application

- Interconnected devices talk at level N (Level N peers) and share PDU(Protocol Data units)
- PDU created at top most level, passed down, header added, to form SDU - Service Data Unit

#### 7. Application layer

- Protocol layer like HTTP, FTP that define how resource are shared

#### 6. Presentation layer

- translation of data between apps and devices e.g encoding

#### 5. Session layer

- defines how sessions between application are opened, managed and closed.
- connection try. if fail retry

#### 4. Transport layer

- defines how data is transported. packet shape and size, .. e.g TCP, UDP
- transmission, acknowledgement, segmentations

#### 3. Network layer

- address and routing and traffic control
- IPV4 & IPV6
- 4 used 32 bit address separated by dots while 6 uses 128 bits separated by colons
- ipv6 removes the need for NAT (Network Address translation).
- Network Address Translation (NAT) is a networking service that allows devices in a private network to communicate with devices in an external network, such as the internet, by translating their private IP addresses to a public IP address
- `OSPF` - Open Shortest Path First. Routing protocol that maps the whole network and finds the shortest path between nodes (sender and receiver)

#### 2. Data link layer

- transfer data between nodes
- detect and correct errors in the physical layer
- middle man between network layer and physical layer. Make request to the physical layer to send data
- Uses MAC addresses to identify itself and other devices on the network
- If received data is not meant for device, it is discarded

#### 1. Physical layer

- defines the means of transmitting raw bits over the physical data link between nodes

### IP

- implementation of the OSI model network layer

### What is a virtual function?

### Can you have multiple inheritance in java?

- No, breaks inheritance hierarchy
- But you can implement multiple interfaces

### What is a semaphore?

### How does a makefile work?
