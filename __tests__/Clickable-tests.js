import React from 'react';
import { mount } from 'enzyme';
import Clickable from '../src/components/Clickable';

describe('Clickable component', () => {
  test('is clickable.', () => {
    const onClick = jest.fn();
    const clickable = mount(
      <Clickable onClick={onClick} />
    );

    clickable.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('onClick is called when child is clicked.', () => {
    const onClick = jest.fn();
    const clickable = mount(
      <Clickable onClick={onClick}>
        <div id="child" />
      </Clickable>
    );

    clickable.find('#child').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('onClick is called on keyDown "Enter"', () => {
    const onClick = jest.fn();
    const clickable = mount(
      <Clickable onClick={onClick}>
        <div id="child" />
      </Clickable>
    );

    clickable.find('#child').simulate('keyDown', {
      keyCode: 13,
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('onClick is called on keyDown "Space"', () => {
    const onClick = jest.fn();
    const clickable = mount(
      <Clickable onClick={onClick}>
        <div id="child" />
      </Clickable>
    );

    clickable.find('#child').simulate('keyDown', {
      keyCode: 32,
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
