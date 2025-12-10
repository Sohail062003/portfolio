import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { checkToken } from "./hooks/checkToken";

const App = () => {
 useEffect(() => {
  checkToken();
  
  
  const interval = setInterval(() => {
    console.log("checkToken is called");
    
    checkToken();
  }, 60000); // every 60 sec

  return () => clearInterval(interval);
}, []);


  return <RouterProvider router={router} />;
};

export default App;