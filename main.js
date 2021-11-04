let catBtn = document.getElementById('cat_btn');
let dogBtn = document.getElementById('dog_btn');
let catResult = document.getElementById('cat_result');
let dogResult = document.getElementById('dog_result');

catBtn.addEventListener('click', getCat)
dogBtn.addEventListener('click', getDog)

function getCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then((data) => {
        catResult.innerHTML = `
        <img src=${data.file}>
        `
    })
}
function getDog() {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then((data) => {
        if (data.url.includes('.mp4')) {
            getDog()
        } else {
        dogResult.innerHTML = `
        <img src=${data.url}>
        `
        }

    })
}