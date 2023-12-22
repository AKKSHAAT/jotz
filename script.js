const noteList = document.getElementById("left"); 

fetch('data.json')
      .then(response => response.json()) // Parse JSON from the response
      .then(data => {
        const notesArr = data.notes; // Convert JSON to a formatted string
        notesArr.forEach(note => {
            console.log(note);            
            noteList.textContent = JSON.stringify(note.title); // Set the content in the <p> tag
        });

      })
      .catch(error => {
        console.error('Error reading JSON file:', error);
      });