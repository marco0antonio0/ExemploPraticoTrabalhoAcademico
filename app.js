import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

export default function App() {
  // Estado para controlar a visibilidade do modal
  const [modalVisible, setModalVisible] = React.useState(false);
  // Estado para armazenar a mensagem exibida no modal
  const [message, setMessage] = React.useState("");
  // Lista de botões
  const [listBTN, setlistBTN] = React.useState([
    "inicio",
    "listas",
    "configuração",
  ]);

  // Função para lidar com o clique em um botão
  const acao_de_clique = (passagem_de_parametro) => {
    // Define a mensagem com base no botão clicado
    switch (passagem_de_parametro) {
      case 0:
        setMessage("O botão 1\nfoi clicado");
        break;
      case 1:
        setMessage("O botão 2\nfoi clicado");
        break;
      case 2:
        setMessage("O botão 3\nfoi clicado");
        break;
      default:
        setMessage("");
        break;
    }
    // Exibe o modal
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Meu Exemplo Prático</Text>
      </View>
      <View style={styles.container_botoes}>
        {/* Mapeia a lista de botões para criar os componentes TouchableOpacity */}
        {listBTN.map((e, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => acao_de_clique(i)}
            style={styles.personalizacao_btn}
          >
            <Text style={styles.botao_Texto}>{e}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Modal para exibir a mensagem */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{message}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.personalizacao_btn}
            >
              <Text style={styles.botao_Texto}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    backgroundColor: "green",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  container_botoes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  personalizacao_btn: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  botao_Texto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  modalText: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 10,
  },
});
