import { expect } from "chai";
import sinon from "sinon";

import { calculate } from "../../exercises/15-callbacks/01-calculate.js";
import { findFirst } from "../../exercises/15-callbacks/03-find-first.js";

import printerFn from "../../exercises/15-callbacks/02-print-names.js";
const { printer, printNames } = printerFn;

describe("10. Callbacks", () => {
  describe("01-calculate", () => {
    it("should use the callback", () => {
      const funcStr = calculate.toString();
      const matches = funcStr.match(/callback/g) || [];
      expect(matches.length).to.be.above(1);
    });
    it("should return the result of a callback invoked on two numbers", () => {
      const multiply = (a, b) => {
        return a * b;
      };
      const result = calculate(5, 10, multiply);
      expect(result).to.equal(50);
    });
  });
  describe("02-print-names", () => {
    it("should call on a callback for each item in an array", () => {
      const callback = sinon.spy();
      printNames(["test", "test1", "test3"], callback);
      expect(callback.calledThrice).to.equal(true);
    });
    it('should `console.log` a name when the callback is the "printer" function', () => {
      expect(printer).to.be.a("function");
      expect(printer.toString()).to.include("console.log");
      printNames(["Jamal", "Matina"], printer);
    });
  });
  describe("03-find-first", () => {
    it("should use the callback", () => {
      const funcStr = findFirst.toString();
      const matches = funcStr.match(/callback/g) || [];
      expect(matches.length).to.be.above(1);
    });
    it("should find the first number in an array that, when passed as an argument into a callback, returns true", () => {
      const isNumberDivisibleByThree = (num) => {
        if (num % 3 === 0) return true;
        else return false;
      };
      const result = findFirst([1, 3, 7, 8, 20], isNumberDivisibleByThree);
      expect(result).to.equal(3);
    });
  });
});
