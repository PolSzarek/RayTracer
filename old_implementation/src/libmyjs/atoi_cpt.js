function	isnum(c)
{
    return (c >= '0' && c <= '9');
}

function	get_ten_pow(map, cpt)
{
    var		i;
    var		ten;

    i = cpt.x;
    ten = 1;
    while (map[cpt.y][i] && isnum(map[cpt.y][i]))
	{
	    ++i;
	    ten *= 10;
	}
    ten /= 10;
    return (ten);
}

function	my_atoi_cpt(map, cpt, obj)
{
    var		nb;
    var		neg;
    var		ten;

    if (map[cpt.y][cpt.x] == '-' && (neg = true) && ++cpt.x);
    nb = 0;
    ten = get_ten_pow(map, cpt);
    while (map[cpt.y][cpt.x] && isnum(map[cpt.y][cpt.x]))
	{
	    nb += (ten * map[cpt.y][cpt.x])
	    ten /= 10;
	    ++cpt.x;
	}
    nb *= neg ? -1 : 1;
    return (nb);
}
