const fs =require('fs');
const path =require('path');


const appDir=path.dirname(require.main.filename);
const p = path.join(appDir,'views/static/js', 'article.json');
class Article {
 constructor(id,nom,description,marque,type,prix,img){
   this.id_art=id;
    this.description = description;
    this.nom = nom;
    this.marque = marque;
    this.type = type;
    this.prix = prix;
    this.img =img;
 }
 


   static findAll(callback){
      fs.readFile(p,(err,fileContent)=>{
         if(err){
            callback([]);
         }else{
            callback(JSON.parse(fileContent));
         }
      });
   }

   save(callback){
      //lire le fichier 
      //soit fichier existe => créer tableau avec le contenu du fichier et ensuite ajouter le nouveau produit 
      // ou fichier n'exite pas => créer tableau avec le nouveau produit
      fs.readFile(p,(err,fileContent)=>{
        let id= 1;
           let articles = [];
           if(!err){
              articles = JSON.parse(fileContent);
              if (articles.length==0){
                id=1;
              }else{
                 id = articles[articles.length-1].id_art +1;
              }
             
           }
           this.id_art = id;
           articles.push(this);
           fs.writeFile(p,JSON.stringify(articles), err =>{
              if(err) console.log(err);
              callback();
           });
           
      });
     }
     static update(id,articleup,callback){
      fs.readFile(p,(err,fileContent)=>{
       const article=JSON.parse(fileContent);
       const index= article.findIndex(element => element.id_art == id);
       article[index].nom =articleup.name;
       article[index].marque =articleup.marque;
       article[index].description = articleup.description;
       article[index].type = articleup.type;
       article[index].prix = articleup.prix;
       article[index].img = "/images/"+articleup.img;
      
        fs.writeFile(p,JSON.stringify(article), err =>{
          if(err) console.log(err);
          callback();
       }); 
    
      });
    }

    static delete(id,callback){
      fs.readFile(p,(err,fileContent)=>{
       const article = JSON.parse(fileContent);
       const index= article.findIndex(element => element.id_art == id);
       article.splice(index,1);
       console.log(index);
        fs.writeFile(p,JSON.stringify(article), err =>{
          if(err) console.log(err);
          callback();
       }); 
      })
    }
}
 
module.exports =Article;