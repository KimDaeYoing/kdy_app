import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLVa2Z_Pf3eWv0b-gNCTV_BD6N3_VGbunHSg&usqp=CAU",
    rating : 1
  },
  {
    id : 2,
    name : "ganaea",
    image :
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKro_zB3iweunc_Zml6KbquhiU_KRRQ6MVPQ&usqp=CAU",
    rating : 2
  },
  {
    id : 3,
    name : "houmeou",
    image : 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjH9BkV5kdodPWAp2XxuVdixfhiznlfeTvhg&usqp=CAU",
    rating : 3
  },
  {
    id : 4,
    name : "jajeongur",
    image : 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqt2mx9TaU_Js5fcg_BxJa1MidrGxZZEzWVw&usqp=CAU",
    rating : 4
  },
  {
    id : 5,
    name : "wasabi",
    image :
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYscJ1ktf6w_5OW2IgXaPdKXUjP6kk-MBFiw&usqp=CAU",
    rating : 5
  }
];

function Food({name, picture, rating}){
  return <div>
    <h2>i like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
