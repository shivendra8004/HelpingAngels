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
        `<div class="feed">
        <div>
            <p><b>Title:</b></p><p>${i.issue}</p>
        </div>
        <div>
            <p><b>Budget:</b></p><p>${i.Price}</p>
        </div>
        <div>
            <p><b> Description:</b></p><p>${i.problem}</p>
        </div>
        <div>
            <p><b>Name:</b></p><p>${i.name}</p>
        </div>
        <div>
            <p><b>Location:</b></p><p>${i.worklocation}</p>
        </div>
        <div>
            <p><b>Status:</b></p><p>${i.status}</p>
        </div>
        <button type="submit">Interested</button>
    </div>`
       document.querySelector("#Saksham").insertAdjacentHTML("beforebegin",markup); 
    });
}

getapi(api_url);
