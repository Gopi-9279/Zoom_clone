import express from 'express';
import {createServer} from 'node:http';

import {Server} from 'socket.io';


import mongoose from 'mongoose';

import cors from 'cors';

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    return res.json({'hello' : 'world'})
});
const start =  async () =>{
    app.listen(port,()=>{
        console.log(`server  is running on port ${port}`)    
    });
}

start();