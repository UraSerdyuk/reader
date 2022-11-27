import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Paperbase from "./component/Paperbase";

// const book : Array<string> = ['Сьогодні', 'такий', 'складний', 'час,', 'що', 'не', 'можна', 'стояти', 'осторонь', 'подій,', 'які', 'відбуваються', 'навколо', 'нас,', 'і', 'свою', 'життєву', 'позицію', 'не', 'потрібно', 'боятися', 'декларувати.', 'Не', 'може', 'осторонь', 'залишитися', 'й', 'наш', 'театр,', 'який', 'усіма', 'силами', 'прагне', 'допомогти', 'нашому', 'народові,', 'нашим', 'людям,', 'адже', 'наше', 'мистецтво', '–', 'це,', 'у', 'першу', 'чергу,', 'підтримка', 'в', 'складну', 'хвилину.'];
function App() {
  const [book,setBook] = useState<Array<string>>([]);

  useEffect(()=>{
    axios.get('http://localhost:9988/qwe')
      .then(function (response) {
        // handle success
        setBook(response.data.replace('.',' ').split(' '));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  },[])

  return (
    <div className="App">
      <Paperbase book={book}/>
    </div>
  );
}

export default App;
