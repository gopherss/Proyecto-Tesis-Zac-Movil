import axios from 'axios';
import { FC, JSX, useState } from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import CameraStream from './src/components/CameraStream';
import { raspberryIP } from './src/constants';

interface IPeopleSelect {
  value: string;
  label: string;
}

const listPeople: IPeopleSelect[] = [
  { value: 'babies', label: 'Bebés (0-5 años)' },
  { value: 'childs', label: 'Niños (6-9 años)' },
  { value: 'teenagers', label: 'Adolescentes (10-14 años)' },
  { value: 'adults', label: 'Adultos (18-50 años)' },
  { value: 'old', label: 'Ancianos (50+ años)' },
];

const App: FC = (): JSX.Element => {
  const [selectedPerson, SetSelectedPerson] = useState<string>('babies');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendAction = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${raspberryIP}/start`,
        { start: 'start' },
        { headers: { 'Content-Type': 'application/json' } }
      );
      ToastAndroid.show('✅ ' + response.data.message, ToastAndroid.SHORT);
    } catch (err) {
      console.error(err);
      ToastAndroid.show(
        '❌ Error: No se pudo enviar la acción',
        ToastAndroid.SHORT
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleStopAction = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${raspberryIP}/stop`,
        { stop: 'stop' },
        { headers: { 'Content-Type': 'application/json' } }
      );
      ToastAndroid.show('✅ ' + response.data.message, ToastAndroid.SHORT);
    } catch (err) {
      console.error(err);
      ToastAndroid.show(
        '❌ Error: No se pudo enviar la acción',
        ToastAndroid.SHORT
      );
    } finally {
      setIsLoading(false);
    }
  };

  console.log(selectedPerson);

  return (
    <LinearGradient
      colors={['#121212', '#1d3557']}
      style={styles.gradientBackground}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.streamContainer}>
          <CameraStream />
        </View>

        <Text style={styles.title}>¿A quién estás monitoreando?</Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedPerson}
            style={styles.picker}
            onValueChange={(itemValue) => {
              SetSelectedPerson(itemValue)
            }}
          >
            {listPeople.map((person, i) => (
              <Picker.Item key={i} label={person.label} value={person.value} />
            ))}
          </Picker>
        </View>

        <Text style={styles.buttonText}>
          {isLoading ? '⏳ Procesando...' : ''}
        </Text>

        <View style={styles.controlsContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.futuristicButton,
              { opacity: pressed ? 0.8 : 1 },
            ]}
            onPress={handleSendAction}
          >
            <Text style={styles.buttonText}>🚀 Iniciar</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.futuristicButton,
              { opacity: pressed ? 0.8 : 1 },
            ]}
            onPress={handleStopAction}
          >
            <Text style={styles.buttonText}>🛑 Detener</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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

export default App;
