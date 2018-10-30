import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger; using for sourcemapping in dev
console.log(`I would pat ${courseValue} for this awsome course!`);
