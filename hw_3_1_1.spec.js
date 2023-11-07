const calculateBonus = require("./hw_3.1.1");

describe('calculateBonus', () => {
    it('should return 50 if the sum of a and b is greater than 50', () => {
      expect(calculateBonus(30, 21)).toBe(50);
    });
  
    it('should return the sum of a and b if it is less than or equal to 50', () => {
      expect(calculateBonus(20, 29)).toBe(49);
    });
    
    it('should return 50 if the sum of a and b is greater than 50', () => {
        expect(calculateBonus(100, 0)).toBe(50);
      });
    
    it('should return the sum of a and b if it is less than or equal to 50', () => {
        expect(calculateBonus(0, 0)).toBe(0);
      });
    it('should return 50 if the sum of a and b is greater than 50', () => {
        expect(calculateBonus(100, 0)).toBe(51);
      });
  });
