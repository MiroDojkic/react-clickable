# react-clickable

Clickable and [Accessible (a11y)](https://a11yproject.com/) React components with zero configuration. Nesting supported.
Check out the [demo](https://stackblitz.com/edit/react-clickable-demo?file=Item.js).

## Components:

- `Clickable` - accessible clickable component
- `StopPropagation` - stops event propagation to make a child of `Clickable` unclickable

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

| Property        | Type       | Description                                                                                                                                                                                                       | Default    |
| --------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **onClick**     | _Function_ | Event handler for `Clickable`'s' `onClick` event                                                                                                                                                                  | -          |
| **onMouseDown** | _Function_ | Event handler for `Clickable`'s' `onmouseDown` event                                                                                                                                                              | -          |
| **onKeyDown**   | _Function_ | Custom event handler called on `Enter` or `Space` key press, when `Clickable` component is focused. When not provided, the first callback available among `props.onClick` and `props.onMouseDown` will be called. | -          |
| **ariaLabel**   | _String_   | Accessible name for `Clickable` component                                                                                                                                                                         | -          |
| **role**        | _String_   | [ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) assigned to rendered div                                                                                             | `"button"` |
| **tabIndex**    | _Number_   | tabIndex assigned to rendered div                                                                                                                                                                                 | `0`        |

At least one among **onClick** or **onMouseDown** callback must be **mandatorily declared**.

**Any other property** will be forwarded to the rendered div.

## StopPropagation props

| Property      | Type     | Description                                 | Default |
| ------------- | -------- | ------------------------------------------- | ------- |
| **children**  | _Node_   | Elements rendered inside `StopPropagation`. | -       |
| **className** | _String_ | CSS class for rendered div                  | -       |

## Contribute

If you find something missing or not working properly feel free to contribute or
open an issue.

## License

MIT

## Contributors

Thanks to you all ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/9119913?v=4" width="100px;"/><br /><sub><b>Miro Dojkic</b></sub>](https://github.com/MiroDojkic)<br />[💻](https://github.com/MiroDojkic/react-clickable/commits?author=MiroDojkic "Code") [💬](#question-MiroDojkic "Answering Questions") [📖](https://github.com/MiroDojkic/react-clickable/commits?author=MiroDojkic "Documentation") [💡](#example-MiroDojkic "Examples") [🤔](#ideas-MiroDojkic "Ideas, Planning, & Feedback") [🚇](#infra-MiroDojkic "Infrastructure (Hosting, Build-Tools, etc)") [👀](#review-MiroDojkic "Reviewed Pull Requests") [⚠️](https://github.com/MiroDojkic/react-clickable/commits?author=MiroDojkic "Tests") | [<img src="https://avatars3.githubusercontent.com/u/4573549?v=4" width="100px;"/><br /><sub><b>Andrea Carraro</b></sub>](http://www.andreacarraro.it)<br />[💻](https://github.com/MiroDojkic/react-clickable/commits?author=toomuchdesign "Code") [📖](https://github.com/MiroDojkic/react-clickable/commits?author=toomuchdesign "Documentation") [🤔](#ideas-toomuchdesign "Ideas, Planning, & Feedback") [🚇](#infra-toomuchdesign "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/MiroDojkic/react-clickable/commits?author=toomuchdesign "Tests") |
| :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->
