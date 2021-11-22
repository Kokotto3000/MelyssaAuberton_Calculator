import { RESULT } from "./globals.js";

export default class Display{
    constructor(result){
        this.result= result;
        this.displayResult();
    }

    // il y aura aussi les display errors

    displayResult(){
        RESULT.innerHTML= this.result;
    }
}