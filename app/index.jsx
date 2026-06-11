import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
// Destructure width and height from the hook
// const { width, height } = useWindowDimensions();

const Index = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ alignItems: "center", marginBottom: height / 4 }}>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 40 }]}>
          facebook
        </Text>
        <View>
          <TextInput
            placeholder="email or phone"
            placeholderTextColor="#999999"
            style={[styles.input, { width: (width / 4) * 3 }]}
          />
        </View>
        <View>
          <TextInput
            placeholder="password"
            placeholderTextColor="#999999"
            style={[styles.input, { width: (width / 4) * 3 }]}
            secureTextEntry
          />
        </View>
        <Pressable style={[styles.button, { width: (width / 4) * 3 }]}>
          <Text style={styles.text}>log in</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

let styles = StyleSheet.create({
  button: {
    backgroundColor: "#162941",
    marginVertical: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#3d5589",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
