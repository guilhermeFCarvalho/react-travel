import { generateTravelItinerary } from "@/services/generator";
import styles from "@/styles/styles";
import React, { useState, useRef, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, Animated } from "react-native";
import Markdown from 'react-native-markdown-display';


export default function TravelPlanner() {
    const [destination, setDestination] = useState("");
    const [itinerary, setItinerary] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const callItinerary = async () => {
        if (destination.length < 3) {
            alert("O destino deve conter pelo menos 3 caracteres.");
            return;
        }

        setIsLoading(true);
        setItinerary("");

        try {
            const result = await generateTravelItinerary(destination);
            setItinerary(result);

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
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.titulo, { fontSize: 28, color: "#4A90E2" }]}>
                Planejador de Viagem
            </Text>
            <Text style={[styles.subtitulo, { marginBottom: 20 }]}>
                Organize seu roteiro personalizado em segundos!
            </Text>

            <Text style={[styles.descriptionText]}>

                Digite o destino desejado, informe seu perfil de viagem (romântico, agitado, aventureiro, etc.), a duração da viagem em dias e o orçamento (baixo, médio ou alto). O app irá gerar um roteiro personalizado com atividades diárias, sugestões gastronômicas e dicas úteis.
            </Text>

            <TextInput
                onChangeText={setDestination}
                value={destination}
                style={[styles.input, { borderColor: "#4A90E2", borderWidth: 1 }]}
                placeholder="Digite o destino da sua viagem..."
            />

            <TouchableOpacity
                style={[styles.button, { backgroundColor: "#4A90E2", marginVertical: 10 }]}
                onPress={callItinerary}
            >
                <Text style={styles.buttonText}>
                    {isLoading ? "Gerando..." : "Gerar Ruoteiro"}
                </Text>
            </TouchableOpacity>

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
                    <Text style={[styles.cardTitle, { color: "#4A90E2", fontWeight: "bold" }]}>
                        Seu Itinerário:
                    </Text>
                    <Markdown>{itinerary}</Markdown>
                </Animated.View>
            )}
        </ScrollView>
    );
}
