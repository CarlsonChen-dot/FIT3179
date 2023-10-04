var vg_1 = "./js/UK_symbolmap_with_graticules.json";
vegaEmbed("#symbol_map", vg_1)
  .then(function (result) {})
  .catch(console.error);

var vg_2 = "./js/interactive_bubblechart.json";
vegaEmbed("#bubble", vg_2)
    .then(function (result) {})
    .catch(console.error);