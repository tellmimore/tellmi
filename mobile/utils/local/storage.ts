import * as SecureStore from 'expo-secure-store';

const saveValue = async (key: string, value: any) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    await SecureStore.setItemAsync(key, value);
}

const getValue = async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    if (value === null) {
        return null;
    }
    try {
        return JSON.parse(value);
    } catch (e) {
        console.error('Parsing error:', e);
        return value;
    }
}

const saveStudyInformation = async (studyInformation: any) => {
    if (studyInformation.participantCode) {
        await saveValue('participantCode', studyInformation.participantCode);
    }
    if (studyInformation.study) {
        await saveValue('study', studyInformation.study);
    }

}

export default {
    saveValue,
    getValue,
    saveStudyInformation
}