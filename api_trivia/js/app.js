/*Aqui obtenemos los valores del form para la Api Trivia*/
const getValueElements = () => {
    const elementsForm = []
    const element1 = document.getElementById('amount').value
    elementsForm.push(element1)
    const element2 = document.getElementById('categories').value
    elementsForm.push(element2)
    const element3 = document.getElementById('difficulty').value
    elementsForm.push(element3)
    const element4 = document.getElementById('type').value
    elementsForm.push(element4)
    return elementsForm
}

/*Aqui es donde hacemos la solicitud a la api con los valores enviados por el form*/
const getApi = (elements,star) =>{
    const getElements = elements()
    console.log(getElements)
    const apiTrivia = `https://opentdb.com/api.php?amount=${getElements[0]}&category=${getElements[1]}&difficulty=${getElements[2]}&type=${getElements[3]}`
    fetch(apiTrivia).then(response => { return response.json() }).then(data => { star(data) }).catch(err => {console.log(err)})
}

/*Aqui es donde ya hacemos el cuestenario*/
const starQuestion = question => {
    const questionResults = question.results
    console.log(questionResults)
}
