import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    padding: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  matchContent: {
    paddingHorizontal: 12,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  winnerNameContainer: {
    alignItems: 'center',
  },
  winnerColumn: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 14,
  },
  winnerName: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 14,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#eb2f2f',
    marginBottom:5
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
