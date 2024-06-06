// 1. OPZETTEN VAN DE WEBSERVER

import express, { request } from "express"

import fetchJson from "./helpers/fetch-json.js"

let app = express()

let apiUrl = 'https://fdnd-agency.directus.app/items/DPI_TNO?fields=*.*'

app.set("view engine", "ejs")

app.set("views", "./views")

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

// 2. ROUTES

app.get('/', function(request, response) {
  fetchJson(apiUrl)
  .then((apiData) => {
    response.render('index', {
      tno: apiData.data})
      });
    });

// 3. START DE WEBSERVER

app.set("port", process.env.PORT || 8000)
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`)
})