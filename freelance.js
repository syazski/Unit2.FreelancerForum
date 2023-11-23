/* State */
// define variables for the data that our program needs to remember.

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];

const names = ["Carol", "Joe", "Matt", "Brittany", "Amber", "Lee", "Kate", "Wayne", "Sam"];
const occupations = ["gardener", "programmer", "teacher", "driver"];
const prices =["90", "20", "50", "70","80", "30"]

const maxFreelancers = 5;

// create an interval to show freelancers2 every 1s
const addFreelancerIntervalId = setInterval(addFreelancer, 2000);
render();

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

// create function to update the average price on the array
function averagePrice() {
  const sum = freelancers.reduce((accum,item) => accum + item.price, 0)
  const avg = sum / freelancers.length;
  return avg;
};

//Create a function to add a random freelancers to the freelancers array and print average price
function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = prices[Math.floor(Math.random()* prices.length)];
  const occupation = occupations[Math.floor(Math.random()* occupations.length)];
  freelancers.push({name, price, occupation});

  render();

  if(freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  };
  }

//create a render function 

function render() {
  const name2List = document.getElementById("name2");
  const freelancer2List = freelancers.map((freelancer) => {
    const name2Element = document.createElement("li");
    name2Element.innerHTML = freelancer.name;
    name2List.append(name2Element);
    })

    const price2List = document.getElementById("price2");
    const freelancer2Price = freelancers.map((freelancer) => {
      const price2Element = document.createElement("li");
      price2Element.innerHTML = `$ ${freelancer.price}`;
      price2List.append(price2Element);
    })

    const occ2List = document.getElementById("occ2");
    const freelancer2Occ = freelancers.map((freelancer) => {
      const occ2Element = document.createElement("li");
      occ2Element.innerHTML = freelancer.occupation;
      occ2List.append(occ2Element);
    });

    const avgPrice = document.querySelector("h2").innerHTML = `The average starting price is $${averagePrice()}`; 

};