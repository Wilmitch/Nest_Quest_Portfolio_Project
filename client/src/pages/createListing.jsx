import React from "react";

export default function createListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="my-7 text-center font-semibold text-3xl">
        Create a Listing
      </h1>
      <form action="" className="flex-col flex sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            required
            id="name"
            maxLength={60}
            minLength={10}
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            required
            id="description"
            maxLength={60}
            minLength={10}
          />
          <input
            type="text"
            placeholder="Location"
            className="border p-3 rounded-lg"
            required
            id="location"
            maxLength={60}
            minLength={10}
          />
          <div className="flex-wrap gap-6 flex">
            <div className="flex gap-2">
              <input type="checkbox" id="deposit" className="w-5" />
              <span>Deposit</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
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
              />
              <p>Bathrooms</p>
            </div>
            <div className="gap-2 flex items-center">
              <input
                type="number"
                id="rentAmount"
                min="1"
                max="10"
                required
                className="p-3 border rounded-lg border-gray-400"
              />
              <div className="flex items-center flex-col">
                <p>Rent Amount</p>
                <span className="text-xs">(Kshs / Month)</span>
              </div>
            </div>
            <div className="gap-2 flex items-center">
              <input
                type="number"
                id="deposit"
                min="1"
                max="10"
                required
                className="p-3 border rounded-lg border-gray-400"
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
              className="border p-3 border-gray-400 w-full rounded"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-green-600 border-green-800 border rounded uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="bg-gray-800 p-3 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-70">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
