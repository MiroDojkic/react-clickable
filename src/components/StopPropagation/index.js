// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
  className?: string
};

export default class StopPropagation extends React.Component<Props> {
  onClick = (event: Event): void => {
    event.stopPropagation();
  };

  onKeyDown: OnKeyDown = event => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      event.stopPropagation();
    }
  };

  render() {
    return (
      <div
        {...this.props}
        style={{ cursor: 'default' }}
        role="button"
        tabIndex="-1"
        onKeyDown={this.onKeyDown}
        onClick={this.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
