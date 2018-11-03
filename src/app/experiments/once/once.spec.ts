import { once } from './once';

describe('OnceExperiment', () => {
    // Arrange
    const squeakClass = {
        squeak: () => console.log('squeak')
    };
    beforeEach(() => {
        spyOn(squeakClass, 'squeak');
    });

    it('Functions trigger n times they are called', () => {
        // Act
        squeakClass.squeak();
        squeakClass.squeak();
        squeakClass.squeak();

        // Assert
        expect(squeakClass.squeak).toHaveBeenCalledTimes(3);
    });

    it('Functions called via onceFn triggers only once', () => {
        // Arrange
        const squeakOnce = once(squeakClass.squeak);

        // Act
        squeakOnce();
        squeakOnce();
        squeakOnce();

        // Assert
        expect(squeakClass.squeak).toHaveBeenCalledTimes(1);
    });
});