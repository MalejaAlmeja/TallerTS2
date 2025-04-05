import { Serie } from './Serie.js'
import { series } from './data.js'

const seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioTempo: HTMLElement =  document.getElementById("promedio-temporadas")!;

renderSeriesInTable(series);
promedioTempo.innerHTML = `${getPromedioTemporadas(series)}`

function renderSeriesInTable(series: Serie[]):void{
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${c.id}</td>
            <td id="nombre-${c.id}"><a href="#">${c.nombre}</a></td>
            <td>${c.medioDifusion}</td>
            <td>${c.temporadas}</td>
        `;
        let nombreCell = trElement.querySelector(`#nombre-${c.id}`);
        if (nombreCell) {
            nombreCell.addEventListener('click', (event) => {
                mostrarTarjeta(c);  
            });
        }
        seriesTbody.appendChild(trElement);
    })
}
//
function getPromedioTemporadas(series: Serie[]): number {
    let totalTemp: number = 0;
    let promedio: number = 0;
    series.forEach((serie) => totalTemp = totalTemp + serie.temporadas);
    return totalTemp/series.length;
}

function mostrarTarjeta(serie:Serie){
    const serieCard = document.getElementById('serie-card') as HTMLDivElement;
    const serieTitle = document.getElementById('titulo-card') as HTMLHeadingElement;
    const serieImg = document.getElementById('imagen-card') as HTMLImageElement;
    const serieSynopsis = document.getElementById('sinopsis-card') as HTMLParagraphElement;
    const serieLink = document.getElementById('url-card') as HTMLAnchorElement;

    serieTitle.textContent = serie.nombre;
    serieImg.src = serie.imagen;
    serieSynopsis.textContent = serie.sinopsis;
    serieLink.href = serie.url;
    serieCard.style.display = 'block';
}
