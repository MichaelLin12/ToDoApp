# ToDoApp
This is a simple ToDo Application.

# Table of Contents

1. [Project Description](#project-description)
2. [Get Started](#get-started)
3. [Credits](#credits)

## Project Description
- **What does the application do?**
    - The application is meant to be used to track tasks that need to be down each day. You are able to add and delete tasks for each day. Tasks that were created persist when opening and closing the application
- **Why did I use these technologies?**
    - The technologies used in this application was meant to help me understand some of the processes needed to build a full stack web application while at the same time challenging me to expand my field of knowledge. React was used as the frontend as I was already comfortable with using it for frontend development. Postgres was used as it was an open source RDBMS database that used SQL. Given my experience in SQL, this was an easy choice. I wanted to challenge myself into building a backend from scratch for the first time. I ended up deciding to build the backend with NodeJS as I found the process to be the most intuitive and easiest to setup compared to Django and Spring Boot. Along with that, I liked not having to being confined to using an ORM in Django. Additionally, I challenged myself to use styled-components in place of css. I felt that this was necessary as it allowed me to combine javascript with css. Furthermore, I decided to challenge myself to use the useEffect hook in React. For the most part, everything went smoothly. 
- **What challenges did I face?**
    - However, there were a few hiccups such as displaying a large number of elements in a list or a long text causing overflow and creating a bad UI experience. Along with that integrating all three environments from the database, to the backend, to the frontend was a challenge. There were multiple times where the individual parts worked but the integration failed. Lastly, it was a challenge to figure out effective ways to debug the event based code.
- **What's next?**
    - The next steps of this project include:
        1. Use Typescript instead of Javascript
        2. Deploying the application using Docker and the Cloud
        3. Running the database.sql script on initialization through stored procedures
        4. Cleaning up the React code by using hooks other than useState along with the many useEffect hooks
        5. Redesigning the application to be a single page fit with the calendar, tasks, time, and weather
        6. Adding more functionalities for each task
        7. Add Testing

## Get Started
To get started, make sure a version of nodejs of *16.17.0* or higher is installed onto your machine.

Use 

>`node -v` 

in the shell to check for installation and version. If nodejs is not installed, install the latest version from the website.

---
Make sure Postgres is setup as well along with the environmental variables

>`DB_USER = <pg user>`

>`DB_PASSWORD = <pg password>`

>`DB_HOST = <pg host>`

>`DB_PORT = <pg port>`

>`DATABASE = <database>`

on your system

Afterwards, make sure to run the command

>`psql -U postgres -f <path-to-database.sql>`

in the shell

---
In a shell

>`cd server`

> `npm install`

> `npm start`

*This will start up the server at localhost:3001*

---
In another shell

> `cd client`

> `npm install`

> `npm start`

*This will start up the client at localhost:3000*

## Credits
- [PERN Course](https://www.youtube.com/watch?v=ldYcgPKEZC8&ab_channel=freeCodeCamp.org)
- [Postgres Course](https://www.youtube.com/watch?v=qw--VYLpxG4&t=1823s&ab_channel=freeCodeCamp.org)