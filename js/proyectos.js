// js/proyectos.js

const proyectos = [
    {
        id: 1,
        titulo: "Gestor de Facturas CRUD",
        descripcion: "Aplicación completa para gestionar facturas con operaciones completas y filtros avanzados.",
        tecnologias: ["Html", "Tailwind", "JS"], // JS se resaltará en ámbar como en la imagen
        imagen: "../src/facturas.png", 
        demoUrl: "https://facturas-ten.vercel.app/",
        repoUrl: "https://github.com/Jairalsuarez/facturas.git"
    },
    {
        id: 2,
        titulo: "Gustum Recipes App",
        descripcion: "Aplicación para gestionar facturas con operaciones completas y filtros avanzados.",
        tecnologias: ["React", "Tailwind", "Route", "JS"], // JS se resaltará en ámbar como en la imagen
        imagen: "../src/food.png", 
        demoUrl: "https://unrivaled-kelpie-928b9e.netlify.app/",
        repoUrl: "https://github.com/Jairalsuarez/recipesapp.git"
    },
    {
        id: 3,
        titulo: "Billetera Virtual",
        descripcion: "Aplicación para gestionar facturas con operaciones completas y filtros avanzados.",
        tecnologias: ["React", "Tailwind", "Route", "JS"],
        imagen: "../src/wallet.png", 
        demoUrl: "https://loquacious-arithmetic-1cd4c2.netlify.app/",
        repoUrl: "https://github.com/Jairalsuarez/walletproject.git"
    }
];

const contenedor = document.getElementById("proyectos-contenedor");

proyectos.forEach((proyecto, index) => {
    // Generar badges de tecnologías (con resaltado en ámbar para JS)
    const techBadges = proyecto.tecnologias.map(tech => {
        const esJS = tech.toLowerCase() === 'js';
        const bgClass = esJS ? "bg-amber-400 text-slate-950 font-bold" : "bg-slate-800 text-slate-300";
        return `<span class="${bgClass} text-xs px-3 py-1 rounded-full cursor-default select-none">${tech}</span>`;
    }).join('');

    const card = document.createElement("article");
    // Clases para el aspecto impecable, tamaño uniforme y cursor pointer
    card.className = "tarjeta-proyecto flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-slate-700 transition-all duration-300 group cursor-pointer opacity-0 translate-y-8";
    card.style.transitionDelay = `${index * 100}ms`;
    
    // Si la URL de demo es GitHub, cambiamos el texto del botón
    const esRepoComoDemo = proyecto.demoUrl.includes('github.com');
    const textoBotonDemo = esRepoComoDemo ? 'Ver Repo' : 'Ver Demo';

    // Placeholder exacto de la imagen como en la referencia
    const contenidoImagen = proyecto.imagen 
        ? `<img src="${proyecto.imagen}" alt="Captura de ${proyecto.titulo}" class="w-full h-full object-cover select-none">`
        : `<div class="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-500 cursor-default select-none">
             <span class="text-sm font-medium tracking-wide">Añade tu imagen aquí</span>
           </div>`;

    card.innerHTML = `
        <div class="relative w-full aspect-video border-b border-slate-800 overflow-hidden" onclick="window.open('${proyecto.demoUrl}', '_blank')">
            ${contenidoImagen}
            <div class="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors duration-300"></div>
        </div>
        
        <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-slate-100 mb-2 cursor-pointer hover:text-amber-400 transition-colors" onclick="window.open('${proyecto.demoUrl}', '_blank')">
                ${proyecto.titulo}
            </h3>
            
            <p class="text-slate-400 text-sm mb-6 flex-grow leading-relaxed cursor-default line-clamp-2">
                ${proyecto.descripcion}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-8 mt-auto pt-4 border-t border-slate-800/60">
                ${techBadges}
            </div>
            
            <div class="grid grid-cols-2 gap-3 mt-auto">
                <a href="${proyecto.demoUrl}" target="_blank" class="flex items-center justify-center text-sm font-semibold bg-white text-slate-950 hover:bg-slate-100 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm">
                    ${textoBotonDemo}
                </a>
                <a href="${proyecto.repoUrl}" target="_blank" class="flex items-center justify-center text-sm font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer shadow-sm">
                    Código
                </a>
            </div>
        </div>
    `;
    
    contenedor.appendChild(card);
});

// Reutilizamos el Observer para las animaciones (basado en tu código previo)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // Margen inferior para activar la animación antes
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target); // Dejamos de observar una vez visible
        }
    });
}, observerOptions);

// Observar las tarjetas después de un pequeño tiempo para que rendericen
setTimeout(() => {
    document.querySelectorAll('.tarjeta-proyecto').forEach(el => observer.observe(el));
}, 100);

// Sincronizar Modo Oscuro con el index principal (basado en tu código previo)
const applyTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    }
};
applyTheme();