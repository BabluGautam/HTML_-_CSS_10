fetch('<https://api.example.com/data>') // This is the URL you're "calling".
  .then(response => response.json())  // Convert the response to a format we can easily work with.
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // If something goes wrong, this block will run.
    console.log("There was an error fetching the data.", error);
  });
