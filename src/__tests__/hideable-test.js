jest.unmock('../hideable');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Hideable from '../hideable';

describe('Hideable', () => {
  it('displays its contents by default', () => {
    const hideable = ReactTestUtils.renderIntoDocument(
      <div><Hideable>Content</Hideable></div>
    );
    const hideableNode = ReactDOM.findDOMNode(hideable);
    expect(hideableNode.textContent).toEqual('Content');
  });

  it('hides its contents if isHidden is set to true', () => {
    const hideable= ReactTestUtils.renderIntoDocument(
      <div><Hideable isHidden={true}>Content</Hideable></div>
    );
    const hideableNode = ReactDOM.findDOMNode(hideable);
    expect(hideableNode.textContent).toEqual('');
  });
});
