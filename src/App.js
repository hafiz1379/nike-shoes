import Nav from './components/Nav';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import ShoeDetails from './components/ShoeDetails';
import { SHOE_LIST } from './constant';

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetails />
      <NewArrivalsSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
