console.log('Hier komt je server voor Sprint 12.')

// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Haal alle squads uit de WHOIS API op
// const squadData = await fetchJson('https://fdnd.directus.app/items/squad')
// Ik ga dit misschien later nog gebruiken

// const apiUrl = 'https:fdnd-agency.directus.app/items/f_houses' moet nog veranderen naar nieuwe url met API
const apiUrl = 'https:fdnd-agency.directus.app/items/'


// notitie van rating pagina 
let ratings = []


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
  fetchJson(apiUrl + 'f_list').then((apiData) => {
    response.render('index', {data: apiData.data})
  });
})



app.get('/favorieten', function(request, response) {
  fetchJson(apiUrl+ 'f_list').then((lists) => {
    fetchJson(apiUrl + 'f_users').then((users) => {
      response.render('favorieten', {
      lists: lists.data,
      users: users.data
      })
    });
	});
})

app.get('/lijst/:id', function(request, response) {
    fetchJson(apiUrl + 'f_users').then((users) => {
      fetchJson(apiUrl + 'f_list/' + request.params.id + '?fields=*.*.*,houses.f_houses_id.poster_image.id,houses.f_houses_id.poster_image.width,houses.f_houses_id.poster_image.height').then((lists) => { 
      response.render('fav-lijst.ejs', {
        list: lists.data,
        users: users.data
      })  
     })
    });
	});

app.get('/users/:id', function(request, response) {
  fetchJson(apiUrl + 'f_houses').then((houses) => {
    fetchJson(apiUrl + 'f_users').then((users) => {
      response.render('users', {
      houses: houses.data,
      users: users.data
      })
    });
	});
})


app.get('/detail/:id', function(request, response) {
  fetchJson(apiUrl + 'f_houses/' + request.params.id).then((apiData) => {
      // console.log(apiData)
      response.render('details', {
        data: apiData.data})
  });
})

app.get('/user-ratings', function(request, response) {
  fetchJson(apiUrl + 'f_houses').then((apiData) => {
      response.render('user-ratings', {
        data: apiData.data
      })
  });
})

// POST TEST BEGIN


app.get('/rating-maken', function (request, response) {
  // fetch data directus table f_feedback
  fetchJson(apiUrl + 'f_feedback').then((BeoordelingData) => {
    console.log(BeoordelingData)

    response.render('rating-maken', {
      alleHuizen: huizenHome.data,
      alleRatings: feedback.data,
      ratings: ratings,
    })
    console.log(ratings)
  })
})

app.post('/rating-maken', function (request, response) {
  console.log(request.body)

  // posten naar directus..
  fetch(`${apiUrl}f_feedback/`, {
    method: 'POST',
    body: JSON.stringify({
      house: request.body.id,
      list: 10,
      user: 2,
      rating: {
      stars: request.body.stars,
      keuken: request.body.stars,
      tuin: request.body.stars,
      ligging: request.body.stars,
      badkamer: request.body.stars,
      prijs: request.body.stars,
      oppervlakte: request.body.stars,
      },
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }).then((postResponse) => {
    console.log(postResponse)
    response.redirect(303, '/rating-maken')
  })
})


app.get('/ster-rating-persoon', function(request, response) {
  fetchJson(apiUrl + 'f_houses').then((apiData) => {
    response.render('ster-rating-persoon')
  });
})

// 

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})