

const url_id =window.location.search;
// console.log(url_id); 
 const params=new URLSearchParams(url_id);
// console.log(params);
 const id= params.get("id");
// console.log(id);
 var xhttp =new XMLHttpRequest();
 xhttp.onreadystatechange=update_user;
xhttp.open("GET",'/js/utilisateur.json');
xhttp.send();
var donnees=[];


function update_user(){
    if(this.readyState==4 && this.status==200){
          

        var information=JSON.parse(this.response);
        var parentnode= document.getElementById('body');
        information.forEach(element => {
          donnees.push(element);
        });
    donnees.forEach(element => {
       if (element.id==id){
        var node=document.getElementById('form');
        node.innerHTML+=`<form action="/admin/update-user/${id}/" method="POST><div class="mb-3">
        <label class="form-label">Nom</label>
        <input class="form-control form-control-lg" type="text" name="name" id="name" value="${element.name}" />
    </div>
    <div class="mb-3">
        <label class="form-label">Prénom</label>
        <input class="form-control form-control-lg" type="text" name="prenom" id="prenom" value="${element.prenom}" />
    </div>
    <div class="mb-3">
        <label class="form-label">Adresse</label>
        <input class="form-control form-control-lg" type="text" name="adresse" id="adresse" value="${element.adresse}" />
    </div>
    <div class="mb-3">
        <label class="form-label">Email</label>
        <input class="form-control form-control-lg" type="email" name="email" id="email" value="${element.email}" />
    </div>
    <div class="mb-3">
        <label class="form-label">Mot de passe</label>
        <input class="form-control form-control-lg" type="password" name="password"  id="password" placeholder="votre mot de passe " />
    </div>
    <div class="mb-3">
        <label class="form-label">Mot de passe</label>
        <input class="form-control form-control-lg" type="password" name="cpassword" id="cpassword" placeholder="Confirmation mot de passe" />
    </div>
    <div class="text-center mt-3" style="float: right;">
        
       <button type="submit" class="btn btn-lg btn-primary">Créer</button> 
    </div></div> </form>`;
       }
    });
  }
}
