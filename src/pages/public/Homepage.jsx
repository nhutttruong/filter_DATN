import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import SlideShow from "../../components/SlideShow";
import Result from "../../components/Result";
import Filter from "../../components/Filter";
import FilterSelected from "../../components/FilterSelected";
const Homepage = () => {
  const auth = useAuth();
  const [showResult, setShowResult] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  return (
    <div style={{ backgroundColor: "#ffff" }}>
      <SlideShow />
      <Filter
        showResult={showResult}
        setShowResult={setShowResult}
        setSelectedFilters={setSelectedFilters}
      />
      {selectedFilters.length !== 0 && (
        <FilterSelected
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      )}

      {showResult && <Result />}
    </div>
  );
};

export default Homepage;
