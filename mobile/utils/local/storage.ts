import * as SecureStore from 'expo-secure-store';

const saveValue = async (key: string, value: any) => {
    await SecureStore.setItemAsync(key, value);
}

const getValue = async (key: string) => {
    return await SecureStore.getItemAsync(key);
}

const saveStudyInformation = (studyInformation: any) => {
    
}

export default {
    saveValue,
    getValue,
    saveStudyInformation
}