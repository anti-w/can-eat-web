import React, {
  useState,
  createContext,
  useEffect,
} from 'react';
import P from 'prop-types';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const foods = [];
  const [meal, setMeal] = useState({
    name: '',
    foods: foods,
  });

  const order = (
    name,
    carbs,
    proteins,
    cals,
    fats,
    grams,
  ) => {
    foods.push({
      name: name,
      carbs: carbs,
      cals: cals,
      fats: fats,
      proteins: proteins,
      grams: grams,
    });
    console.log('Foods ~>', foods);
  };

  const carbsTotal = meal.foods.reduce(
    (acc, curr) => acc + curr.carbs,
    0,
  );

  const calsTotal = meal.foods.reduce(
    (acc, curr) => acc + curr.cals,
    0,
  );

  const fatsTotal = meal.foods.reduce(
    (acc, curr) => acc + curr.fats,
    0,
  );

  const proteinsTotal = meal.foods.reduce(
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
        foods,
        order,
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
