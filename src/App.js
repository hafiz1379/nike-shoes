import { useState } from 'react';
import Nav from './components/Nav';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import ShoeDetails from './components/ShoeDetails';
import Sidebar from './components/Sidebar';
import { SHOE_LIST } from './constant';

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
        Hello
      </Sidebar>
    </div>
  );
}

export default App;
