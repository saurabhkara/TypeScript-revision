//Generics

//TypeScript Generics is a tool which provides a way to create reusable components. 


//function
function indentity<T>(arg: T): T {
    return arg
}

indentity<number>(5)

//class

class Student<T> {
    name: T;
    constructor(name: T) {
        this.name = name
    }
}

const student = new Student<string>('Saurabh')


//interface 

interface IObject<T, N> {
    name: T,
    age: N
}

const StudentObj: IObject<string, number> = {
    name: 'Saurya',
    age: 50
}



//type

type TTeacher<T> = {
    name: T,
    school: T
}

const teacher: TTeacher<string> = {
    name: 'Saurabh',
    school: 'PCS'
}


//interview Question
//Create Stack using Generics

