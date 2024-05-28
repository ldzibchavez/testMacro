import express from "express"
import { routes } from "./src/route/index.js"
import cors from "cors"
const puerto = process.env.port || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/prueba',routes);
app.listen(puerto, () => console.log('Servicio: '+ puerto))