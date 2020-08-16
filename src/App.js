import React from 'react';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App" style={style}>
      <Registration />
    </div>
  );
}
const style = {
  margin:"auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection:"column",
  height: "50%",
  width:"30%"
};
export default App;
