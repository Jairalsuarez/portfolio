

let botonHabilidades = document.querySelector("#habilidades")


botonHabilidades.addEventListener("click", () => {
    let habilidades = document.querySelector("#habilidades1")
    
    habilidades.innerHTML = `

          <div id="whatsapp"  class="   hover:shadow-2xl hover:shadow-[#42c653] rounded-2xl flex justify-center items-center p-6 ">
          <img class="items-center py-3   hover:scale-110 transition-transform duration-300" src="./src/WhatsApp_icon.png" alt="">
          </div>
          <div class="   hover:shadow-2xl hover:shadow-[#e44d26] rounded-2xl flex justify-center items-center p-6 ">
          <img class=" items-center py-3  hover:scale-110 transition-transform duration-300" src="./src/html.svg" alt="">
          </div>
          <div class="hover:shadow-2xl hover:shadow-[#2196f3] rounded-2xl  flex justify-center items-center p-6 aspect-square">
          <img class=" items-center py-3  hover:scale-110 transition-transform duration-300" src="./src//css.svg" alt="">
          </div>
          <div class="hover:shadow-2xl hover:shadow-[#f7df1e] rounded-2xl  flex justify-center items-center p-6 aspect-square">
          <img class="items-center py-3 hover:scale-110 transition-transform duration-300" src="./src/javascript.svg" alt="">
          </div>
          <div class="hover:shadow-2xl hover:shadow-[#41873f] rounded-2xl  flex justify-center items-center p-6 aspect-square">
          <img class="items-center py-9.5  hover:scale-110 transition-transform duration-300" src="./src/nodejs.svg" alt="">
          </div>
          <div class="hover:shadow-2xl hover:shadow-[#14c2b8] rounded-2xl  flex justify-center items-center p-6 aspect-square">
          <img class="items-center py-9.5 hover:scale-110 transition-transform duration-300" src="./src/tailwind.png" alt="">
          </div>
          <div class="hover:shadow-2xl hover:shadow-[#20c4cb] rounded-2xl  flex justify-center items-center p-6 aspect-square">
          <img class="items-center py-3 hover:scale-110 transition-transform duration-300" src="./src/canva.svg" alt="">
          </div>
          <div class="hover:shadow-2xl hover:shadow-[#cb3837] rounded-2xl  flex justify-center items-center p-6 aspect-square">
          <img class="items-center py-3 hover:scale-110 transition-transform duration-300" src="./src/npm.svg" alt="">
          </div>
        

    `
})
