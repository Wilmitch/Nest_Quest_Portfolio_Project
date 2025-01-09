import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    location: "",
    deposit: false,
    parking: false,
    bedrooms: 1,
    bathrooms: 1,
    rentAmount: 100,
    deposit: 0,
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(formData);
  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2mb max/ image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images/ listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = 
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      if (+formData.regularPrice < +formData.discountPrice)
        return setError("Discount price must be lower than regular price");
      setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="my-7 text-center font-semibold text-3xl">
        Create a Listing
      </h1>
      <form onSubmit={handleSubmit} className="flex-col flex sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            required
            id="name"
            maxLength={60}
            minLength={10}
            onChange={handleChange}
            value={formData.name}
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            required
            id="description"
            maxLength={60}
            minLength={10}
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="text"
            placeholder="Location"
            className="border p-3 rounded-lg"
            required
            id="location"
            maxLength={60}
            minLength={10}
            onChange={handleChange}
            value={formData.location}
          />
          <div className="flex-wrap gap-6 flex">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="deposit"
                className="w-5"
                onChange={handleChange}
                value={formData.deposit}
              />
              <span>Deposit</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                onChange={handleChange}
                value={formData.parking}
              />
              <span>Parking</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="gap-2 flex items-center">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-3 border rounded-lg border-gray-400"
                onChange={handleChange}
                value={formData.bedrooms}
              />
              <p>Bedrooms</p>
            </div>
            <div className="gap-2 flex items-center">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="p-3 border rounded-lg border-gray-400"
                onChange={handleChange}
                value={formData.bathrooms}
              />
              <p>Bathrooms</p>
            </div>
            <div className="gap-2 flex items-center">
              <input
                type="number"
                id="rentAmount"
                min="1"
                max="1000000"
                required
                className="p-3 border rounded-lg border-gray-400"
                onChange={handleChange}
                value={formData.rentAmount}
              />
              <div className="flex items-center flex-col">
                <p>Rent Amount</p>
                {formData.rentAmount}
                <span className="text-xs">(Kshs / Month)</span>
              </div>
            </div>
            <div className="gap-2 flex items-center">
              <input
                type="number"
                id="deposit"
                min="1"
                max="1000000"
                required
                className="p-3 border rounded-lg border-gray-400"
                onChange={handleChange}
                value={formData.deposit}
              />
              <div className="flex items-center flex-col">
                <p>Deposit</p>
                <span className="text-xs">(Kshs / Month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col flex flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="text-gray-700 font-normal ml-2">
              The first image will be the cover (maximum 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              onChange={(e) => setFiles(e.target.files)}
              className="border p-3 border-gray-400 w-full rounded"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              type="button"
              disabled={uploading}
              onClick={handleImageSubmit}
              className="p-3 text-green-600 border-green-800 border rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
          <p className="text-red-600 text-sm">
            {imageUploadError && imageUploadError}
          </p>
          {
            formData.imageUrls.length > 0 && formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className="justify-between flex p-3 border items-center"
              >
                <img
                  src={url}
                  alt="listing image"
                  className="h-20 w-20 rounded-lg object-contain"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="text-red-700 rounded-lg uppercase hover:opacity-70"
                >
                  Delete
                </button>
              </div>
            ))}
          <button
            disabled={loading || uploading}
            className="bg-gray-800 p-3 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-70"
          >
            {loading ? "Creating..." : "Create Listing"}
          </button>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
      </form>
    </main>
  );
}
