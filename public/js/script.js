const api_url="http://localhost:3000/Gethelpdata";
async function getapi(url){
    const response = await fetch(url);

    var data=await response.json();
    // console.log(data);
    show(data); 
}

function show(allproduct){
    allproduct.forEach(i => {
        markup=
        `<div style="border:5px solid black;">
        <div>Name: ${i.name}</div>
        <div>problem: ${i.problem}</div>
        <div>price: ${i.Price}</div>
        <div>address: ${i.worklocation}</div>
        <button>Proceed further</button>
    </div>`
       document.querySelector("#Saksham").insertAdjacentHTML("beforebegin",markup); 
    });
}

getapi(api_url);
