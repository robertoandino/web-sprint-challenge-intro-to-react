import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './Character'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the APIs
        const urlPlanets = await axios.get('http://localhost:9009/api/planets');
        const urlPeople = await axios.get('http://localhost:9009/api/people');

        //Process planets and people data
        const planetsData = urlPlanets.data;
        setPlanets(planetsData);

        const peopleData = urlPeople.data;
        
        //Replacing homeworld id with actual homeworld data in people object
        for(const key in planetsData){

          for(const peopleKey in peopleData){
        
           if(planetsData[key].id === peopleData[peopleKey].homeworld){
            peopleData[peopleKey].homeworld = planetsData[key];
           }
        
          }
        }

        setPeople(peopleData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='person'>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
        people.map(person => (
          <div key={person.id}>
            <Character name={person.name} homeworld={person.homeworld.name}/>
          </div>
        ))
      }
    </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOWj
if (typeof module !== 'undefined' && module.exports) module.exports = App
