import { IAddress } from './NameSpace';
//Utilities type


//Partial types

const partialAdd: Partial<IAddress> = {
    street: 'UUUY'
}

//Required types

const requiredAddress: Required<IAddress> = {
    street: 'TTTT',
    city: 'Pppppp',
    country: 'India',
    state: 'Bihar'
}

// Readonly Types
//can not update the properties of object, as it is readonly types

const saurabhAddress: Readonly<IAddress> = {
    state: 'Bihar',
    city: 'KKK',
    country: 'India',
    street: 'XSR'
}

// saurabhAddress.city = 'KKKKK'


//Record types
//Record allows you define new type in the form of key value form

type TrecordValue = { age: number }
type recordType = Record<string, TrecordValue>;

const sigmaMan: recordType = {
    Tommy: { age: 52 },
    Doggy: { age: 96 }
}


//Pick types
//Pick let you pick a property from already defined interface or type ;

type pickType = Pick<IAddress, 'city'>

const cityObj: pickType = {
    city: 'LLLL'
}

//Omit types
//Omit let you omit a property from already defined type or interface


type omitType = Omit<IAddress, 'city'>;

const omitCity: omitType = {
    state: 'Bihar',
    country: 'India',
    street: 'IIIIIi'
}