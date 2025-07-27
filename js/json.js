/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector('header');
const section = document.querySelector('section');
// STEP 3a: Create the asynchronous function populate()
async function populate() {


// Introducing JavaScript Object Notation (JSON): https://json.org/
// STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image) */
// STEP 4b: Store the URL of a JSON file in a variable */
let url = 'https://samiradhikari-hub.github.io/Lab-3/js/i-screme.json';
// STEP 5: Use the new URL to create a new request object
let request = new Request(url);
console.log(request);

// STEP 6: Make a network request with the fetch() function, which returns a Response object
let response = await fetch(request);
console.log(response);
// STEP 7: Capture the returned Response object and covert to a JSON object using json()
let responseJSON = await response.json();

// STEP 8: Output the iScream JSON object to the console
console.log(responseJSON);
// STEP 9a: Invoke the populateHeader function here, then build it below
populateHeader(responseJSON);
// STEP 10a: Invoke the showTopFlavors function here, then build it below
showTopFlavors(responseJSON);
}


// STEP 3b: Call the populate() function
populate();
/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonBody) {
    // Create the H1 element
    let h1 = document.createElement('h1');
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonBody.companyName;


    //add a paragraph tag such that it can be used to display the head office and established year
   let p = document.createElement('p');
    p.textContent = `Head Office: ${jsonBody.headOffice}, Established: ${jsonBody.established}`;

    // Inject the complete H1 element into the DOM, inside the HEADER

    header.appendChild(h1);
    header.appendChild(p); 
}
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonBody) {
    // STEP 10c: Attach the JSON topFlavors object to a variable
    let topFlavors = jsonBody.topFlavors;
    // STEP 10d: Loop through the topFlavors object
    for (let i= 0; i < topFlavors.length; i++) {
        // STEP 10e: build HTML elements for the content: article, h2, image, p1, p2, list
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('ul');


        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavors[i].name;
        p1.textContent = 'Calories: ' + topFlavors[i].calories;
        p2.textContent = 'Type: ' + topFlavors[i].type;
        image.setAttribute('src', topFlavors[i].image);
        image.setAttribute('alt', topFlavors[i].name + ' ice cream');
        
        // STEP 10g: Build a loop for the ingredients array in the JSON
        let ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = ingredients[j];
            
            list.appendChild(listItem);
        }
        // add the ingredient to the UL
        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(image);
        article.appendChild(list);
        
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    }
}
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
