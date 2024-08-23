import { useEffect, useState } from "react";
import { API_URL } from "../util/config";
import axios from "axios";
import { toast } from "react-toastify";

const useSearchNft = () => {
    const [loading, setLoading] = useState(false);

    const searchNft = async (address, filter) => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/nft/${address}/${filter}`);
            const data = response.data;
            if (data && data.success) {
                return data
            }
            return
        } catch (error) {
            console.error("Error:", error)
            if (error?.response?.data?.message) {
                toast.info(error.response.data.message)
            } else {
                toast.error("An error occurred!")

            }
            return false
        } finally {
            setLoading(false);
        }
    }

    return { searchNft, loading }
}

const useGetLatestTransactions = (streamData) => {
    const [loading, setLoading] = useState(false);
    const [latestTxns, setLatestTxns] = useState([]);

    const getLatestTransactions = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/latest/transactions`);
            const data = response.data;
            if (data && data.success) {
                setLatestTxns(data?.data);
            }
            
            return
        } catch (error) {
            console.error("Error:", error)
            if (error?.response?.data?.message) {
                toast.info(error.response.data.message)
            } else {
                toast.error("An error occurred!")

            }
            return false
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getLatestTransactions()
    }, [streamData])

    return { getLatestTransactions, latestTxns, loading }
}

export { useSearchNft, useGetLatestTransactions }