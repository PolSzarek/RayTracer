function	broken_scope(buffer)
{
    var		i;
    var		scoped;

    i = 0;
    scoped = false;
    while ((buffer[i]))
	{
	    if (buffer[i] == '{' && scoped === true)
	    {
		console.log("broken scope : { in scoped buffer");
		return (true);
	    }
	    if (buffer[i] == '{')
		scoped = true;
	    if (buffer[i] == '}' && scoped === false)
	    {
		console.log("broken scope : } in unscoped buffer");
		return (true);
	    }
	    if (buffer[i] == '}')
		scoped = false;
	    ++i;
	}
    return (has_invalid_chars(buffer));
}

function	has_invalid_chars(buffer)
{
    var		i;
    var		line;

    i = 0;
    line = 1;
    if (buffer == undefined || buffer == null)
	return (true);
    while (buffer[i])
	{
	    if ((!(isalphanum(buffer[i])))	&&
		(!(isspace(buffer[i])))		&&
		(buffer[i] != '{')		&&
		(buffer[i] != '}'))
		{
		    console.log("invalid char, please fuck right off");
		    console.log("error : at line : ", line);
		    return (true);
		}
	    line = (buffer[i] == '\n') ? (line + 1) : line;
	    ++i;
	}
    return (false);
}
