//from ES6 we were introduced to class earlier untill ES5 we use to use object constructor

class person {
    constructor(firstname,lastname,age)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    calcyear(){
        this.yearofbirth = 2020 - this.age;
    }
}

var kartik = new person("kartik","saxena",19);

console.log(kartik);
console.log(kartik.lastname);
console.log(kartik.yearofbirth);
kartik.calcyear();
console.log(kartik.yearofbirth);