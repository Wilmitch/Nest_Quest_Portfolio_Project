import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { updateUserStart, updateUserSuccess, updateUserFailure } from '../redux/user/userSlice';
import { useDispatch } from "react-redux";

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="my-7 text-3xl font-semibold text-center text-green-700">
        Profile
      </h1>
      <form className="flex-col flex gap-4" onSubmit={handleSubmit}>
        <input type="file" ref={fileRef} hidden accept="image/*" />
        <img
          onClick={() => fileRef.current.click()}
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt="Profile Picture"
          className="mt-2 h-24 w-26 cursor-pointer rounded-full self-center object-cover"
        />
        <input
          className="p-3 border rounded-lg"
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
          id="username"
          onChange={handleChange}
        />
        <input
          className="p-3 border rounded-lg"
          type="email"
          placeholder="email"
          defaultValue={currentUser.email}
          id="email"
          onChange={handleChange}
        />
        <input
          className="p-3 border rounded-lg"
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button
          className="text-green-500 bg-gray-900 rounded-lg hover:opacity-80 
        uppercase p-3 disabled:opacity-60" disabled={loading}
        >
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      <p className="mt-5 text-red-800">{error ? error : ''}</p>
      <p className="text-green-600 mt-5">
        {updateSuccess ? 'User updated successfully!' : ''}
      </p>
      <div className="mt-5 flex justify-between">
        <span className="cursor-pointer text-red-500">Delete Account?</span>
        <span className="cursor-pointer text-red-500">Sign Out?</span>
      </div>
      {/*<p className="mt-5 text-red-800">{error ? error : ''}</p>
      <p className="text-green-600 mt-5">
        {updateSuccess ? 'User updated successfully!' : ''}
      </p>
      */}
    </div>
  );
}
