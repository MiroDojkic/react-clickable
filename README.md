# react-clickable

Clickable React component that enables nesting `button` and `a` elements.

Although this is often considered _bad_ practice in UI design, there are exceptions wherein accessible clickable component comes in handy.
## Dependencies
- `react`
- `react-dom`

## Install
```
npm install --save react-clickable
```

## Usage
```javascript
import Clickable from 'react-clickable';

class Item {
  onSelect () {
    console.log('Clickable clicked!');
  }

  showTooltip (e) {
    e.stopPropagation();

    console.log('Showing tooltip...');
  }

  render () {
    <Clickable
      className="item"
      onClick={this.onSelect}
    >
      <button
        className="tooltip"
        onClick={this.showTooltip} />
        <Icon src="info">
      </button>
    </Clickable>
  }
}
```

## Props
```
type Props = {
  onClick: (e: SyntheticEvent<*>) => void,
  children: React.Node,
  ariaLabel?: string,
  className?: string
}
```
