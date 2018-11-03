import { once } from './once';

describe('OnceExperiment', () => {
    // Arrange
    const squeakClass = {
        squeak: () => console.log('squeak')
    };
    beforeEach(() => {
        spyOn(squeakClass, 'squeak');
    });

    it('When squeakFn is called normally, it always triggers.', () => {
        // Act
        squeakClass.squeak();
        squeakClass.squeak();
        squeakClass.squeak();

        // Assert
        expect(squeakClass.squeak).toHaveBeenCalledTimes(3);
    });

    it('When squeakFn is called via squeakOnceFn, squeakFn only triggers once', () => {
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