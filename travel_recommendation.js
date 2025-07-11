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
        const result = allCountries.filter(countries => countries.name.toLowerCase() === searchValue);
        if(result.length > 0){
            let show = show.createElement('div')
            
        }else{
            console.log("Pas trouvé")
        }
    })
    .catch(error => {
    console.log("Impossible")
    })

})

