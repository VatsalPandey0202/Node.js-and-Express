// Use  npm install lodash and npm install --save-dev @types/lodash 
import _ from 'lodash';

const items : Array<any> = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)