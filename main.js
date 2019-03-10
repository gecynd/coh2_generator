const allButton = document.querySelector('#all-factions')
const axisButton = document.querySelector('#axis')
const alliedButton = document.querySelector('#allies')
const image = document.querySelector('#image')
const factionName = document.querySelector('#faction-name')
const mapText = document.querySelector('#map')
const mapF = document.querySelector('#map-f')

let buttonClicked = false;
let allFactions = ['usf', 'british', 'soviet', 'okw', 'ostheer']
let axisFactions = ['okw', 'ostheer']
let alliedFactions = ['usf', 'british', 'soviet']
let maps = ['Angoville', 'Arnhem Checkpoint', 'Caen', 'Crossing in the Woods', 'Faymonville Approach', 'Kholodny Ferma', 'Kholodny Ferma Winter', 'La Gleize Breakout', 'Langreskaya', 'Langreskaya Winter', 'Lost Glider', 'Stalingrad', 'Vilshanka', 'Westwall']




allButton.addEventListener('click', function () {

    if (buttonClicked) {
        return
    }

    let randomNumber = Math.floor(Math.random() * allFactions.length)
    let randomNumberMap = Math.floor(Math.random() * maps.length)
    let randomFaction = allFactions[randomNumber]
    let randomMap = maps[randomNumberMap]
    let result = randomFaction.toUpperCase()
    buttonClicked = true;
    factionName.innerHTML = ''
    mapText.innerHTML = ''
    mapF.innerHTML = ''
    image.setAttribute('src', 'img/loader.gif')


    setTimeout(function () {
        image.setAttribute('src', `img/${randomFaction}.png`)
        factionName.innerHTML = `${result}`
        mapF.innerHTML = 'Map:'
        mapText.innerHTML = `${randomMap}`
        buttonClicked = false;
    }, 500)


})


axisButton.addEventListener('click', function () {

    if (buttonClicked) {
        return
    }

    let randomNumber = Math.floor(Math.random() * axisFactions.length)
    let randomFaction = axisFactions[randomNumber]
    let result = randomFaction.toUpperCase()
    buttonClicked = true;
    factionName.innerHTML = ''
    image.setAttribute('src', 'img/loader.gif')


    setTimeout(function () {
        image.setAttribute('src', `img/${randomFaction}.png`)
        factionName.innerHTML = `${result}`
        buttonClicked = false;
    }, 2000)


})

alliedButton.addEventListener('click', function () {

    if (buttonClicked) {
        return
    }

    let randomNumber = Math.floor(Math.random() * alliedFactions.length)
    let randomFaction = alliedFactions[randomNumber]
    let result = randomFaction.toUpperCase()
    buttonClicked = true;
    factionName.innerHTML = ''
    image.setAttribute('src', 'img/loader.gif')


    setTimeout(function () {
        image.setAttribute('src', `img/${randomFaction}.png`)
        factionName.innerHTML = `${result}`
        buttonClicked = false;
    }, 2000)


})