// we always make sure 'react-native' gets included first
import 'react-native';

// libraries to mock
import './mock-react-native-image';
import './mock-async-storage';
import './mock-i18n';
import './mock-reactotron';
import './mock-react-native-vector-icons';
import './mock-fetch';
import './mock-react-native-screens';
import './mock-react-navigation';

jest.useFakeTimers();
declare global {
  let __TEST__;
}
