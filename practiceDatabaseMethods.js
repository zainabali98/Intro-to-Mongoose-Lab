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
// createRecipe()


async function getAllRecipes(){
    const allRecipes = await Recipe.find({})
    allRecipes.forEach(recipe => {console.log(
    `${recipe.name} is a ${recipe.difficulty} recipe and takes ${recipe.prepTime} minutes to prepare`
    ) 
    });
}
// getAllRecipes()



async function getAllRecipes(id){
    const foundRecipe = await Recipe.findById({})
    if(foundRecipe){
            console.log(foundRecipe)
        }else{
            console.log("No recipe with this ID exists.")
        }

}
// getAllRecipes()


async function updateRecipe(recipeId, newRecipeData){
    const updatedRecipeData = await Recipe.findByIdAndUpdate(
        recipeId,
        newRecipeData,
        { new: true }
    ); 
    console.log(updatedRecipeData);
    
}
updateRecipe(
    '6a9850297d55c50ac72d1a37', {
            name: 'Pizza',
            instructions: 'smother it in sauce',
            prepTime: 30,
            difficulty: 'Easy',
        
    }
)