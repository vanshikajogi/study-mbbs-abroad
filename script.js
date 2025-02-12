document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;
    
    if (!name || !email || !phone || !country) {
        alert("All fields are required!");
        return;
    }
    
    alert("Form submitted successfully!");
});

function openApplyForm() {
    document.getElementById("applyModal").style.display = "flex";
}

function closeApplyForm() {
    document.getElementById("applyModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("applyModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

