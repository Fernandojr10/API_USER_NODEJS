const env = process.env.NODE_ENV || 'dev'

const config = () =>{
    switch(env) {
        case 'dev':
        return{    
            bd_string: 'CHAVE DO BANCO DE DADOS',
            jwt_pass: 'SENHA',
            jwt_expires: '7d'
        }

        case 'html':
        return{
            bd_string: 'CHAVE DO BANCO DE DADOS',
            jwt_pass: 'SENHA',
            jwt_expires: '7d'
        }

        case 'prod':
        return{
            bd_string: 'CHAVE DO BANCO DE DADOS',
            jwt_pass: 'SENHA',
            jwt_expires: '7d'
        }
    }
}

console.log(`Iniciando a API em ambiennte ${env.toUpperCase()}`)

module.export = config()