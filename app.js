const cars=[

{
id:1,
name:"Tesla Model S",
price:"$78,000",
range:"652 km",
speed:"0–100 in 2.1 sec",
color:"Ultra Red",
image:
"https://images.unsplash.com/photo-1560958089"
},

{
id:2,
name:"Tesla Model 3",
price:"$48,000",
range:"513 km",
speed:"0–100 in 4.4 sec",
color:"Grey",
image:
"https://images.unsplash.com/photo-1553440569"
},

{
id:3,
name:"Tesla Model X",
price:"$92,000",
range:"560 km",
speed:"0–100 in 2.6 sec",
color:"White",
image:
"https://images.unsplash.com/photo-1502877338535"
},

{
id:4,
name:"Tesla Model Y",
price:"$56,000",
range:"533 km",
speed:"0–100 in 3.5 sec",
color:"Black",
image:
"https://images.unsplash.com/photo-1492144534655"
}

];

const inventory=
document.getElementById(
"inventory"
);

function render(data){

if(!inventory)
return;

inventory.innerHTML="";

data.forEach(car=>{

inventory.innerHTML+=`

<div class="card">

<img
src="${car.image}"
>

<h2>

${car.name}

</h2>

<p>

${car.price}

</p>

<button
onclick="openDetails(

${car.id}

)">

View Details

</button>

</div>

`;

});

}

function openDetails(id){

window.location=
`vehicle.html?id=${id}`;

}

render(cars);