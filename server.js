console.log('Hier komt je server voor Sprint 12.')

// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Haal alle squads uit de WHOIS API op
// const squadData = await fetchJson('https://fdnd.directus.app/items/squad')
// Ik ga dit misschien later nog gebruiken


// const apiUrl = 'https:fdnd-agency.directus.app/items/f_houses' moet nog veranderen naar nieuwe url met API
const apiUrl = 'https://fdnd-agency.directus.app/items/DPI_TNO?fields=*.*.*.*'




// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))



// ROUTES

app.get('/', function(request, response) {
  fetchJson(apiUrl).then((apiData) => {
    response.render('index', {
      tno: apiData.data})
  });
})


app.get('/Persoonlijke-blootstellingsprofielen', function(request, response) {
  fetchJson(apiUrl).then((apiData) => {
    response.render('Persoonlijke blootstellingsprofielen', {
      tno: apiData.data})
  });
})

app.get('/Kaarten-van-blootstelling-op-bevolkingsniveau', function(request, response) {
  fetchJson(apiUrl).then((apiData) => {
    response.render('Kaarten van blootstelling op bevolkingsniveau', {
      tno: apiData.data})
  });
})

app.get('/Kristallijn-silica-sensor', function(request, response) {
  fetchJson(apiUrl).then((apiData) => {
    response.render('Kristallijn silica sensor', {
      tno: apiData.data})
  });
})

app.get('/PM-sensor-met-in-line-chemische-identificatie', function(request, response) {
  fetchJson(apiUrl).then((apiData) => {
    response.render('PM-sensor met in-line chemische identificatie', {
      tno: apiData.data})
  });
})

app.get('/Interpretatie-van-blootstellingsprofielen-op-de-werkplek', function(request, response) {
  fetchJson(apiUrl).then((apiData) => {
    response.render('Interpretatie van blootstellingsprofielen op de werkplek', {
      tno: apiData.data})
  });
})




// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})