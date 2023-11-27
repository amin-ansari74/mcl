import SideBar from "./SideBar";
import Route from "./Route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import RankingsPage from "./pages/RankingsPage";


function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/">
          <AccordionPage />
        </Route>
        <Route path="/trophies">
          <DropDownPage />
        </Route>
        <Route path="/rankings">
          <RankingsPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
