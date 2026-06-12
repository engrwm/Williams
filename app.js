const cars=[

{
id:1,
name:"Tesla Model S",
price:"$78,000",
range:"652 km",
speed:"2.1 sec",
color:"white",

image:
"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
},

{
id:2,
name:"Tesla Model 3",
price:"$48,000",
range:"513 km",
speed:"4.4 sec",
color:"ultra red",

image:
"https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80"
},

{
id:3,
name:"Tesla Model X",
price:"$92,000",
range:"560 km",
speed:"2.6 sec",
color:"Black",

image:
"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
},

{
id:4,
name:"Tesla Model Y",
price:"$56,000",
range:"533 km",
speed:"3.5 sec",
color:"Blue",

image:
"https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
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
function reserve(carName){

window.open(

`https://wa.me/2348012345678?text=Hello,%20I%20want%20to%20reserve%20the%20${encodeURIComponent(carName)}.`,

"_blank"

);

}