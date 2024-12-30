import React from 'react'

const RegisterPage = () => {
  return (
    <div className='register'>
        <div className='register_content'>
            <form>
                <input placeholder='First Name' name='firstname' required/>
                <input placeholder='Last Name' name='lastname' required/>
                <input placeholder='Email' name='email' type='email' required />
                <input placeholder='Password' name='password' type='password' required/>
                <input placeholder='Confirm Password' name='confirmPassword' type='password' required/>
                <input id='Image' type='file' name='profileImage' accept='Image/*' required/>
                <label htmlFor="Image">
                    <img src="/assets/addImage.png" alt="add profile pic" />
                    <p>Upload Your Photo</p>
                </label>
                <button type='submit'>REGISTER</button>
            </form>
            <a href="/login">Already have an account? Log in here</a>
        </div>
    </div>
  )
}

export default RegisterPage