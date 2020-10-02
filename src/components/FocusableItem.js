import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
    defineName,
    safeCall,
    bem,
    flatStyles,
    menuClass,
    menuItemClass,
    stylePropTypes,
    EventHandlersContext,
    useItemState
} from '../utils';


export const FocusableItem = defineName(React.memo(function FocusableItem({
    className,
    styles,
    disabled,
    index,
    children }) {

    const {
        ref,
        isHovering,
        isDisabled,
        setHover,
        unsetHover
    } = useItemState(disabled, index);
    const { handleClose } = useContext(EventHandlersContext);

    const baseParams = {
        disabled: isDisabled,
        hover: isHovering
    };

    const modifiers = Object.freeze({
        ...baseParams,
        focusable: true
    });

    const renderChildren = safeCall(children, {
        ...baseParams,
        ref,
        closeMenu: handleClose
    });

    return (
        <li className={bem(menuClass, menuItemClass, modifiers)(className)}
            style={flatStyles(styles, modifiers)}
            aria-disabled={isDisabled}
            role="menuitem"
            tabIndex="-1"
            onMouseEnter={setHover}
            onFocus={setHover}
            onBlur={unsetHover}>
            {renderChildren}
        </li>
    );
}), 'FocusableItem');

FocusableItem.propTypes = {
    ...stylePropTypes,
    disabled: PropTypes.bool,
    children: PropTypes.func.isRequired
};