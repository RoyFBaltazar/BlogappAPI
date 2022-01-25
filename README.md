# BlogappAPI



## Tech Stack
**Server**: Node, Express

**Database**: Mongo, AWS

**Tools**: Mongo

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

 -**MONGODB_URI** 
 -**JWT_SECRET**
 -**SALT**

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
-app.get('/')
Auth('/auth')

-userRouter.post('/register', async (req, res)=>{
-userRouter.post('/login', (req,res)=>{
-userRouter.get('/', verifyToken, (req, res)=>{

Blog('/blog')

-blogRoute.get('/', (req,res)=>{
-blogRoute.post('/username/:username', verifyToken, (req, res)=>{ blogRoute.get('/username/:username', verifyToken,(req, res)=>{
-blogRoute.put('/id/:id', verifyToken, (req ,res)=>{
-blogRoute.get('/id/:id',(req, res)=>{


## Schemas

Auth Route Schema:
{
   username:{type: String, required: true},
    password:{type: String, required: true},
     email:{type: String, required: true},
     birthday: {type: Number, required: true},
     age: {type: Number}

}

Blog Route Schema: 
{
 username:{type: String, require: true},
 created_by:{type: String, required: true},
 created_at: {type: String, required: true},
 blog_title: {type: String, required: true},
 blog_content: {type: String, required: true},
  private: {type: Boolean}
}