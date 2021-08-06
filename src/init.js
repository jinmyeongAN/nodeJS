import './db'
import './models/Video'
import app from './server'

const PORT = 8080; 

const handleListening = () => {
    console.log("Your server is listening!")
}

app.listen(PORT, handleListening);