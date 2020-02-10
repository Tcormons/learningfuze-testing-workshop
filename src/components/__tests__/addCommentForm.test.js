import { AddComment } from '../AddCommentForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<AddCommentForm />', () => {
  //   test('should allow you to submit a comment with a username', () => {
  //     //arrange
  //     //act
  //     const helpers = render(<AddComment label='formLabel' onSubmit={() => { }} />)

  //   helpers.debug();
  //   helpers.getByLabelText('formLabel');

  //   const $input = helpers.getByLabelText('formLabel');
  //   //assert
  //   expect($input).toHaveAttribute('label', 'formLabel')
  // })
  test('should fire onSubmit prop when button is clicked', () => {
    //arrange
    const onSubmit = jest.fn();
    //act
    const helpers = render(<AddComment label='formLabel' onSubmit={onSubmit} />);

    const $user = helpers.getByLabelText('formLabel');
    fireEvent.change($user, { target: { value: 'Tomas' } })
    //assert
    expect(onSubmit).toHaveBeenCalledTimes(1);
  })

})
