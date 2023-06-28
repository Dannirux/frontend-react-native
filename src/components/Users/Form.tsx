import React from "react";
import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";

const FormComponent = () => {
    const [names, setNames] = React.useState('');
    const [surnames, setSurnames] = React.useState('');
    return (
        <View>
            <Text style={styles.sectionTitle}>
                Datos de usuario
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setNames}
                value={names}
                placeholder="Ingrese sus nombres"
            />
            <TextInput
                style={styles.input}
                onChangeText={setSurnames}
                value={surnames}
                placeholder="Ingrese sus apellidos"
            />
            <View style={styles.containerButton}>
                <Button
                    title="Guardar usuario"
                    disabled={!names || !surnames}
                    onPress={() => Alert.alert(`Usuario ${names} ${surnames} guardado con éxito` )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    containerButton: {
        margin: 10,
    }
});

export default FormComponent