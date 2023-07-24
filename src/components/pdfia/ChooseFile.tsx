import React, {useCallback, useState} from "react"
import {Button, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import ChatComponent from "../Users/Chat";
const ChooseFileComponent = () => {
    const [selectedFileUri, setSelectedFileUri] = useState(null);
    const [accept, setAccept] = useState(false);
    const pickDocument = async () => {
        try {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type === 'success') {
            setSelectedFileUri(result);
            console.log('Documento seleccionado:', result.name);
        } else {
            setSelectedFileUri(null);
        }
        } catch (error) {
            setSelectedFileUri(null);
            console.log('Error al seleccionar el documento:', error);
        }
    };
    const continueDocument = async () => {
        setAccept(true)
    }
    return (
        <View style={styles.container}>
            {!accept && (<View style={styles.containerButton}>
            {selectedFileUri && (
                <View>
                    <Text style={styles.file}>Archivo seleccionado: {selectedFileUri.name}</Text>
                </View>
            )}
            <TouchableOpacity>
                <Button
                    title={selectedFileUri ? "Continuar" : "Cargue su PDF"}
                    color="black"
                    onPress={selectedFileUri ? continueDocument : pickDocument}
                />
            </TouchableOpacity>
        </View>)}
            {accept && (
                <Text>Archivo seleccionado: {selectedFileUri.name}</Text>
                )
            }
            {accept && (
                    <ChatComponent/>
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    containerButton: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        backgroundColor:
            "radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",
    },
    file: {
        color: "black",
        marginBottom: 20
    },
    button: {
        marginHorizontal: 60,
    },
});

export default ChooseFileComponent