// @flow
import React, {Component} from 'react';
import type {Node} from 'react';

type Props = {
  children: Node,
  className?: string
};

const defaultStyle = { cursor: 'pointer' };

export default class StopPropagation extends Component<Props> {
  onClick = (e: Event): void => {
    e.stopPropagation();
  };

  onKeyDown = (e: Event): void => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.stopPropagation();
    }
  };

  render() {
    const { children, className } = this.props;
    return (
      <div
        className={className}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        style={defaultStyle}
        tabIndex="-1"
      >
        {children}
      </div>
    );
  }
}
