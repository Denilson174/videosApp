import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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
      generos:['Ação', 'Fantasia', 'Aventura']
    },
    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '18/03/2021',
      duracao: '4h 2m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos:['Ação', 'Aventura', 'Fantasia', 'Ficção científica']
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
    }

  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

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
