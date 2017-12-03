# react-clickable

React components that enable nesting interactive elements within `clickable`
elements.

## Components:

* `Clickable` - accessible clickable component
* `StopPropagation` - component that stops event propagation to make a child of
  `Clickable` unclickable

:warning: Although this is considered _bad_ practice in UI design, there are
exceptions wherein accessible clickable component comes in handy. Nevertheless,
please reconsider if this is the right way to implement what you want.

## Dependencies

* `react`
* `react-dom`

## Install

```
npm install --save react-clickable
```

## Usage

```javascript
import * as React from 'react';
import { Clickable, StopPropagation } from 'react-clickable';

class Item extends React.Component{
  state = { showModal: false };

  onSelect () {
    console.log('Item selected!');
  }

  showTooltip (e) {
    e.stopPropagation();

    console.log('Showing tooltip...');
  }

  render () {
    <Clickable onClick={this.onSelect}>
      <StopPropagation>
        <SomeModal show={this.state.showModal} />
      </StopPropagation>
      <div>Some clickable content!</div>
      <button
        onClick={this.showTooltip} />
      </button>
    </Clickable>
  }
}
```

## Clickable props

### onClick

> `event => void`

Pass an event handler that will be called on `Clickable` click

### onKeyDown

> `event => void` | `default: props.onClick`

Pass an event handler that will be called on key press when `Clickable` is focused

### children

> `React.Node`

Children rendered inside `Clickable`

### ariaLabel (optional)

> `string`

accessible name for `Clickable` component

### className (optional)

> `string`

CSS class for `Clickable` element


## StopPropagation props

### children

> `React.Node`

Children rendered inside `StopPropagation`.

### className (optional)

> `string`

CSS class for `StopPropagation` element
