//Class in typescript

// Access Modifier
//Public
//Private
//Protected
//readonly
//Getter method
//Setter method

class Person1 {
    name: string;
    private age: number;
    protected gender: string;
    readonly phoneNumber: string;
    constructor() {
        this.name = 'Saurabh';
        this.age = 26;
        this.gender = 'Male';
        this.phoneNumber = '9855'
    }

    getAge() {
        return this.age
    }

    setName(name: string) {
        this.name = name
    }
}

class Manager extends Person1 {
    constructor() {
        super()
        this.gender = "Sigma male";
    }
}


const person1 = new Person1()

console.log(person1.name)
person1.setName('Saurabh k')
console.log(person1.getAge())
console.log(person1)
const manager1 = new Manager();
console.log(manager1)

