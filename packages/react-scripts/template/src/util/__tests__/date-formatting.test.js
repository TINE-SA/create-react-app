import dateFormatting from '../date-formatting';

// First level describe matches file name being tested
describe('date-formatting', () => {
  // Second-level describe matches function/method being tested
  describe('getDisplayDateFromDateObject', () => {
    // Describe what to expect from the function/method being
    // tested. Limit to one expect expression per it block
    it('renders a date Norwegian style', () => {
      // Setup the data to pass to the function/method to be
      // tested
      const testDate = new Date('2018-01-01T00:00:00+00:00');

      // Declare what you expect the function/method to produce
      const expectedValue = '01.01.2018';

      // Call the function/method with the test data, and get
      // the actual value to test against back
      const actualValue = dateFormatting.getDisplayDateFromDateObject(testDate);

      // Assert that the actualValue is equal to the expected value
      expect(actualValue).toBe(expectedValue);
    });
  });
});
