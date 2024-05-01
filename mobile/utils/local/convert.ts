import { writeFile } from 'fs';

export const base64ToPng = (base64Data: string, filePath: string): void => {
    const base64Image = base64Data.split(';base64,').pop();

    if (!base64Image) {
        console.log('Invalid base64 data');
        return;
    }
    const imageBuffer = Buffer.from(base64Image, 'base64');

    writeFile(filePath, imageBuffer, (err) => {
        if (err) {
            console.log('Failed to write the file:', err);
        } else {
            console.log(`File has been saved to ${filePath}`);
        }
    });
};

export const base64ToVideo = (base64Data: string, filePath: string): void => {
    const base64Video = base64Data.split(';base64,').pop();

    if (!base64Video) {
        console.log('Invalid base64 data');
        return;
    }
    const videoBuffer = Buffer.from(base64Video, 'base64');

    writeFile(filePath, videoBuffer, (err) => {
        if (err) {
            console.log('Failed to write the file:', err);
        } else {
            console.log(`File has been saved to ${filePath}`);
        }
    });
};