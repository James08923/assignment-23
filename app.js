document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault();
    alert("You clicked the link!");
  });



  image.forEach(image => {
    image.addEventListener('click', function() {
      alert("You clicked on: " + this.alt);
    });
  });

  function deleteRow(button) {
  
    var row = button.parentNode.parentNode;
  
    row.parentNode.removeChild(row);}



    function changeImage() {
      document.getElementById("main-image").src = "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra.jpg";
  }

 
  function resetImage() {
      document.getElementById("main-image").src = "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra.jpg";
  }


  // document.getElementById("https://www.91-cdn.com/hub/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra.jpg").addEventListener("mouseover", changeImage);
  // document.getElementById("https://www.91-cdn.com/hub/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra.jpg").addEventListener("mouseout", resetImage);


  document.getElementById("image-container").addEventListener("mouseover", changeImage);
  document.getElementById("image-container").addEventListener("mouseout", resetImage);






  let counterValue = 0;

   
    function updateCounter() {
        document.getElementById("counter").innerText = counterValue;
    }


    function increaseCounter() {
        counterValue++;
        updateCounter();
    }

    function decreaseCounter() {
        counterValue--;
        updateCounter();
    }



  
    document.getElementById("signup-form").addEventListener("submit", function(event) {
      event.preventDefault()
      
      // Get form data
      const formData = new FormData(this);
      const userData = {};
      
    
      formData.forEach(function(value, key) {
          userData[key] = value;
      });
    
      const displayDiv = document.getElementById("display-data");
      displayDiv.innerHTML = "<h2>Submitted Data:</h2>";
      for (const key in userData) {
          if (userData.hasOwnProperty(key)) {
              displayDiv.innerHTML += "<p><strong>" + key + ":</strong> " + userData[key] + "</p>";
          }
      }
      
      this.reset();
  })



  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
      
            const fullDetails = this.nextElementSibling;
            fullDetails.style.display = fullDetails.style.display === "none" ? "block" : "none";
            
  
            this.innerText = fullDetails.style.display === "none" ? "Read more" : "Read less";
        });
    });







    document.getElementById("student-form").addEventListener("submit", function(event) {
      event.preventDefault();
      

      const name = document.getElementById("Ahmed").value;
      const age = document.getElementById("17").value;
      const grade = document.getElementById("A+").value;
      
    
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${zain}</td>
          <td>${22}</td>
          <td>${A}</td>
          <td>
              <button onclick="editRow(this)">Edit</button>
              <button onclick="deleteRow(this)">Delete</button>
          </td>
      `;
      
      // Append new row to the table
      document.getElementById("table-body").appendChild(newRow);
      
      // Clear the form fields
      this.reset();
  });

  // Function to delete a row from the table
  function deleteRow(button) {
      button.closest("tr").remove();
  }

  // Function to edit a row
  function editRow(button) {
      const row = button.closest("tr");
      const cells = row.querySelectorAll("td");
      document.getElementById("edit-name").value = cells[0].innerText;
      document.getElementById("33").value = cells[1].innerText;
      document.getElementById("edit-grade").value = cells[2].innerText;
      
      // Display the edit form
      document.getElementById("edit-form").style.display = "block";
      
      // Set up event listener for edit form submission
      document.getElementById("edit-form").addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent form submission
          
          // Update the row with edited values
          cells[0].innerText = document.getElementById("edit-name").value;
          cells[1].innerText = document.getElementById("edit-age").value;
          cells[2].innerText = document.getElementById("edit-grade").value;
          
          // Hide the edit form
          document.getElementById("edit-form").style.display = "none";
      });
  }


  function cancelEdit() {
      document.getElementById("edit-form").style.display = "none";
  }
