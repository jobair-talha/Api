const getting = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => gettingUser(data))
}
const gettingUser = userDec =>{
    const users = document.getElementById('random-user')
    for(const user of userDec.results){
        const h3 = document.createElement('h3')
        users.innerHTML = `<img src= "${user.picture.large}">`
        users.appendChild(h3)
        h3.innerText = `${user.name.title} ${user.name.first} ${user.name.last} `
        const p = document.createElement('p')
        users.appendChild(p);
        p.innerText = `Email: ${user.email}`
        console.log(user)
    }
}
document.getElementById('refreash').addEventListener('click', getting)