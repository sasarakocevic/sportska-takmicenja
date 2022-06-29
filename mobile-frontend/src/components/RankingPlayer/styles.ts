import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  rankingColumn: {},
  playerName: {
    color: theme.colors.heading,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  },
  points: {
    color: theme.colors.heading,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  },
  lastWin: {
    color: theme.colors.highlight,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#eb2f2f',
    marginBottom:5
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3cbb3c',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
