import './App.css';
import TodoContainer from './component/TodoContainer';
import HeaderWeb from './component/HeaderWeb'
import MenuWeb from './component/MenuWeb';

function App() {
  return (
    <div className="App">
      <HeaderWeb></HeaderWeb>
      <MenuWeb></MenuWeb>
      <TodoContainer></TodoContainer>
    </div>
  );
}

export default App;
