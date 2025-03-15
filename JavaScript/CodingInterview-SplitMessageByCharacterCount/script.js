function splitMessage(message, maxLength) {
    const words = message.split(" ");
    const parts = [];
    let currentPart = [];
    let currentLength = 0;

    // Estimate the number of parts to calculate numbering format
    const calculateNumberingLength = (totalParts) => `(${totalParts}/${totalParts})`.length;

    // Validate if message can fit in even the smallest part with numbering
    const initialNumberingLength = calculateNumberingLength(1);
    if (maxLength <= initialNumberingLength + 1) {
        throw new Error("Max length too small to include numbering format");
    }

    for (const word of words) {
        if (currentLength + word.length + 1 > maxLength - initialNumberingLength) { 
            parts.push(currentPart.join(" "));
            currentPart = [word];
            currentLength = word.length + 1;
        } else {
            currentPart.push(word);
            currentLength += word.length + 1;
        }
    }

    if (currentPart.length > 0) {
        parts.push(currentPart.join(" "));
    }

    // Adjust numbering after splitting
    const totalParts = parts.length;
    const formattedParts = parts.map((part, index) => {
        const numbering = `(${index + 1}/${totalParts})`;
        return `${numbering} ${part}`;
    });

    return formattedParts;
}

// Example usage:
const message = "This is an example of a long message that needs to be split into multiple parts without breaking any words.";
const maxLength = 30;

try {
    const result = splitMessage(message, maxLength);
    result.forEach(part => console.log(part));
} catch (error) {
    console.error(error.message);
}