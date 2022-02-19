document.getElementById("get-seed").addEventListener("submit", function (e) {
  e.preventDefault();
  const seed = document.getElementById("seedcolor").value;
  const scheme = document.getElementById("schemecolor").value;
  const seedString = seed.slice(1, 7);
  console.log(seedString);
  console.log(scheme);

  const fetchUrl = `https://www.thecolorapi.com/scheme?hex=${seedString}&mode=${scheme}`;

  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => {
      const postsColor = data;
      for (let i = 0; i < 5; i++) {
        console.log(postsColor.colors[i].hex.value);
        console.log(color[i]);
      }
    });
});
