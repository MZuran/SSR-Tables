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

/**
 * Replaces a value at a specific index in a comma-separated string.
 * 
 * @param {string} input - Comma-separated string (e.g., "item1,item2,").
 * @param {number} index - Index of the item to replace.
 * @param {string} newValue - The new value to insert at the given index.
 * @returns {string} Updated comma-separated string (e.g., "item1,newItem,").
 */
export function replaceValueAtIndex(input, index, newValue) {
    const items = splitCommaString(input);

    if (index < 0 || index >= items.length) {
        throw new Error("Index out of bounds");
    }

    items[index] = newValue;

    return joinToCommaString(items)
}

/**
 * Gets the index of an element in a comma-separated string.
 *
 * @param {string} input - Comma-separated string (e.g., "item1,item2,item3,").
 * @param {string} value - The value to search for in the array.
 * @returns {number|null} The index of the value, or null if not found.
 */
export function getIndexOf(input, value) {
    const items = splitCommaString(input);
    const index = items.indexOf(value);
    return index === -1 ? null : index;
}

