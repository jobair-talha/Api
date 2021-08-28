/* function getComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(request => request.json())
    .then(data => document.write(data))
}

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
} */

/* function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getUserName(data))
}

function getUserName (userName){
    const usersName = userName.map(p => p.name)
    console.log(usersName)
}
document.getElementById('user_Name').addEventListener('click', getUserName) */

// -----------------------
/* // add Post
function getting(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then (data => post(data))
}
function post(items){
    const itemContainer = document.getElementById('container')
    
    for(const item of items){
        const addItems = document.createElement('div');
        addItems.style.background = 'BlueViolet'
        addItems.style.color = 'white'
        addItems.style.padding = '20px'
        addItems.style.margin = '15px'
        addItems.classList.add('item')
        itemContainer.appendChild(addItems);
        addItems.innerHTML = `<h2>${item.title}</h2>
        <p>${item.body} </p>`
    }

} */
/* function getting(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then (data => post(data))
}
function post(items){
    const itemContainer = document.getElementById('container')

    for(const item of items){
        const addItems = document.createElement('div');
        addItems.style.background = 'BlueViolet'
        addItems.style.color = 'white'
        addItems.style.padding = '20px'
        addItems.style.margin = '15px'
        addItems.classList.add('item')
        itemContainer.appendChild(addItems);
        addItems.innerHTML = `<h2>${item.title}</h2>
        <img src="${item.url}">`
    }

} */
// document.getElementById('add-item').addEventListener('click', getting)

// --------------------------arrow function this---------------------

/* const programming = {
    name: 'JavaScript',
    library: ['react','Angular', 'veu'],
    commit: function(){
        this.library.forEach(element => console.log(`${this.name} love ${element}`))  
    } 
}
programming.commit() */


// ------------
// function FullName(name){
//     this.name = name;
// }

// let jubair = new FullName('Talha')

// console.log(jubair.name)


