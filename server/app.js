import express from "express"
import { publicationsRouter } from "./src/routes/publications.router.js"
import { startDb } from "./src/config/db.js"
import  cors  from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const port = 2000

app.use("/", publicationsRouter)

app.listen(port, () => {
    console.log(`server escuchando en el puerto http://localhost:${port}`);
    startDb()
})


