import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Container 
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: 20,
    },

    // Título principal
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#FF6B6B",
        marginBottom: 10,
    },

    // Subtítulo
    subtitle: {
        fontSize: 16,
        color: "#666",
        fontStyle: "italic",
        marginBottom: 20,
    },

    // Texto descritivo
    description: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginVertical: 12,
        maxWidth: "90%",
        lineHeight: 22, // Melhor leitura
    },

    // Campo de entrada de texto
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#DDD",
        marginBottom: 20,
        fontSize: 16, // Padronização com outros textos
    },

    // Botão 
    button: {
        backgroundColor: "#4ECDC4",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: "100%",
        marginBottom: 10,
    },

    // Texto do botão
    buttonText: {
        fontWeight: "bold",
        color: "#FFF",
        fontSize: 16,
    },

    // Roteiro
    card: {
        borderWidth: 1,
        backgroundColor: "#FFF",
        marginTop: 30,
        width: "100%",
        borderRadius: 10,
        padding: 20,
        borderColor: "#DDD",
        shadowColor: "#000", // Sombra leve
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3, // Sombra no Android
    },

    // Título do cartão
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
});

export default styles;
