// read-json.js

// Define the function to read JSON file asynchronously using fetch
export async function readJsonFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch JSON file: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error reading JSON file: ${filePath}`, error);
        return null;
    }
}
