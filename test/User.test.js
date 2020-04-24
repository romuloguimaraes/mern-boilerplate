import React from 'react';
import ReactDOM from 'react-dom';
import { User } from '../client/User';

describe('User', () => {
  it('renders the user first name', () => {
    const user = { name: 'Tony' };
    const component = <User user={user} />;
    const container = document.createElement('div');

    ReactDOM.render(component, container);

    expect(container.textContent).toMatch('Tony');
  });
});
