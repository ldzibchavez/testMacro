import Ajv from "ajv";
import AjvErrors from "ajv-errors";
import addFormats from "ajv-formats";

let ajv = new Ajv({
    allErrors: true,
    messages: true
})
addFormats(ajv);
let ajvErrors = AjvErrors(ajv);

const validate_schema = async (body_json, schema) => {
    let detalles = [];
    let validate = ajv.validate(schema, body_json);
    if (!validate){
        ajvErrors.errors.forEach(function(error){
            detalles.push(`${error.instancePath ? error.instancePath + ": " : ""}${error.message}`);
        })
    }
    if (body_json.hasOwnProperty('pass')){
        let checkPass = checkPasswordStrength(body_json.pass);
        if(checkPass.length > 0) {
            validate = false;
            checkPass.forEach(function(validate){
                detalles.push(validate);
            })
            
        }

    }

    return validate ? true : {
        errors: detalles
    };
}

function checkPasswordStrength(password){
    let strength = [];
    if (password.length < 8)
        strength.push(`La contraseña debe contener minimo 8 caracteres`);
    if (!password.match(/[a-z]/) || !password.match(/[A-Z]/))
        strength.push(`La contraseña debe contener minusculas y mayusculas`);
    if(!password.match(/\d/))
        strength.push(`La contraseña debe contener numeros`);
    if (!password.match(/[^a-zA-Z\d]/))
        strength.push(`La contraseña debe contener un caracter especial`);

    return strength
}
export {
    validate_schema
}