const Recipe = require("./models/Recipe")
const mongoose = require('mongoose')

async function connectToDB() { //connection to the database
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}
connectToDB() // connect to database


async function createRecipe(newRecipe) {
    try {
        const newRecipe = await Recipe.create({
            name: 'Um Ali',
            instructions: 'bake at 180C',
            prepTime: 120,
            difficulty: 'Medium',
        })
        console.log(newRecipe)
    }
    catch {
        console.log("Failed to create recipe.")
    }
}
createRecipe()


async function getAllRecipes(){
    const allRecipes = await Recipe.find({})
    allRecipes.forEach(recipe => {console.log(
    `${recipe.name} is a ${recipe.difficulty} recipe and takes ${recipe.prepTime} minutes to prepare`
    ) 
    });
}
getAllRecipes()



async function getAllRecipes(id){
    const foundRecipe = await Recipe.findById({})
    if(foundRecipe){
            console.log(foundRecipe)
        }else{
            console.log("No recipe with this ID exists.")
        }

}
getAllRecipes()


