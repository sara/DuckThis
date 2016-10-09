 

	

	//gets all the commits	
var tags = document.getElementsByClassName("commit");
	//document.getElementsById(twitter).innerHTML= "merp";
	//var merp = messages[0].innerHTML;
	//console.log(merp);
	var replacement ="";
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
			if(splitString[j] == "shitty" || splitString[j] == "fuck")
			{
				replacement = splitString.slice(0,j);
				replacement[j] = "clean";
				j++;
				//replacement+= splitString.slice(j+1, splitString.length);
			}
			replacement[j] = splitString[j];	
		}

		for (j=0; j<replacement.length; j++)
		{
			result += replacement[j]+ " "
		}
		console.log(result);
		//document.getElementsByClassName("commit").innerHTML = result;

	}

