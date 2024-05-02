import * as SecureStore from 'expo-secure-store';

export const saveValue = async (key: string, value: any) => {
    await SecureStore.setItemAsync(key, value);
}

export const getValue = async (key: string) => {
    return await SecureStore.getItemAsync(key);
}

const saveStudyInformation = (studyInformation: any) => {
    
}