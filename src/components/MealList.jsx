import React from 'react';
import Loading from './Loading';
import { useGlobalContext } from '../hooks/context';
import { Link } from 'react-router-dom';


const MealList = () => {
  const {isLoading, foods } = useGlobalContext();
  console.log(isLoading, foods)
if (isLoading) {
  return <Loading />;
}
if (foods.length <1 ) {
  return   (
  <h1 className='text-danger text-center'> No food Found for your Search </h1>
  );
}

  return (
    <div id='below' className='d-flex justify-content-between align-item-center flex-wrap container'>
    
    {
    foods.map((food) => {
     const { idMeal, strMeal, strMealThumb, strCategory} = food
     return <Link key ={idMeal} to = {`/meal/${idMeal}`} className='text-decoration-none my-3 mx-auto'>
      
      <div style={{width: '270px'}} className='shadow shadow-lg rounded-3 '>
        <img src={strMealThumb} alt={strMeal} className='w-100 rounded-top-3' />
        <h4 className='text-success mt-3 pb-2 text-center fw-bold'>{strMeal} {" "}</h4>
       <p className='text-center'> {strCategory} </p>
      </div>
     
     </Link>
    } )
    
    }
    </div>
  )
}

export default MealList
