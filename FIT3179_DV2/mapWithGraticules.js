var vg_1 = "./js/UK_symbolmap_with_graticules.json";
vegaEmbed("#symbol_map", vg_1, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_2 = "./js/histogram.json";
vegaEmbed("#histo", vg_2, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_3 = "./js/bot5Uni.json";
vegaEmbed("#bot5", vg_3, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_4 = "./js/top5Uni.json";
vegaEmbed("#top5", vg_4, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_5 = "./js/interactive_scatterplot.json";
vegaEmbed("#scatter", vg_5, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_6 = "./js/pyramidchart.json";
vegaEmbed("#pyramid", vg_6, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);

var vg_7 = "./js/piechart.json";
vegaEmbed("#pie", vg_7, {renderer: "svg", actions: false})
    .then(function (result) { })
    .catch(console.error);