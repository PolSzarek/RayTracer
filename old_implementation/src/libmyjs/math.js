function	my_sqrt(number, estimate)
{
    var	buf;
    var	cmp;

    if (number == 0)
        return (0);
    if (!estimate)
        estimate = 10;
    buf = estimate;
    estimate = 0.5 * (estimate + (number / estimate));
    cmp = buf - estimate;
    if (cmp < 0)
        cmp = cmp * (-1);
    if (cmp < 0.25)
	return (estimate);
    return (my_sqrt(number, estimate));
}

function	d_to_r(degrees)
{
    var	rad;

    rad = degrees / (180 / (4 * Math.PI));
    return (rad);
}

function	r_to_d(rads)
{
    var	degrees;

    degrees = rads * (180 / (Math.PI));
    return (degrees);
}

function	my_abs(nb)
{
    return (nb | 0);
}

function	trunc3(nb)
{
    var	tmp;

    nb = (nb * 100) | 0;
    nb /= 100;
    return (nb);
}
