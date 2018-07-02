// @flow
import React, {Component} from 'react';
import type {Node} from 'react';

type Props = {
  onClick: (e: SyntheticEvent<*>) => void,
  children: Node,
  ariaLabel?: string,
};

export default class Clickable extends Component<Props, void> {
  static defaultProps = {
    ariaLabel: '',
  };

  onKeyDown = (e: Event): void => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      this.props.onClick(e);
    }
  };

  render() {
    const { children, ariaLabel, onKeyDown, ...rest } = this.props;

    return (
      <div
        {...rest}
        style={{ cursor: 'pointer' }}
        tabIndex="0"
        role="button"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown ? onKeyDown : this.onKeyDown}
      >
        {children}
      </div>
    );
  }
}
