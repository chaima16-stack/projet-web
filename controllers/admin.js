const User = require('../models/Utilisateur');
const Article = require('../models/Article');
const {LocalStorage} = require("node-localstorage"); 


var localStorage = new LocalStorage('./scratch'); 
const getIndex = (req, res) =>{
   
 

        User.findAll(users =>{
            //   console.log(users);
           })
           
           res.sendFile('/views/static/index.html', { root: '.' });
       
   
   
}
const getform= (req,res)=>{
      
   
    res.sendFile('/views/static/insertUser.html', { root: '.' });
    
}
const postIndex= (req,res) => {
     
    
    const newUser =  new User(0,req.body.name,req.body.prenom,req.body.adresse,req.body.email,req.body.password,req.body.cpassword);
    newUser.save(()=> {
        res.redirect('/');
    });
}

const updateuser= (req,res) => {
     
   
    User.update(req.params.id,req.query,()=>{
        res.redirect('/');
    })
}

const deleteuser=(req,res)=>{
     
   
     

   User.delete(req.params.id,()=>{
    res.redirect('/');
})}


const getArt = (req, res) =>{
 
    Article.findAll(articles =>{
        console.log(articles);
    })
    res.sendFile('/views/static/article.html', { root: '.' });
}

const getformart= (req,res)=>{
     
   
    res.sendFile('/views/static/insertarticle.html', { root: '.' });
}

const postIndexart= (req,res) => {
     
    
    let img='/images/'+req.body.img;
    const newArt =  new Article(0,req.body.name,req.body.description,req.body.marque,req.body.type,req.body.prix,img);
    newArt.save(()=> {
        res.redirect('/admin/articles');
    });
   
}
   const updatearticle= (req,res) => {
     
    
    Article.update(req.params.id,req.query,()=>{
        res.redirect('/admin/articles');
    })
}
 
const deletearticle=(req,res)=>{
     
   
    Article.delete(req.params.id,()=>{
     res.redirect('/admin/articles');
    })
 
}
 const getlogin= (req, res) =>{
     
   
    res.sendFile('/views/static/login.html', { root: '.' });

 }
const veriflogin=(req,res)=>{
     let pag=User.login(req.body.email,req.body.password);
    if (pag ==-1){
        res.send('Invalid username or password');
        res.redirect('/admin/login');
    }else {

    
   req.session.logged=true;
    localStorage.setItem("id",pag);
 
    
    if(pag==-2){
          res.redirect("/admin");
    }else{
        res.sendFile("/views/projet/index1.html", { root: '.' });
    } 
}

}
const userindex= (req, res) =>{
     
  
    
    res.sendFile('/views/projet/index1.html', { root: '.' });
}

const logout=(req,res)=>{
    
    req.session.destroy();
    localStorage.clear();
    res.redirect('/admin/login');
}
const register= (req,res) => {
     
    const newUser =  new User(0,req.body.name,req.body.prenom,req.body.adresse,req.body.email,req.body.password,req.body.cpassword);
   var resultat= newUser.save(()=> {
        res.sendFile('/views/projet/index1.html', { root: '.' });
    });
    if(resultat==-2){
        res.sendFile('/views/static/login.html', { root: '.' });
    }
    console.log(resultat);
}


const getregister=(req,res)=>{
    res.sendFile('/views/static/register.html', { root: '.' });
}
module.exports = {
    getIndex: getIndex,
    postIndex :postIndex,
    getform:getform,
    updateuser:updateuser,
    deleteuser:deleteuser,
    getArt:getArt,
    getformart:getformart,
    postIndexart:postIndexart,
    updatearticle:updatearticle,
    deletearticle:deletearticle,
    getlogin:getlogin,
    veriflogin:veriflogin,
    userindex:userindex,
    logout:logout,
    register:register,
    getregister:getregister
}
