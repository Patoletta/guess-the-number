import { randomNumber } from "../../../utils/helpers/random.helpers";

describe('Test Random helpers', () => {
    it('is Random a number?', () => {
        let random = randomNumber();
        expect(random).toBeGreaterThanOrEqual(1);
        expect(random).toBeLessThan(100);
    });
});