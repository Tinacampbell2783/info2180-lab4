
document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the search button using its ID
    const searchButton = document.getElementById('search-btn');
    
    // Add a 'click' event listener to the button 
    searchButton.addEventListener('click', function() {
        
        // Define the URL of the PHP script
        const url = 'superheroes.php';
        
        // Use the fetch API to make the AJAX request
        fetch(url)
            .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Get the response body as plain text (since superheroes.php returns HTML)
                return response.text();
            })
            .then(data => {
                // Display the returned data (the list of superheroes in <ul><li> format)
                // in a JavaScript alert[cite: 137].
                alert(data);
            })
            .catch(error => {
                // Handle any errors during the fetch operation
                console.error('Error fetching data:', error);
                alert('An error occurred while fetching superheroes.');
            });
    });
});