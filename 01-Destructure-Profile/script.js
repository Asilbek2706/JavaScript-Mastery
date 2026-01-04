const userData = {
    fullName: "Asilbek Karomatov",
    job: "Full-Stack Developer",
    skills: ["Javascript", "Sass", "NodeJS", "React", "Python", "SQL"],
    socials: {
        github: "https://github.com/Asilbek2706"
    },
    stats: {
        projects: 15,
        experience: "2 years"
    }
}

const profileApp = {
    title: "Dev Portfolio",

    init() {
        const {
            fullName,
            job,
            skills,
            skills: [top1, top2, ...otherSkills],
            stats: { projects, experience }
        } = userData;

        const card = document.querySelector('#profile-card');

        const skillsHTML = skills.map(s => `<li>${s}</li>`).join('');

        card.innerHTML = `
            <h2>${fullName}</h2>
            <p>${job}</p>
            <div class="stats">
                <b>Projects:</b> ${projects} | <b>Experience:</b> ${experience}
            </div>
            <ul class="skills-list">${skillsHTML}</ul>
            <small>Main direction: ${top1} and ${top2}</small>
        `;
    },

    showLog() {
        alert(`${this.title}: ${userData.fullName} statistics shown in console!`);
        console.log("Complete information:", userData);
    }
};

profileApp.init();

const btn = document.querySelector('#info-btn');
if(btn) {
    btn.addEventListener('click', profileApp.showLog.bind(profileApp));
}