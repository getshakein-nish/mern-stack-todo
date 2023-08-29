import express from 'express'
import cors from 'cors';
import todo from './routes/todo.js'

const app = express();

const PORT = process.env.PORT || 5050

app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Hello from Homepage")
})

app.use('/todo', todo)

app.listen(PORT, () => {console.log(`Server is up and running on port: ${PORT}`)})

