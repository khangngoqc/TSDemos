export let appName = "Calculator";

export function add(a:number, b:number){
    return a+b;
}

export class Formatter{
    constructor(){

    }

    static toUpper(str:string){
        return str.toUpperCase();
    }
}