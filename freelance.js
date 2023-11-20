/* State */
// define variables for the data that our program needs to remember.

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];

const freelancers2 = [    
    { name: "Carol", price: 70, occupation: "programmer" },
    { name: "Joe", price: 25, occupation: "gardener" },
    { name: "Matt", price: 51, occupation: "programmer" },
    { name: "Brittany", price: 43, occupation: "teacher" },
    { name: "Amber", price: 81, occupation: "teacher" },
    { name: "Lee", price: 43, occupation: "teacher" },
    { name: "Kate", price: 76, occupation: "programmer" },
    { name: "Wayne", price: 47, occupation: "teacher" },
    { name: "Sam", price: 72, occupation: "driver" },
  ];

//select list1, and show the first set of freelancers list
const nameList = document.getElementById("list");
const freelancerList = freelancers.map((freelancer) => {
    const nameElement = document.createElement("li");
    nameElement.textContent = freelancer.name;
    //listElement.classList.add(freelancer.name, freelancer.price, freelancer.occupation);
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
});

// create a function render that selects list2 and add freelancer2

function render() {
    const freelancer2List = document.querySelector("#list2");
    const freelancer2Name = freelancers2.map((freelancer2) => {
      const listElement2 = document.createElement("li");
      listElement2.classList.add(freelancer2.name);
      return listElement2;
    });
    freelancer2List.replaceChildren(...freelancer2Name);
}

//addFreelancer

// create an interval to show freelancer2 every 1s
const addFreelancerIntervalId = setInterval(render, 1000);
render();


