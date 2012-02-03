var PlaylistName = "WakeUp";
var iTunes = WScript.CreateObject("iTunes.Application");
iTunes.SoundVolume=20;
var LibraryName = iTunes.LibraryPlaylist.Name;
var Playlist = iTunes.Sources.ItemByName(LibraryName).Playlists.ItemByName(PlaylistName);
Playlist.PlayFirstTrack();
iTunes.Play();
