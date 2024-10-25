// Decorators


function simpleClassDecorator(constructor: Function, metadata: any) {
    console.log('Simple decorator called');
}

@simpleClassDecorator
class MyClass {
    constructor() {
        console.log("My class")
    }
}

const class1 = new MyClass();
