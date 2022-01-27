# BlogappAPI
A blog API that allows user to register with Authorization Schema. User receives a Token at the header, with the token the user can access Public blogs and create a blog with a username at the endpoint. User can also find blog and can adjust/delete blog with id.  
The API protects API with a hashed password. Usernames/Emails must also be unique during the registration process.

## Tech Stack
**Server**: Node, Express

**Database**: Mongo

**Tools**: Mongo

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

 - **MONGODB_URI** 
 - **JWT_SECRET**
 - **SALT**

## Run Locally

### Clone the project You must follow all steps and have all dependencies in order to run the project locally.

  git clone https://github.com/RoyFBaltazar/BlogappAPI.git

### Go to the project directory

  cd my-project

### Install dependencies

  npm init -y

  npm i:

    -bcrypt
    -dotenv
    -express
    -helmet
    -jsonwebtoken
    -mongoose
    -morgan
  
  ## Routes

    - Endpoints, Parameters, Schema
server
-app.get('/') returns message "API up"

### Auth('/auth') creates Users and Login 

- userRouter.post('/register'):
Register Users, AuthSchema is used. password is hashed
- userRouter.post('/login'):
Login with username and password only. Token is sent to header for further acess  
- userRouter.get('/'):
 base endpoint Finds all users. Protected with token sent to header 
No parameters


### Blog('/blog')


- blogRoute.get('/'):
all Public blogs are included, must be logged in and have a token 
- blogRoute.post('/username/:username'):
Creates Blog with blogSchema, username parameter(String) name is needed to post blog.
- blogRoute.put('/id/:id'):
Updates blog with id, parameter(String) id is needed to update blog
- blogRoute.get('/id/:id'):
Returns blog associcated to id, parameter(String) id is required to find blog. onlyprivate blogs appear. 
- blogRoute.delete('/id/:id):
Deletes blog associated with id, need a token for Authorization and parameter(string) id is required to delete blog 

## Schemas

Auth Route Schema:


 - username: type: String, required: true,
 - password:type: String, required: true,
 - email:type: String, required: true,
 - birthday: type: Number, required: true,
 - age: type: Number



Blog Route Schema: 


 - username: type: String, require: true
 - created_by:type: String, required: true,
 - created_at: type: String, required: true,
 - blog_title: type: String, required: true,
 - blog_content: type: String, required: true,
 - private: type: Boolean, default: false

## Upcoming Features
- documentation with Swagger
- more routes