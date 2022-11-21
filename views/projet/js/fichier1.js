

     const url_id =window.location.search;
    // console.log(url_id); 
     const params=new URLSearchParams(url_id);
    // console.log(params);
     const id= params.get("id");
    // console.log(id);
     var xhttp =new XMLHttpRequest();
     xhttp.onreadystatechange=lister_article;
    xhttp.open("GET",'article.json');
    xhttp.send();
   var donnees=[];
    function lister_article(){
        if(this.readyState==4 && this.status==200){
          

            var information=JSON.parse(this.response);
            information.forEach(element => {
              donnees.push(element);
                if(element.id_art==id){
              //console.log(element);
              var img=document.getElementById("product-detail");
              img.src=element.img;
                var prix=document.getElementById("prix");
                prix.textContent=element.prix+" Dinars";
                var marque=document.getElementById("marque");
                marque.textContent=element.marque;
                var description=document.getElementById("desc");
                description.textContent=element.description;
                var type =document.getElementById("type");
                type.textContent=element.type;
                document.getElementById("nom").value=element.id_art;
                var nom =document.getElementById("nom");
                nom.textContent=element.nom;
               
  
             }
            
            });
            
    }
   
}
let panier=JSON.parse(localStorage.getItem("articles"));
console.log(panier);
console.log(donnees);

function ajouterpanier(){
   var qt=document.getElementById("product-quanity").value;
   console.log(qt);
   var id= document.getElementById("nom").value;
   console.log(id);
  for (let i=0;i<donnees.length;i++){
    if(donnees[i].id_art==id){
      var article=donnees[i];
      article["qte"]=parseInt(qt);
    
    }
  }

 
 
test=false;
  
   if(panier){
     /*verfier si l'article existe déja pour incrémenter la quantité*/
    for(let i=0;i<panier.length;i++){
      if (panier[i].id_art==article.id_art){
        console.log(article.qte);
       panier[i].qte+=article.qte;
        test=true;
        localStorage.setItem("articles",JSON.stringify(panier));
        window.location.href="panier.html";
       break;
      }
   }
   /*fin*/
    if(test==false){

    panier.push(article);
    localStorage.setItem("articles",JSON.stringify(panier));
    window.location.href="panier.html";
   }
  }else{
    panier =[];
    panier.push(article);
    localStorage.setItem("articles",JSON.stringify(panier));
    console.log(panier);
    window.location.href="panier.html";
   }
   
  }

  
    
