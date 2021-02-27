// class Account {
//     constructor(firstName, lastName, email, password) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.email = email
//         this.password = password
//     }

//     getFullName() {
//         return this.firstName + ' - ' + this.lastName
//     }
// }

// let account1 = new Account('Poxos', 'Poxosyan', 'poxospoxosyan89@gmail.com', '39bd45as')

let users = [
    {
        name:'Arman Avetisyan',
        country:'Armenia',
        age:25,
        gender:'male'
    },

    {
        name:'Jhon Smith',
        country:'USA',
        age:33,
        gender:'male'
    },

    {
        name:'Julie',
        country:'USA',
        age:23,
        gender:'female'
    },

    {
        name:'Natasha Antonovan',
        country:'Russia',
        age:54,
        gender:'fmale'
    }
];


let usersBox = document.querySelector('#users-box');
let searchButton = document.querySelector("#search-button");
let searchText = document.querySelector("#search-text")
let filtersNav = document.querySelector('#filters-nav')
let updateFiltersButton = document.querySelector('#update-filters')

updateFiltersButton.addEventListener('click', function() {
    let currentCountry = document.querySelector('#counter-filter').value.toLocaleLowerCase();
    let currentGender = document.querySelector("#gender-filter").value.toLocaleLowerCase();

    let filtredUser = users.filter(function(user) {
        return (user.country.toLocaleLowerCase().includes(currentCountry) && 
        user.gender.toLocaleLowerCase().includes(currentGender)
        )
    })

    usersBox.innerHTML = '';
    for(let user of filtredUser)
{
    let userElement = document.createElement("DIV")
    userElement.classList.add('user-item')
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>Country: ${user.country}</p>
    <p>Age: ${user.age}</p>
    <p>Gender: ${user.gender}</p>
    `

    usersBox.appendChild(userElement)
}


})

filtersNav.addEventListener('click', function() {
    let filtersBox = document.querySelector('#filters')
    if(filtersBox.style.display === '' || filtersBox.style.display === 'none') {
        filtersBox.style.display = 'block'
    }else {
        filtersBox.style.display = 'none'
    }
})

searchButton.addEventListener("click", function(){
    let filtredUser = users.filter(function(user){
        return user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())
    })

    usersBox.innerHTML = '';
    for(let user of filtredUser)
{
    let userElement = document.createElement("DIV")
    userElement.classList.add('user-item')
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>Country: ${user.country}</p>
    <p>Age: ${user.age}</p>
    <p>Gender: ${user.gender}</p>
    `

    usersBox.appendChild(userElement)
}

})

for(let user of users)
{
    let userElement = document.createElement("DIV")
    userElement.classList.add('user-item')
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>Country: ${user.country}</p>
    <p>Age: ${user.age}</p>
    <p>Gender: ${user.gender}</p>
    `

    usersBox.appendChild(userElement)
}