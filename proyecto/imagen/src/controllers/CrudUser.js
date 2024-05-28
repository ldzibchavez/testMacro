import { setdata,deldata } from "../config/data.user.js";

const altaUsuario = async (data) => {
    await setdata(data);

}

const delUsuario = async (data) => {
    await deldata(data);

}

export {altaUsuario,delUsuario};