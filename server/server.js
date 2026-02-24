require("dotenv").config()
const express = require("express")
const router = require("./routes/ai-routes")
const app = express()
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","GET"]
}))

app.use('/ai',router)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})