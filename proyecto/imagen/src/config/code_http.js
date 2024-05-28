export const HTTP_CODE = {
    _200: {
        'status': 200,
        'context': {
            _000: {
                'codigo':'000',
                'mensaje':'Operacion exitosa'
            }
        }
    },
    _400: {
        'status': 400,
        'context': {
            _001: {
                'codigo':'001',
                'mensaje':'Error de esquema'
            },
            _002: {
                'codigo':'002',
                'mensaje':'El usuario ya existe'
            },
            _003: {
                'codigo':'003',
                'mensaje':'El usuario no existe'
            }
        }
    },
    _500: {
        'status': 500,
        'context': {
            _100: {
                'codigo':'100',
                'mensaje':'Error en la ejecucion'
            }
        }
    }
}