const API_KEY = "2844ad3d-8778-4d67-a742-43f9e43e3fd3";

const url = "https://project-1-api.herokuapp.com/comments?api_key=2844ad3d-8778-4d67-a742-43f9e43e3fd3";

const commentArea = document.querySelector('#comment-area');

const submitButton = document.querySelector('.comments__button');

// let commentsArray = [
//     {
//         name: 'Will Smif',
//         comment: 'This is good stuff. I can totally get jiggy with this.',
//         date: new Date('03/25/1995'),
//     },
//     {
//         name: 'Ur Mom',
//         comment: 'This really is the bees knees. Just the cats meow. Musics r totes kewl.',
//         date: new Date('05/11/2010'),
//     },
//     {
//         name: 'Spengbab Squerpantaloons',
//         comment: "I can't wait to show this music to Patrec, Squid Guy, and Sando. Heheheheheh.",
//         date: new Date('08/05/2020'),
//     },
// ];
let commentsArray = [];
axios
.get(`https://project-1-api.herokuapp.com/comments?api_key=2844ad3d-8778-4d67-a742-43f9e43e3fd3`)
.then((response) => 
response.data.forEach((comment) => {
commentsArray.push(comment);
displayComment(comment);
})) 
.catch((error) => 
console.log(error));

commentsArray.forEach(comment => {
    displayComment(comment);
});

function displayComment(object) {

        let articleElement = document.createElement('article');
        articleElement.classList.add('comments__area');

        let divElement = document.createElement('div');
        divElement.classList.add('comments__wrapper');

        let divElement2 = document.createElement('div');
        divElement2.classList.add('comments__submitted-avatar');

        articleElement.appendChild(divElement2);

        let h3Element = document.createElement('h3');
        h3Element.classList.add('comments__name');

        h3Element.innerText = object.name;
        divElement.appendChild(h3Element);
        
        let pElement2 = document.createElement('p');
        pElement2.classList.add('comments__date');

        pElement2.innerText = new Date(Number(object.timestamp)).toLocaleDateString();
        divElement.appendChild(pElement2);

        let pElement = document.createElement('p');
        pElement.classList.add('comments__text');

        pElement.innerText = object.comment;
        divElement.appendChild(pElement);

        articleElement.appendChild(divElement);

        commentArea.prepend(articleElement);
}




const submitForm = document.querySelector('.comments__form');



submitForm.addEventListener("submit", 
function(event) {
  event.preventDefault();
  const name = event.target.name.value;
    const comment = event.target.comment.value;
    if (name==='') {
        event.target.name.classList.add('comments__field--error');
       
    }
    if (comment==='') {
        event.target.comment.classList.add('comments__field--error');

    }
    if (name !=='' && comment !=='') {

event.target.name.classList = 'comments__field'
event.target.comment.classList = "comments__field comments__field--text-area"
// const date = new Date();
// const newObject = { name: name, comment: comment, };
// commentsArray = [];
// commentArea.removeChild(articleElement);
// commentsArray.push(newObject);
// commentsArray.forEach(comment => {   
//     displayComment(comment);
// });
document.getElementById('name').value='';
document.getElementById('comment').value='';


axios.post(`https://project-1-api.herokuapp.com/comments?api_key=2844ad3d-8778-4d67-a742-43f9e43e3fd3`, newObject)
.then((response) => {
    displayComment(response.data);
})
.catch((error) => 
console.log(error));
}});


