// balance-sheet.js

// Import the functions from sheet-service.js
import { readBalanceSheet, addAsset, updateAsset, deleteAsset } from './service/sheet-service.js';

// Execute code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", async () => {
    const balanceSheet = await readBalanceSheet();
    renderBalanceSheet(balanceSheet);
});

const renderBalanceSheet = (balanceSheet) => {
    const container = document.getElementById("root");

    renderAssets(balanceSheet.assets, container);
    renderLiabilities(balanceSheet.assets, container);

}

const renderHeading = (text) => {
    const header = document.createElement('h2');
    header.textContent = text; 
    header.classList.add("text-white");
    header.classList.add("bg-dark");
    header.classList.add("p-2");
    return header;
}

const renderBaseTable = () => {
    const table = document.createElement('table');
    table.classList.add('table'); // Add class to the table element
    table.classList.add('table-sm'); // Add class to the table element
    return table;
}

const renderAssets = (assets, container) => {
    const header = renderHeading("Assets");
    const table = renderBaseTable();

    table.innerHTML = `
        <tbody>
            ${assets.current.map(asset => `
                <tr>
                    <td>${asset.name}</td>
                    
                </tr>
            `).join('')}
        </tbody>
    `;

    appendToContainer([header, table],container);
}

const renderLiabilities = (assets, container) => {
    const header = renderHeading("Assets");
    const table = renderBaseTable();

    table.innerHTML = `
        <tbody>
            ${assets.current.map(asset => `
                <tr>
                    <td>${asset.name}</td>
                    
                </tr>
            `).join('')}
        </tbody>
    `;

    appendToContainer([header, table],container);
}

const appendToContainer = (elements, container) => {
    elements.map( element => container.appendChild(element));
}
