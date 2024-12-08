// Fetch All Pets

const allPets = async () => {

  document.getElementById("loading").style.display = "none"

  const petApi = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
  const responsePet = await petApi.json()

  petsforEach(responsePet.pets)
}

// loading Spinner Start
const loadingFun = () => {
  document.getElementById("loading").style.display = "block"
  setTimeout(() => {
    allPets();
  }, 2000);
}

loadingFun()
// loading Spinner End

// All Share Parent Card
const parentCard = document.getElementById("card");


const petsforEach = (petsData) => {
  // console.log(petsData)

  petsData.forEach(petsElement => {
    // console.log(petsElement)
    const childCard = document.createElement("div");
    childCard.innerHTML = `
      <div class="card hover:shadow-2xl border border-gray-200 rounded ">
        <figure>
          <img src="${petsElement.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${petsElement.pet_name}</h2>
          <div>
            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-braille'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Breed: ${petsElement.breed ? `${petsElement.breed}` : "Not Found"}</p>
              </div>
            </div>
            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-briefcase'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Birth: ${petsElement.date_of_birth ? `${petsElement.date_of_birth}` : "Not Available"}</p>
              </div>
            </div>
            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-command'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Gender: ${petsElement.gender ? `${petsElement.gender}` : "Not Found"}</p>
              </div>
            </div>
            <div class="flex gap-1 pb-3">
              <div class="">
                <i class='bx bx-dollar'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Price : ${petsElement.price ? `${petsElement.price}` : "Not Available"}$</p>
              </div>
            </div>
            <hr>
          </div>
          <div class="card-actions justify-between pt-5">
            <button onclick="likeButton('${petsElement.image}')" class="btn btn-sm border border-gray-200 rounded bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>

            </button>

            <button onclick="adoptModal()" class="btn btn-sm text-[#0E7A81] border border-gray-200 rounded bg-white">Adopt</button>

            <button onclick="detailsId('${petsElement.petId}')" class="btn btn-sm text-[#0E7A81] border border-gray-200 rounded bg-white">Details</button>
          </div>
        </div>
      </div>
    `
    parentCard.appendChild(childCard);
  });
}

// Like Button Click
const likeButton = (like) => {
  // console.log('hello ' + like)

  const parentLikeDiv = document.getElementById("likeParent");
  const childLike = document.createElement("div")

  childLike.innerHTML = `
    <div>
      <img src="${like}" alt="Shoes" />
    </div>
  `

  parentLikeDiv.appendChild(childLike)
  // console.log(parentLikeDiv)

}

// Adopt Button Click
const adoptModal = () => {
  console.log("hello")
  my_modal_3.showModal()
  setTimeout(() => {
    my_modal_3.close()
  }, 2000);
}


// Fetch Pet Details by ID

const detailsId = async (idParameter) => {
  // console.log(idParameter)

  const idAPI = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${idParameter}`)
  const idResponse = await idAPI.json();

  // console.log(idResponse.petData)

  const modalParent = document.getElementById("modal-body");
  modalParent.innerHTML = "";

  const modalBody = document.createElement("div");
  modalBody.innerHTML = `

    <div>
      <figure>
        <img class="w-full" src="${idResponse.petData.image}" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${idResponse.petData.pet_name}</h2>
        <div class="flex justify-between flex-col lg:flex-row">
          <div>
            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-braille'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Breed: ${idResponse.petData.breed ? `${idResponse.petData.breed}` : "Not Available"}</p>
              </div>
            </div>

            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-command'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Gender: ${idResponse.petData.gender ? `${idResponse.petData.gender}` : "Not Found"}</p>
              </div>
            </div>

            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bxs-chip'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Vaccinated Status: ${idResponse.petData.vaccinated_status ? `${idResponse.petData.vaccinated_status}` : "Not Found"}</p>
              </div>
            </div>
          </div>

          <div>
            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-briefcase'></i>
              </div>
              <div>
                <p>Birth: ${idResponse.petData.date_of_birth ? `${idResponse.petData.date_of_birth}` : "Not Found"}</p>
              </div>
            </div>
            <div class="flex gap-1 pb-3">
              <div class="">
                <i class='bx bx-dollar'></i>
              </div>
              <div>
                <p>Price : ${idResponse.petData.price ? `${idResponse.petData.price}` : "Not Available"}$</p>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <h2 class="card-title pb-2">Details Information</h2>
        <p class="text-sm">${idResponse.petData.pet_details}</p>
      </div>
    </div>
`

  modalParent.appendChild(modalBody)

  my_modal_5.showModal()

}


// Fetch All Pet Categories

const categories = async () => {
  const apiURL = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
  const response = await apiURL.json();
  fetchAPI(response.categories)
}

categories();

const fetchAPI = (apiParameter) => {
  // console.log(apiParameter)
  const parentButton = document.getElementById("button-container");
  apiParameter.forEach(categoriesData => {
    // console.log(categoriesData)
    // console.log(categoriesData.category)

    const childButton = document.createElement("div");
    childButton.innerHTML = `
      <div
      class="bgButton btn sm:btn-lg flex gap-3 font-bold text-base" onclick="categoryFun('${categoriesData.category}', this)">
        <img src="${categoriesData.category_icon}" alt="">
          <button class="">${categoriesData.category}</button>
      </div>`
    parentButton.appendChild(childButton)

  });
}


// Fetch Pets by Category

const categoryFun = async (categoryParameter, thisButton) => {
  // console.log(categoryParameter, thisButton)


  // Active Button Start

  const bgBtnColor = document.getElementsByClassName("bgButton")
  // console.log(bgBtnColor)

  for (btnBgColor of bgBtnColor) {
    // console.log(btnColor)

    btnBgColor.classList.remove('active', 'border-[#0E7A81]', 'hover:border-[#0E7A81]', 'bg-[#0E7A811A]', 'hover:bg-[#0E7A811A]')
  }

  thisButton.classList.add('active', 'border-[#0E7A81]', 'hover:border-[#0E7A81]', 'bg-[#0E7A811A]', 'hover:bg-[#0E7A811A]')

  // Active Button End


  // Category Loading Spinner Start
  document.getElementById("loading").style.display = "block"

  setTimeout(async () => {

    const categoryAPI = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryParameter}`)

    const categoryResponse = await categoryAPI.json();

    categoryforEach(categoryResponse.data)
  }, 2000);

  parentCard.innerHTML = ""

}

const categoryforEach = (singleCategory) => {
  // console.log(singleCategory)


  document.getElementById("loading").style.display = "none"

  // Not Found Category Data
  if (singleCategory.length == 0) {
    // console.log("error")

    document.getElementById("error").classList.remove("hidden")
    return;
  }

  document.getElementById("error").classList.add("hidden")

  singleCategory.forEach(categoryElement => {
    // console.log(categoryElement)

    const childCard = document.createElement("div");
    childCard.innerHTML = `
      <div class="card hover:shadow-2xl border border-gray-200 rounded ">
        <figure>
          <img src="${categoryElement.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${categoryElement.pet_name}</h2>
          <div>
            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-braille'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Breed: ${categoryElement.breed ? `${categoryElement.breed}` : "Not Available"}</p>
              </div>
            </div>
            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-briefcase'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Birth: ${categoryElement.date_of_birth ? `${categoryElement.date_of_birth}` : "Not Available"}</p>
              </div>
            </div>
            <div class="flex gap-1 pb-2">
              <div class="">
                <i class='bx bx-command'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Gender: ${categoryElement.gender ? `${categoryElement.gender}` : "Not Available"}</p>
              </div>
            </div>
            <div class="flex gap-1 pb-3">
              <div class="">
                <i class='bx bx-dollar'></i>
              </div>
              <!-- dynamic text -->
              <div>
                <p>Price : ${categoryElement.price ? `${categoryElement.price}` : "Not Available"}$</p>
              </div>
            </div>
            <hr>
          </div>
          <div class="card-actions justify-between pt-5">
            <button onclick="likeButton('${categoryElement.image}')" class="btn btn-sm border border-gray-200 rounded bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>

            </button>

            <button onclick="adoptModal()" class="btn btn-sm text-[#0E7A81] border border-gray-200 rounded bg-white">Adopt</button>
            <button onclick="detailsId('${categoryElement.petId}')" class="btn btn-sm text-[#0E7A81] border border-gray-200 rounded bg-white">Details</button>
          </div>
        </div>
      </div>
    `

    parentCard.appendChild(childCard);

  });



  // Sort Price

  document.getElementById('sortBtn').addEventListener('click', () => {
    // console.log(singleCategory.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)))

    parentCard.innerHTML = ""

    singleCategory.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))


    singleCategory.forEach(categoryElement => {
      // console.log(categoryElement)
  
      const childCard = document.createElement("div");
      childCard.innerHTML = `
        <div class="card hover:shadow-2xl border border-gray-200 rounded ">
          <figure>
            <img src="${categoryElement.image}" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${categoryElement.pet_name}</h2>
            <div>
              <div class="flex gap-1 pb-2">
                <div class="">
                  <i class='bx bx-braille'></i>
                </div>
                <!-- dynamic text -->
                <div>
                  <p>Breed: ${categoryElement.breed ? `${categoryElement.breed}` : "Not Available"}</p>
                </div>
              </div>
              <div class="flex gap-1 pb-2">
                <div class="">
                  <i class='bx bx-briefcase'></i>
                </div>
                <!-- dynamic text -->
                <div>
                  <p>Birth: ${categoryElement.date_of_birth ? `${categoryElement.date_of_birth}` : "Not Available"}</p>
                </div>
              </div>
              <div class="flex gap-1 pb-2">
                <div class="">
                  <i class='bx bx-command'></i>
                </div>
                <!-- dynamic text -->
                <div>
                  <p>Gender: ${categoryElement.gender ? `${categoryElement.gender}` : "Not Available"}</p>
                </div>
              </div>
              <div class="flex gap-1 pb-3">
                <div class="">
                  <i class='bx bx-dollar'></i>
                </div>
                <!-- dynamic text -->
                <div>
                  <p>Price : ${categoryElement.price ? `${categoryElement.price}` : "Not Available"}$</p>
                </div>
              </div>
              <hr>
            </div>
            <div class="card-actions justify-between pt-5">
              <button onclick="likeButton('${categoryElement.image}')" class="btn btn-sm border border-gray-200 rounded bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
  
              </button>
  
              <button onclick="adoptModal()" class="btn btn-sm text-[#0E7A81] border border-gray-200 rounded bg-white">Adopt</button>
              <button onclick="detailsId('${categoryElement.petId}')" class="btn btn-sm text-[#0E7A81] border border-gray-200 rounded bg-white">Details</button>
            </div>
          </div>
        </div>
      `
  
      parentCard.appendChild(childCard);
  
    });

  })

}