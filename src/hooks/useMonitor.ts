import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { IPeopleSelect } from "../interfaces";
import { startMonitoring, stopMonitoring } from '../services/monitorService';

const listPeople: IPeopleSelect[] = [
    { value: 'babies', label: 'Bebés (0-5 años)' },
    { value: 'childs', label: 'Niños (6-9 años)' },
    { value: 'teenagers', label: 'Adolescentes (10-14 años)' },
    { value: 'adults', label: 'Adultos (18-50 años)' },
    { value: 'old', label: 'Ancianos (50+ años)' },
];

export const useMonitor = () => {
    const [selectedPerson, setSelectedPerson] = useState<string>('babies');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSendAction = async () => {
        try {
            setIsLoading(true);
            const response = await startMonitoring();
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
            const response = await stopMonitoring();
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

    return {
        listPeople,
        selectedPerson, setSelectedPerson,
        isLoading, setIsLoading,
        handleSendAction, handleStopAction
    }
}