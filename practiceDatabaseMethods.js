

async function connectToDB(){ //connection to the database
    try{
        await mongoose.connect('mongodb://localhost:27017')
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


connectToDB() // connect to database


