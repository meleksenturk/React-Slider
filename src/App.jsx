import { useEffect, useState } from 'react';
import data from './data'
import { Person } from './components/Person';
import './css/appstyle.css'
// import { FcPrevious, FcNext, } from "react-icons/fc";
import {FaQuoteRight, FaChevronRight,FaChevronLeft} from "react-icons/fa"

const App = () => {
  const [peopleInfo, setPeopleInfo] = useState(data);
  const [currentPerson, setCurrentPerson] = useState(peopleInfo[0]);
  const [index, setIndex] = useState(0);

  console.log(peopleInfo);
  useEffect(() => {
  }, [currentPerson]);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextPerson();
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [index]);

  const nextPerson = () => {
    const newIndex = (index + 1) % data.length;
    const newPerson = peopleInfo[newIndex];
    setIndex(newIndex);
    setCurrentPerson(newPerson);
    // console.log(currentPerson);
  }

  const previousPerson = () => {
    const newIndex = (index - 1) % data.length;
    if (newIndex === -1) {
      const newIndex = (data.length - 1);
      setCurrentPerson(peopleInfo[newIndex]);
      setIndex(newIndex);
    } else {
      setCurrentPerson(peopleInfo[newIndex]);
      setIndex(newIndex);
    }
    console.log(currentPerson);
  }

  // console.log(currentPerson);


  return (
    <div className='main'>
      <div className='mainDiv'>
        <div className='rotate'>
         <FaChevronLeft className='icon' onClick={() => previousPerson()} />
        </div>
        <div className='personList'>
          <Person className="person" {...currentPerson} />
        </div>
        <div className='rotate'>
          <FaChevronRight className='icon' onClick={() => nextPerson()} />
        </div>
      </div>
      <div>
        <FaQuoteRight className="quote"/>
      </div>
    </div>
  );
};
export default App;
