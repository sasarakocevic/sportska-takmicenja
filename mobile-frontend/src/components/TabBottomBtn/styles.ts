import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    backgroundColor: theme.colors.proba,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 10 : -5,
  }
  
})
