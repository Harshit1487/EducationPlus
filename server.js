const express =require('express')
const app = express()
const mongoose = require('mongoose')
// const apiRoutes =require('./routes/apiRoutes.js') 
const dotenv =require('dotenv') 
const routesUrls = require('./routes/routes')
const cors = require('cors')
// const dbConnect = require('./middlewares/db.js')
dotenv.config()

mongoose.connect(process.env.database_access, ()=>console.log("database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)


//db
// dbConnect();
//Basic Routes
// app.use('/api', apiRoutes)

// const path = require("path");

// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });
const PORT = process.env.PORT
app.listen(PORT || 5000, () => console.log('Server Running'))