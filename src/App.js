import './App.css';
import foods from './foods.json';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [foodList, setFoodlist] = useState(foods);
  return <h1> Food List </h1>
  foodList.map
}
export default App;
