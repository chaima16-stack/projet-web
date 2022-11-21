
     var xhttp =new XMLHttpRequest();
     xhttp.onreadystatechange=lister_utilisateur;
    xhttp.open("GET",'/js/utilisateur.json');
    xhttp.send();
   var donnees=[];
    function lister_utilisateur(){
        if(this.readyState==4 && this.status==200){
          

            var information=JSON.parse(this.response);
            var parentnode= document.getElementById('body');
            information.forEach(element => {
              donnees.push(element);
                var tr=document.createElement('tr');
                parentnode.parentNode.insertBefore(tr,parentnode);
                tr.innerHTML+= `	<td class=" table-responsive ">${element.id} </td>
                <td class="d-none d-xl-table-cell">${element.name} ${element.prenom}</td>
                <td class="d-none d-xl-table-cell">${element.adresse}1</td>
                <td class="d-none d-md-table-cell">${element.email}</td>
                <td class="d-none d-md-table-cell"><a href="updateuser.html?id=${element.id}"><i class="align-middle me-1" data-feather="edit-3"></i></a><a href="/admin/delete-user/${element.id}" onclick="return confirm('Confirmez-vous la suppression ?')"><i class="align-middle me-1" data-feather="trash-2" style="color: red;"></i></a></td>`
             
            });
            
    }
   
}


