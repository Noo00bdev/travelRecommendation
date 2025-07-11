
const apiApp = "travel_recommendation_api.json"

btn.addEventListener('click', function(){
    const searchValue = search.value.toLowerCase()
    fetch(apiApp)
    .then(response => response.json())
    .then(data => {
        const result = data.filter(item => item.toLowerCase() === searchValue );
        if(result > 0){
            console.log("trouvé")
        }else{
            console.log("Pas trouvé")
        }
    })
    .catch(error => {
    console.log("Impossible")
    })

})

