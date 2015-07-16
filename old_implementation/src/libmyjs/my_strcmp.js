function	my_strcmp(str, cmp)
{
    var		i;

    i = 0;
    if (str == undefined || cmp == undefined)
	return (false);
    while (str[i] && cmp[i])
	{
	    if (str[i] != cmp[i])
		return (false);
	    ++i;
	}
    return (true);
}
