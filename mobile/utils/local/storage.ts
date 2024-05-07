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
        if (typeof value === 'object')
            return JSON.parse(value);
        return value
    } catch (e) {
        console.error('Parsing error:', e);
        return value;
    }
}

const appendValue = async (key: string, newValue: any) => {
    const currentValue = await getValue(key);
    let updatedValue;
    if (currentValue === null) {
        updatedValue = [newValue]; 
    } else {
        updatedValue = [...currentValue, newValue];
    }
    await saveValue(key, updatedValue);
}

const saveStudyInformation = async (studyInformation: any) => {
    if (studyInformation.participantCode) {
        await saveValue('participantCode', studyInformation.participantCode);
    }
    if (studyInformation.study) {
        await saveValue('study', studyInformation.study);
    }
    if (studyInformation.result) {
        await appendValue('result', studyInformation.result);
    }
}

export default {
    saveValue,
    getValue,
    saveStudyInformation
}