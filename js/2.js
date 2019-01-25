// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var entryData = [
			 	{
					clue: "Maks a eejit o theirsels",
					answer: "roaster",
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Cuttie Scots mak o the nemm Alexander",
					answer: "alec",
					orientation: "down",
					startx: 3,
					starty: 1
				},
			 	{
					clue: "Windae by anither nemm",
					answer: "winnock",
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "The soond o it micht be cried a ‘souch’",
					answer: "wind",
					orientation: "across",
					startx: 8,
					starty: 2
				},
			 	{
					clue: "Seicont cardinal nummer",
					answer: "twa",
					orientation: "down",
					startx: 5,
					starty: 3
				},
			 	{
					clue: "That whilk is pitten at a peep",
					answer: "gas",
					orientation: "down",
					startx: 7,
					starty: 3
				},
			 	{
					clue: "Aften uised tae descrive Scottish wather",
					answer: "dreich",
					orientation: "down",
					startx: 11,
					starty: 2
				},
			 	{
					clue: "Wee, sleekit, cowrin, tim’rous _______",
					answer: "beastie",
					orientation: "down",
					startx: 1,
					starty: 4
				},
			 	{
					clue: "Dinna breinge in",
					answer: "cawcannie",
					orientation: "across",
					startx: 3,
					starty: 4
				},
			 	{
					clue: "Nairae loan wi hooses on ilka side",
					answer: "close",
					orientation: "down",
					startx: 3,
					starty: 6
				},
			 	{
					clue: "Pitten on ruifs, or written on in the aulden days",
					answer: "sclates",
					orientation: "across",
					startx: 1,
					starty: 7
				},
			 	{
					clue: "Licht rain",
					answer: "smirr",
					orientation: "down",
					startx: 7,
					starty: 7
				},
			 	{
					clue: "A cowp",
					answer: "midden",
					orientation: "across",
					startx: 6,
					starty: 9
				},
			 	{
					clue: "The forenicht",
					answer: "een",
					orientation: "down",
					startx: 10,
					starty: 9
				},
			 	{
					clue: "Smaa stane an lime cleidin pitten on the ootside waws o stane biggins",
					answer: "harlin",
					orientation: "across",
					startx: 5,
					starty: 11
				}
			]

		$('#puzzle-wrapper').crossword({
			entryData: entryData,
			initOri: 'across',
			showAnswers: false,
      id: "puzzle"
		});

	})

})(jQuery)
