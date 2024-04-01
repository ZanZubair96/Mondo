// Mock login functions
function loginWithFacebook() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function loginWithGoogle() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

// Show details based on clicked block
function showDetails(category) {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('details').style.display = 'block';
    
    var title = category.charAt(0).toUpperCase() + category.slice(1);
    document.getElementById('detail-title').innerText = title;

    var detailsDiv = document.getElementById('person-details');
    detailsDiv.innerHTML = ''; // Clear previous details

    // Example data, replace with actual data from your backend
    var data = [
        { name: 'John', money: '$50', task: 'Pay bills', yourTask: 'Buy groceries' },
        { name: 'Alice', money: '$20', task: 'Pick up kids', yourTask: 'Help with homework' }
    ];

    data.forEach(function(person) {
        var personDiv = document.createElement('div');
        personDiv.innerHTML = `
            <h3>${person.name}</h3>
            <p>Money: ${person.money}</p>
            <p>Task: ${person.task}</p>
            <p>Your Task: ${person.yourTask}</p>
        `;
        detailsDiv.appendChild(personDiv);
    });
}
