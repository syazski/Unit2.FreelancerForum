/* State */
// define variables for the data that our program needs to remember.

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];

const names = ["Carol", "Joe", "Matt", "Brittany", "Amber", "Lee", "Kate", "Wayne", "Sam"];
const occupations = ["gardener", "programmer", "teacher", "driver"];
const price =["90", "20", "50", "70","80", "30"]


//select list1 from DOM, and show the first set of freelancers name, price and occupation
const nameList = document.getElementById("name");
const freelancerList = freelancers.map((freelancer) => {
    const nameElement = document.createElement("li");
    nameElement.textContent = freelancer.name;
    nameList.append(nameElement);
    return nameElement;
});

const priceList = document.getElementById("price");
const freelancerPrice = freelancers.map((freelancer) => {
    const priceElement = document.createElement("li");
    priceElement.textContent = freelancer.price;
    priceList.append(priceElement);
    return priceElement;
});

const occList = document.getElementById("occ");
const freelancerOcc = freelancers.map((freelancer) => {
    const occElement = document.createElement("li");
    occElement.textContent = freelancer.occupation;
    occList.append(occElement);
    return occElement;
})

// create function to update the average price on the array
function averagePrice() {
    // TODO Use the .reduce() method to return the total price of all the items in inventory
    let sum = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
    const avg = sum / freelancers.length;
    return avg;
  };

  const avgPrice = document.querySelector("h2").innerHTML = `The average starting price is $${averagePrice()}`; 


//Create a function to add a random freelancers to the freelancers array

// create an interval to show freelancer2 every 1s
//const addFreelancerIntervalId = setInterval(render, 1000);
//render();
