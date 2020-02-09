import { Input } from '../Input';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Input />', () => {
  test('should render the input', () => {
    //arrange
    //act
    const helpers = render(<Input id="test" label="Test" value="Yolo Test" onChange={() => { }} />)

    helpers.debug();
    helpers.getByText('Test');
    helpers.getByLabelText('Test');

    const $input = helpers.getByLabelText('Test');
    //assert
    // expect($input).toBeInDocument()
    expect($input).toHaveAttribute('value', 'Yolo Test')
  })

  test('should fire onChange prop when a change event happens on Input', () => {
    //arrange
    const onChange = jest.fn()
    //act
    const helpers = render(<Input id="test" label="Test" value="Yolo Test" onChange={onChange} />)

    const $input = helpers.getByLabelText('Test');
    fireEvent.change($input, { target: { value: '12345' } });

    //assert
    expect(onChange).toHaveBeenCalledTimes(1);
    // expect(onChange).toHaveBeenCalledWith({ target: { value: '12345' } })
  })

})
