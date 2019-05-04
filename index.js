var contenido = document.querySelector('#contenido');
var url="https://dog.ceo/api/breeds/list/all";

function traer(){
	fetch(url)
         .then(res => res.json())
         .then(datos => {
              console.log(datos.message)
              mostrar(datos.message);      
          })
}


function mostrar(data){
	contenido.innerHTML = '';
            for(let valor of Object.keys(data)){
                //console.log("RAZA: "+valor)
                //https://dog.ceo/api/breed/hound/images
          fetch("https://dog.ceo/api/breed/"+valor+"/images/random")
         .then(res => res.json())
         .then(datos => {
              //console.log("Raza: "+valor+" , img: "+datos.message);  
              contenido.innerHTML += `
                
                <div class="col-md-4 text-center card" id="div-info">
					<img src="${datos.message}" style="width: 100%">
					<h2 class="text-center">${valor}</h2>
				</div>
                
                ` 
          })
          }//end for
        }//end function mostrar
