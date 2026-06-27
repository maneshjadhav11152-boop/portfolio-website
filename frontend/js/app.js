

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://site--portfolio-website--xnzf66tqzwls.code.run/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        document.getElementById("responseMessage").innerText =
            result.message || "Message sent successfully";

        form.reset();
    } catch (error) {
        document.getElementById("responseMessage").innerText =
            "Error sending message";
    }
});

// const darkModeBtn = document.getElementById("darkModeBtn");

// darkModeBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     if(document.body.classList.contains("dark-mode")){
//         darkModeBtn.innerText = "☀️ Light Mode";
//     } else {
//         darkModeBtn.innerText = "🌙 Dark Mode";
//     }
// });

// new Typed("#typing",{
//     strings:[
//         "Full Stack Developer",
//         "MERN Stack Developer",
//         "Frontend Developer"
//     ],
//     typeSpeed:60,
//     backSpeed:40,
//     loop:true
// });

async function loadSkills() {
    try {
        const res = await fetch("https://site--portfolio-website--xnzf66tqzwls.code.run/api/skills");
        const skills = await res.json();

        const container = document.getElementById("skillsContainer");
        container.innerHTML = "";

        skills.forEach(skill => {
            container.innerHTML += `
                <div class="skills_box">
                    <i class="fa-brands ${skill.icon}"></i>
                    <h3>${skill.name}</h3>
                </div>
            `;
        });

    } catch (err) {
        console.log(err);
    }
}

loadSkills();