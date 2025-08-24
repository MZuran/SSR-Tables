/**
 * Splits a comma-separated string into an array of non-empty strings.
 * 
 * @param {string} input - Comma-separated values (e.g., "item1,item2,").
 * @returns {string[]} Array of strings (e.g., ["item1", "item2"]).
 */
export function splitCommaString(input) {
    return input
        .split(",")
        .filter(item => item.trim() !== ""); // Remove empty strings caused by trailing commas
}

/**
 * Joins an array of strings into a comma-separated string with a trailing comma.
 * 
 * @param {string[]} arr - Array of strings (e.g., ["item1", "item2"]).
 * @returns {string} Comma-separated string with trailing comma (e.g., "item1,item2,").
 */
export function joinToCommaString(arr) {
    return arr.join(",");
}
