import { API_URL, IMG_SIZE } from "./config";

export type WebSafeBase64 = string;

const getDataFromImage = (img: HTMLImageElement): WebSafeBase64 => {
    // Draw on a IMG_SIZE x IMG_SIZE canvas
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = IMG_SIZE;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0, IMG_SIZE, IMG_SIZE);

    // Get web-safe base64 data
    return canvas
        .toDataURL()
        .split(",")[1]
        .replace(/\+/g, "-") // Convert '+' to '-'
        .replace(/\//g, "_") // Convert '/' to '_'
        .replace(/=+$/, ""); // Remove ending '='
};

const getPredictionBlob = async (img_data: WebSafeBase64) => {
    const res = await fetch(new URL("/predict", API_URL), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            img_data,
        }),
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return await res.blob();
};

export const getPredictionAudioURL = async (file: File) => {
    const img = new Image();
    const imgURL = URL.createObjectURL(file);
    img.src = imgURL;
    await new Promise((res) => (img.onload = res));
    const imgData = getDataFromImage(img);
    const prediction = await getPredictionBlob(imgData);
    return {
        image: imgURL,
        audio: URL.createObjectURL(prediction),
    };
};
