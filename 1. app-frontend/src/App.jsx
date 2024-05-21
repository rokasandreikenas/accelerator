import Hero from "./components/home/Hero";
import CategoryList from "./components/home/CategoryList";
import Topbar from "./components/layout/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <Hero />
      <CategoryList />
    </>
  );
};

export default App;
