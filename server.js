import express from "express";
import cors from "cors";

// Istancia del Servidor de Express

const server = express();
server.use(express.json());
server.use(cors());

// API Rutes

export default server;
