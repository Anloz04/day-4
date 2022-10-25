var obj1 = {name : "Person1", age: 5};
var obj2 = {age: 5, name: "Person1"}


var isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}

console.log("json is equals: "+ isEqualsJson(obj1,obj2)); 