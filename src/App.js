import './App.css';
import Addtodo from './components/Addtodo';


function App() {
  const myStyle = {
    width:'600px',
    height:'auto',
    backgroundColor:'#040436',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  }

  return (
    <div style={myStyle} className="container mt-4">
      <Addtodo/>
    </div>
  );
}

export default App;
