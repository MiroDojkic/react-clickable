// @flow
import React, { Component } from 'react';
import type { Node } from 'react';

type WithOnClick = {
  onClick: (e?: SyntheticEvent<>) => void,
  onMouseDown?: (e?: SyntheticEvent<>) => void,
};

type WithOnMouseDown = {
  onClick?: (e?: SyntheticEvent<>) => void,
  onMouseDown: (e?: SyntheticEvent<>) => void,
};

type AtLeastOneMouseEventHandler = WithOnClick | WithOnMouseDown;

type OtherProps = {
  ariaLabel?: string,
  children: Node,
  onKeyDown: (e?: SyntheticKeyboardEvent<>) => void,
  role?: string,
  tabIndex?: number,
};

type Props = AtLeastOneMouseEventHandler & OtherProps;

const defaultStyle = { cursor: 'pointer' };

export default class Clickable extends Component<Props, void> {
  static defaultProps = {
    role: 'button',
    tabIndex: 0,
  };

  onKeyDown = (e: SyntheticKeyboardEvent<>): void => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      const eventHandler =
        this.props.onKeyDown || this.props.onClick || this.props.onMouseDown;

      if (eventHandler) {
        eventHandler(e);
      }
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
        onKeyDown={this.onKeyDown}
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
