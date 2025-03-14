import express from "express";
import cors from "cors";
import home from "./home.js";

// Istancia del Servidor de Express

const server = express();
server.use(express.json());
server.use(cors());

// API Rutes

server.use("/", home);

export default server;
