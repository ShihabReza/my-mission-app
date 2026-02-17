const card = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>addCard(data))
}
card()
// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

const detailsHandler = (id) => {
  
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => loadDitals(data));
};
const loadDitals = (load) =>{
  console.log(load)
  const addLoad = document.getElementById('load-continer')
  addLoad.innerHTML = '';

  addLoad.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-sm ">
  <figure class="px-10 pt-10">
    <img
      src="${load.image}"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${load.category}</h2>
    <h2 class="card-title">${load.description}</h2>
    <h2 class="card-title">$${load.price}</h2>
    <h2 class="card-title">${load.rating}</h2>
    <h2 class="card-title">${load.title}</h2>

    
  </div>
</div>
  `;

  
}

const addCard = (props) =>{
    console.log(props)
   const continer = document.getElementById('tocard')
   
   continer.innerHTML = ''
   props.forEach(item =>{
    const div = document.createElement('div')
    continer.className = "flex flex-wrap justify-center gap-6 "
    div.innerHTML=`
    <div class="card bg-base-100 w-96 shadow-sm ">
  <figure class="h-64 flex items-center justify-center bg-gray-100">
    <img src="${item.image}" 
         alt="${item.title}" 
         class="h-full w-full object-contain"/>
</figure>
  <div class="flex justify-between items-center ">
  <h1 class="card-title ">${item.category}</h1>
  <p class=" text-xs px-2 py-1 rounded">${item.rating}</p>
</div>

  <div class="card-body">
    
    
    
  <h1>${item.title}</h1>
  <h1 className="text-bold">$${item.price}</h1>
    <div class="flex justify-between w-full ">
  <button onclick="detailsHandler(${item.id})" class="btn  btn-md rounded-lg flex items-center gap-2 
               hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-colors duration-300">
    <i class="fa-solid fa-eye"></i>
    Details
  </button>
  <button class="btn  btn-md rounded-lg flex items-center gap-2 
               hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-colors duration-300">
    <i class="fa-solid fa-cart-shopping"></i>
    Add
  </button>
</div>


  </div>
</div>

    ` ;
    continer.appendChild(div)
   })

}
