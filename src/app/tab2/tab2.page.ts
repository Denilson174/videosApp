import { IGenero } from './../models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IListaSeries, ISeriesApi } from './../models/ISeriesAPI.model';
import { SeriesService } from './../services/series.service';
import { DadosService } from './../services/dados.service';
import { ISeries } from '../models/ISeries.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  titulo = 'Séries';
  listaVideos: ISeries[] = [
  ];

  listaSeries: IListaSeries;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public serieService: SeriesService,
    public generoService: GeneroService,
    public route: Router) { }

    buscaSeries(evento: any){
      console.log(evento.target.value);
      const busca = evento.target.value;
      if(busca && busca.trim() !== ''){
        this.serieService.buscarSeries(busca).subscribe(dados=>{
          console.log(dados);
          this.listaSeries = dados;
        });
      }
    }

    exibirSeries(serie: ISeriesApi){
      this.dadosService.guardarDados('serie', serie);
      this.route.navigateByUrl('/dados-serie');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada as favoritas.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  ngOnInit(){
    this.generoService.buscarGeneros().subscribe(dados=>{
      console.log('Generos: ',dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);
    });
  }

}
