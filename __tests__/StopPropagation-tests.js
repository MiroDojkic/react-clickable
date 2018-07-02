import React from 'react';
import { mount } from 'enzyme';
import StopPropagation from '../src/components/StopPropagation';

describe('StopPropagation component', () => {
  test('stops "click" event propagation to Clickable parent component.', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <div onClick={onClick}>
        <StopPropagation>
          <div>
            <div id="nestedChild" />
          </div>
        </StopPropagation>
        <div id="clickableChild" />
      </div>
    );

    wrapper.find('#nestedChild').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);

    wrapper.find('#clickableChild').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('stops "onKeyDown" event propagation to Clickable parent component.', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <div onClick={onClick}>
        <StopPropagation>
          <div>
            <div id="nestedChild" />
          </div>
        </StopPropagation>
        <div id="clickableChild" />
      </div>
    );

    const nestedChild = wrapper.find('#nestedChild');

    // Test both "Enter" and "Space bar" keyDown events
    const enterEventStopPropagation = jest.fn();
    nestedChild.simulate('keyDown', {
      keyCode: 13,
      stopPropagation: enterEventStopPropagation,
    });
    expect(enterEventStopPropagation).toHaveBeenCalledTimes(1);

    const spaceEventStopPropagation = jest.fn();
    nestedChild.simulate('keyDown', {
      keyCode: 32,
      stopPropagation: spaceEventStopPropagation,
    });
    expect(spaceEventStopPropagation).toHaveBeenCalledTimes(1);

    const clickableEventStopPropagation = jest.fn();
    wrapper.find('#clickableChild').simulate('keyDown', {
      keyCode: 13,
      stopPropagation: clickableEventStopPropagation,
    });
    expect(clickableEventStopPropagation).toHaveBeenCalledTimes(0);
  });
});
