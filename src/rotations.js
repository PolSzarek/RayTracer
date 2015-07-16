function	rotate_x_roll(x, y, z, angle)
{
    var	v;

    v =
	{
	    x:	x,
	    y:	(Math.cos(angle) * y) - (Math.sin(angle) * z),
	    z:	(Math.sin(angle) * y) + (Math.cos(angle) * z),
	};
    return (v);
}

function	rotate_y_yaw(x, y, z, angle)
{
    var	v;

    v =
	{
	    x:	(Math.cos(angle) * x) + (Math.sin(angle) * z),
	    y:	y,
	    z:	-(Math.sin(angle) * x) + (Math.cos(angle) * z)
	}
    return (v);
}

function	rotate_z_pitch(x, y, z, angle)
{
    var	v;

    v =
	{
	    x:	(Math.cos(angle) * x) + (-Math.sin(angle) * y),
	    y:	(Math.sin(angle) * x) + (Math.cos(angle) * y),
	    z:	z
	}
    return (v);
}
