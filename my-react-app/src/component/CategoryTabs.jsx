import React, { useState } from "react";
import "./CategoryTabs.css";

const categories = ["Hotel", "Flight", "Place", "Food"];

const CategoryTabs = () => {
  const [active, setActive] = useState("Hotel");

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab-btn ${active === category ? "active" : ""}`}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;