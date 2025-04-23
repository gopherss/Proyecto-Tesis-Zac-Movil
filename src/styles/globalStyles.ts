import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    streamContainer: {
        flex: 1.5,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    title: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 10,
    },
    pickerContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        marginVertical: 10,
        overflow: 'hidden',
        alignSelf: 'center',
        width: '100%',
    },
    picker: {
        height: 60,
        width: '100%',
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    futuristicButton: {
        flex: 1,
        backgroundColor: '#5e35b1',
        paddingVertical: 14,
        borderRadius: 25,
        marginHorizontal: 10,
        elevation: 5,
        borderWidth: 2,
        borderColor: '#00f6ff',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadowColor: '#000000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 2,
    },
});