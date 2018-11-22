import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a commnet box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // Looks inside the div
    // and checks to see if the CommentBox is in here
    expect(div.innerHTML).toContain('Comment Box');

    // 因為測試跑完便要拋棄，所以盡可能手動清除記憶體裡面的 virtual DOM
    ReactDOM.unmountComponentAtNode(div); 
})