//Dados dos pokemons


const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImg = document.querySelector('.pokemon_image')

//Dados do input


const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')


//Main

let search = 1

const fetchPokemon = async(pokemon)=>{

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data
    }else{
        console.log('Este elemento não existe --> ' , input.value)
    }
}

const renderPokemon = async (pokemon) => { 



    pokemonName.innerHTML = 'loading...'
    pokemonNumber.innerHTML = ''
    

    const data = await fetchPokemon(pokemon)

    if(data){

        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default']
    
        input.value = ""
        search = data.id;
    
    }else{
        pokemonName.innerHTML = 'Not Found :('
        pokemonImg.style.display = 'none' 
        pokemonNumber.innerHtml=''
    }
}

form.addEventListener('submit',(event)=>{

event.preventDefault();
renderPokemon(input.value)

} )

prev.addEventListener('click',()=>{

    if(search > 1){

        search -= 1
    
        renderPokemon(search)
    }
} )

next.addEventListener('click',()=>{

    search += 1

    renderPokemon(search)
} )

renderPokemon('1')