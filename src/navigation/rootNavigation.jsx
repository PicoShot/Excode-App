import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import { auth } from '../../firebaseConfig'; // Import auth

const RootNavigation = () => {
  const { isAuth } = useSelector((state) => state.user);
  console.log('isAuth: ', isAuth);
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
}

export default RootNavigation;
