import React from 'react';
import { InputWithLable } from './components/InputWithLable/InputWithLable';
import { SelectorWithLable } from './components/SelectorWithLable/SelectorWithLable';
import { RatingWithLable } from './components/RatingWithLable/RaitingWithLable';
import { ThreeColumnsLayout } from './components/containers/ThreeColumnsLayout';
import { SubmitButton } from './components/SubmitButton/SubmitButton';

function App() {
  return (
    <div className="App">
      <InputWithLable inline={true} lable="Введите имя"/>
      <SelectorWithLable lable="Выбирете лекцию"/>
      <ThreeColumnsLayout>
        <RatingWithLable lable='Форма' />
        <RatingWithLable lable='Интерес' />
        <RatingWithLable lable='Содержание' />
      </ThreeColumnsLayout>
      <InputWithLable inline={false} lable="Введите коментарии, что понравилось, а что нужно подтянуть"/>
      <SubmitButton text='Отправить'/>
    </div>
  );
}

export default App;
