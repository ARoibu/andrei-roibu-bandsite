const showsArea = document.querySelector('.shows');

let showsArray = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Fransisco, CA',
    },
    {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Fransisco, CA',
    },
    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Fransisco, CA',
    },
    {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Fransisco, CA',
    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Fransisco, CA',
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Fransisco, CA',
    },
];

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



function displayShow(object) {
    for (let i = 0; i < object.length; i++) {

        let articleElement = document.createElement('article');
        articleElement.classList.add('shows__area');

        let showsDatesLabel = document.createElement('h3');
        showsDatesLabel.classList.add('shows__label2');
        showsDatesLabel.innerText = 'DATES';
        articleElement.appendChild(showsDatesLabel);

        let showsDates = document.createElement('p');
        showsDates.classList.add('shows__date');
        showsDates.innerText = object[i].date;
        articleElement.appendChild(showsDates);

        let showsVenueLabel = document.createElement('h3');
        showsVenueLabel.classList.add('shows__label2');
        showsVenueLabel.innerText = 'VENUE';
        articleElement.appendChild(showsVenueLabel);

        let showsVenue = document.createElement('p');
        showsVenue.classList.add('shows__venue');
        showsVenue.innerText = object[i].venue;
        articleElement.appendChild(showsVenue);

        let showsLocationLabel = document.createElement('h3');
        showsLocationLabel.classList.add('shows__label2');
        showsLocationLabel.innerText = 'LOCATION';
        articleElement.appendChild(showsLocationLabel);

        let showsLocation = document.createElement('p');
        showsLocation.classList.add('shows__location');
        showsLocation.innerText = object[i].location;
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
}

displayShow(showsArray);