import React, { useContext } from "react";
import "./List.css";
import { dataContext } from "../../context/UserContext";

const List = () => {
  const {
          title,
          setTitle,
          addListing,
          setAddListing,
          addImage1,
          setAddImage1,
          addImage2,
          setAddImage2,
          addImage3,
          setAddImage3,
          addLocation,
          setAddLocation,
          price,
          setPrice,
  } = useContext(dataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddListing(true);
    alert("Listing Successfully... 👍");
  };

  return (
    <div id="listing">
      <form onSubmit={handleSubmit}>
        <div className="listtitle">
          <span id="listtitle">Add Your Listing</span>
        </div>
        <div className="listing">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="listing">
          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>
        </div>
        <div className="listing">
          <label htmlFor="img1">Image URL 1</label>
          <input
            type="file"
            required
            id="img1"
            onChange={(e) => setAddImage1(e.target.files[0])}
          />
        </div>
        <div className="listing">
          <label htmlFor="img2">Image URL 2</label>
          <input
            type="file"
            required
            id="img2"
            onChange={(e) => setAddImage2(e.target.files[0])}
          />
        </div>
        <div className="listing">
          <label htmlFor="img3">Image URL 3</label>
          <input
            type="file"
            required
            id="img3"
            onChange={(e) => setAddImage3(e.target.files[0])}
          />
        </div>
        <div className="listing">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            required
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="listing">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            required
            id="location"
            onChange={(e) => setAddLocation(e.target.value)}
            value={addLocation}
          />
        </div>

        <button type="submit" id="list-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default List;
