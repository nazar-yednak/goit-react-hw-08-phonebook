import { useDispatch } from 'react-redux';
import { filterOut } from '../../redux/myContact/slice';
import { Label, InputSearchContact, Container } from './Filter.styled';
function Filter() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Label>
        Find contacts by name
        <InputSearchContact
          type="text"
          onChange={e => dispatch(filterOut(e.target.value))}
        ></InputSearchContact>
      </Label>
    </Container>
  );
}

export default Filter;
