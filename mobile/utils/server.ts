import { useStateStore } from "@/app/stateStore";

const baseUrl = 'https://tellmi.onrender.com' // ?? 'http://localhost:3000';

export const register = async (participationCode: string) => {
    const response = await fetch(`${baseUrl}/registration/${participationCode}`, {
        method: 'POST',
    }).then(res => res.json());

    console.log(response)

    if (response.error) {
        throw new Error(`Failed to register: ${response.error}`);
    } else {
        const { setCode, setStudy, save } = useStateStore.getState();

        setCode(participationCode);
        setStudy(response);
        save();
    }

    return true;
};