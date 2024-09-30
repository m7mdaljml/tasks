
// Get 
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>printHtml(res.data))
.catch((err)=>console.log(err))

function printHtml(data){
    let arr = data
    arr.forEach(item => {
        const element = `<div class="post-card">
            <img src="../images/post.avif" alt="">
            <p class="post-content">${item.body}</p>
            <ul class="comment">
                <li>* ${item.title}</li>
            </ul>
            <input class="add_comm" type="text" placeholder="Add Comment">
        </div>`
        document.querySelector(".container").insertAdjacentHTML('beforeend', element)
    });
}
// Post
axios.post('post api link here',{
    // object has a data you want to send it
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


// Put
axios.put('put api link here',{
    // object has a data you want to edit it
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


// Delete
axios.delete('delete api link here')
.then((res)=>console.log(res))
.catch((err)=>console.log(err))