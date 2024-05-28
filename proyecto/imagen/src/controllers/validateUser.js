import { getdata } from "../config/data.user.js";
const consulta = async (data) => {
    try{
        let users =  await getdata();
        let user = users.filter( function(element) {return  element.nombre ===data.nombre && element.apellido ===data.apellido});
        return user

    } catch (err) {
        return err
    }
}

const consultaId = async (id) => {
    try{
        let users =  await getdata();
        let user = users.filter( function(element) {return element.id ===id});
        return user
    } catch (err) {
        return err
    }
}

export {consulta, consultaId};