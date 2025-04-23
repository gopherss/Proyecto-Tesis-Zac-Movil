import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { FC, JSX } from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import CameraStream from './src/components/CameraStream';
import { useMonitor } from './src/hooks/useMonitor';
import { globalStyles } from './src/styles/globalStyles';

const App: FC = (): JSX.Element => {

  const { selectedPerson, setSelectedPerson, listPeople,
    isLoading, handleSendAction, handleStopAction } = useMonitor();

  return (
    <LinearGradient
      colors={['#121212', '#1d3557']}
      style={globalStyles.gradientBackground}
    >
      <SafeAreaView style={globalStyles.container}>
        <View style={globalStyles.streamContainer}>
          <CameraStream />
        </View>

        <Text style={globalStyles.title}>¿A quién estás monitoreando?</Text>

        <View style={globalStyles.pickerContainer}>
          <Picker
            selectedValue={selectedPerson}
            style={globalStyles.picker}
            onValueChange={(itemValue) => {
              setSelectedPerson(itemValue)
            }}
          >
            {listPeople.map((person, i) => (
              <Picker.Item key={i} label={person.label} value={person.value} />
            ))}
          </Picker>
        </View>

        <Text style={globalStyles.buttonText}>
          {isLoading ? '⏳ Procesando...' : ''}
        </Text>

        <View style={globalStyles.controlsContainer}>
          <Pressable
            style={({ pressed }) => [
              globalStyles.futuristicButton,
              { opacity: pressed ? 0.8 : 1 },
            ]}
            onPress={handleSendAction}
          >
            <Text style={globalStyles.buttonText}>🚀 Iniciar</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              globalStyles.futuristicButton,
              { opacity: pressed ? 0.8 : 1 },
            ]}
            onPress={handleStopAction}
          >
            <Text style={globalStyles.buttonText}>🛑 Detener</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;
