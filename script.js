var products = [
  {
    name: "sofa chair ",
    headline: "confortable to seat",
    price: "10,000",
    image:
      "https://media.istockphoto.com/id/1136446684/photo/empty-living-room-with-sofa.webp?b=1&s=170667a&w=0&k=20&c=d4kE1iLjFrujZCcrcheSVLxFeXO3UZVEmvToNaIug5c=",
  },

  {
    name: "wood chair ",
    headline: "confortable to arrange",
    price: "5,000",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "stool  ",
    headline: "confortable to adjust",
    price: "1,000",
    image:
      "https://media.istockphoto.com/id/827667992/photo/studio-shot-of-classic-black-tall-wooden-barstool-standing-on-white.webp?b=1&s=170667a&w=0&k=20&c=PEs5dYdxXdYsg9NuKS9HxE6urm8Vh-zZg5Lafj0GwXM=",
  },
];

var popular = [
  {
    name: "sofa chair ",
    headline: "confortable to seat",
    price: "10,000",
    image:
      "https://media.istockphoto.com/id/1136446684/photo/empty-living-room-with-sofa.webp?b=1&s=170667a&w=0&k=20&c=d4kE1iLjFrujZCcrcheSVLxFeXO3UZVEmvToNaIug5c=",
  },

  {
    name: "wood chair ",
    headline: "confortable to arrange",
    price: "5,000",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "stool  ",
    headline: "confortable to adjust",
    price: "1,000",
    image:
      "https://media.istockphoto.com/id/827667992/photo/studio-shot-of-classic-black-tall-wooden-barstool-standing-on-white.webp?b=1&s=170667a&w=0&k=20&c=PEs5dYdxXdYsg9NuKS9HxE6urm8Vh-zZg5Lafj0GwXM=",
  },
];

function produtcsData() {
  var clutter = "";
  products.forEach((obj) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
          <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
          <img src="${obj.image}" alt="img"/></div>
          <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">
              ${obj.headline}
            </h1>
            <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                <h3 class="font-semibold opacity-20">Radhe-Radhe</h3>
                <h4 class="font-semibold mt-2">&#8377 ${obj.price}</h4>
              </div>
              <button class="w-10 h-10 rounded-full shader text-yellow-400">
                <i class="ri-add-line"></i>
              </button>
            </div>
          </div>
        </div>`;
    document.querySelector(".products").innerHTML = clutter;
  });
}

function popularData() {
  var clutter = "";
  popular.forEach((pop) => {
    clutter += ` <div
    class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
  >
    <div
      class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        src="${pop.image}"
        alt=""
      />
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${pop.headline}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
        Radhe Furniture..
      </h4>
      <h4 class="mt-3 font-semibold text-zinc-500">&#8377 ${pop.price}</h4>
    </div>
  </div>`;
    document.querySelector(".populars").innerHTML = clutter;
  });
}
popularData();

produtcsData();
