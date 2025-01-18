import React from "react";
import { Link, useNavigate } from "react-router-dom";
import signup from '../assets/Sign-up.png';
import signin from '../assets/Sign-in.png';
import userpage from '../assets/userpage.jpg';
import userlistingmanagement from '../assets/userlistingmanagement.jpg';
import home from '../assets/Home.jpg';
import otherpages from '../assets/otherpages.jpg';


export default function HowTo() {
  return (
    //<div className="text-gray-600 text-lg sm:text-sm">
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        Nest Quest Quick Tutorial
      </h1>
      <p className="mb-4 text-black text-wrap" >
        <h5 className="text-xl font-bold mb-4 text-slate-800">Website Features</h5>
        <strong>1. </strong>This is where new users create their unique accounts. Our database ensures that your credentials are encrypted before storage for best security.
        <br /><em className="text-red-600">See the image below...</em>
        <img src={signup} alt="sign up page" />
        </p>
        <hr class="h-px my-8 bg-gray-200 border-0 p-0.5 dark:bg-gray-700"></hr>
      <p className="mb-4 text-black text-wrap" >
        <h5 className="text-xl font-bold mb-4 text-slate-800"></h5>
        <strong>2. </strong>This is where users who already have accounts can log into their accounts and access services.
        <br /><em className="text-red-600">See the image below...</em>
        <img src={signin} alt="sign in page" />
      </p>
      <hr class="h-px my-8 bg-gray-200 border-0 p-0.5 dark:bg-gray-700"></hr>
      <p className="mb-4 text-black text-wrap">
        <h5 className="text-xl font-bold mb-4 text-slate-800"></h5>
        <strong>3. </strong>After successfully logging in to your account, you will be redirected automatically to the Home page.
        <br />
        <br />(1.) This is the website title and also a link to the home page.
        <br />(2.) You can search for listed houses here. 
        <br />(3.) This is your profile. Click on it to manage your account. 
        <br />(4.) Click here to start your house hunting journey. 
        <br />(5.) Click on the left swiper to swipe left on the images of listed houses. 
        <br />(6.) Click on the right swiper to swipe right on the images of listed houses. 
        <br /><em className="text-red-600">See the image below...</em>
        <img src={home} alt="home page" />
      </p>
      <hr class="h-px my-8 bg-gray-200 border-0 p-0.5 dark:bg-gray-700"></hr>
      <p className="mb-4 text-black text-wrap">
        <h5 className="text-xl font-bold mb-4 text-slate-800"></h5>
        <strong>4. </strong>While on the user page, you can:
        <br />(1.) Click on the profile icon to upload your preferred profile image.
        <br />(2.) After updating either the profile picture or your username or password, click the update button to save the changes.
        <br />(3.) Select this to create a listing for your property.
        <br />(4.) Select this option to delete your account permanently. Please note that this action cannot be undone!
        <br />(5.) Select this option to sign out/ log out.
        <br /><em className="text-red-600">See the image below...</em>
        <img src={userpage} alt="user page" />
      </p>
      <hr class="h-px my-8 bg-gray-200 border-0 p-0.5 dark:bg-gray-700"></hr>
      <p className="mb-4 text-black text-wrap">
        <h5 className="text-xl font-bold mb-4 text-slate-800"></h5>
        <strong>5. </strong>While on the user page, you can also:
        <br />(1.) Show your listings if you have created any.
        <br />(2.) Your listings will appear here.
        <br />(3.) You can choose to edit your listings or even delete them by selecting on either option respectively. Its important to note that any deletions cannot be undone.
        <br /><em className="text-red-600">See the image below...</em>
        <img src={userlistingmanagement} alt="user listings management page" />
      </p>
      <hr class="h-px my-8 bg-gray-200 border-0 p-0.5 dark:bg-gray-700"></hr>
      <p className="mb-4 text-black text-wrap">
        <h5 className="text-xl font-bold mb-4 text-slate-800"></h5>
        <strong>6. </strong>On the home page, you have a quick access to other pages:
        <br />(1.) This will load the default home page.
        <br />(2.) On selecting this you'll be redirected to the about page.
        <br />(3.) Selecting this will redirect you to Our contact page.
        <br /><em className="text-red-600">See the image below...</em>
        <img src={otherpages} alt="home page, about page and contact page" />
      </p>
      <hr class="h-px my-8 bg-gray-200 border-0 p-0.5 dark:bg-gray-700"></hr>
      <p className="mb-4 text-black text-wrap">
        <span className="p-5 text-xl font-bold text-green-700">We're here to help!</span>
        <br />
        If you have any questions or need assistance, please
        don't hesitate to contact us through our website or by phone with details on our <Link to="/contact" className="text-blue-800 hover:underline" >Contact Page</Link>. We're
        committed to making your house hunting journey as smooth and successful
        as possible.
      </p>
    </div>
  );
}
