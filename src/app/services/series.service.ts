import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaSeries } from '../models/ISeriesAPI.model';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=6d94f8ac4c1fd37759842b0d1b8458ce';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarSeries(busca: string): Observable<IListaSeries>{
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaSeries>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a AP I.',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }

}
