import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioTempo = document.getElementById("promedio-temporadas");
renderSeriesInTable(series);
promedioTempo.innerHTML = "".concat(getPromedioTemporadas(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                               <td>").concat(c.nombre, "</td>\n                               <td>").concat(c.medioDifusion, "</td>\n                               <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var totalTemp = 0;
    var promedio = 0;
    series.forEach(function (serie) { return totalTemp = totalTemp + serie.temporadas; });
    return totalTemp / series.length;
}
