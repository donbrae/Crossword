// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
  $(function() {
    // provide crossword entries in an array of objects like the following example
    // Position refers to the numerical order of an entry. Each position can have
    // two entries: an across entry and a down entry
    var entryData = [
			 	{
					clue: "Whaur ye stey",
					answer: "bit",
					orientation: "across",
					startx: 9,
					starty: 1
				},
			 	{
					clue: "Fou",
					answer: "blootert",
					orientation: "down",
					startx: 9,
					starty: 1
				},
			 	{
					clue: "A few",
					answer: "wheen",
					orientation: "across",
					startx: 7,
					starty: 6
				},
			 	{
					clue: "Tae forder",
					answer: "makforrit",
					orientation: "down",
					startx: 4,
					starty: 2
				},
			 	{
					clue: "Awbody’s faither",
					answer: "JockTamson",
					orientation: "across",
					startx: 1,
					starty: 4
				},
			 	{
					clue: "Ram",
					answer: "tup",
					orientation: "across",
					startx: 9,
					starty: 8
				},
			 	{
					clue: "Threapin back an forrit, giein it laldy",
					answer: "flytin",
					orientation: "across",
					startx: 1,
					starty: 10
				},
			 	{
					clue: "Juist fine",
					answer: "braw",
					orientation: "across",
					startx: 3,
					starty: 8
				},
			 	{
					clue: "Get tae whaur ye want tae be",
					answer: "win",
					orientation: "down",
					startx: 6,
					starty: 8
				},
			 	{
					clue: "Daes for a braken airm",
					answer: "stookie",
					orientation: "down",
					startx: 2,
					starty: 1
				},
			 	{
					clue: "Mither",
					answer: "maw",
					orientation: "down",
					startx: 7,
					starty: 4
				},
			 	{
					clue: "Wirrit seek",
					answer: "ill",
					orientation: "across",
					startx: 6,
					starty: 9
				},
			 	{
					clue: "Gae tapsalteerie",
					answer: "tummle",
					orientation: "across",
					startx: 2,
					starty: 2
				},
			 	{
					clue: "O twa or mair",
					answer: "ilka",
					orientation: "down",
					startx: 6,
					starty: 1
				},
			 	{
					clue: "Daesna hae muckle",
					answer: "puir",
					orientation: "down",
					startx: 11,
					starty: 8
				},
			 	{
					clue: "Greater in quantity",
					answer: "mair",
					orientation: "across",
					startx: 8,
					starty: 11
				},
			 	{
					clue: "Lang may it reek",
					answer: "lum",
					orientation: "down",
					startx: 8,
					starty: 9
				},
			 	{
					clue: "Soukit frae the grund",
					answer: "ile",
					orientation: "down",
					startx: 2,
					starty: 9
				},
			 	{
					clue: "Tak it aff whan the sun’s out",
					answer: "tap",
					orientation: "down",
					startx: 11,
					starty: 1
				}
			];

    $('#puzzle-wrapper').crossword({
      entryData: entryData,
      initOri: 'down',
      showAnswers: false,
      id: "puzzle"
    });

  });

})(jQuery);
