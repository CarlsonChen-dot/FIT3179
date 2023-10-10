var vg_1 = "./js/UK_symbolmap_with_graticules.json";
vegaEmbed("#symbol_map", vg_1)
  .then(function (result) {})
  .catch(console.error);

var vg_2 = "./js/interactive_bubblechart.json";
vegaEmbed("#bubble", vg_2)
    .then(function (result) {})
    .catch(console.error);
    
var vg_3 = "./js/bot5Uni.json";
vegaEmbed("#bot5", vg_3)
    .then(function (result) {})
    .catch(console.error);

var vg_4 = "./js/top5Uni.json";
vegaEmbed("#top5", vg_4)
    .then(function (result) {})
    .catch(console.error);

var vg_5 = "./js/interactive_scatterplot.json";
vegaEmbed("#scatter", vg_5)
    .then(function (result) {})
    .catch(console.error);