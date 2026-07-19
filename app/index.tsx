import { StyleSheet, Text, View } from "react-native";

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WaterNoti</Text>
      <Text style={styles.date}>Monday, July 20</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(152, 204, 219)',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  date: {
    fontSize: 14,
    color: '#646283',
    marginTop: 4,
    marginBottom: 30,
  },
});
