import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioTempo = document.getElementById("promedio-temporadas");
renderSeriesInTable(series);
promedioTempo.innerHTML = "".concat(getPromedioTemporadas(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(c.id, "</td>\n            <td id=\"nombre-").concat(c.id, "\"><a href=\"#\">").concat(c.nombre, "</a></td>\n            <td>").concat(c.medioDifusion, "</td>\n            <td>").concat(c.temporadas, "</td>\n        ");
        var nombreCell = trElement.querySelector("#nombre-".concat(c.id));
        if (nombreCell) {
            nombreCell.addEventListener('click', function (event) {
                mostrarTarjeta(c);
            });
        }
        seriesTbody.appendChild(trElement);
    });
}
//
function getPromedioTemporadas(series) {
    var totalTemp = 0;
    var promedio = 0;
    series.forEach(function (serie) { return totalTemp = totalTemp + serie.temporadas; });
    return totalTemp / series.length;
}
function mostrarTarjeta(serie) {
    var serieCard = document.getElementById('serie-card');
    var serieTitle = document.getElementById('titulo-card');
    var serieImg = document.getElementById('imagen-card');
    var serieSynopsis = document.getElementById('sinopsis-card');
    var serieLink = document.getElementById('url-card');
    serieTitle.textContent = serie.nombre;
    serieImg.src = serie.imagen;
    serieSynopsis.textContent = serie.sinopsis;
    serieLink.href = serie.url;
    serieCard.style.display = 'block';
}
