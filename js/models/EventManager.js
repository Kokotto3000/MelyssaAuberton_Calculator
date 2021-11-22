import InputChecking from "./InputChecking.js";

export default class EventManager{
    constructor(form){
        this.form= form;
        this.inputs= this.form.elements;
        
    }

    init(){
        this.form.addEventListener("submit", e=> {
            e.preventDefault();
            const checking= new InputChecking(this.inputs);
        });
    }

    // event on change après submit qui remet à zero ?
}