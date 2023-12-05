import { addMilliseconds, format } from "date-fns";
import { IArtista } from "../interfaces/IArtista";
import { IMusica } from "../interfaces/IMusica";
import { IPlaylist } from "../interfaces/IPlaylist";
import { IUsuario } from "../interfaces/IUsuarios";
import { newMusica, newPlaylist } from "./factories";


export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
    return {
        id: user.id,
        nome: user.display_name,
        imagemUrl: user.images.pop().url
    }
}

export function SpotifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
    return {
      id: playlist.id,
      nome: playlist.name,
      imagemUrl: playlist.images.pop().url
    };
  }

  export function SpotifySinglePlaylistParaPlaylist(playlist: SpotifyApi.SinglePlaylistResponse): IPlaylist {
    if(!playlist)
    return newPlaylist()

    return {
      id: playlist.id,
      nome: playlist.name,
      imagemUrl: playlist.images.shift().url,
      musicas: []
    }
  }

export function SpotifyArtistaParaArtista(artista: SpotifyApi.ArtistObjectFull): IArtista{
  return {
    id: artista.id,
    imagemUrl: artista.images.sort((a, b) => a.width - b.width).pop().url,
    nome: artista.name
  }
}

export function SpotifyTrackParaMusica(track: SpotifyApi.TrackObjectFull): IMusica{

  if(!track)
  return newMusica()
  
  const msParaMinutos = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms)

    return format(data, 'mm:ss');
  }
  
  return {
    id: track.uri,
    titulo: track.name,
    album: {
      id: track.id,
      imagemUrl: track.album.images.shift().url,
      nome: track.album.name
    },
    artistas: track.artists.map(artista => ({
      id: artista.id,
      nome: artista.name
    })),
    tempo: msParaMinutos(track.duration_ms)
  }
}