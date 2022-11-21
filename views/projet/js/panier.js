var panier =localStorage.getItem("articles");
panier=JSON.parse(panier);
console.log(panier);
parentnode=document.getElementById("parentnode");
if (panier!=null){
for (var i=0;i<panier.length;i++){
  var content = `<div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
  <div class="mr-1"><img class="rounded"  width="70" id="img" src=${panier[i].img}></div>
  <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold" id="nom">${panier[i].nom}</span>
      <div class="d-flex flex-row product-desc">
          <div class="size mr-1"><span class="text-grey" id="marque">${panier[i].marque}</span></div>
          <div class="color"><span class="text-grey" id="type">${panier[i].type}</span></div>
      </div>
  </div>
  <div class="d-flex flex-row align-items-center qty"><i class="fa fa-minus text-danger"></i>
      <h5 class="text-grey mt-1 mr-1 ml-1" id="qte">${panier[i].qte}</h5><i class="fa fa-plus text-success"></i></div>
  <div>
      <h5 class="text-grey" id="prix">${panier[i].prix}</h5>
  </div>
  <div class="d-flex align-items-center"><a onclick="deletefrompanier(${panier[i].id_art}); " class="nav-icon position-relative text-decoration-none"  style="color:red;"> <i class="bi bi-trash"></i></a></div>
</div>`;
parentnode.insertAdjacentHTML('beforeend',content);
}

}
function validerAchat(){
    var content=` <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Confirmation de l'achat</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h6>Voulez-vous confirmer votre achats suivantes :</h6>
                <br>
                <div class="col-lg-12">`;
              var somme=0;
            
  for(let i=0;i<panier.length;i++){
    somme+=panier[i].prix*panier[i].qte;
      content+=`<div class="card mb-4">
      <div class="card-body">
          <div class="row">
              <div class="col-sm-3">
                  <p class="mb-0">Nom d'article</p>
              </div>
              <div class="col-sm-3">
                  <p class="text-muted mb-0" id="nom">${panier[i].nom}</p>
              </div>
              <div class="col-sm-3">
                  <p class="mb-0">Marque</p>
              </div>
              <div class="col-sm-3">
                  <p class="text-muted mb-0" id="marque">${panier[i].marque}</p>
              </div>
          </div>
          <hr>
          <div class="row">
              <div class="col-sm-3">
                  <p class="mb-0">Quantité</p>
              </div>
              <div class="col-sm-3">
                  <p class="text-muted mb-0" id="qte">${panier[i].qte}</p>
              </div>
              <div class="col-sm-3">
                  <p class="mb-0">Prix</p>
              </div>
              <div class="col-sm-3">
                  <p class="text-muted mb-0" id="prix">${panier[i].prix}</p>
              </div>
          </div>
          <hr>
       


      </div>
  </div>`;
  }

  content+=`     <div class="row">
  <div class="col-sm-6">
      <h6 class="mb-0">ToTal à Payer :</6>
  </div>
  <div class="col-sm-6">
      <p class="text-muted mb-0" id="total">${somme} Dinars</p>
  </div>
</div>   </div>
  <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
      <button type="submit" class="btn btn-primary" data-toggle="modal" onclick="AchatValide();">Confirmer l'achat</button>
  </div>
</div>
</div>
</div>

</div>
`;
parentnode.insertAdjacentHTML('afterend',content);
}

function AchatValide(){
 localStorage.clear();

 window.location.href="panier.html?alert=oui";

}
const url_id =window.location.search;
console.log(url_id);

if(url_id){
    const params=new URLSearchParams(url_id);
    const alert= params.get("alert");
    console.log(alert);
    if (alert=='oui'){
        
        var parentnode=document.getElementById("alert");
        var content=`<div class="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Votre Commande est bien enregistrée!</strong> Vous la receverez dans<strong> un délai de 24h </strong>. Merci pour votre Confiance &hearts; &#128513;
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> 
        </button>
      </div>`;
      parentnode.insertAdjacentHTML('afterend',content);
    }

}

function deletefrompanier(id){
 
 panier = panier.filter((article) => article.id_art !== id);
 localStorage.setItem("articles",JSON.stringify(panier));
 window.location.href="panier.html";
}

 