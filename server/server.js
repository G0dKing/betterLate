// Server.js

// Package Dependencies
const express = require('express')
const cors = require('cors')
const path = require('path')
const axios = require('axios')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

// Initialize Application
const app = express()

// Middleware
require ('dotenv').config()
app.use(cors())
app.use(helmet())

// Rate-Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use(limiter)

// Client Build Files
app.use(express.static(path.join(__dirname, "..", "client", "dist"), {
  maxAge: '1d',
}))

// Static Fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"), {
    cacheControl: true,
  })
})

// Endpoint: Nearby Restaurant Search API
app.get("/api/search", async (req, res) => {
  try {
    const { latitude, longitude } = req.query
    const apiKey = process.env.GOOGLE_API_KEY
    const radius = 8045; // in meters (8045m = 5mi)
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=restaurant&opennow=true&key=${apiKey}`
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_phone_number,opening_hours,photos,formatted_address&key=${apiKey}`;



    const response = await axios.get(url)
    console.log("API Call Successful")
    res.json(response.data)
  } catch (error) {
    console.error("API Call Failed:", error.message)
    res.status(500).send("Error (Status:500): Could not connect to server.")
  }
})

// Backend Server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})