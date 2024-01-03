import { useState } from 'react';
import Nav from './components/Nav';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import ShoeDetails from './components/ShoeDetails';
import Sidebar from './components/Sidebar';
import { SHOE_LIST } from './constant';
import Cart from './components/Cart';

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => ({
  product: shoe,
  qty: 1,
  size: 40,
}));

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
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  );
}

export default App;
