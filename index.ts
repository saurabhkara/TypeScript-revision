console.log("Happy Navratri");

let a: string = 'Saurabh';

let ab: number = 51;
const bigIntVar: bigint = 254678355444n;


//Array of other type
const flagArr: boolean[] = [true, false, true];

//tuple

const tuple2: [number, string, boolean] = [5, 'Saurabh', true]

//enum
enum Color {
    primary = 'Red',
    secondary = 'yellow'
}

let primaryColor: Color = Color.primary;

//never

function loop(): never {
    while (true) {
        console.log('never')
    }
}

function throwError(): never {
    throw new Error('Never say, never')
}

//Void

function add(): void {
    console.log(2 + 3)
}