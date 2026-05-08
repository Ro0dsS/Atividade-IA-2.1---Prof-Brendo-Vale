import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useState } from "react";
import { router } from "expo-router";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [cor, setCor] = useState("");

  const [erro, setErro] = useState("");

  function validar() {
    if (nome.length < 3) {
      setErro("Nome deve ter no mínimo 3 caracteres");
      return;
    }

    if (!cargo) {
      setErro("Cargo obrigatório");
      return;
    }

    if (!anos || Number(anos) <= 0) {
      setErro("Anos deve ser maior que 0");
      return;
    }

    if (!tecnologia) {
      setErro("Tecnologia obrigatória");
      return;
    }

    if (!cor) {
      setErro("Escolha uma cor");
      return;
    }

    setErro("");

    router.push({
      pathname: "/preview",
      params: {
        nome,
        cargo,
        empresa,
        anos,
        tecnologia,
        cor,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Nome completo"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Cargo"
        style={styles.input}
        value={cargo}
        onChangeText={setCargo}
      />

      <TextInput
        placeholder="Empresa"
        style={styles.input}
        value={empresa}
        onChangeText={setEmpresa}
      />

      <TextInput
        placeholder="Anos de experiência"
        style={styles.input}
        keyboardType="numeric"
        value={anos}
        onChangeText={setAnos}
      />

      <TextInput
        placeholder="Tecnologia favorita"
        style={styles.input}
        value={tecnologia}
        onChangeText={setTecnologia}
      />

      <View style={styles.colors}>
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "blue" }]}
          onPress={() => setCor("blue")}
        />

        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "green" }]}
          onPress={() => setCor("green")}
        />

        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "purple" }]}
          onPress={() => setCor("purple")}
        />
      </View>

      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={validar}>
        <Text style={styles.buttonText}>Gerar Cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  colors: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  error: {
    color: "red",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});