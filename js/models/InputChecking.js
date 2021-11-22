import Calculation from "./Calcultation.js";

export default class InputChecking{
    constructor(inputs){
        
        this.salary= inputs.brut;
        this.sex= inputs.sex;
        this.persons= inputs.persons;
        this.bonus= inputs.bonus;
        // chercher les regex pour tous les champs
        this.salaryChecking();
    }

    salaryChecking(){
        // va vérifier le champ et renvoyer la bonne valeur si true
        if(this.salary){
            const calculation= new Calculation(Number(this.salary.value));
        }else{
            alert("error");
        }
    }

    sexChecking(){

    }

    personsChecking(){

    }

    bonusChecking(){

    }
}