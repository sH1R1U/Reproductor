$(document).ready(function(){
	getSongs();
});
//variable que contendra la cancion
var audio = document.getElementById('player');
//array para la lista de las canciones
var music;

function getSongs(){
	$.getJSON("js/app.json", function(mjson){
		music = mjson;
		genList(music);

	});
}

function playSong(id){
	$('#img').attr('src',music.songs[id].image)
	$('#player').attr('src',music.songs[id].song);
	audio.play();
}

function genList(music){
	$.each(music.songs, function(i, song){
		$('#playList').append('<li class="list-group-item" id="'+i+'">'+song.nombre+'</li>');
	});

	$('#playList li').click(function(){
		var selectedSong = $(this).attr('id');
		playSong(selectedSong);
	});
}

