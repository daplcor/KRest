import { useEffect, useState } from 'react';
import { getSocket } from '../util/socket';
import { useGetLatestTransactions } from './searchNft';

function useStreamTransactions() {
    const [streamData, setStreamData] = useState([]);
    const { getLatestTransactions } = useGetLatestTransactions();

    useEffect(() => {
        const socket = getSocket();

        // Log when the socket connects successfully
        socket.on('connect', () => {
            console.log('Socket connected successfully.');
        });

        // Listen for changes in the collections
        socket.on('change', async ({ collection, change }) => {
            console.log(`Change in ${collection}:`, change);
            await getLatestTransactions();
            setStreamData(change.fullDocument || change);
        });

        return () => {
            socket.off('connect');
            socket.off('change');
        };
    }, []);

    return { streamData };
}

export { useStreamTransactions };
