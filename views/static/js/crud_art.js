

const url_id =window.location.search;
// console.log(url_id); 
 const params=new URLSearchParams(url_id);
// console.log(params);
 const id= params.get("id");
// console.log(id);
 var xhttp =new XMLHttpRequest();
 xhttp.onreadystatechange=update_artcile;
xhttp.open("GET",'/js/article.json');
xhttp.send();
var donnees=[];


function update_artcile(){
    if(this.readyState==4 && this.status==200){
          

        var information=JSON.parse(this.response);
    
        information.forEach(element => {
          donnees.push(element);
        });
    donnees.forEach(element => {
       if (element.id_art==id){
        var option=document.createElement('option');
        option.value=element.type;
        option.selected=true;
        option.textContent= "-----"+element.type+"-----";
        var node=document.getElementById('form');
        node.innerHTML+=`<form action="/admin/update-article/${id}/" method="POST><div class="mb-3">
        <div class="mb-3">
        <label class="form-label">Nom d'article</label>
        <input class="form-control form-control-lg" type="text" name="name" id="name" value="${element.nom}" />
    </div>
    <div class="mb-3">
        <label class="form-label">L'image de l'article</label>
        
        <input class="form-control form-control-lg" type="file" name="img" id="img" accept="image/png, image/jpeg"  />
    </div>
    <div class="mb-3">
        <label class="form-label">Marque</label>
        <input class="form-control form-control-lg" type="text" name="marque" id="marque" value="${element.marque}" />
    </div>
    <div class="mb-3">
        <label class="form-label">Type</label>
        <select class="form-control form-control-lg" name="type" id="type">
        <option value="alimentation">Alimentation</option>
        <option value="litiere">Litière</option>
        <option value="arbres">Arbre à chat & griffoir</option>
        <option value="maison">Panier & maison</option>
        <option value="jouets">Jouet</option>
        <option value="accessoires">Accessoires des animaux</option>
        
        </select>
    </div>
    <div class="mb-3">
        <label  class="form-label">Déscription</label>
        <input class="form-control form-control-lg" name="description" id="description" type="text" cols="30" rows="10" value="${element.description}">
    </div>
    <div class="mb-3">
        <label class="form-label">Prix</label>
        <input class="form-control form-control-lg" type="number" name="prix" id="prix" value="${element.prix}" />
    </div>
    <div class="text-center mt-3" style="float: right;">
        
       <button type="submit" class="btn btn-lg btn-primary">Modifier</button> 
    </div></div></form>`;
    var type=document.getElementById('type');
    console.log(type);
    type.appendChild(option);
       }
    });
  }
}
