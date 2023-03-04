import Navbar from "../Navbar/Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = () => {
    return (
        <>
            <Navbar />
            <h1>Home</h1>
            <ItemListContainer greeting={"Bienvenidos a mi FGL 3D"}/>
        </>
    );
};

export default Home;