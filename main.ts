import { Serie } from './Serie.js'
import { series } from './data.js'

const seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioTempo: HTMLElement =  document.getElementById("promedio-temporadas")!;

renderSeriesInTable(series);
promedioTempo.innerHTML = `${getPromedioTemporadas(series)}`

function renderSeriesInTable(series: Serie[]):void{
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                               <td>${c.nombre}</td>
                               <td>${c.medioDifusion}</td>
                               <td>${c.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    })
}

function getPromedioTemporadas(series: Serie[]): number {
    let totalTemp: number = 0;
    let promedio: number = 0;
    series.forEach((serie) => totalTemp = totalTemp + serie.temporadas);
    return totalTemp/series.length;
}