import Head from "next/head";
import { useState } from "react";
import swal from "sweetalert";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue === "Light tomorrow with today") {
      window.open("https://musical-starship-aa748983f.netlify.app/", "_blank");
    } else if (inputValue === "At the end of hardship comes happiness") {
      window.open("https://musical-starship-aa748983f.netlify.app/", "_blank");
    } else {
      swal("Thank	you	for	submitting", inputValue, "success");
    }
  };

  return (
    <div className="home">
      <Head>
        <title>YedaBook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>
          <h1>Want New Recipes?</h1>
          <p>Submit your request for your favorite recipe</p>
          <form onSubmit={submitHandler}>
            <div className="input-container">
              <input
                placeholder="Enter your choice"
                maxLength={80}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </header>
      <main>
        <div>
          <img
            src="https://therecipecritic.com/wp-content/uploads/2019/12/lasagna_hero-1-667x1000.jpg"
            alt="card-image"
          />
        </div>
        <div>
          <h1>How to Make Lasagna</h1>
          <p>
            Making lasagna can be time-consuming, but the results are well worth
            the wait. You'll find a detailed ingredient list and step-by-step
            instructions in the recipe below, but let's go over the basics:{" "}
          </p>
          <h3>Lasagna Ingredients </h3>
          <ul>
            <li>
              Meat: This super meaty lasagna has sweet Italian sausage and lean
              ground beef.
            </li>
            <li>
              Onion and garlic: An onion and two cloves of garlic are cooked
              with the meat to add tons of flavor.
            </li>
            <li>
              Tomato products: You'll need a can of crushed tomatoes, two cans
              of tomato sauce, and two cans of tomato paste.
            </li>
            <li>
              Sugar: Two tablespoons of white sugar add subtle sweetness and
              enhance the flavor of the sauce.
            </li>
            <li>
              Spices and seasonings: This lasagna recipe is flavored with fresh
              parsley, dried basil leaves, salt, Italian seasoning, fennel
              seeds, and black pepper.
            </li>
            <li>
              Lasagna noodles: Use store-bought or homemade lasagna noodles.
            </li>
            <li>
              Cheeses: Parmesan, mozzarella, and ricotta cheese make this
              lasagna extra decadent.
            </li>
            <li>
              Egg: An egg helps bind the ricotta so it doesn't ooze out of the
              lasagna when you cut into it.{" "}
            </li>
          </ul>
          <h3>How to Make Lasagna Step-By-Step </h3>
          <p>
            Here's a very brief overview of what you can expect when you make
            homemade lasagna:
          </p>
          <ol>
            <li>Make the meat sauce.</li>
            <li>Cook the noodles.</li>
            <li>Make the ricotta mixture.</li>
            <li>Layer the lasagna according to the recipe instructions.</li>
            <li>Cover with foil and bake.</li>
            <li>Let the lasagna rest before serving</li>
          </ol>
          <h3>How Long to Cook Lasagna</h3>
          <p>
            The assembled lasagna should take about 50 minutes to cook in an
            oven preheated to 375 degrees F. Cover it with foil for the first 25
            minutes, then let it cook uncovered for the final 25 minutes. Also,
            it's important to let the lasagna rest at room temperature for about
            15 minutes before you cut into it. Happy eating!
          </p>
        </div>
      </main>
    </div>
  );
}
