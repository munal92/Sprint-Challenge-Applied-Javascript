// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cards = document.querySelector(".cards-container");


const axiosPromise2 = axios.get('https://lambda-times-backend.herokuapp.com/articles');
console.log('articles', axiosPromise2);

axiosPromise2.then(response => {
        const dataApi2 = response.data.articles;
        console.log('dataArticles', dataApi2);
        
        dataApi2.bootstrap.forEach(element => {
            const newCard = createCard(element);
            cards.appendChild(newCard);
        });
        dataApi2.javascript.forEach(element => {
            const newCard = createCard(element);
            cards.appendChild(newCard);
        });
        dataApi2.jquery.forEach(element => {
            const newCard = createCard(element);
            cards.appendChild(newCard);
        });
        dataApi2.technology.forEach(element => {
            const newCard = createCard(element);
            cards.appendChild(newCard);
        });
        dataApi2.node.forEach(element => {
            const newCard = createCard(element);
            cards.appendChild(newCard);
        });
});

// axiosPromise.then(response => {
//     const dataApi = response.data.topics;
//     console.log("dataAp",dataApi);
//     dataApi.forEach(cont => {
//         console.log("cont",cont);
//         const newTop = createTopic(cont)
//         topicss.appendChild(newTop);
    
//        });
// });

function createCard (cardInf){

    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const  authorDiv = document.createElement('div');
    const imgContDiv = document.createElement('div');
    const  imgAuthr = document.createElement('img');
    const authorSpan = document.createElement('span');

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContDiv);
    authorDiv.appendChild(authorSpan);
    imgContDiv.appendChild(imgAuthr);

   // cards.appendChild(cardDiv);
    
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContDiv.classList.add('img-container');



    headlineDiv.textContent = cardInf.headline;
   // authorDiv.textContent = cardInf.authorName;
  authorSpan .textContent = cardInf.authorName;
    imgAuthr.src = cardInf.authorPhoto;

    


    return cardDiv ;
}

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

// const cardArticleE = document.querySelector('.cards-container');
// cardArticleE.addEventListener("mouseenter", () => {
//     cardArticleE.style.transform="scale(1.2)";
//     cardArticleE.style.transition="all 0.3s";
//       })
      
      
//       // add an event listener on multiple items.
      
//       cardArticleE.addEventListener("mouseleave", () => {
//         cardArticleE.style.transform="scale(1.0)";
//         cardArticleE.style.transition="all 0.9s";
//       })