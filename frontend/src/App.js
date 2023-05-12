import MainRoutes from "./Route/MainRoutes";
import Header from "./components/Header/Header";
import "./app.scss"
import { useEffect, useState } from "react";
function App() {
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    const checkClass = () => {
      const body = document.querySelector('body');
      
      if (burger === true) {
        body.style.overflow = 'hidden';
      }else{
        body.style.overflow = 'auto';
        body.style.overflowX = 'hidden';
      }
    };

    checkClass();
  }, [burger]);
  return (
    

    <div className={burger ?"wrapper":""}>
      <div className="App">
      
          <Header burger={burger} setBurger={setBurger}/>
          <MainRoutes>

          </MainRoutes>
      </div>
    </div>
  );
}

export default App;
