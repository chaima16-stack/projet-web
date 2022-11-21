var favoris =localStorage.getItem("favoris");
favoris=JSON.parse(favoris);
console.log(favoris);
parentnode=document.getElementById("parentnode");
if (favoris!=null){
for (var i=0;i<favoris.length;i++){
  var content = `<div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
  <div class="mr-1"><img class="rounded"  width="70" id="img" src=${favoris[i].img}></div>
  <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold" id="nom">${favoris[i].nom}</span>
      <div class="d-flex flex-row product-desc">
          <div class="size mr-1"><span class="text-grey" id="marque">${favoris[i].marque}</span></div>
          <div class="color"><span class="text-grey" id="type">${favoris[i].type}</span></div>
      </div>
  </div>

      <h5 class="text-grey" id="prix">${favoris[i].prix}</h5>
      <div class="d-flex align-items-center"><a onclick="deletefromfavoris(${favoris[i].id_art}); " class="nav-icon position-relative text-decoration-none"  style="color:red;"> <i class="bi bi-trash"></i></a></div>
  </div>
  
</div>`;
parentnode.insertAdjacentHTML('beforeend',content);
}

}
function deletefromfavoris(id){
 
    favoris = favoris.filter((article) => article.id_art !== id);
    localStorage.setItem("favoris",JSON.stringify(favoris));
    window.location.href="favoris.html";
   }