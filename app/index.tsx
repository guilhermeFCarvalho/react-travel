import { generateTravelItinerary } from "@/services/generator";
import styles from "@/styles/styles";
import React, { useState, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, Animated } from "react-native";
import Markdown from 'react-native-markdown-display';

export default function TravelPlanner() {

    // Inicialização dos hooks
    const [destination, setDestination] = useState(() => {
        return "";
    });
    const [itinerary, setItinerary] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Função para validar entrada 
    const validateInput = () => {
        if (destination.length < 5) {
            alert("O destino deve ter no mínimo 5 caracteres. Informe também a duração em dias, o perfil de viagem e o orçamento! ");
            return false;
        }
        return true;
    };

    // Função para chamar  API de geração de itinerário
    const callItinerary = async () => {
        if (!validateInput()) {
            return;
        }

        setIsLoading(true);
        setItinerary("");

        try {
            const result = await generateTravelItinerary(destination);
            setItinerary(result);

            //animação de fade
            fadeAnim.setValue(0);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();

        } catch (error) {
            alert("Erro ao gerar o itinerário. Tente novamente!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            {/* Título */}
            <Text style={[styles.title, { fontSize: 28, color: "#4A90E2" }]}>Planejador de Viagem</Text>

            {/* Subtítulo */}
            <Text style={[styles.subtitle, { marginBottom: 20 }]}>Organize seu roteiro personalizado em segundos!</Text>

            {/* Texto com orientações para o usuário*/}
            <Text style={styles.description}>
                Digite o destino desejado, informe seu perfil de viagem (romântico, agitado, aventureiro, etc.), a duração da viagem em dias e o orçamento (baixo, médio ou alto). O app irá gerar um roteiro personalizado com atividades diárias, sugestões gastronômicas e dicas úteis.
            </Text>

            {/* Input para o destino */}
            <TextInput
                onChangeText={setDestination}
                value={destination}
                style={[styles.input, { borderColor: "#4A90E2", borderWidth: 1 }]}
                placeholder="Digite o destino da sua viagem..."
            />

            {/* Botão para gerar o roteiro */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: "#4A90E2", marginVertical: 10 }]}
                onPress={callItinerary}
            >
                <Text style={styles.buttonText}>{isLoading ? "Gerando..." : "Gerar Roteiro"}</Text>
            </TouchableOpacity>

            {/* Exibição do roteiro */}
            {itinerary && (
                <Animated.View
                    style={[
                        styles.card,
                        {
                            backgroundColor: "#F0F4FF",
                            padding: 16,
                            opacity: fadeAnim,
                            transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }]
                        },
                    ]}
                >
                    <Text style={[styles.cardTitle, { color: "#4A90E2", fontWeight: "bold" }]}>Seu Itinerário:</Text>
                    <Markdown>{itinerary}</Markdown>
                </Animated.View>
            )}
        </ScrollView>
    );
}
