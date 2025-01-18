import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About Nest Quest
      </h1>
      <p className="mb-4 text-gray-700">
        Welcome to Nest Quest, your one-stop destination to find your dream home
        and solve your House Hunting hustles! We're passionate about connecting
        home seeekers with the perfect and ideal properties. With our
        user-friendly website that offers a wide variety of listings and a
        powerful search engine to ensure that your home quest journey is smooth
        and successful. So allow us to help you find your next perfect home.
      </p>
      <p className="mb-4 text-gray-700">
        The mission is to help our users accomplish their home quest by
        providing expert insights, location, adequate information in regards to
        the properties, and a deep understanding of the local market. Whether
        you are looking to expensive or a fairly priced property, we are here to
        help you every step of the way.
      </p>
      <p className="mb-4 text-gray-700">
        With a design thats meant for both tenants and landlords, each of these
        users can access information relevant to them and that will benefit them
        in either home quest or finding ideal tenants for their properties. We
        believe that renting a property should be an exciting and rewarding
        experience, and we are dedicated to making that a reality for each and
        every one of our users.
      </p>
      <br />
      <div>
      <Link
          to={"/how"}
          className="sm:text-sm text-green-700 font-bold hover:underline"
        >
          Check out the website tutorial here...
        </Link>
      </div>
      <hr />
      <br />
      <p className="text-green-700 shadow-lg text-justify">@wilfred_SE</p>
    </div>
  );
}
