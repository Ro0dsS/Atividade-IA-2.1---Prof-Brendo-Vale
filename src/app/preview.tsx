import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useLocalSearchParams, router } from "expo-router";

export default function Preview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } =
    useLocalSearchParams<{
      nome: string;
      cargo: string;
      empresa: string;
      anos: string;
      tecnologia: string;
      cor: string;
    }>();

  let nivel = "";
  let corBadge = "";

  const anosNumero = Number(anos);

  if (anosNumero <= 2) {
    nivel = "Júnior";
    corBadge = "gray";
  } else if (anosNumero <= 5) {
    nivel = "Pleno";
    corBadge = "blue";
  } else {
    nivel = "Sênior";
    corBadge = "gold";
  }

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: cor }]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {nome?.charAt(0)}
          </Text>
        </View>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.info}>
          {cargo} - {empresa}
        </Text>

        <Text style={styles.tech}>
          Especialista em {tecnologia}
        </Text>

        <View
          style={[styles.badge, { backgroundColor: corBadge }]}
        >
          <Text style={styles.badgeText}>{nivel}</Text>
        </View>

        <Text style={styles.exp}>
          {anos} anos de experiência
        </Text>
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => router.back()}
      >
        <Text>Editar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.finishButton}
        onPress={() => router.replace("/sucesso")}
      >
        <Text style={{ color: "#fff" }}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  card: {
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  nome: {
    marginTop: 20,
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },

  info: {
    color: "#fff",
    marginTop: 10,
  },

  tech: {
    marginTop: 20,
    color: "#fff",
    fontSize: 18,
  },

  badge: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "bold",
  },

  exp: {
    marginTop: 15,
    color: "#fff",
  },

  editButton: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#6C63FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  finishButton: {
    marginTop: 15,
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});