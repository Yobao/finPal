//Importing project dependancies that we installed earlier
import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

//App Varaibles
dotenv.config();

//intializing the express app
const app: Express = express();
const port = process.env.port;

app.get("/", (req: Request, res: Response) => {
   res.send("Express + TypeScript Server");
});

app.listen(port, () => {
   console.log(`[server]: Server is running at http://localhost:${port}`);
});
