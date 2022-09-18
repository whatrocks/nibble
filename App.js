import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const NIBBLES = [
  '0000',
  '0001',
  '0010',
  '0011',
  '0100',
  '0101',
  '0110',
  '0111',
  '1000',
  '1001',
  '1010',
  '1011',
  '1100',
  '1101',
  '1110',
  '1100',
];

/*
 nibbles
 put the nibbles in the right slots to fix 
 their communications device and send them
 back to their dimension before they take
 over this universe. they are von neumann
 devices called nibbles. their device only
 speaks binary and you need to help.
*/

export default function App() {
  const random_idx = Math.floor(Math.random() * NIBBLES.length);
  const random_nibble = NIBBLES[random_idx];
  return (
    <View style={styles.container}>
      <Text>Nibble</Text>
      <Text>{random_nibble}</Text>
      <Text>{random_idx}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
