axios.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    getData(res.data)
})

function getData(res){
        res.forEach(item => {
            const element = `
            <div class="card">
            <div class="card-header">
                ${item.id} : ${item.name}
            </div>
            <div class="card-body">
                <h5 class="card-title">Address :</h5>
                <p class="card-text">${item.address.street}</p>
                <p class="card-text">${item.address.city}</p>
                <p class="card-text">${item.address.zipcode}</p>
                <h5 class="card-title">${item.email}</h5>
            </div>
        </div>
            `
            document.querySelector(".container").insertAdjacentHTML('beforeend', element)
        });
}