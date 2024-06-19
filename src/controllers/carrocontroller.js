const carroservice = require('../services/carroservices');

module.exports = {
    buscarTodos: async (req,res)=>{
        let json ={error:'', result:[]};

    let carros = await carroservice.buscarTodos();

    for(let i in carros){
this.json.result.push({
    codigo:carros[i].codigo,
    descricao: carros[i].modelo
});

   }
    res.json(json);
}}

