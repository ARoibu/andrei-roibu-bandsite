const commentArea = document.querySelector('#comment-area');

const submitButton = document.querySelector('.comments__button');

let commentsArray = [
    {
        name: 'Will Smif',
        comment: 'This is good stuff. I can totally get jiggy with this.',
        date: new Date('03/25/1995'),
    },
    {
        name: 'Ur Mom',
        comment: 'This really is the bees knees. Just the cats meow. Musics r totes kewl.',
        date: new Date('05/11/2010'),
    },
    {
        name: 'Spengbab Squerpantaloons',
        comment: "I can't wait to show this music to Patrec, Squid Guy, and Sando. Heheheheheh.",
        date: new Date('08/05/2020'),
    },
];

function showComment(object) {
    for (let i = 0; i < object.length; i++) {
        
        let articleElement = document.createElement('article');
        articleElement.classList.add('comments__area');

        let divElement = document.createElement('div');
        divElement.classList.add('comments__wrapper');

        let divElement2 = document.createElement('div');
        divElement2.classList.add('comments__submitted-avatar');

        articleElement.appendChild(divElement2);

        let h3Element = document.createElement('h3');
        h3Element.classList.add('comments__name');

        h3Element.innerText = object[i].name;
        divElement.appendChild(h3Element);
        
        let pElement2 = document.createElement('p');
        pElement2.classList.add('comments__date');

        pElement2.innerText = object[i].date.toLocaleDateString();
        divElement.appendChild(pElement2);

        let pElement = document.createElement('p');
        pElement.classList.add('comments__text');

        pElement.innerText = object[i].comment;
        divElement.appendChild(pElement);

        

        articleElement.appendChild(divElement);

        commentArea.prepend(articleElement);
    }
}
showComment(commentsArray);

const submitForm = document.querySelector('.comments__form');

// submitButton.addEventListener("click",
// function(event) {
//     document.getElementById('name').value='';
//     document.getElementById('comment').value='';
// });

submitForm.addEventListener("submit", 
function(event) {
event.preventDefault();
const name = event.target.name.value;
const comment = event.target.comment.value;
const date = new Date();
const newObject = { name: name, comment: comment, date: date};
commentsArray = [];
commentsArray.unshift(newObject);
showComment(commentsArray);
document.getElementById('name').value='';
document.getElementById('comment').value='';
});


