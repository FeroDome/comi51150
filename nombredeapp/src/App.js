import Navbar from "./component/Navbar/Navbar";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter } from "react-router-dom";




function App() {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <ItemListContainer greeting={"Bienvenidos a FGL 3D"} />
      <ItemDetailContainer />
    </>
  );
};

export default App;
