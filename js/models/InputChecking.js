import Calculation from "./Calcultation.js";
import Display from "./Display.js";

export default class InputChecking{
    constructor(inputs){
        
        this.salary= Number(inputs.brut.value.trim());
        this.sex= inputs.sex;
        console.log(this.sex.length);
        this.persons= inputs.persons;
        this.bonus= inputs.bonus;

        this.checkNumber= /^[0-9]+$/;
        // chercher les regex pour tous les champs
        this.salaryChecking();
        this.sexChecking();
    }

    salaryChecking(){
        if(!this.salary || !this.checkNumber.test(this.salary)){
            const error= new Display();
            error.displayError("salary");
            return false;
        }
        else{
            const calculation= new Calculation(this.salary);
            return true;
        }
    }

    sexChecking(){
        for(let i= 0; i< this.sex.length; i++){
            if(this.sex[i].checked){
                // const calculation= new Calculation();

                return true;
            }
        }
        const error= new Display();
        error.displayError("sex");
        return false;

    }

    personsChecking(){

    }

    bonusChecking(){

    }
}