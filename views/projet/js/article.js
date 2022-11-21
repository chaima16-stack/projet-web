const url_type =window.location.search;

const params=new URLSearchParams(url_type);

const type= params.get("type");

var xhttp =new XMLHttpRequest();
xhttp.onreadystatechange=onloadinfo;
xhttp.open("GET",'/js/article.json');
xhttp.send();
var donnees=[];

function onloadinfo(){
    if(this.readyState==4 && this.status==200){
      
          var  information=JSON.parse(this.response);
        
           var div1 =document.createElement('div');
        div1.className="row";
        var pag=document.getElementById('pag');
        pag.parentNode.insertBefore(div1,pag);
        information.forEach(element => {
           
            donnees.push(element);
        //  console.log(element);
         if (element.type==type){
          var div2=document.createElement('div');
          div2.className="col-md-4";
          div1.appendChild(div2);
          var div3 =document.createElement('div');
          div3.className="card product-wap rounded-0";
          div2.appendChild(div3);
          var br=document.createElement('br');
          div3.insertAdjacentElement("afterend",br);
          var div4=document.createElement('div');
          div4.className="card rounded-0";
       div3.appendChild(div4);
            var img=document.createElement('img');
            img.src=element.img;
            div4.appendChild(img);

             var b=`<div
            class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
            <ul class="list-unstyled">
                <li><a class="btn btn-success text-white" onclick="favorisinsert(${element.id_art});"><i
                            class="bi bi-heart"></i></a></li>
                <li><a class="btn btn-success text-white mt-2"  href="shop-single.html?id=${element.id_art}"><i
                            class="bi bi-eye"></i></a></li>
                <li><a class="btn btn-success text-white mt-2" href="shop-single.html?id=${element.id_art}"><i
                            class="bi bi-cart-check"></i></a></li>
            </ul>
        </div>`;
         div4.insertAdjacentHTML('beforeend',b);       
           // for (const valeur of Object.keys(element)){
               // console.log(element.nom);
              var div5=document.createElement('div');
              div5.className="card-body";
              div3.appendChild(div5);
              b= ` <a href="shop-single.html?id=${element.id_art}"  class="h3 text-decoration-none" id="nom_art" >`+element.nom+`</a>
              <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">

                  <li class="pt-2">
                      <span
                          class="float-left ml-1" id="marque"><strong> Marque: </strong>${element.marque}</span>
                      
                  </li>
                 
              </ul>
              
              <p class="text-center mb-0" id="prix">${element.prix} Dinars</p>`
              div5.insertAdjacentHTML('afterbegin',b);
             



         } 

       });
         
    }

    
}
function favorisinsert(id){
    var favoris =localStorage.getItem("favoris");
    favoris=JSON.parse(favoris);
    
    console.log(id);
   for (let i=0;i<donnees.length;i++){
     if(donnees[i].id_art==id){
       var article=donnees[i];
      
     
     }
   }
 
  
  
 test=false;
   
    if(favoris){
      /*verfier si l'article existe déja existe*/
     for(let i=0;i<favoris.length;i++){
       if (favoris[i].id_art==article.id_art){
       
       
         test=true;
         //alert
         var parentnode=document.getElementById("parentnode");
        var content=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        L'article existe déja dans votre liste des favoris!!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> 
        </button>
      </div>`;
      parentnode.insertAdjacentHTML('afterbegin',content);
        break;
       }
    }
    /*fin*/
     if(test==false){
 
     favoris.push(article);
     localStorage.setItem("favoris",JSON.stringify(favoris));
     window.location.href="favoris.html";
    }
   }else{
     favoris =[];
     favoris.push(article);
     localStorage.setItem("favoris",JSON.stringify(favoris));
     console.log(favoris);
     window.location.href="favoris.html";
    }


}



  
    




