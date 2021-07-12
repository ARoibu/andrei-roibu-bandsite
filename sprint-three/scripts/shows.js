const showsArea = document.querySelector('.shows');

let showsArray = []

function displayHeadings() {
let headingsDiv = document.createElement('div');
headingsDiv.classList.add('shows__heading-area');

let showsTitle = document.createElement('h2');
showsTitle.classList.add('shows__heading');
showsTitle.innerText = 'Shows';
headingsDiv.appendChild(showsTitle);

let showsDates = document.createElement('p');
showsDates.classList.add('shows__label');
showsDates.innerText = 'DATES';
headingsDiv.appendChild(showsDates);

let showsVenue = document.createElement('p');
showsVenue.classList.add('shows__label');
showsVenue.innerText = 'VENUE';
headingsDiv.appendChild(showsVenue);

let showsLocation = document.createElement('p');
showsLocation.classList.add('shows__label');
showsLocation.innerText = 'LOCATION';
headingsDiv.appendChild(showsLocation);

showsArea.appendChild(headingsDiv);
}

displayHeadings();

axios
.get(`https://project-1-api.herokuapp.com/showdates?api_key=2844ad3d-8778-4d67-a742-43f9e43e3fd3`)
.then((response) => 
response.data.forEach((show) => {
showsArray.push(show);
displayShow(show);
})) 
.catch((error) => 
console.log(error));

showsArray.forEach(show => {
    displayShow(show);
});

function displayShow(object) {

        let articleElement = document.createElement('article');
        articleElement.classList.add('shows__area');

        let showsDatesLabel = document.createElement('h3');
        showsDatesLabel.classList.add('shows__label2');
        showsDatesLabel.innerText = 'DATES';
        articleElement.appendChild(showsDatesLabel);

        let showsDates = document.createElement('p');
        showsDates.classList.add('shows__date');
        showsDates.innerText = new Date(Number(object.date)).toDateString();
        articleElement.appendChild(showsDates);

        let showsVenueLabel = document.createElement('h3');
        showsVenueLabel.classList.add('shows__label2');
        showsVenueLabel.innerText = 'VENUE';
        articleElement.appendChild(showsVenueLabel);

        let showsVenue = document.createElement('p');
        showsVenue.classList.add('shows__venue');
        showsVenue.innerText = object.place;
        articleElement.appendChild(showsVenue);

        let showsLocationLabel = document.createElement('h3');
        showsLocationLabel.classList.add('shows__label2');
        showsLocationLabel.innerText = 'LOCATION';
        articleElement.appendChild(showsLocationLabel);

        let showsLocation = document.createElement('p');
        showsLocation.classList.add('shows__location');
        showsLocation.innerText = object.location;
        articleElement.appendChild(showsLocation);

        let buttonElement = document.createElement('button');
        buttonElement.classList.add('shows__button');
        buttonElement.innerText = 'BUY TICKETS';
        articleElement.appendChild(buttonElement);
        buttonElement.addEventListener("click",
        function(event) {
            console.log(showsVenue);
        });

        showsArea.appendChild(articleElement);
}



