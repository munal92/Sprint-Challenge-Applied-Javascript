// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicss = document.querySelector(".topics");

const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics');
//console.log(axiosPromise);


axiosPromise.then(response => {
    const dataApi = response.data.topics;
    //console.log("dataAp",dataApi);
    dataApi.forEach(cont => {
        //console.log("cont",cont);
        const newTop = createTopic(cont)
        topicss.appendChild(newTop);
    
       });
});




function createTopic(topic){
    const tabDiv = document.createElement('div');

    // topicss.appendChild(tabDiv);

    tabDiv.classList.add('tab');


    tabDiv.textContent=topic;
    
 
    return tabDiv;
    
}

