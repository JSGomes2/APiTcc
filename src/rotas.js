import clientesController from './controller/ClientesController.js'
import loginController from './controller/loginController.js'
import produtosController from './controller/ProdutosController.js'


export default function adicionarRotas(servidor){

    servidor.use(clientesController);
    servidor.use(loginController);
    servidor.use(produtosController);

}