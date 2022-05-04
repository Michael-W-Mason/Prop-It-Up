import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard'

function App() {
  return (
    <>
      <PersonCard firstName={ 'Jane' } lastName='Doe' age = { 45 } hairColor = 'Black'/>
      <PersonCard firstName={ 'John' } lastName='Smith' age = { 88 } hairColor = 'Brown'/>
      <PersonCard firstName={ 'Mallard' } lastName='Fillmore' age = { 50 } hairColor = 'Brown'/>
      <PersonCard firstName={ 'Maria' } lastName='Smith' age = { 62 } hairColor = 'Brown'/>
    </>
  );
}

export default App;