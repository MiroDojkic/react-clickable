import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Clickable from '../src/components/Clickable';
import StopPropagation from '../src/components/StopPropagation';

describe('Clickable component', () => {
  test('is clickable.', () => {
    const onClick = sinon.spy();
    const clickable = shallow(<Clickable onClick={onClick} />);

    clickable.simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });

  test('onClick is called when child is clicked.', () => {
    const onClick = sinon.spy();
    const html = mount(
      <Clickable onClick={onClick}>
        <div id="child" />
      </Clickable>
    );

    html.find('#child').simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});

describe('StopPropagation component', () => {
  test('stops event propagation to Clickable parent component.', () => {
    const onClick = sinon.spy();
    const html = mount(
      <Clickable onClick={onClick}>
        <StopPropagation>
          <div id="child">
            <div id="nestedChild" />
          </div>
        </StopPropagation>
        <div id="clickableChild" />
      </Clickable>
    );

    html.find('#child').simulate('click');
    expect(onClick).toHaveProperty('callCount', 0);

    html.find('#nestedChild').simulate('click');
    expect(onClick).toHaveProperty('callCount', 0);

    html.find('#clickableChild').simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
});
