import React from 'react';
// import Hook1 from './page/Hook1'
// import UseReducer from './page/UseReducer'
// import UseCallback from './page/UseCallback'
// import UseMemo from './page/UseMemo'
// import UseRef from './page/UseRef'
// import UseLayoutEffect from './page/UseLayoutEffect'
// import Redux from './page/Redux'
// import Test from './page/Test'
// import Demo from './page/Demo'
import FetchData from './page/FetchData'
import './App.css';

export const ThemeContext = React.createContext();

function App() {
  return (
    
      <div className="App">
        {/* <ThemeContext.Provider value={{background: 'green', color: 'white'}}>
          <Hook1 />
        </ThemeContext.Provider> */}
        {/* <UseReducer /> */}
        {/* <UseCallback /> */}
        {/* <UseMemo/> */}
        {/* <UseRef /> */}
        {/* <UseLayoutEffect /> */}
        {/* <Redux/> */}
        {/* <Test /> */}
        {/* <Demo /> */}
        <FetchData />
      </div>
    
  );
}

export default App;
