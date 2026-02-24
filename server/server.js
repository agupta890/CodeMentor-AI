require("dotenv").config()
const express = require("express")
const router = require("./routes/ai-routes")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/ai',router)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})