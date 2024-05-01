const baseUrl = 'https://tellmi.onrender.com' // ?? 'http://localhost:3000';

export const register = async (participationCode: string) => {
    const response = await fetch(`${baseUrl}/registration/${participationCode}`, {
        method: 'POST',
    }).then(res => res.json());

    console.log(response)

    if (response.error) {
        throw new Error(`Failed to register: ${response.error}`);
    } else {
        console.log(response.settings.email);
    }

    return true;
};

export const postResult = async (resultData: object) => {
    const response = await fetch(`${baseUrl}/result`, {
        method: 'POST',
    }).then(res => res.json());

    if (resultData == undefined) {
        console.log("Unable to post Result");
        // save locally
    }
    
    return true;
};