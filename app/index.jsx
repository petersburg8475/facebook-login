import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native-web";

let Index = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={[styles.text, { fontWeight: "bold", fontSize: 24 }]}>
        facebook
      </Text>
      <View>
        <TextInput placeholder="email or phone" style={styles.input} />
      </View>
      <View>
        <TextInput
          placeholder="password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.text}>log in</Text>
      </Pressable>
    </SafeAreaView>
  );
};

let styles = StyleSheet.create({
  button: {
    backgroundColor: "#053471",
    marginVertical: 5,
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 13,
    fontFamily: "System",
  },
  input: {
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 0,
    padding: 10,
    marginVertical: 5,
  },
  background: {
    flex: 1,
    backgroundColor: "#1877F2",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
