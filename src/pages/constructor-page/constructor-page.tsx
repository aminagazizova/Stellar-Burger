import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/store';

import styles from './constructor-page.module.css';
import { Preloader } from '../../components/ui';
import { BurgerIngredients, BurgerConstructor } from '../../components';

import { fetchIngredients } from '../../services/slices/ingredientsSlice';

export const ConstructorPage = () => {
  const dispatch = useDispatch();
  const { loading: isIngredientsLoading } = useSelector(
    (state) => state.ingredients
  );

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
