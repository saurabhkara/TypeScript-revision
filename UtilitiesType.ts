//Utilities type
import { IAddress } from "./NameSpace"

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