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
