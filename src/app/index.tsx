import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DevCard</Text>

      <Text style={styles.subtitle}>
        Seu cartão de visita digital de dev mobile
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/cadastro")}
      >
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#6C63FF",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },

  button: {
    marginTop: 40,
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});