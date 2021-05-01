import React, { useState } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuGroup,
    MenuRadioGroup,
    MenuHeader,
    MenuDivider,
    SubMenu,
    ControlledMenu
} from '@szhsin/react-menu';
import { bem } from '../utils';

const Test1 = () => {
    const [take1, setTake1] = useState(false);
    const [take2, setTake2] = useState(false);
    const [enableSubmenu, setEnableSubmenu] = useState(false);
    return (
        <div className={bem('test-case')}>
            <label>
                Group 1
                <input type="checkbox" checked={take1}
                    onChange={({ target }) => setTake1(target.checked)} />
            </label>
            <label>
                Group 2
                <input type="checkbox" checked={take2}
                    onChange={({ target }) => setTake2(target.checked)} />
            </label>
            <Menu menuButton={<MenuButton>Overflow</MenuButton>} align="end"
                overflow="auto" position="anchor" keepMounted={true} animation={false}>
                <MenuItem disabled>Disabled 1</MenuItem>
                <MenuItem>Two</MenuItem>
                <MenuGroup styles={{ border: '3px solid' }} takeOverflow={take1}>
                    <MenuHeader>Group</MenuHeader>
                    {new Array(2).fill(0).map(
                        (_, i) => <MenuItem key={i}>Item {i + 1}</MenuItem>)}
                    <MenuDivider />

                    <MenuRadioGroup value="green">
                        <MenuItem value="red">Red</MenuItem>
                        <MenuItem value="green">Green</MenuItem>
                        <MenuItem value="blue" disabled>Blue</MenuItem>
                    </MenuRadioGroup>
                    <MenuDivider />


                    <MenuGroup styles={{ border: '4px solid green' }} takeOverflow={take2}>
                        <MenuHeader>Group</MenuHeader>
                        <MenuItem disabled>disabled</MenuItem>
                        <MenuItem checked type="checkbox">Checked</MenuItem>
                        <MenuDivider />
                        {!enableSubmenu && new Array(15).fill(0).map(
                            (_, i) => <MenuItem key={i}>Item {i + 1}</MenuItem>)}
                    </MenuGroup>

                    <SubMenu disabled={!enableSubmenu} label="Submenu" overflow="auto"
                        position="initial" align="end">
                        <MenuHeader>Submenu</MenuHeader>
                        <MenuItem>First</MenuItem>
                        <MenuDivider />
                        <MenuGroup takeOverflow>
                            {new Array(35).fill(0).map(
                                (_, i) => <MenuItem key={i}>Item {i + 1}</MenuItem>)}
                        </MenuGroup>
                        <MenuDivider />
                        <MenuItem>Last</MenuItem>
                    </SubMenu>
                </MenuGroup>
                <MenuItem>Last</MenuItem>
            </Menu>

            <label>
                Submenu
                <input type="checkbox" checked={enableSubmenu}
                    onChange={({ target }) => setEnableSubmenu(target.checked)} />
            </label>
        </div>
    );
}

const Test2 = () => {
    const [isOpen, setOpen] = useState(false);
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [isLeft, setLeft] = useState(false);

    return (
        <div className={bem('test-case')}
            onContextMenu={e => {
                e.preventDefault();
                setAnchorPoint({ x: e.clientX, y: e.clientY });
                setOpen(true);
            }}>
            <div className={bem('test-case', 'hover')}
                onMouseEnter={() => setLeft(d => !d)}>
                Direction
            </div>

            context menu
            <ControlledMenu anchorPoint={anchorPoint} isOpen={isOpen}
                onClose={() => setOpen(false)} animation={true}
                overflow="auto">
                <MenuItem>TOP</MenuItem>
                <MenuGroup takeOverflow className="a1">
                    {new Array(40).fill(0).map(
                        (_, i) => <MenuItem key={i}>Item {i + 1}</MenuItem>)}
                </MenuGroup>
            </ControlledMenu>

            <Menu menuButton={<MenuButton>Overflow</MenuButton>}
                overflow="auto" position="initial" animation={true} align="end"
                direction={isLeft ? 'left' : 'right'}>
                {new Array(40).fill(0).map(
                    (_, i) => <MenuItem key={i}>Item {i + 1}</MenuItem>)}
            </Menu>
        </div >
    );
}

const Overflow = () => {
    return (
        <>
            <Test1 />
            <Test2 />
        </>
    );
}

export default Overflow;
