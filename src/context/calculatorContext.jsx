import React, {
  useState,
  createContext,
  useEffect,
} from 'react';
import P from 'prop-types';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [food, setFood] = useState([]);
  const [meal, setMeal] = useState({
    name: '',
    foods: food,
  });

  const unorder = (name) => {
    setFood(food.filter((foods) => foods.name !== name));
  };

  const order = (
    name,
    carbs,
    proteins,
    cals,
    fats,
    grams,
  ) => {
    if (food.find((food) => food.name === name))
      return alert(`${name} já foi adicionado.`);
    setFood((food) => [
      ...food,
      {
        name,
        carbs,
        proteins,
        cals,
        fats,
        grams,
      },
    ]);
  };

  const carbsTotal = food.reduce(
    (acc, curr) => acc + curr.carbs,
    0,
  );

  const calsTotal = food.reduce(
    (acc, curr) => acc + curr.cals,
    0,
  );

  const fatsTotal = food.reduce(
    (acc, curr) => acc + curr.fats,
    0,
  );

  const proteinsTotal = food.reduce(
    (acc, curr) => acc + curr.proteins,
    0,
  );

  const saveMeal = (name, selectedFoods) => {
    setMeal({ name: name, foods: selectedFoods });
    console.log('Meal ~>', meal);
  };

  return (
    <CalculatorContext.Provider
      value={{
        food,
        order,
        unorder,
        saveMeal,
        carbsTotal,
        calsTotal,
        fatsTotal,
        proteinsTotal,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

CalculatorProvider.propTypes = {
  children: P.node.isRequired,
};
