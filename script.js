const searchBar = document.querySelector('#search-bar');
const searchBtn = document.querySelector('#search-btn');
const detailsBox = document.querySelector('.details-box');
const imgDetails = document.querySelector('.img-details');
const textDetails = document.querySelector('.text-details');
const notFound = document.querySelector('.not-found');

function invalidName() {
    notFound.style.display = 'flex'
}

searchBtn.addEventListener('click', () => {


    const city = searchBar.value;

    if(city === '') {
        invalidName()
        return
    } else {
        notFound.style.display = 'none'
    }

    const APIkey = "536b370e46b7e5a0d4eeaaa69ad3bcf1";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).
    
    then((response) => {
        
        return response.json();
    
    }).then((data) => {


        
        switch (data.weather[0].main) {

            case 'Clear':
                imgDetails.src = 'images/clear.png';
                break;
            case 'Rain':
                imgDetails.src = 'images/rain.png';
                break;
            case 'Snow':
                imgDetails.src = 'images/snow.png';
                break;
            case 'Clouds':
                imgDetails.src = 'images/cloud.png';
                break;
            case 'Haze':
                imgDetails.src = 'images/haze.png';
                break;
        }

        

        textDetails.innerHTML = `
            
            <h4>Temperatura: ${data.main.temp} °C</h4>
            <h4>Vento: ${data.wind.speed} km/h</h4>
        `;

        detailsBox.style.display = 'flex';


    }).catch((err) => {
        
        invalidName()
        detailsBox.style.display = 'none'
    
    })
})


