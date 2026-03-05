import imagesList from "./ImagesList";

const RandomImage = (
    imageOrigin = "https://cdn.jsdelivr.net/gh/Jiale0709/jiale-mascot-randomiser@master",
    type = "avif",
    custom = false,
    customImages = [],
) => {

    if (custom) {

        if (customImages.length === 0) {
            throw new Error("No custom images provided in array.");
        }

        return customImages[Math.floor(Math.random() * customImages.length)];

    } else {

        const availableTypes = ["avif", "png"];
        const safeType = availableTypes.includes(type) ? type : "avif";

        const safeImageOrigin = imageOrigin.replace(/\/$/, "");
        const imgDirectory = safeType === "avif" ? "images/avif" : "images/default";

        return `${safeImageOrigin}/${imgDirectory}/${imagesList[Math.floor(Math.random() * imagesList.length)]}.${safeType}`;
    }

}

export default RandomImage;