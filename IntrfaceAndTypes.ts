//Implicit infered type
const inferredNumber = 25;

//types 
type TUser = {
    name: string
}

const User: TUser = {
    name: 'Saurabh'
}


//intersection operation on types

type TCar = {
    make: string;
    model: string;
}

type TAdvanceCar = TCar & {
    isElectric: true
}

const AdvanceCar: TAdvanceCar = {
    make: 'Tesla',
    model: 'T',
    isElectric: true
}

// Union opersion - or

type TPerson = {
    name: string
} | string;

const Person: TPerson = 'Saurabh';



//Interface

//Can be extensionsiable 
interface IAnimal {
    livingBeing: true
}

interface IHuman extends IAnimal {
    homosapian: boolean
}

const Human: IHuman = {
    livingBeing: true,
    homosapian: true
}

//Declaration merging

interface ILaptop {
    company: string
}

interface ILaptop {
    model: string
}

const Laptop: ILaptop = {
    company: 'apple',
    model: 'm3'
}


// Type assertion

const anyOtherVar: any = 'Saurabh';
const stringLen: number = (anyOtherVar as string).length;
const stringLen2: number = (<string>anyOtherVar).length;