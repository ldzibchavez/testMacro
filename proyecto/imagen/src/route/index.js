import express from "express"
import { upUser, getUser, delUser,delUserId } from "./usuario.routes.js";
const routes = express();

routes.post('/alta', upUser);
routes.delete('/baja', delUser);
routes.delete('/baja/:id', delUserId);
routes.get('/consulta',getUser);

export {routes}