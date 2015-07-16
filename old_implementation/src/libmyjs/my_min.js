function	my_min(a, b, c, d)
{
    var		min;
    var		i;

    i = 0;
    min = a;
    while (arguments[i])
    {
	if (min < 0)
	    min = arguments[i];
	else
	    {
		min = ((arguments[i] > 0 && arguments[i] < min) ?
		       arguments[i] : min);
	    }
	++i;
    }
    return (min);
}
