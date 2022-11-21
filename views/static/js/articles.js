
   

     var xhttp =new XMLHttpRequest();
     xhttp.onreadystatechange=lister_articles;
    xhttp.open("GET",'/js/article.json');
    xhttp.send();
   var donnees=[];
    function lister_articles(){
        if(this.readyState==4 && this.status==200){
          

            var information=JSON.parse(this.response);
            var parentnode= document.getElementById('body');
            information.forEach(element => {
              donnees.push(element);
                var tr=document.createElement('tr');
                parentnode.parentNode.insertBefore(tr,parentnode);
                tr.innerHTML+= `	<td class=" table-responsive ">${element.id_art} </td>
                <td class="d-none d-xl-table-cell"><img class="rounded"  width="70" src="${element.img}"></td>
                <td class="d-none d-xl-table-cell">${element.nom}</td>
                <td class="d-none d-md-table-cell">${element.description}</td>
                <td class="d-none d-md-table-cell">${element.marque}</td>
                <td class="d-none d-md-table-cell">${element.type}</td>
                <td class="d-none d-md-table-cell">${element.prix}</td>
                <td class="d-none d-md-table-cell"><a href="/updatearticle.html?id=${element.id_art}"><i class="align-middle me-1" data-feather="edit-3"></i></a><a href="/admin/delete-article/${element.id_art}" onclick="return confirm('Confirmez-vous la suppression ?')"><i class="align-middle me-1" data-feather="trash-2" style="color: red;"></i></a></td>`
             
            });
            
    }
   
}
