# Concurrent resource access and sharing

- bottle necks
- two user fetch the same resource
- one user makes changes and puts/updates the resource
- the second user comes and writes his own chnages with the older version of the resources
- changes of person A are erased

## SOlutions

1. Pessimistic locking

- once somebody gets a resource and starts writing/editing it, he locks the resource that nobody else can edit it while he is doing so. They can fetch it but not edit
- Bottle neck: incovenient to other users and what if he does not unlock it after finishing or his computer shuts down and he forgets all about it

## 2. Optimistic locking

- both users can fetch the resource inparallel -
- when user A saves, his changes are saved as a new versio to a certain version say user A is wrting the 10 th version a document given he fetched the 9th version
- when user two comes and tries to save the 10th version, the system will not allow him sicne he will be overwriting use A work

- for an APi usimg an Etag in the header. and id only if his etag matches the one in the database will the api allow him to update the resource.
