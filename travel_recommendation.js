const btn = document.getElementById('submit')
const search = document.getElementById('search')
const show = document.getElementById('show')
const apiApp = "travel_recommendation_api.json"

btn.addEventListener('click', function(){
    const searchValue = search.value.toLowerCase()
    fetch(apiApp)
    .then(response => response.json())
    .then(data => {
        const allCountries = data.countries
        const allCity = data.countries.flatMap(countries => countries.cities)
        const allTemples = data.temples
        
        const result = allCountries.filter(countries => countries.name.toLowerCase() === searchValue);
        if(result.length > 0){
            result.forEach(countries => {
                countries.cities.forEach(cities => {
                let showDiv = document.createElement('div')
                showDiv.classList.add('cards')

                const img = document.createElement('img')
                img.setAttribute('src', cities.imageUrl)

                const title = document.createElement('p')
                title.textContent = cities.name

                const description = document.createElement('p')
                description.textContent = cities.description

                showDiv.appendChild(img)
                showDiv.appendChild(title)
                showDiv.appendChild(description)
                show.appendChild(showDiv)

                })   
            })
            

            
        }else{
            console.log("Pas trouvé")
        }
    })
    .catch(error => {
        console.log("Impossible")
    })

})

