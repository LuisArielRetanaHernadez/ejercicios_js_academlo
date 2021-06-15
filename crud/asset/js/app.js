const cars = [
    {
        brand: 'mclaren',
        model: '720s',
        year: 2020,
        doors: 2,
        color: 'red',
        price: 350000
    },
    {
        brand: 'Ferrari',
        model: 'F8 spider',
        year: 2020,
        doors: 2,
        color: 'red',
        price: 385000
    },
    {
        brand: 'Ferrari',
        model: '812 Superfast',
        year: 2020,
        doors: 2,
        color: 'gray',
        price: 462000
    }
]

/*variables global*/
let edit = false
let indexEdit = null

/*display data in log table*/
const showDataTbody = (dataCars) => {
    saveCarsLocalStorage(dataCars)
    const elementTbody = document.getElementById('tbody-record')
    elementTbody.innerHTML = ''
    dataCars.forEach((data,index) => {
        elementTbody.innerHTML += `
        <td>${data.brand}</td>
        <td>${data.model}</td>
        <td>${data.year}</td>
        <td>${data.doors}</td>
        <td>${data.color}</td> 
        <td>${data.price}</td> 
        <td><button type="button" id="${index}" class="btn btn-danger" onclick="deletCar(${index})">Eliminar</button></td>
        <td><button type="button" id="${index}" class="btn btn-primary" onclick="editCar(${index})">Editar</button></td>
        `
    })

}

/*create new cars*/
const createAndUpdateCars = () => {
    const brand = document.getElementById('brand').value
    const model = document.getElementById('model').value
    const year = document.getElementById('year').value
    const doors = document.getElementById('doors').value
    const color = document.getElementById('color').value
    const price = document.getElementById('price').value

    carNew = {
        brand,
        model,
        year,
        doors,
        color,
        price
    }
    console.log(edit)
    let pepe = avoidRedundancyDataCars(carNew)
    console.log(carNew)
    console.log(pepe)
    if (edit === true && pepe === true) {
        cars[indexEdit] = carNew
    }
    if(edit === false && pepe === true){
        cars.push(carNew)
    }
    edit = false
    document.getElementById('form-cars').reset()
    showDataTbody(cars)
}

/*remove car*/
const deletCar = (indexCar) => {
    cars.splice(indexCar,1)
    showDataTbody(cars)
}

/*update car*/
const editCar = (indexCar) => {
    document.getElementById('brand').value = cars[indexCar].brand
    document.getElementById('model').value = cars[indexCar].model
    document.getElementById('year').value = cars[indexCar].year
    document.getElementById('doors').value = cars[indexCar].doors
    document.getElementById('color').value = cars[indexCar].color
    document.getElementById('price').value = cars[indexCar].price
    edit = true
    indexEdit = indexCar
}

/*here we avoid redundancy*/
const avoidRedundancyDataCars = (dataComparison) =>{
    let bool = true
    console.log(dataComparison)
    // for(let i = 0; i < cars.length; i++){

    //     if (JSON.stringify(cars[i]) === JSON.stringify(dataComparison)){
    //         console.log('Error! esos datos ya estan registrados')
    //         alert('Error! esos datos ya estan registrados')
    //         console.log(JSON.stringify(cars[i]), '=>', JSON.stringify(dataComparison))
    //         bool = false
    //     }
    //     console.log(JSON.stringify(dataComparison), 'array original => ', JSON.stringify(cars[i]))

    // }
    cars.forEach((data,index) => {

        if (JSON.stringify(data) === JSON.stringify(dataComparison)){
            console.log('Error! esos datos ya estan registrados')
            alert('Error! esos datos ya estan registrados')
            console.log(JSON.stringify(data), '=>', JSON.stringify(dataComparison))
            bool = false
        }
        console.log('carsoring', JSON.stringify(data), 'carnew', JSON.stringify(dataComparison))
    })
    return bool
}

/*we save the cars data in localStorage*/
const saveCarsLocalStorage = (dataCars) =>{
    localStorage.setItem('cars',JSON.stringify(dataCars))
}

/*This is where we get the data from localStorage to pass it to the showDataTbody (cars)
 function // This is where we call the showDataTbody function to display the data*/
const getCarsLocalStorage = () => {
    const localGet = localStorage.getItem('cars')
    if(localGet === null){
        console.log('null')
        cars[" "]
    }else{
        const dataCars = JSON.parse(localGet)
        /*Aqui limpiamos todo el array cars para insertar los nuevos valores de localStorage*/
        cars.splice(0)
        console.log(cars)//vemos lo que almancena
        cars.push(...dataCars)//Aqui pasamos el array dataCars en lista para no no convertir el array cars
        //en un array multidimensional
        console.log(dataCars)
        console.log(cars)
        showDataTbody(cars)//Aqui es donde llamamos la funcion showDataTbody para mostrar los datos
    }
}
const checkSupportsLocalstorage = () =>{
    if(localStorage){
        getCarsLocalStorage()
        console.log('hola')
    }else{
        showDataTbody(cars)
    }
}
checkSupportsLocalstorage()
