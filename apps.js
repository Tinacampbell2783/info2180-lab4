document.addEventListener('DOMContentLoaded', function() {

    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-query');
    const resultDiv = document.getElementById('result');
    
    searchButton.addEventListener('click', function() {
     
        const query = encodeURIComponent(searchInput.value.trim()); 
        const url = 'superheroes.php' + (query ? `?query=${query}` : '');
        
        resultDiv.innerHTML = "Loading...";

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
               
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                resultDiv.innerHTML = `<p style="color: red;">An error occurred: ${error.message}</p>`;
            });
    });
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});