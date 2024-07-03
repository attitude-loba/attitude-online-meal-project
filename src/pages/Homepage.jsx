import React from 'react';
import Banner from "../components/Banner";
import SearchForm from "../components/SearchForm";
import MealList from "../components/MealList";
import Loading from "../components/Loading";

const Homepage = () => {
  return (
    <div>
       <Banner />
       <SearchForm />
       
       <MealList />

   </div>
  );
};

export default Homepage
