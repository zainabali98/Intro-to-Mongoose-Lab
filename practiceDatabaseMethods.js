const Recipe = require("./models/Recipe")
const mongoose = require('mongoose')

const {
    createRecipe,
    getAllRecipes,
    updateRecipe,
    deleteRecipe
} = require('./recipeUtils');



async function connectToDB() { //connection to the database
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}

async function main() {
    try {
        await connectToDB();

        createRecipe();

        getRecipeById('YOUR_ID_HERE');

        getAllRecipes();

        updateRecipe(
            'YOUR_ID_HERE',
            {
                name: 'Pizza',
                instructions: 'smother it in sauce',
                prepTime: 30,
                difficulty: 'Easy'
            }
        );

        deleteRecipe('YOUR_ID_HERE');

    } catch (error) {
        console.log(error);
    }
}


main();
