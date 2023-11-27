const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/search', (req, res) => {
 // Code to process the search query and generate the list of compatible components
 // This can be done by using APIs, web scraping, or databases depending on your specific requirements
});

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});

document.getElementById('searchForm').addEventListener('submit', async (event) => {
 event.preventDefault();

 const search = document.getElementById('search').value;

 try {
    const response = await fetch('/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ search }),
    });

    if (!response.ok) {
      throw new Error('Server response not OK');
    }

    const results = await response.json();
    displayResults(results);
 } catch (error) {
    console.error('Error:', error);
 }
});

function displayResults(results) {
 const resultsDiv = document.getElementById('results');
 resultsDiv.innerHTML = '';

 results.forEach((result) => {
    const p = document.createElement('p');
    p.textContent = result;
    resultsDiv.appendChild(p);
 });
}