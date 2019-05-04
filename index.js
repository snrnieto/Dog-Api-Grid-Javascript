//GLOBAL VARIABLES
const randomButton = document.querySelector('.random');
const listButton = document.querySelector('.list');
const refreshButton = document.querySelector('.grid');
//spinner


//EVENT LISTENERS
// window load
window.addEventListener('load', createImageGrid);
refreshButton.addEventListener('click', createImageGrid);

//FETCH CALLS
//wikipedia dog term serach





function createImageGrid(){
  fetch('https://dog.ceo/api/breeds/image/random/100')
  .then(response => response.json())
  .then(data => createGrid(data.message))
}




//fixBreed
function fixBreed(breedName){
  if(breedName === 'germanshepherd'){
    return 'German Shepherd';
  }else if(breedName === 'mexicanhairless'){
    return 'Mexican Hairless';
  }else if(breedName === 'stbernard'){
    return 'St. Bernard';
  }else if(breedName === "african"){
    return 'African Wild Dog';
  }else if(breedName === 'bullterrier'){
    return 'Bull Terier';
  }
  return capitalize(breedName);
}

//capitalize breed name
function capitalize(breedName){
  return breedName.replace(/\-/g,' ')
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase()+word.slice(1))
				          .join(" ");
}

//extract breed name
function extractBreedName(data){
  let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/\w+\.\w+/g;
  let match = regex.exec(data);
  return fixBreed(match[1]);
}

//createGrid
function createGrid(data){
  let output = '';
  const container = document.querySelector('.card-deck');
  data.map(item =>{
    output+=
    `
    <div class="col-md-3">
      <div class="well text-center">
        <h4>${extractBreedName(item)}</h4>
      </div>
      <div>
        <img src="${item}"alt="${extractBreedName(item)}"/>
      </div>
    </div>    
    `
  })
    container.innerHTML = output;
}


