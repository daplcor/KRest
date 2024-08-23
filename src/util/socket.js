import io from 'socket.io-client';
import { SERVER_URL } from './config';

let socket;

export const getSocket = () => {
    if (!socket) {
        socket = io(SERVER_URL);
    }
    return socket;
};
