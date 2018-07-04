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

:heavy_exclamation_mark: When nesting interactive elements, make sure to stop
event propagation.

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

  showModal() {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  render () {
    <Clickable onClick={this.onSelect}>
      <StopPropagation>
        <SomeModal
          show={this.state.showModal}
          onClick={this.showModal}
        />
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

### children

> `React.Node`

Children rendered inside `Clickable`

### onKeyDown (optional)

> `event => void` | `default: props.onClick`

Pass an event handler that will be called on `Enter` or `Space` key press, when
`Clickable` is focused

### ariaLabel (optional)

> `string`

accessible name for `Clickable` component

### role (optional)

> `string` | `default: "button"`

[ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) for rendered div

### tabIndex (optional)

> `number` | `default: 0`


## StopPropagation props

### children

> `React.Node`

Children rendered inside `StopPropagation`.

### className (optional)

> `string`

CSS class for `StopPropagation` element

## Contribute

If you find something missing or not working properly feel free to contribute or
open an issue.

## License

MIT
