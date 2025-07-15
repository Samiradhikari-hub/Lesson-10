/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
  // Introducing JavaScript Object Notation (JSON): https://json.org/
  // STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image)
  // STEP 4b: Store the URL of a JSON file in a variable
  const url = "i-scream.json";

  // STEP 5: Use the new URL to create a new request object
  const request = new Request(url);

  // STEP 6: Make a network request with the fetch() function, which returns a Response object
  const response = await fetch(request);

  // STEP 7: Capture the returned Response object and covert to a JSON object using json()
  const data = await response.json();

  // STEP 8: Output the iScream JSON object to the console
  console.log(data);

  // STEP 9a: Invoke the populateHeader function here, then build it below
  populateHeader(data);

  // STEP 10a: Invoke the showTopFlavors function here, then build it below
  showTopFlavors(data);
}

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(obj) {
  // Create the H1 element
  const h1 = document.createElement("h1"); // <h1></h1>
  const p = document.createElement("p"); // <p></p>

  // Grab the company name from the JSON object and use it for the text node
  h1.textContent = obj.companyName; // <h1>I-Scream Company Inc.</h1>
  p.textContent = `Head Office: ${obj.headOffice}, est. ${obj.established} - Active: ${obj.active ? "Yes" : "No"}`;

  // Inject the complete H1 element into the DOM, inside the HEADER
  header.appendChild(h1);
  header.appendChild(p);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(obj) {
  // STEP 10c: Attach the JSON topFlavors object to a variable
  const topFlavors = obj.topFlavors;

  // STEP 10d: Loop through the topFlavors object
  topFlavors.forEach(flavor => {
    console.log(flavor);

    // STEP 10e: build HTML elements for the content: article, h2, image, p1, p2, list
    const article = document.createElement("article"); // <article></article>
    const h2 = document.createElement("h2"); // <h2></h2>
    const p1 = document.createElement("p"); // <p></p>
    const p2 = document.createElement("p"); // <p></p>
    const ul = document.createElement("ul"); // <ul></ul>
    const img = document.createElement("img"); // <img>

    // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
    h2.textContent = flavor.name;
    p1.textContent = `Calories: ${flavor.calories}`;
    p2.textContent = `Type: ${flavor.type}`;
    img.setAttribute("src", flavor.image);
    img.setAttribute("alt", flavor.name);

    // STEP 10g: Build a loop for the ingredients array in the JSON
    // add the ingredient to the UL
    flavor.ingredients.forEach(ingredient => {
      const li = document.createElement("li"); // <li></li>
      li.textContent = ingredient; // <li>Peach Syrup</li>
      // <ul>
      //   <li>Peach Syrup</li>
      // </ul>
      ul.appendChild(li);
    });

    // STEP 10h: Append each of the above HTML elements to the ARTICLE element
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(ul);
    article.appendChild(img);

    // STEP 10i: Append each complete ARTICLE element to the SECTION element
    section.appendChild(article);
  });
}

// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
