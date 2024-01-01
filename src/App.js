import { useState } from 'react';
import Nav from './components/Nav';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import ShoeDetails from './components/ShoeDetails';
import Sidebar from './components/Sidebar';
import { SHOE_LIST } from './constant';
import CardItem from './components/CardItem';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetails />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-10">Card</h2>
        <CardItem item={SHOE_LIST[0]} />
        <CardItem item={SHOE_LIST[2]} />
        <CardItem item={SHOE_LIST[3]} />
      </Sidebar>
    </div>
  );
}

export default App;
