// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './src/Skills';

document.write(`<h1>Hiya!</h1>`);
document.write('<pre id="test"></pre>');

const test = document.querySelector('#test');

setTimeout(() => {
	test.innerHTML = Skills.base;
}, 0)