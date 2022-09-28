const inputName = document.getElementById('name');
const inputJob = document.getElementById('job');
const inputTele = document.getElementById('telephone');

const btnSubmit = document.getElementById('submit');

const personsContainer = document.getElementById('persons');

const persons = [];
btnSubmit.addEventListener('click', function(){
   const name = inputName.value; 
   const job = inputJob.value;
   const tele = inputTele.value;

   const person = {};
   person.name = name;
   person.job = job;
   person.tele = tele;

   persons.push(person);
    localStorage.setItem("persons", JSON.stringify(persons));

    const localStoragePersons = localStorage.getItem('persons');
    const personsArray = JSON.parse(localStoragePersons);
    personsArray.map(person => setDOM(person));
   
})






const setDOM = ({name, job, tele}) => {
    const person = document.createElement('div');
    person.classList.add ('person');
    person.innerHTML = `
    <h3>Name : ${name}</h3>
    <p>Job : ${job}</p>
    <p>TelePhone Number : ${tele}</p>
    `
    personsContainer.appendChild(person);
}