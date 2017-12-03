// @flow
import * as React from 'react';

type Props = {
  onClick: (e: SyntheticEvent<*>) => void,
  children: React.Node,
  ariaLabel?: string,
  className?: string
};

type OnKeyDown = (SyntheticEvent<*>) => void;

export default class Clickable extends React.Component<Props, void> {
  static defaultProps = {
    ariaLabel: '',
    className: ''
  };

  onKeyDown: OnKeyDown = e => {
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
