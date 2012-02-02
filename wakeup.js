var PlaylistName="Wake Up";
var iTunes = WScript.CreateObject("iTunes.Application");
iTunes.SoundVolume=20;
var volume=iTunes.SoundVolume;
var LibraryName=iTunes.LibraryPlaylist.Name;
var Playlist=iTunes.Sources.ItemByName(LibraryName).Playlists.ItemByName(PlaylistName);
iTunes.SoundVolume=0;
Playlist.PlayFirstTrack();
Playlist.Shuffle=0;
Playlist.Shuffle=1;
iTunes.NextTrack();
iTunes.NextTrack();
iTunes.SoundVolume=volume
iTunes.Play();
