const db = riquire('../db');



module.exports = {
   buscarTodos:()=>{
    return new Promise((acerito, rejeitado)=>{
      db.query('SELECT* FROM carros',(error,results)=>{
        if(error) { rejeitado(error); return;}
        acerito(results);
      });
    });
    
    

   }
};