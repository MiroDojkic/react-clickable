import React from 'react';
import { mount } from 'enzyme';
import StopPropagation from '../src/components/StopPropagation';

describe('StopPropagation component', () => {
  test('stops event propagation to Clickable parent component.', () => {
    const onClick = jest.fn();
    const html = mount(
      <div onClick={onClick}>
        <StopPropagation>
          <div id="child">
            <div id="nestedChild" />
          </div>
        </StopPropagation>
        <div id="clickableChild" />
      </div>
    );

    html.find('#child').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);

    html.find('#nestedChild').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);

    html.find('#clickableChild').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
