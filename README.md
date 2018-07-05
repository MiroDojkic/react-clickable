# react-clickable

Clickable and [Accessible (a11y)](https://a11yproject.com/) React components with zero configuration. Nesting supported.

## Components:

* `Clickable` - accessible clickable component
* `StopPropagation` - stops event propagation to make a child of `Clickable` unclickable

:warning: Although this is considered _bad_ practice in UI design, there are
exceptions wherein accessible clickable component comes in handy. Nevertheless,
please reconsider if this is the right way to implement what you want.

## Install

```
npm install --save react-clickable
```

## Usage

:heavy_exclamation_mark: When nesting interactive elements, make sure to stop
event propagation.

```javascript
import React, {Component} from 'react';
import { Clickable, StopPropagation } from 'react-clickable';

class Item extends Component {
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

Property | Type | Description | Default
----- | ----- | ----- | -----
**onClick** | *Function* | Event handler for `Clickable`'s' `onClick` event | -
**onMouseDown** | *Function* | Event handler for `Clickable`'s' `onmouseDown` event | -
**onKeyDown** | *Function* | Custom event handler called on `Enter` or `Space` key press, when `Clickable` component is focused. When not provided, the first callback available among `props.onClick` and  `props.onMouseDown` will be called.| -
**ariaLabel** | *String* | Accessible name for `Clickable` component | -
**role** | *String* | [ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) assigned to rendered div | `"button"`
**tabIndex** | *Number* | tabIndex assigned to rendered div | `0`

At least one among **onClick** or **onMouseDown** callback must be **mandatorily declared**.

**Any other property** will be forwarded to the rendered div.

## StopPropagation props

Property | Type | Description | Default
----- | ----- | ----- | -----
**children** | *Node* | Elements rendered inside `StopPropagation`. | -
**className** | *String* | CSS class for rendered div | -

## Contribute

If you find something missing or not working properly feel free to contribute or
open an issue.

## License

MIT
