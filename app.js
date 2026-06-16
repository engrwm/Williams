document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // 1. Mobile Menu Toggle Logic
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animated hamburger into an 'X'
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
        spans[1].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
    });

    // 2. Active Link Switching & Smooth Closing of Mobile Menu
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Collapse menu on mobile after selection
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.querySelectorAll('span').forEach(span => span.style.transform = 'none');
            }
        });
    });

    // 3. Optional: Subtle Dynamic Header Shrinking on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 8%';
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        } else {
            navbar.style.padding = '25px 8%';
            navbar.style.background = 'rgba(10, 10, 10, 0.75)';
        }
    });
});
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
