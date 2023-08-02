import React, {useCallback, useState} from "react"
import {Alert, Button, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import ChatComponent from "../Users/Chat";
import axios from "axios";
import {CreateCompletionRequest} from "openai";
import Icon from "react-native-vector-icons/FontAwesome";
const ChooseFileComponent = () => {
    const [selectedFileUri, setSelectedFileUri] = useState(null);
    const [accept, setAccept] = useState(false);
    const [loading, setLoading] = useState(false);
    const pickDocument = async () => {
        try {
        let result = await DocumentPicker.getDocumentAsync({
        });
        if (result.type === 'success') {
            setSelectedFileUri(result);
        } else {
            setSelectedFileUri(null);
        }
        } catch (error) {
            setSelectedFileUri(null);
        }
    };
    const createDb = async () => {
        try {
            setLoading(true)
            const formData = new FormData()
            formData.append('doc', {
                uri: selectedFileUri.uri,
                name: selectedFileUri.name,
                type: 'application/pdf',
            });
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data', // Aquí puedes establecer manualmente el valor deseado
                },
            };
            const response = await axios.post('https://bb8c-2800-bf0-1cc-2db4-5b85-b93f-1ec4-3206.ngrok-free.app/chat/create', formData, config);
            return true
        } catch (error) {
            Alert.alert(JSON.stringify(error.response))
        } finally {
            setLoading(false)
        }
    }
    const continueDocument = async () => {
        if (await createDb()) {
            setAccept(true)
        }
    }
    const CloseButton = ({ onPress }) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            {!accept && (<View style={styles.containerButton}>
            {selectedFileUri && (
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{  marginRight: 20, marginBottom: 10}}>Archivo seleccionado: {selectedFileUri.name}</Text>
                    <CloseButton style={styles.file} onPress={() => {
                        setAccept(false)
                        setSelectedFileUri(null)
                    }} />
                </View>
            )}
            <TouchableOpacity>
                <Button title={selectedFileUri ? loading ? 'Cargando...': "Ir a preguntar" : "Cargue su PDF"}
                        color="black"
                        onPress={selectedFileUri ? continueDocument : pickDocument}
                        disabled={loading}>
                    {loading ? 'Cargando...' : 'Haz clic'}
                </Button>
            </TouchableOpacity>
        </View>)}
            <View >
                {accept && (
                    <View style={{ flexDirection: 'row', paddingRight: 20}}>
                        <Text style={{  marginRight: 20}}>Archivo seleccionado: {selectedFileUri.name}</Text>
                        <CloseButton style={{ marginRight: 20}} onPress={() => {
                            setAccept(false)
                            setSelectedFileUri(null)
                        }} />
                    </View>
                )
                }
            </View>
            {accept && (
                    <ChatComponent pdf={true}/>
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
        marginBottom: 20,
        alignItems: "flex-end"
    },
    button: {
        marginHorizontal: 60,
    },
});

export default ChooseFileComponent