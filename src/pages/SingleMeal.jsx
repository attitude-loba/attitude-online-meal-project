import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from "../components/Loading"
import ReactPlayer from 'react-player/youtube';




const SingleMeal = () => {
  const {id} = useParams();
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState(null);
  const getData = async () => {
    try {
      const res = await fetch(`${url}${id}`);
      const data = await res.json();
      setIsLoading(false);
        console.log(data);
        if (data.meals) {
        const {strMeal, strTags, strYoutube, strInstructions, strArea, strCategory, strMealThumb} = data.meals[0]
        setMeal ({strMeal, strTags, strYoutube, strInstructions, strArea, strCategory, strMealThumb})
        } else {
          setMeal(null)
        }
      
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
 getData()
  }, [id])

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='container mt-2 '>
     <div>
      <img src={meal.strMealThumb} 
      alt={meal.strMeal} 
      className='w-100'
      style={{ height: "600px", objectFit: "cover"}}/>

      <div className='mt-3'>
        <p>
          <span className='bg-success text-white p-2 me-2 rounded-2'>Name :</span>{""}
          {meal.strMeal}{""}
        </p>
        <p>
          <span className='bg-success text-white p-2 me-2 rounded-2'>Tags :</span>{""}
          {meal.strTags}{""}
        </p>
        <p>
          <span className='bg-success text-white p-2 me-2 rounded-2'>Category :</span>{""}
          {meal.strCategory}{""}
        </p>
        <p>
          <span className='bg-success text-white p-2 me-2 rounded-2'>Area :</span>{""}
          {meal.strArea}{""}
        </p>
        <p className='lh-lg'>
          <span className='bg-success text-white p-2 me-2 rounded-2'>Instructions :</span>{""}
          {meal.strInstructions}{""}
        </p>
        <p>
          <span className='bg-success text-white p-2 me-2 rounded-2'>Video Instruction :</span>{""}
        </p>
        <div className='my-2'>
          <ReactPlayer url={meal.strYoutube} width={'100%'} height={'500px'} playing={true} control={ true } />
          <br />
        </div>
      </div>
     </div>
    </div>
  )
}

export default SingleMeal
