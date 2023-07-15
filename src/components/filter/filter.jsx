import { Form, Input, Label } from './filter.styled';
import { setFilter } from 'redux/phoneBookSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Form>
      <Label htmlFor="search">Find contacts by name</Label>
      <Input type="text" name="filter" onChange={e => dispatch(setFilter(e.target.value))} />
    </Form>
  );
};
