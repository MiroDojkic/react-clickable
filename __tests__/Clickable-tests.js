import React from 'react';
import { mount } from 'enzyme';
import Clickable from '../src/components/Clickable';

describe('Clickable component', () => {
  test('is clickable.', () => {
    const onClick = jest.fn();
    const clickable = mount(<Clickable onClick={onClick} />);

    clickable.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('onClick is called when child is clicked.', () => {
    const onClick = jest.fn();
    const html = mount(
      <Clickable onClick={onClick}>
        <div id="child" />
      </Clickable>
    );

    html.find('#child').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
