var PlaylistName = "WakeUp";
var iTunes = WScript.CreateObject("iTunes.Application");
iTunes.SoundVolume=20;
var volume = iTunes.SoundVolume;
var LibraryName = iTunes.LibraryPlaylist.Name;
var Playlist = iTunes.Sources.ItemByName(LibraryName).Playlists.ItemByName(PlaylistName);
iTunes.SoundVolume = 0;
Playlist.PlayFirstTrack();
iTunes.SoundVolume = volume;
iTunes.Play();
