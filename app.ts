export default class Calc {

    public Display : number;

    constructor(display : number = 0) {
        this.Display = display;
    }

    sum(num : number) : number {
        this.Display += num;
        return this.Display;
    }

}