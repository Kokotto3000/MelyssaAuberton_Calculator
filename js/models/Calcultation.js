import Display from "./Display.js";

// en fonction des valaurs envoyées par check, cette class saura quoi ajouter au salaire

export default class Calculation{
    constructor(salary){
        this.salary= salary;
        this.sum();
    }

    sum(){
        const result= this.salary + 1000;
        const resultDisplay= new Display(result);
    }
}