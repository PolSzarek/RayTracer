function	skip_space(map, cpt)
{
    while (map[cpt.y] && ((isspace(map[cpt.y][cpt.x])) || !map[cpt.y][cpt.x]))
	{
	    if (map[cpt.y][cpt.x] == undefined)
		{
		    cpt.x = 0;
		    ++cpt.y;
		}
	    else
		++cpt.x;
	}
    return (1);
}

function	skip_word(map, cpt)
{
    skip_space(map, cpt);
    while (map[cpt.y] && ((isalphanum(map[cpt.y][cpt.x])) || !map[cpt.y][cpt.x]))
	{
	    if (map[cpt.y][cpt.x] == undefined)
		{
		    cpt.x = 0;
		    ++cpt.y;
		}
	    else
		++cpt.x;
	}
    skip_space(map, cpt);
    return (1);
}

function	isspace(c)
{
    return ((c == ' ') || (c == '\t') || (c == '\n') || (c == undefined));
}

function	isalphanum(c)
{
    return ((c >= 'a' && c <= 'z') ||
	    (c >= 'A' && c <= 'Z') ||
	    (c >= '0' && c <= '9') ||
	    (c == '_')		   ||
	    (c == ':')		   ||
	    (c == '-'))
}
