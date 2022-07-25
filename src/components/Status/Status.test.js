import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Status from './Status';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test arrayCount', () => {
  act(() => {
    render(<Status />, container);
  });
  expect(container.querySelector('#attendanceCount').textContent).toBe('2회');
});

test('test arraySum', () => {
  act(() => {
    render(<Status />, container);
  });
  expect(container.querySelector('#attendanceSum').textContent).toBe('10');
});
