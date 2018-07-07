import React from 'react';
import { mount } from 'enzyme';
import StopPropagation from '../src/components/StopPropagation';

const onClick = jest.fn();
const getWrapper = (customProps = {}) => {
  return mount(
    <div onClick={onClick}>
      <StopPropagation {...customProps}>
        <div>
          <div id="nestedChild" />
        </div>
      </StopPropagation>
      <div id="clickableChild" />
    </div>
  );
};

beforeEach(() => {
  jest.resetAllMocks();
});

// @NOTE: enzyme emulates "event.stopPropagation" bubbling only when "simulate('click')"
describe('StopPropagation component', () => {
  test('stops "onClick" event propagation', () => {
    const wrapper = getWrapper();

    wrapper.find('#nestedChild').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);

    wrapper.find('#clickableChild').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('stops "onMouseDown" event propagation', () => {
    const wrapper = getWrapper();
    const eventStopPropagation = jest.fn();

    wrapper.find('#nestedChild').simulate('mouseDown', {
      stopPropagation: eventStopPropagation,
    });
    expect(eventStopPropagation).toHaveBeenCalledTimes(1);

    wrapper.find('#clickableChild').simulate('mouseDown', {
      stopPropagation: eventStopPropagation,
    });
    expect(eventStopPropagation).toHaveBeenCalledTimes(1);
  });

  test('stops "onKeyDown" event propagation', () => {
    const wrapper = getWrapper();
    const nestedChild = wrapper.find('#nestedChild');

    // Test stoppage of "Enter" and "Space bar" keyDown events
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

    // Make sure propagation works for other children
    const clickableEventStopPropagation = jest.fn();
    wrapper.find('#clickableChild').simulate('keyDown', {
      keyCode: 13,
      stopPropagation: clickableEventStopPropagation,
    });
    expect(clickableEventStopPropagation).toHaveBeenCalledTimes(0);
  });
});
