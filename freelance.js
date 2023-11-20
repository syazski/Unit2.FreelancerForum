/* State */
// define variables for the data that our program needs to remember.

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];

const freelancers2 = [    
    { name: "Carol", price: 70, occupation: "programmer" },
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

//select list1, and show the first set of freelancers list

//function render() {
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
    const listElement = document.createElement("li");
    listElement.textContent = freelancer.price;
    priceList.append(listElement);
    return listElement;
});

const occList = document.getElementById("occ");
const freelancerOcc = freelancers.map((freelancer) => {
    const listElement = document.createElement("li");
    listElement.textContent = freelancer.occupation;
    occList.append(listElement);
    return listElement;
});

// create an interval to show freelancer2 every 1s


//const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

// create a function that appends list, and render

