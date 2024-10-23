//Name Space
//Name Space is way to orgranise code into logical container similar to modules in other programming language
// to avoid naming collisions

namespace MyNameSpace {
    export interface Person {
        name: string;
        age: number;
    }

    export function personDetail(person: Person) {
        console.log(`Name : ${person.name}`);
    }
}

const person: MyNameSpace.Person = { name: 'Saurabh', age: 26 };

MyNameSpace.personDetail(person);


//TypeGuard
// typeguard allow you to create more specific type  check within code block


function typeGuardExample<T>(name: T) {
    if (typeof name === 'string') {
        console.log(name)
    } else {
        return
    }
}

typeGuardExample('saurabh')