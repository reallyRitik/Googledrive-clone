import Header from "./Header";
import Sidebar from "./Sidebar";
import Data from "./Data";

function App() {
  return (
    <>
     <Header/>
        <div className="App">
           <Sidebar/>
           <Data/>
       </div>
   </>
  );
}

export default App;
