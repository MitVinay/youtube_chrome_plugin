document.getElementById('sendComment').addEventListener('click', async () => {
    // Get the input value from the user
    const comment = document.getElementById('comment').value;
  
    // Ensure the comment is not empty
    if (!comment) {
      alert('Please enter a comment.');
      return;
    }
  
    // Send the comment to your Flask API using fetch
    const response = await fetch('http://127.0.0.1:8080/predict', {
      method: 'POST',  // HTTP method used to send data (POST)
      headers: {
        'Content-Type': 'application/json',  // We are sending JSON data
      },
      body: JSON.stringify({ comment })  // Sending the comment as JSON in the request body
    });
  
    if (response.ok) {
      const data = await response.json();  // Parse the response from Flask as JSON
      // Display the API response in the result div
      document.getElementById('result').textContent = `Prediction: ${data.prediction}`;
    } else {
      document.getElementById('result').textContent = 'Error communicating with the API.';
    }
  });
  