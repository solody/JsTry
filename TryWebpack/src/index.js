import _ from 'lodash';
import './style.css';
import imageUrl from './568x320.jpg';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', imageUrl], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
