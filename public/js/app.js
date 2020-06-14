const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	fetch('http://localhost:3000/meal')
		.then((res) => res.json())
		.then((res) => {
			createMeal(res.recipe);
		});
});

const createMeal = (meal) => {
	const newInnerHTML = `
			<h2 class="text-center mt-5">${meal.recipeName}</h2>
			<hr/>
			<div class="row text-center">
            <div class="col-md-6">
                <table class="table text-center table-hover">
                    <tbody class="text-left">
                        <tr>
                            <td>
                                <img src="${meal.image}" width="500px" height="300px" alt="" class="my-3" />
                            </td>
                        </tr>
                        <tr>
                            <td>
								${meal.category ? `<p><strong>Category : </strong>${meal.category}</p>` : ``}
                            </td>
                        </tr>
                        <tr>
							<td>
							    ${meal.area ? `<p><strong>Area : </strong>${meal.area}</p>` : ``}
                            </td>
                        </tr>
                        <tr>
                            <td>
								${meal.tags ? `<p><strong>Tags : </strong>${meal.tags.split(',').join(', ')}</p>` : ``}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1 class="my-3">
                                    Ingredients
                                </h1>
                                <ul>
									${meal.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">
                <p>
					${meal.instructions}
                </p>
            </div>
        </div>
		<h5 class="text-center mb-3">Tutorial</h5>
		<hr />
        ${meal.youtube ? `
        <div class="row">
		    <div class="embed-responsive embed-responsive-item embed-responsive-16by9">
			    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${meal.youtube.slice(-11)}" allowfullscreen></iframe>
		    </div>
		</div>`: '<h1 class="text-center"> ops 😢 !! <br/> No tutorial is available!</h1>'}
	`;

	meal_container.innerHTML = newInnerHTML;
};

