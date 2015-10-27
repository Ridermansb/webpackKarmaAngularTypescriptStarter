export class Sum {
    constructor(public num : number = 0) {
        this.num = num;
    }

    result(numToSum : number ) : number {
        return numToSum + this.num;
    }

}