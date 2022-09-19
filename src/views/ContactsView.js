import { useGetContactsQuery } from '../redux/myContact/slice';
import Contact from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Form from 'components/Form/Form';

export default function ContactsView() {
  useGetContactsQuery();

  return (
    <>
      <Form />
      <Filter />
      <Contact />
    </>
  );
}
