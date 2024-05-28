const altaSchema = {
    type: "object",
    properties: {
        nombre: {type: "string", nullable: false},
        apellido: {type: "string", nullable: false},
        mail: {type: "string", format: "email"},
        pass: {type: "string" }
    },
    required: [
        "nombre" ,
        "apellido" ,
        "mail" ,
        "pass"
    ],
    errorMessage: {
        type: "Debe ser objeto",
        properties: {
            nombre:"'nombre' debe ser tipo string",
            apellido:"'apellido' debe ser tipo string",
            mail:"'mail' debe ser tipo string con formato email",
            pass:"'pass' debe ser tipo string con un minimo de 8 caracteres",

        }
    }
}
const delSchema = {
    type: "object",
    properties: {
        nombre: {type: "string", nullable: false},
        apellido: {type: "string", nullable: false}
    },
    required: [
        "nombre" ,
        "apellido" 
    ],
    errorMessage: {
        type: "Debe ser objeto",
        properties: {
            nombre:"'nombre' debe ser tipo string",
            apellido:"'apellido' debe ser tipo string"

        }
    }
}
const delIdSchema = {
    type: "object",
    properties: {
        id: {type: "integer", nullable: false}
    },
    required: [
        "id"  
    ],
    errorMessage: {
        type: "Debe ser objeto",
        properties: {
            id:"'id' debe ser tipo entero"

        }
    }
}
export {altaSchema,delSchema,delIdSchema}