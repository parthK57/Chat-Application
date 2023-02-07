import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin : ""
    }
});

io.on("connection", (socket:any) => {

});

httpServer.listen(6000);
