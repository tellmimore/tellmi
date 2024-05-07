
import { ResultData } from './types';
import storage from './local/storage';

const baseUrl = 'https://tellmi.onrender.com' // ?? 'http://localhost:3000';

export const register = async (participationCode: string) => {
    try {
        const response = await fetch(`${baseUrl}/registration/${participationCode}`, {
            method: 'POST',
        }).then(res => res.json());

        if (response.error) {
            throw new Error(`Failed to register: ${response.error}`);
        }
        return response;
    } catch (error) {
        console.error('Registration failed:', error);
        throw new Error('Registration request failed');
    }
};

export const postResult = async (resultData: ResultData) => {
    const newResult = {
        participant_id: resultData.participantCode,
        day: resultData.day,
        survey: resultData.survey,
        time: resultData.time,
        item: resultData.item,
        date: resultData.date, 
        response: resultData.response,
    }
    const response = await fetch(`${baseUrl}/results`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newResult),
    }).then(res => res.json());

    if (response.error) {
        console.error("Unable to post result:", response.error);
        storage.saveStudyInformation({result: newResult})
        return false;
    }

    return true;
};