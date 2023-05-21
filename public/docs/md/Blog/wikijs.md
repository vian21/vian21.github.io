# Wiki.js
- Installed by default in docker container
- can use Relational or non relational database
- Runs on Node
- By default can not be run outside container

## Authentication
- You have a large set of authentication providers to choose from
 
 ## GitHub
 - enter client_id and client_secret for oauth
 - enter callback url as indicated in your wiki.js authentication page
 - Allow users to self register and assign them by default accounts as guests
 - this would allow us to get everyone at once and give me them permissions later
 - The other option is manually entering their emails when creating users in their authorization providers

## Creating folders
- Create a new file and add the folder name before. eg `folder/file-name`. No need of Adding `.md` or any other extension

## Making a private Doc
- Changes `Guest` permissions in Groups -> Guests. Revoke all permissions
- This will require all users to be logged in to access the documentation

## Making some pages private but still have public content
-  Allow `Guests` to view pages 
- Go under `paging rules` in `Groups` allow guests to only view content in specific folder. eg: `/public`
