import axios from 'axios';
import { raspberryIP } from '../constants';

export const startMonitoring = async () => {
    return await axios.post(
        `${raspberryIP}/start`,
        { start: 'start' },
        { headers: { 'Content-Type': 'application/json' } }
    )
}


export const stopMonitoring = async () => {
    return await axios.post(
        `${raspberryIP}/stop`,
        { stop: 'stop' },
        { headers: { 'Content-Type': 'application/json' } }
    )
}