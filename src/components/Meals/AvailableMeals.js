import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Vada-pav',
    description: 'Finest vada and pav',
    price: 20,
  },
  {
    id: 'm2',
    name: 'Dal-bati',
    description: 'A guzrati specialty!',
    price: 165,
  },
  {
    id: 'm3',
    name: 'Dabeli',
    description: 'best',
    price: 12,
  },
  {
    id: 'm4',
    name: 'Pav-bhaji',
    description: 'Healthy...and green...',
    price: 100,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
