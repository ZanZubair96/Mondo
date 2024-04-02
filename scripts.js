// Mock login functions
function loginWithFacebook() {
    // Hide login page
    document.getElementById('login-page').style.display = 'none';
    // Display dashboard
    document.getElementById('dashboard').style.display = 'block';
}

function loginWithGoogle() {
    // Hide login page
    document.getElementById('login-page').style.display = 'none';
    // Display dashboard
    document.getElementById('dashboard').style.display = 'block';
}

// Show details based on clicked block
function showDetails(category) {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('details').style.display = 'block';
    
    var title = category.charAt(0).toUpperCase() + category.slice(1);
    document.getElementById('detail-title').innerText = title;

    // Reset person dropdown
    var personDropdown = document.getElementById('person-dropdown');
    personDropdown.selectedIndex = 0;

    // Reset person details
    document.getElementById('person-image').src = '';
    document.getElementById('person-info').innerHTML = '';
}

// Show details based on selected person
function showPersonDetails() {
    var personName = document.getElementById('person-dropdown').value;
    if (!personName) return;

    // Fetch selected person's info from the server
    fetch('/personInfo?name=' + personName)
        .then(response => response.json())
        .then(data => {
            document.getElementById('person-image').src = data.imagePath || 'default_image.png'; // Use default image if no uploaded image is found
            document.getElementById('person-info').innerHTML = data.info || 'No information available';
        })
        .catch(error => console.error('Error:', error));
}

// Upload image
function uploadImage(event) {
    var input = event.target;
    var formData = new FormData();
    formData.append('image', input.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Image uploaded:', data.imagePath);
        showPersonDetails(); // Update person details after uploading image
    })
    .catch(error => console.error('Error:', error));
}
