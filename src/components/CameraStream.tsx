import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview';
import { raspberryIP } from '../constants';

const CameraStream = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: `${raspberryIP}/video` }}
                style={styles.webview}
                javaScriptEnabled={true}
                allowsInlineMediaPlayback={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    webview: {
        flex: 1,
    },
});

export default CameraStream