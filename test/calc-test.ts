import Calc from "../calc";

describe('test', () => {
    it('should work', () => {
        true.should.be.true;
    });
});

describe('calc', () => {
    it('Calc object should be defined', () => {
       Calc.should.be.not.undefined;
    });

    it('calc instance should be defined', () => {
        var calc = new Calc();
        calc.should.be.not.undefined;
    });

    it('sum 1 should return 1', () => {
        var calc = new Calc();
        calc.sum(1).should.be.equal(1);
    });
});