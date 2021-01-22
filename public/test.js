'use strict';

var user = {
    name: 'Ryosuke',
    age: 26,
    location: 'Japan'
};

var count = 0;
function addCount() {
    count++;
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'button',
        { onClick: addCount },
        '+1'
    ),
    React.createElement(
        'p',
        null,
        count
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
