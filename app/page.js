import "./App.scss"
import Header from "./components/Header/Header";
import Masonry from "./components/Masonry/Masonry";

function Page() {
    return (
        <div className="App">
            <Header/>
            <Masonry/>
        </div>
    );
}

export default Page;
