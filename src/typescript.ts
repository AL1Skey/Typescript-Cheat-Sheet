//Basic Types
let mynum: number = 9;
let myname:string = "SOTh";
let myexistence:boolean = true;

//Tuple
let person: [number,string,boolean] = [1,'Brad',true];
//Tuple Array
let employee: [number,string][] = [
    [1,"Band"],
    [2,"Bond"],
    [3,"Bend"],
];

//Union
//Union is when you can use two or more different types in one variable
let pid: string|number;
pid = '9';

//Enum
//Enum is nested constant variable
enum Player{
    race = "human",
    gender = "male",
    classRank = "warloc"
};
//Interface
//Make your own custom type
//Type and Interface are same except in declaration on some situation
type User ={
    readonly id:number,//readonly restrict some to modifies thing that flag as readonly
    name:string
};

interface uiPerson {
    name:string,
    id:number,
    level?:number // '?' after variable are make that optional
}

//Object
let playerData:User = {
    id: 1,
    name: "John Barbaro"
};

let warlock = {
    1:"novice",
    2:"advance",
    3:"master"
};

//Type Assertion
//Type Assertion are changing Right value to different type
let cid:any = 1;
let customerId1 = <number> cid;
let customerId2 = (cid+1) as string;

//Function wit Parameter
function adding(a:number,b:number):number {
    return a + b;
}
//Void Function
function log(message:User):void {
    console.log("Transmited Msg: ",message);
}
log(playerData);

//Interface Function
//With type
type Weird = (x: number,y: number) => number;
const subs:Weird = (x: number,y: number): number => x-y;

//With Interface
interface Champ { (a:number,b:number):number };
const mult:Champ = (x: number,y: number): number => x*y;
