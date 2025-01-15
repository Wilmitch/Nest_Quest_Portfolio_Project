import React from "react";
//import { faLinkedin } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Contact Us</h1>
      <p className="mb-4 text-slate-700">
        We love hearing from you! Whether you have a question about a specific
        listing, need assistance with your search, or you simply want to share
        your much needed feedback, kindly do not hesitate to contact us.
      </p>
      <p className="mb-4 text-gray-700">
        Email: <p className="text-green-700">mwangimwilfred@gmail.com</p>
      </p>
      <p className="mb-4 text-gray-700">
        Phone: <p className="text-green-700">+254 710 313 788</p>
      </p>

      <img
        className="h-[70px] sm:h-[70px] object-cover rounded-full hover:scale-105"
        src="https://media.licdn.com/dms/image/v2/D4D03AQGMwtf-BwbsUg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730372113068?e=1742428800&v=beta&t=keX2auxmIdDgywfZDKiex3zL9KpFzc2VAv_aNA7mFTw"
        alt="profile image"
      />
      <br />
      <p className="mb-4 text-gray-700">
        <ul className="text-black">
          <li>
            LinkedIn:{" "}
            <span className="text-green-800">
              linkedin.com/in/wilfred-mwangi-936ba478
            </span>
          </li>
          <br />
          <li>
            X: <span className="text-green-800">@wilfred_SE</span>
          </li>
          <br />
          <li>
            GitHub: <span className="text-green-800">Wilmitch</span>
          </li>
        </ul>
      </p>
      <br />
      <hr />
      <br />
    </div>
  );
}
