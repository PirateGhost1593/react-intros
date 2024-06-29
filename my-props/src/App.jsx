import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx";
import List
 from "./List.jsx";
function App() {
  const fruits = [{id: 1, name: "Apple", calories: 95}, 
    {id: 2,name: "Orange", calories: 45}, 
    {id: 3,name: "Mango", calories: 159}, 
    {id: 4,name: "Banana", calories: 105},
    {id: 5,name: "Pineapple", calories: 37}];

    const vegetables = [{id: 6, name: "Potatoes", calories: 110}, 
      {id: 7,name: "Celery", calories: 15}, 
      {id: 8,name: "Carrots", calories: 25}, 
      {id: 9,name: "Corn", calories: 65},
      {id: 10,name: "Broccoli", calories: 50}];
  
  return ( 
    
    /*<>
      props
      <Student name="Sulaiman" age={30} isStudent={true}/>
      <Student name="Abdulai" age={44} isStudent={false}/>
      <Student/>
      <UserGreeting isLoggedIn={true} username="ASBah29"/>
    </>*/
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  );
}

export default App
