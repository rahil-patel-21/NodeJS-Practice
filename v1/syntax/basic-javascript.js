 function addSum (a,b) {
    return a+b;
}
//console.log(addSum(1,1));

const addSumA = (a,b) => {
return a + b;
}
//console.log(addSumA(1,2));

const showData = (a) => {
    return a;
}
//console.log(showData('DATA'));

const showNewData = a => {
    return a;
}
//console.log(showNewData('NEW DATA'));

const showOtherData = () => {
    return 'ABCD';
}
//console.log(showOtherData());

const showMoreData = () => 1 + 2 + 3;
//console.log(showMoreData());

const names = ['one', 'two', 'three'];
for(let name in names) {
   // console.log(name);
}
for(let name of names) {
   // console.log(name);
}
//console.log(names.map(element => 'Key'+ element));

names.push('ABCD');
// console.log(names);

const newNames = [...names];
//Spread Operator
//console.log(newNames);

const addArray = (...arguments) => arguments;
//Rest Operator
//console.log(addArray(1,2,3));

/////////////////////////////////////////////
/////////////////////////////////////////////

//OBJECT DISTRUCTURING
const mObject = {
    name: 'Rahil Patel'
    };
const getName = ({name}) =>   name;
// console.log(getName(mObject));

const {name} = mObject;
// console.log(name);

const arrayA = [1,2,3];
const [a,b,c] = arrayA;
//console.log(b);

////////////////////////////////////////////////
///////////////////////////////////////////////