const request = require('request');

const recipe = (cb) => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    request(
        {
            url: url,
            json: true,
        },
        (err, response) => {
            if (err) {
                cb('Unable to connect with weather service!', undefined);
            } else {
                cb(undefined, {
                    recipeName: response.body.meals[0].strMeal,
                    category: response.body.meals[0].strCategory,
                    area: response.body.meals[0].strArea,
                    instructions: response.body.meals[0].strInstructions,
                    ingredients: createMeal(response.body.meals[0]),
                    image: response.body.meals[0].strMealThumb,
                    tags: response.body.meals[0].strTags,
                    youtube: response.body.meals[0].strYoutube ? `${response.body.meals[0].strYoutube}` : '',
                });
            }
        }
    );
};

const createMeal = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }
    return ingredients;
};

module.exports = recipe;
