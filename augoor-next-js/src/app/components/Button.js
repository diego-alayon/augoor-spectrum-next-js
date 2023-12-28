import {Text, ActionButton} from '@adobe/react-spectrum';
import Search from '../assets/icons/SearchIcon';

function Button({ children }) {
  return (
    <ActionButton isDisabled>
    <Search />
    <Text>Icon + Label</Text>
    </ActionButton>
  );
}
export default Button;

