import { create } from 'zustand';

import { saveValue, getValue } from '@/utils/local/storage'

type StateStore = {
    code: string;
    setCode: (code: string) => void;

    study: any;
    setStudy: (study: any) => void;

    resultDocuments: any[];

    save: () => void;
    load: () => void;

};

export const useStateStore = create<StateStore>((set, get) => ({
    code: '',
    setCode: (code) => set({ code }),

    study: {},
    setStudy: (study) => set({ study }),

    resultDocuments: [],

    save: () => {
        saveValue('state', JSON.stringify(get()));
    },

    load: () => {
        getValue('state').then((state) => {
            if (state) {
                set(JSON.parse(state));
            }
        });
    }
}));