// const btn = document.getElementById('submit')
// const reset = document.getElementById('reset')
// const search = document.getElementById('search')
// const show = document.getElementById('show')
// const apiApp = "travel_recommendation_api.json"

// btn.addEventListener('click', function(){
//     const searchValue = search.value.toLowerCase()
//     fetch(apiApp)
//     .then(response => response.json())
//     .then(data => {
//         const allCountries = data.countries
//         const allCity = data.countries.flatMap(countries => countries.cities)
//         const allTemples = data.temples
//         const allBeaches = data.beaches
        
//         const countriesTest = allCountries.filter(countries => countries.name.toLowerCase() === searchValue);
//         const cityTest = allCity.filter(cities => cities.name.toLowerCase() === searchValue);
//         let templesTest = [];
//         if (searchValue === "temples" || searchValue === "temple") {
//             templesTest = allTemples;
//         } else {
//             templesTest = allTemples.filter(temples =>
//             temples.name.toLowerCase() === searchValue );
//         }

//         let beachesTest = [];
//         if (searchValue === "beaches" || searchValue === "plage") {
//             beachesTest = allBeaches;
//         } else {
//             beachesTest = allBeaches.filter(beaches =>
//             beaches.name.toLowerCase() === searchValue);
//         }

//         if(countriesTest.length > 0){
//             countriesTest.forEach(countries => {
//                 countries.cities.forEach(cities => {
//                 let showDiv = document.createElement('div')
//                 showDiv.classList.add('cards')

//                 const img = document.createElement('img')
//                 img.setAttribute('src', cities.imageUrl)

//                 const title = document.createElement('p')
//                 title.textContent = cities.name

//                 const description = document.createElement('p')
//                 description.textContent = cities.description

//                 showDiv.appendChild(img)
//                 showDiv.appendChild(title)
//                 showDiv.appendChild(description)
//                 show.appendChild(showDiv)

//                 })   
//             })
            
            
//         }else if(cityTest.length > 0){
//             cityTest.forEach(cities => {
//                 let showDiv = document.createElement('div')
//                 showDiv.classList.add('cards')

//                 const img = document.createElement('img')
//                 img.setAttribute('src', cities.imageUrl)

//                 const title = document.createElement('p')
//                 title.textContent = cities.name

//                 const description = document.createElement('p')
//                 description.textContent = cities.description

//                 showDiv.appendChild(img)
//                 showDiv.appendChild(title)
//                 showDiv.appendChild(description)
//                 show.appendChild(showDiv)

//             })   
//         }else if(templesTest.length > 0){
//             templesTest.forEach(temples => {
//                 let showDiv = document.createElement('div')
//                 showDiv.classList.add('cards')

//                 const img = document.createElement('img')
//                 img.setAttribute('src', temples.imageUrl)

//                 const title = document.createElement('p')
//                 title.textContent = temples.name

//                 const description = document.createElement('p')
//                 description.textContent = temples.description

//                 showDiv.appendChild(img)
//                 showDiv.appendChild(title)
//                 showDiv.appendChild(description)
//                 show.appendChild(showDiv)

//             })
//         }else if(beachesTest.length > 0){
//             beachesTest.forEach(beaches => {
//                 let showDiv = document.createElement('div')
//                 showDiv.classList.add('cards')

//                 const img = document.createElement('img')
//                 img.setAttribute('src', beaches.imageUrl)

//                 const title = document.createElement('p')
//                 title.textContent = beaches.name

//                 const description = document.createElement('p')
//                 description.textContent = beaches.description

//                 showDiv.appendChild(img)
//                 showDiv.appendChild(title)
//                 showDiv.appendChild(description)
//                 show.appendChild(showDiv)
//             })
//         }
//         else {
//             // Aucun résultat
//             const notFound = document.createElement('p');
//             notFound.textContent = "❌ Aucun résultat trouvé.";
//             show.appendChild(notFound);
//         }
//     })  
//     .catch(error => {
//         console.log("Impossible")
//     })

// })
// reset.addEventListener('click', function(){
//     show.innerHTML = ""
//     search.value = ""
// })

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c98fea6773msh27041c914a2d1f1p138050jsnf9fc5e222d45',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

async function fetchData(){
    try {
	    const response = await fetch(url, options);
	    const result = await response.text();
	    console.log(result);
    } catch (error) {
	    console.error(error);
    }
}

fetchData()


