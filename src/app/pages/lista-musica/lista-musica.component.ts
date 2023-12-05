import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusica } from 'src/app/common/factories';
import { IMusica } from 'src/app/interfaces/IMusica';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-lista-musica',
  templateUrl: './lista-musica.component.html',
  styleUrls: ['./lista-musica.component.scss']
})
export class ListaMusicaComponent implements OnInit, OnDestroy {

  bannerImagemUrl = '';
  bannerTexto = '';

  musicas: IMusica[] = [];
  musicaAtual: IMusica = newMusica();
  playIcone = faPlay;

  subs: Subscription[] = []

  constructor(
    private activedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
    ) { }

  ngOnInit(): void {
    this.obterMusicas()
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe())
  }

  obterMusicas() {
    const sub = this.activedRoute.paramMap
      .subscribe(async params => {
        const tipo = (params.get('tipo'));
        const id = (params.get('id'));
        await this.obterDadosDaPagina(tipo, id)
      })

      this.subs.push(sub)
  }

  async obterDadosDaPagina(tipo: string, id: string) {
    if(tipo === 'playlist')
    await this.obterDadosPlaylist(id)
    else
    await this.obterDadosArtista(id)
  }

  async obterDadosPlaylist(playlistId: string) {
    const playlistMusicas = await this.spotifyService.buscarMusicasPlaylist(playlistId)
    console.log(playlistMusicas);
    
  }

  async obterDadosArtista(artistaId: string) {

  }
}
