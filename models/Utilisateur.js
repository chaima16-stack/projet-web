const fs =require('fs');
const path =require('path');



const appDir=path.dirname(require.main.filename);
const p = path.join(appDir,'views/static/js', 'utilisateur.json');
class User {
 constructor(id,name,prenom,adresse,email,pwd,cpwd){
   this.id=id;
    this.name = name;
    this.prenom = prenom;
    this.adresse = adresse;
    this.email = email;
    this.pwd = pwd;
    this.cpwd =cpwd;
    this.type="user";
 }
 save(callback){
    //lire le fichier 
    //soit fichier existe => créer tableau avec le contenu du fichier et ensuite ajouter le nouveau produit 
    // ou fichier n'exite pas => créer tableau avec le nouveau produit
    var données=JSON.parse(fs.readFileSync(p));
    const index= données.findIndex(element => element.email == this.email);
    if(index==-1){
      if(this.pwd==this.cpwd){
         fs.readFile(p,(err,fileContent)=>{
            let id= 1;
               let users = [];
               if(!err){
                  users = JSON.parse(fileContent);
                  if (users.length==0){
                    id=1;
                  }else{
                     id = users[users.length-1].id+1;
                  }
                 
               }
               this.id = id;
               users.push(this);
               fs.writeFile(p,JSON.stringify(users), err =>{
                  if(err) console.log(err);
                  callback();
               });
               
          });
      }else
      {
         return-1;
      }
    }else{
      return -2;
    }



    
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


static update(id,userup,callback){
  fs.readFile(p,(err,fileContent)=>{
   const user=JSON.parse(fileContent);
   const index= user.findIndex(element => element.id == id);
   user[index].name =userup.name;
   user[index].prenom =userup.prenom;
   user[index].adresse = userup.adresse;
   user[index].email = userup.email;
   user[index].pwd= userup.password;
   user[index].cpwd = userup.cpassword;
   
   fs.writeFile(p,JSON.stringify(user), err =>{
      if(err) console.log(err);
      callback();
   });

  });
}
  
static delete(id,callback){
  fs.readFile(p,(err,fileContent)=>{
   const user = JSON.parse(fileContent);
   const index= user.findIndex(element => element.id == id);
   user.splice(index,1);
   fs.writeFile(p,JSON.stringify(user), err =>{
      if(err) console.log(err);
      callback();
   });
  })
}

static login(email,password){
  
 const users=JSON.parse(fs.readFileSync(p));
 
  const index= users.findIndex(element => element.email == email && element.pwd==password);
 
 if (index!=-1){
   if(users[index].type=="admin"){
      return -2; //admin se connecte
   }else{
      return users[index].id; //simple user se connecte
   }
  
 }else{
   return -1; //mot de passe ou email incorrecte
 }
}
}
 
module.exports =User;