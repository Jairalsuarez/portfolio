const habilidades = [
    {
        id: 1,
        nombre: "HTML5",
        experiencia: "Junior",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png",
    },
    {
        id: 2,
        nombre: "CSS3",
        experiencia: "Junior",
        image: "https://cdn-icons-png.freepik.com/512/732/732190.png"
    },
    {
        id: 3,
        nombre: "JavaScript",
        experiencia: "Junior",
        image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png"
    },
    {
        id: 4,
        nombre: "Tailwind",
        experiencia: "Junior",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
    },
    {
        id: 5,
        nombre: "React",
        experiencia: "Junior",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png"
    },
     {
        id: 6,
        nombre: "GitHub",
        experiencia: "Junior",
        image: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
    {
        id: 7,
        nombre: "npm",
        experiencia: "Junior",
        image: "../src/npm_icon_146141.png"
    }
];

const contenedor = document.getElementById("contenedor");

habilidades.forEach((skill, index) => {
    const card = document.createElement("div");
    card.className = "animate-on-scroll opacity-0 translate-y-10 group bg-white dark:bg-slate-800 flex flex-col p-8 gap-4 justify-center items-center border border-slate-100 dark:border-slate-700 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default";
    card.style.transitionDelay = `${index * 100}ms`;
    
    card.innerHTML = `
        <div class="bg-slate-50 dark:bg-slate-700 p-6 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-slate-600 group-hover:rotate-6 transition-all duration-500">
            <img class="w-16 h-16 object-contain" src="${skill.image}" alt="${skill.nombre}">
        </div>
        <div class="text-center">
            <h3 class="font-black text-xl text-blue-950 dark:text-white">${skill.nombre}</h3>
            <span class="text-blue-500 dark:text-amber-400 text-sm font-bold uppercase tracking-widest">${skill.experiencia}</span>
        </div>
    `;
    contenedor.appendChild(card);
});

const nav = document.getElementById("nav");
const button = document.querySelector("#button1");

button.addEventListener("click", () => {
    nav.classList.toggle("hidden");
    button.classList.toggle("rotate-90");
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.add('py-4');
        header.classList.remove('py-2');
    }
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

emailjs.init("zBpPYdP3pqYAvisCG");

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const btnSubmit = this.querySelector('button');
    const originalText = btnSubmit.textContent;
    btnSubmit.textContent = "Enviando...";
    btnSubmit.disabled = true;

    emailjs.sendForm("service_eflhem7", "template_yi6el1a", this)
        .then(() => {
            alert("¡Mensaje enviado con éxito!");
            this.reset();
        })
        .catch((error) => {
            alert("Error al enviar.");
            console.error(error);
        })
        .finally(() => {
            btnSubmit.textContent = originalText;
            btnSubmit.disabled = false;
        });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');

const applyTheme = (isDark) => {
    if (isDark) {
        document.documentElement.classList.add('dark');
        if(darkModeToggle) darkModeToggle.checked = true;
    } else {
        document.documentElement.classList.remove('dark');
        if(darkModeToggle) darkModeToggle.checked = false;
    }
};

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    applyTheme(true);
} else {
    applyTheme(false);
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        const isDark = darkModeToggle.checked;
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}