import express from 'express';
import {createServer} from 'node:http';

import {Server} from 'socket.io';

import  { config } from "dotenv";
config();

import mongoose from 'mongoose';

import cors from 'cors';
import { connectToSocket } from './controllers/socketManager.js';
const app = express();
const server = createServer(app);
const io = connectToSocket(server);
import userRoutes from "./routes/user.routes.js"
app.set("port",process.env.PORT );
app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit : "40kb" , extended : true}))
app.use("/api/v1/users",userRoutes);



const start =  async () =>{
    app.set("mongo_user")
    const connectionDB = await mongoose.connect(process.env.MONGOOSE_CONNECTION_URL);
    console.log(`mongoose connected to Db Host :${connectionDB.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log(`server  is running on port 8000`)    
    });
}

start();