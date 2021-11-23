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

    displayError(type){
        switch(type){
            case "salary":
                console.log("entrez un nombre valide s'il vous plait");
                break;
            case "sex":
                console.log("choisissez votre sexe s'il vous plait");
            default :
                console.log("error");
        }
    }
}