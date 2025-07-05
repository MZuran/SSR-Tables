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
export default function hexToBinary(hexString) {
    // Remove "0x" or "0X" prefix if present
    if (hexString.startsWith("0x") || hexString.startsWith("0X")) {
        hexString = hexString.slice(2);
    }

    // Parse the hex string and convert it to binary
    const binaryString = parseInt(hexString, 16).toString(2);

    // Pad the binary string to ensure it is 8 bits long
    return binaryString.padStart(8, "0");
}
