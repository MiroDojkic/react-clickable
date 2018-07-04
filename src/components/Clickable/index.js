// @flow
import React, {Component} from 'react';
import type {Node} from 'react';

type Props = {
  ariaLabel?: string,
  children: Node,
  onClick: (e: SyntheticEvent<*>) => void,
  role?: string,
  tabIndex?: number,
};

const defaultStyle = { cursor: 'pointer' };

export default class Clickable extends Component<Props, void> {
  static defaultProps = {
    role: 'button',
    tabIndex: 0,
  };

  onKeyDown = (e: Event): void => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      this.props.onClick(e);
    }
  };

  render() {
    const {
      ariaLabel,
      children,
      onKeyDown,
      role,
      tabIndex,
      ...rest
    } = this.props;

    return (
      <div
        aria-label={ariaLabel}
        onKeyDown={onKeyDown ? onKeyDown : this.onKeyDown}
        style={defaultStyle}
        role={role}
        tabIndex={tabIndex}
        {...rest}
      >
        {children}
      </div>
    );
  }
}
