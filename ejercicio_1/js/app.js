const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]


/*obtener todos los usuarios con el correo academlo*/
const axu = users.filter((usersFilterByEmail) => usersFilterByEmail.email.endsWith('@academlo.com'))

/*la creacion del elemento tbody en la table*/
function createElemenTbodyInTable(){
    const elementTable = document.getElementById('dataUser')
    const elementTbody = document.createElement('tbody')
    elementTable.appendChild(elementTbody)
    return elementTbody
}

/*Pintar datos del user en el DOM*/
function pinterData(element,dataUser){
    tbody = element()
    let i = 1
    dataUser.forEach(data => {
        
        tbody.innerHTML += `
        <tr>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.email}</td>
        <th>${data.social[--i].url}</td>
        <th>${data.social[++i].url}</td>
        </tr>
        `
    });
}

pinterData(createElemenTbodyInTable, users.filter((usersFilterByEmail) => usersFilterByEmail.email.endsWith('@academlo.com')))