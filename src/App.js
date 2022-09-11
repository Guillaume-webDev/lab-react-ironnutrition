import allFoods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';
import { Divider } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(allFoods);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  return (
    <div className="App">
      <AddFoodForm
        formData={formData}
        setFormData={setFormData}
        foodList={foodList}
        setFoodList={setFoodList}
      />
      <Search foodList={foodList} setFoodList={setFoodList} />
      <Divider>Food List</Divider>
      <div className="foodListContainer">
        {foodList.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={food}
              foodList={foodList}
              setFoodList={setFoodList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
