	//gets all the commits	
var tags = document.getElementsByClassName("commit");
//15 in nouns
var replace_nouns = ["doodlybop", "merp", "diphthong", "codswallop", 
"doozy", "collywobbles", "fuddy-duddy", "balderdash", "fiddledeedee",
 "squeegee", "noggin", "hullabaloo", "spelunker", "gobbledygook", "toasting", 
 "bamboozle", "kerplunk", "bedazzle",
"befuddle", "finagle", "shenaneganize", "skedaddle", "squelch", 
"babble", "drip", "gurgle"];
	//document.getElementsById(twitter).innerHTML= "merp";
	//var merp = messages[0].innerHTML;
	//console.log(merp);
	var replacement =[];
	var result = "";
	for (i=0; i<tags.length; i++)
	{
		result = "";
		//one commit at a time, whitespace trimmed off
		var commit = tags[i].innerHTML.trim();
		//array of words in each commit, one commit at a time
		var splitString = commit.split(" ");
		for (j=0; j<splitString.length; j++)
		{
			if(splitString[j] == "shitty" || splitString[j] == "fuck" || splitString[j] == "shit"
			||	splitString[j] == "shite" || splitString[j] == "fucking" || splitString[j] == "shit,")
			{
				//replacement = splitString.slice(0,j);
				num = Math.random()*25;
				num = parseInt(num, 10);
				console.log(num);
				replacement[j] = replace_nouns[num];
				//replacement[j] = splitString[j];
				//j++;
				//replacement+= splitString.slice(j+1, splitString.length);
			}
			else
			{
				replacement[j] = splitString[j];
			}
				
		}

		for (j=0; j<replacement.length; j++)
		{
			if(replacement[j]!=null)
			{
				result += replacement[j]+ " ";
			}
		}
		console.log(result);
		tags[i].innerHTML = result;
		//document.getElementsByClassName("commit").innerHTML = result;

	}

