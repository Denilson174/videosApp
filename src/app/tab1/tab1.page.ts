import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos';
  listaVideos: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos:['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '18/03/2021',
      duracao: '4h 2m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos:['Ação', 'Aventura', 'Fantasia', 'Ficção científica'],
      pagina: '/liga-justica'
    },
    {
      nome: 'Raya e o Último Dragão (2021)',
      lancamento: '04/03/2021',
      duracao: '1h 47m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yXrb84zJidCefyhTWHwo4yCDvwz.jpg',
      generos:['Animação', 'Aventura', 'Fantasia', 'Família', 'Ação']
    },
    {
      nome: 'Maya the Bee: The Golden Orb (2021)',
      lancamento: '07/01/2021',
      duracao: '1h 28m',
      classificacao: 67,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tMS2qcbhbkFpcwLnbUE9o9IK4HH.jpg',
      generos:['Aventura', 'Animação', 'Família']
    },
    {
      nome: 'Soul: Uma Aventura com Alma (2020)',
      lancamento: '25/12/2020',
      duracao: '1h 40m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
      generos:['Família', 'Animação', 'Comédia', 'Drama', 'Música', 'Fantasia']
    },
    {
      nome: 'Cruella (2021)',
      lancamento: '28/05/2021',
      duracao: '2h 14m',
      classificacao: 88,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
      generos:['Comédia', 'Crime']
    },
    {
      nome: 'Monster Hunter (2020)',
      lancamento: '25/02/2021',
      duracao: '1h 43m',
      classificacao: 71,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Am1ipOQiOMrH55tCCT2ObNiF1rW.jpg',
      generos:['Fantasia', 'Ação', 'Aventura']
    },
    {
      nome: 'Godzilla vs. Kong (2021)',
      lancamento: '01/04/2021',
      duracao: '1h 53m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg',
      generos:['Ação', 'Ficção científica']
    }

  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

    exibirFilme(filme: IFilme){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
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
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
