import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { useAuth } from 'hooks';
import { Avatar, Name, Box } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <Box>
      <Avatar src={avatar} alt="" width="32" />
      <Name>Welcome, {user?.name}</Name>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </Box>
  );
}
