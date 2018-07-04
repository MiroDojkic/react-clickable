import React from 'react';
import { mount } from 'enzyme';
import Clickable from '../src/components/Clickable';

const onClick = jest.fn();
const getWrapper = (customProps = {}) => {
  return mount(
    <Clickable
      onClick={onClick}
      {...customProps}
    >
      <div id="child" />
    </Clickable>
  );
}

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Clickable component', () => {
  test('is clickable.', () => {
    const wrapper = getWrapper();

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('onClick is called when child is clicked.', () => {
    const wrapper = getWrapper();

    wrapper.find('#child').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('onClick is called on keyDown "Enter"', () => {
    const wrapper = getWrapper();

    wrapper.find('#child').simulate('keyDown', {
      keyCode: 13,
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('onClick is called on keyDown "Space"', () => {
    const wrapper = getWrapper();

    wrapper.find('#child').simulate('keyDown', {
      keyCode: 32,
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe('rendered div', () => {
    test('should render default ARIA attributes "role" and "tabIndex"', () => {
      const wrapper = getWrapper();
      const div = wrapper.find('div').first();

      expect(div).toHaveProp('role', 'button');
      expect(div).toHaveProp('tabIndex', 0);
    });

    test('should render custom ARIA attributes', () => {
      const wrapper = getWrapper({
        ariaLabel: 'customLabel',
        role: 'customRole',
        tabIndex: 101,
      });
      const div = wrapper.find('div').first();

      expect(div).toHaveProp('aria-label', 'customLabel');
      expect(div).toHaveProp('role', 'customRole');
      expect(div).toHaveProp('tabIndex', 101);
    });

    test('should render any custom attribute/style', () => {
      const wrapper = getWrapper({
        foo: 'bar',
        style: {
          color: 'green',
        }
      });
      const div = wrapper.find('div').first();

      expect(div).toHaveProp('foo', 'bar');
      expect(div).toHaveProp('style', {color: 'green'});
    });
  })
});
