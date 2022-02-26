import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/RestApi',{})
.then(()=> console.log('mongodb connected..'));
const app =express();
const PORT =5000;

app.use(bodyParser.json());
// all routes start with '/users' eg if it is '/' == '/users'
app.use('/users', userRoutes);
app.get('/',(req,res)=>res.send('hello  kamal nayan Welcome'));
app.listen(PORT, ()=>console.log(`Server ${PORT}`));
