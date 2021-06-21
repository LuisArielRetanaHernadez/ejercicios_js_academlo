/*Variables globales*/

let index = 0;//va ser el index de los objectos de la api Trivia
const questionResults = [];//Aqui es donde dondo se va almacenar el array del results de la api|
let amountOfCorrect = 0 //Aqui es donde va estar la contidad de repuestas correctas
let secondsAccountant = 0//Aqui van a ir los segundo del tiempo que se tarda en resolver el cuestenario por el usuario 
let hoursAccountant = 0//Aqui va a ir las horas del tiempo que se tarda en resolver el cuestenario por el usuario
let minutesAccountant = 0//Aqui va a ir los minutos del tiempo que se tarda en resolver el cuestenario por el usuario


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
    setLocalstorage('valuesForm',elementsForm)
    return elementsForm
}

/*Aqui es donde hacemos la solicitud a la api con los valores enviados por el form*/
const getApi = (elements,star) =>{
    hiddenForm()
    const getElements = elements()//es la funcion getValueElements
    const apiTrivia = `https://opentdb.com/api.php?amount=${getElements[0]}&category=${getElements[1]}&difficulty=${getElements[2]}&type=${getElements[3]}`
    fetch(apiTrivia).then(response => { return response.json() }).then(data => { apiResults(data),star(),timeQuestion()}).catch(err => {console.log(err)})
}

/*Aqui es donde obtenemos las datos de la api*/
const apiResults = dataResults => {
    questionResults.push(...dataResults.results)

    setLocalstorage('questionResults', questionResults)
    if(validationLocalstorage){
        questionResults.splice(0)
        questionResults.push(...getLocalstorage('questionResults'))
    }
    console.log(questionResults)
}

/*Aqui validamos si el navegaodr tiene soporte de localStorage*/
const validationLocalstorage = () =>{
    if(localStorage){
        return true
    }else{
        return false
    }
}

/*Aqui es dode metemos datos del item y creamos item*/
const setLocalstorage = (key,object) =>{
    if(typeof(object) != 'string'){
        localStorage.setItem(key,JSON.stringify(object))
    }else{
        localStorage.setItem(key,object)
    }

}

/*Aqui romovemos un item en localStorage*/
const removeLocalstorage = (key) =>{
    localStorage.removeItem(key)
}

/*Aqui es donde obtenemos datos de un item en localStorage*/
const getLocalstorage = (key,notString) =>{
    const getObject = localStorage.getItem(key)
    if(notString){
        return getObject
    }else{
        return JSON.parse(getObject)
    }
}

/*Aqui es donde cerramos el form y abrimos el cuestenario*/
const hiddenForm = () =>{
    document.getElementById('id-form-api').style.display = 'none'
    document.getElementById('id-questenary').style.display = 'flex'
}
/*Aqui es donde ya hacemos el cuestenario*/
const starQuestion = () => {
    const types = compareBooleanMultiple(questionResults)
    console.log(typeof(document.getElementById('id-questenary').innerHTML))
    document.getElementById('text_category').innerHTML = 'Categoria: ' + questionResults[index].category
    document.getElementById('text_difficulty').innerHTML = 'Dificultad: ' + questionResults[index].difficulty
    document.getElementById('text_accountant').innerHTML = `${(index)} / ${questionResults.length}`
    document.getElementById('text-questenary').innerHTML = questionResults[index].question
    if (types[index] == "true") {
        document.getElementById("btn_1").value = "true"
        document.getElementById("btn_2").value = "false"
        document.getElementById("btn_3").style.display = "none"
        document.getElementById("btn_4").style.display = "none"
    }else {
        const answers = generateAnswerRandom(questionResults[index])
        console.log(answers)
        document.getElementById("btn_1").value = answers[0]
        document.getElementById("btn_2").value = answers[1]
        document.getElementById("btn_3").value = answers[2]
        document.getElementById("btn_4").value = answers[3]
    }
    if(validationLocalstorage){
        removeLocalstorage('containerQuestenary')
        setLocalstorage('containerQuestenary',document.getElementById('id-questenary').innerHTML)
        innerHTMLQuestenary()
    }
}

/*Aqui es donde olojamos el elemento con el id container id-questenary*/
const innerHTMLQuestenary = () =>{
    console.log(getLocalstorage('containerQuestenary',true))
    if(getLocalstorage('containerQuestenary', true) != null){
        document.getElementById('id-questenary').innerHTML = ""
        document.getElementById('id-questenary').innerHTML = getLocalstorage('containerQuestenary',true)
        hiddenForm()
        console.log('no mmes')
    }
}

/*Aquie es donde comprobamos de que tipo de preguntas es el cuestenario*/
const compareBooleanMultiple = (type) =>{
    let types = []
    type.forEach(elements => {
        if (elements.type == "boolean"){
            types.push("true")
        }else {
            types.push("false")
        }
    })
    return types
}

/*Aqui es donde generamos los repuestar aleteroriamente */
const generateAnswerRandom = (question) =>{
    let indexIncorrect = 0
    const answersLength = question.incorrect_answers.length + 1;
    const indexCorrect = Math.floor(Math.random() * 4)
    const answers = []
    answers.splice(indexCorrect,0,question.correct_answer)
    for( let i = 0; i < answersLength; i++) {
        console.log('i>> ',i)
        if(i === indexCorrect) {continue}
        answers.splice(i,0,question.incorrect_answers[indexIncorrect])
        console.log('iIf>>',i)
        indexIncorrect++
    }
    return answers
}

/*Aquie es donde obtenemos la respuesta por el ususario y donde la validamos */
const getAnswers = idBtn =>{
    const btn = document.getElementById(idBtn).value

    if(questionResults.length === index){
        finallyQuestion(amountOfCorrect)
        clearTimeout(timeQuestion)
        removeLocalstorage('containerQuestenary')
        document.getElementById('id-questenary').style.display= 'none';
    }else{
        console.log(questionResults[index].correct_answer, ' repuesta >>>', btn)
        if(btn == questionResults[index].correct_answer){//validamos las respuesta del usuario si son correcta o incorrecta
            amountOfCorrect++
            console.log(incorrect_answers, ' if >>>', btn)
        }
        starQuestion()
    }
    index++
}

/*Aqui es donde ya finalizamos el cuestenario y donde el resultado de la encuesta*/
const finallyQuestion = questionsCorrect =>{
    document.getElementById('container-results-questenary').style.display = 'block'
    const valueForm = getLocalstorage('valuesForm',false)
    valueForm[1] == 0 ? document.getElementById('result-category').innerHTML = 'Categoria: cualquiera' : document.getElementById('result-category').innerHTML = 'Categoria',questionResults[0].category
    valueForm[2] == 0 ? document.getElementById('result-difficulty').innerHTML =  'Dificultad: Cualquiera' : document.getElementById('result-difficulty').innerHTML = 'Dificultad',questionResults[0].difficulty
    document.getElementById('result-qualification').innerHTML = Math.floor((questionsCorrect / questionResults.length) * 100), '%'
    removeLocalstorage('questionResults')
}

const timeQuestion = () =>{
    secondsAccountant++
    if(secondsAccountant > 60 ){
        secondsAccountant = 0
        minutesAccountant += 1
    }
    if(minutesAccountant > 60){
        hoursAccountant += 1
    }
    setTimeout(timeQuestion,1000)
    document.getElementById('text_time').innerHTML = `${hoursAccountant} : ${minutesAccountant} : ${secondsAccountant}`
}

innerHTMLQuestenary()