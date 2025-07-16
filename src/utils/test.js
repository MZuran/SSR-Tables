/**
 * Converts a hexadecimal string to an 8-bit binary string.
 * 
 * @param {string} hexString - A hexadecimal number string (e.g., "0x1", "1A").
 * @returns {string} A binary string padded to 8 bits (e.g., "00000001").
 * 
 * Example:
 * hexToBinary("0x1") returns "00000001"
 * hexToBinary("A") returns "00001010"
 */
function hexToBinary(hexString) {
    // Remove "0x" or "0X" prefix if present
    if (hexString.startsWith("0x") || hexString.startsWith("0X")) {
        hexString = hexString.slice(2);
    }

    // Parse the hex string and convert it to binary
    const binaryString = parseInt(hexString, 16).toString(2);

    // Pad the binary string to ensure it is 8 bits long
    return binaryString.padStart(8, "0");
}

/**
 * Converts a binary number or string to an array of 0s and 1s.
 * 
 * @param {string|number} binary - Binary number (e.g., "1010" or 1010).
 * @returns {number[]} Array of binary digits (e.g., [1, 0, 1, 0]).
 */
function binaryArray(binary) {
    // Ensure it's a string
    const binStr = binary.toString();

    // Convert each character to a number
    return [...binStr].map(bit => parseInt(bit, 10));
}

/**
 * Converts a binary string or binary array to a hexadecimal string.
 * 
 * @param {string|number[]|number} input - Binary string (e.g., "00001010"), array (e.g., [0,0,0,0,1,0,1,0]), or number (e.g., 1010).
 * @returns {string} Hexadecimal representation (e.g., "A").
 */
function binaryToHex(input) {
    let binStr = "";

    if (Array.isArray(input)) {
        // Join array elements into a binary string
        binStr = input.join("");
    } else {
        // Convert input to string if it's a number
        binStr = input.toString();
    }

    // Parse binary string to a number and convert to hex
    return parseInt(binStr, 2).toString(16).toUpperCase();
}
