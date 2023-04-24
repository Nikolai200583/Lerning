import './App.css';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Inputer from "./components/Inputer";
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const items = [{value: "Главгая", href: '/main', icon: "anchor"}, {value: "Услуги", href: '/service', icon: "api"}, {value: "Меню", href: '/menu', icon: "android"},]
  return (
    <div className="App">
      <nav>
        <div className="burger-btn" onClick = {() => setMenuActive(!menuActive)}>
          <span/>
        </div>
      </nav>
      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur tempora sunt provident! Vel, molestias cumque. Sit recusandae iste corrupti, consectetur, id rem natus, cumque exercitationem iusto explicabo quasi sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur tempora sunt provident! Vel, molestias cumque. Sit recusandae iste corrupti, consectetur, id rem natus, cumque exercitationem iusto explicabo quasi sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur tempora sunt provident! Vel, molestias cumque. Sit recusandae iste corrupti, consectetur, id rem natus, cumque exercitationem iusto explicabo quasi sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur tempora sunt provident! Vel, molestias cumque. Sit recusandae iste corrupti, consectetur, id rem natus, cumque exercitationem iusto explicabo quasi sequi.</p>
      <Counter />
      <ClassCounter />
      <Inputer />
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={'Burger Menu'} items={items}/>
    </div>
  );
}

export default App;
