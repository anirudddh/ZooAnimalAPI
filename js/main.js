document.querySelector('button').addEventListener('click',zoo)

function zoo(){
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('.animalName').innerText=data.name
        document.querySelector('img').src=data.image_link
        document.querySelector('.animalType').innerText=data.animal_type
        document.querySelector('.animalHabital').innerText=data.habitat
        document.querySelector('.animalDiet').innerText=data.diet
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
