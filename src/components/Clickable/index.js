// @flow
import * as React from 'react';
import cc from 'classcat';
import s from './styles.css';

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
    const { children, ariaLabel, className, ...rest } = this.props;

    return (
      <div
        className={cc([s.clickable, className])}
        tabIndex="0"
        role="button"
        aria-label={ariaLabel}
        onKeyDown={this.onKeyDown}
        {...rest}
      >
        {children}
      </div>
    );
  }
}
