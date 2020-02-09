import {sumValues} from '../sumValues';

describe('sumValues' , () => {
  test('should return 15 from sum of 1,2,3,4,5', () => {
    //act
    const sum = sumValues([1,2,3,4,5]);
    //assert
    expect(sum).toEqual(15);
  })

  test('should return 15 when adding 1, 2, "3", 4, 5', () => {
    // act
    const sum = sumValues([1,2,'3',4,5]);
    // assert
    expect(sum).toEqual(15);
  })

  test('should return 10 when adding 1, 2, 3, 4, "5abc"', () => {
    // act
    // assert
  })

})
