document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the user's input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    // ihtml='';
    // ihtml += `
    // <i class="fa-solid fa-user-plus" id="signin-icon"></i>
    // <a href="signup.html"><span class="sign-in"></span></a>
    // `

    // right-section.innerHTML = ihtml;
    localStorage.setItem("username", name);

    // Redirect to the home page
    window.location.href = "index1.html";
});