/* State */
// define variables for the data that our program needs to remember.

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];

const names = ["Carol", "Joe", "Matt", "Brittany", "Amber", "Lee", "Kate", "Wayne", "Sam"];
const occupations = ["gardener", "programmer", "teacher", "driver"];
const prices =["90", "20", "50", "70","80", "30"]

const maxFreelancers = 10;

const freelancers2 =[];

// create an interval to show freelancers2 every 1s
const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

//select list1 from DOM, and show the first set of freelancers name, price and occupation
const nameList = document.getElementById("name");
const freelancerList = freelancers.map((freelancer) => {
    const nameElement = document.createElement("li");
    nameElement.innerHTML = freelancer.name;
    nameList.append(nameElement);
    return nameElement;
});

const priceList = document.getElementById("price");
const freelancerPrice = freelancers.map((freelancer) => {
    const priceElement = document.createElement("li");
    priceElement.innerHTML = `$ ${freelancer.price}`;
    priceList.append(priceElement);
    return priceElement;
});

const occList = document.getElementById("occ");
const freelancerOcc = freelancers.map((freelancer) => {
    const occElement = document.createElement("li");
    occElement.innerHTML = freelancer.occupation;
    occList.append(occElement);
    return occElement;
})

// create function to calculate the average price on the array
function averagePrice() {
  let sum = 0;
  for (let i = 0; i < freelancers.length; i++){
    sum += freelancers[i].price;
  };
  let avg = sum / freelancers.length;
  return avg;
};

const displayPrice = document.querySelector("h2");
displayPrice.innerHTML = `The average starting price is $${averagePrice()}`;

//Create a function to add a random freelancers to the freelancers array
function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = prices[Math.floor(Math.random()* prices.length)];
  const occupation = occupations[Math.floor(Math.random()* occupations.length)];
  freelancers.push({name, price, occupation});

  const newLancer = [freelancers[freelancers.length -1]];
  
  const name2List = document.getElementById("name2");
  const freelancer2List = newLancer.map((freelancer) => {
    const name2Element = document.createElement("li");
    name2Element.innerHTML = freelancer.name;
    name2List.appendChild(name2Element);
    });

    const price2List = document.getElementById("price2");
    const freelancer2Price = newLancer.map((freelancer) => {
      const price2Element = document.createElement("li");
      price2Element.innerHTML = `$ ${freelancer.price}`;
      price2List.appendChild(price2Element);
    });

    const occ2List = document.getElementById("occ2");
    const freelancer2Occ = newLancer.map((freelancer) => {
      const occ2Element = document.createElement("li");
      occ2Element.innerHTML = freelancer.occupation;
      occ2List.appendChild(occ2Element);
    });

  if(freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  };
};