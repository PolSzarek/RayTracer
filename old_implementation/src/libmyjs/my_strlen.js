function	my_strlen(str)
{
    var		i;

    i = 0;
    if (!str)
	return (0);
    while (str[i])
	i++;
    return (i);
}
