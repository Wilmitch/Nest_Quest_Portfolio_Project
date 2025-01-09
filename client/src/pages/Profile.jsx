import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="my-7 text-3xl font-semibold text-center text-green-700">
        Profile
      </h1>
      <form className="flex-col flex gap-4" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          //src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt="Profile Picture"
          className="mt-2 h-24 w-26 cursor-pointer rounded-full self-center object-cover"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-500">
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>
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
        uppercase p-3 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Loading..." : "Update"}
        </button>
        <Link
          to={"/create-listing"}
          className="rounded-lg text-center bg-green-900 text-white p-3 hover:opacity-90"
        >
          Create Listing
        </Link>
      </form>
      <p className="mt-5 text-red-800">{error ? error : ""}</p>
      <p className="text-green-600 mt-5">
        {updateSuccess ? "User updated successfully!" : ""}
      </p>
      <div className="mt-5 flex justify-between">
        <span
          onClick={handleDeleteUser}
          className="cursor-pointer text-red-500"
        >
          Delete Account?
        </span>
        <span onClick={handleSignOut} className="cursor-pointer text-red-500">
          Sign Out?
        </span>
      </div>
      <button onClick={handleShowListings} className="text-green-700 w-full">
        Show Listings
      </button>
      <p className="text-red-700 mt-5">
        {showListingsError ? "Error showing listings" : ""}
      </p>

      {userListings && userListings.length > 0 && (
        <div className="flex flex-col gap-4">
          <h1 className="text-center mt-7 text-2xl font-semibold">
            Your Listings
          </h1>
          {userListings.map((listing) => (
            <div
              key={listing._id}
              className="border rounded-lg p-3 flex justify-between items-center gap-4"
            >
              <Link to={`/listing/${listing._id}`}>
                <img
                  src={listing.imageUrls[0]}
                  alt="listing cover"
                  className="h-16 w-16 object-contain"
                />
              </Link>
              <Link
                className="text-slate-700 font-semibold  hover:underline truncate flex-1"
                to={`/listing/${listing._id}`}
              >
                <p>{listing.name}</p>
              </Link>

              <div className="flex flex-col item-center">
                <button
                  onClick={() => handleListingDelete(listing._id)}
                  className="text-red-700 uppercase"
                >
                  Delete
                </button>
                <Link to={`/update-listing/${listing._id}`}>
                  <button className="text-green-700 uppercase">Edit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
