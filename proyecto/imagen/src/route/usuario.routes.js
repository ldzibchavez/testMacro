import { est_response } from "../config/responses.js"
import { altaSchema,delSchema,delIdSchema } from "../schema/generic.schema.js";
import {validate_schema} from "../function/schema.js"
import { HTTP_CODE } from "../config/code_http.js";
import {consulta, consultaId} from "../controllers/validateUser.js";
import { altaUsuario,delUsuario } from "../controllers/CrudUser.js";


const delUserId = async (req, res) => {
    let Response = JSON.parse(est_response);
    try{
        req.params.id = req.params.id ? +req.params.id : "";
        let validaReq = await validate_schema(req.params, delIdSchema);
        if (validaReq.errors) {
            Response.codigo = HTTP_CODE._400.context._001.codigo;
            Response.mensaje = HTTP_CODE._400.context._001.mensaje;
            Response.errores = validaReq.errors;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._400.status).json(Response);
            return
        }
        let valUser = await consultaId(req.params.id);
        if (valUser.length==0) {
            Response.codigo = HTTP_CODE._400.context._003.codigo;
            Response.mensaje = HTTP_CODE._400.context._003.mensaje;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._400.status).json(Response);
            return
        } 
            await delUsuario(valUser[0]);
            Response.codigo = HTTP_CODE._200.context._000.codigo;
            Response.mensaje = HTTP_CODE._200.context._000.mensaje;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._200.status).json(Response);
        
        
    } catch (err) {
        Response.codigo = HTTP_CODE._500.context._100.codigo;
        Response.mensaje = HTTP_CODE._500.context._100.mensaje;
        Response.errores.push(`${err}`);
        console.log(`${JSON.stringify(Response)}`);
        res.status(HTTP_CODE._500.status).json(Response);
    }
}

const delUser = async (req, res) => {
    let Response = JSON.parse(est_response);
    try{
        let validaReq = await validate_schema(req.body, delSchema);
        if (validaReq.errors) {
            Response.codigo = HTTP_CODE._400.context._001.codigo;
            Response.mensaje = HTTP_CODE._400.context._001.mensaje;
            Response.errores = validaReq.errors;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._400.status).json(Response);
            return
        }
        let valUser = await consulta(req.body);
        if (valUser.length==0) {
            Response.codigo = HTTP_CODE._400.context._003.codigo;
            Response.mensaje = HTTP_CODE._400.context._003.mensaje;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._400.status).json(Response);
            return
        } 
            await delUsuario(valUser[0]);
            Response.codigo = HTTP_CODE._200.context._000.codigo;
            Response.mensaje = HTTP_CODE._200.context._000.mensaje;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._200.status).json(Response);
        
        
    } catch (err) {
        Response.codigo = HTTP_CODE._500.context._100.codigo;
        Response.mensaje = HTTP_CODE._500.context._100.mensaje;
        Response.errores.push(`${err}`);
        console.log(`${JSON.stringify(Response)}`);
        res.status(HTTP_CODE._500.status).json(Response);
    }
}

const upUser = async (req, res) => {
    let Response = JSON.parse(est_response);
    try{
        let validaReq = await validate_schema(req.body, altaSchema);
        if (validaReq.errors) {
            Response.codigo = HTTP_CODE._400.context._001.codigo;
            Response.mensaje = HTTP_CODE._400.context._001.mensaje;
            Response.errores = validaReq.errors;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._400.status).json(Response);
            return
        }
        let valUser = await consulta(req.body);
        if (valUser.length>0) {
            Response.codigo = HTTP_CODE._400.context._002.codigo;
            Response.mensaje = HTTP_CODE._400.context._002.mensaje;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._400.status).json(Response);
            return
        } else {
            await altaUsuario(req.body);
            Response.codigo = HTTP_CODE._200.context._000.codigo;
            Response.mensaje = HTTP_CODE._200.context._000.mensaje;
            console.log(`${JSON.stringify(Response)}`);
            res.status(HTTP_CODE._200.status).json(Response);
        }
        
    } catch (err) {
        Response.codigo = HTTP_CODE._500.context._100.codigo;
        Response.mensaje = HTTP_CODE._500.context._100.mensaje;
        Response.errores.push(`${err}`);
        console.log(`${JSON.stringify(Response)}`);
        res.status(HTTP_CODE._500.status).json(Response);
    }
}

const getUser = async (req, res) => {
    let Response = JSON.parse(est_response);
    try{
        let result = req.query.id ? await consultaId(parseInt(req.query.id)) : await consulta();
        Response.codigo = HTTP_CODE._200.context._000.codigo;
        Response.mensaje = HTTP_CODE._200.context._000.mensaje;
        Response.resultado = result;
        console.log(`${JSON.stringify(Response)}`);
        res.status(HTTP_CODE._200.status).json(Response);
    } catch (err) {
        Response.codigo = HTTP_CODE._500.context._100.codigo;
        Response.mensaje = HTTP_CODE._500.context._100.mensaje;
        Response.errores.push(`${err}`);
        console.log(`${JSON.stringify(Response)}`);
        res.status(HTTP_CODE._500.status).json(Response);
    }
}
export {upUser,getUser,delUser,delUserId};