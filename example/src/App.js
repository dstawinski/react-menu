import React from 'react'

import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'

const App = () => {
  return (
    <div className="container">
      <div><textarea rows="5" /></div>

      <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
        <MenuItem>item 1</MenuItem>
        <MenuItem onClick={e => console.log('item 2 clicked')}>item 2</MenuItem>
        <SubMenu label="item 3">
          <MenuItem>item 3.1</MenuItem>
          <SubMenu label="item 3.2">
            <MenuItem>item 3.2.1</MenuItem>
            <MenuItem>item 3.2.2</MenuItem>
            <MenuItem>item 3.2.3</MenuItem>
          </SubMenu>
          <MenuItem>item 3.3</MenuItem>
        </SubMenu>
        <MenuItem>item 4</MenuItem>
      </Menu>

      <div><input /></div>

      <Menu menuButton={<button>Customisable button</button>}>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
        <MenuItem>item 3</MenuItem>
      </Menu>

      <button onClick={e => console.log('Button clicked')}>Click me</button>

    </div>
  );
}

export default App
