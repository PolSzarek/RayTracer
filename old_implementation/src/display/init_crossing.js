function        init_crossing(color)
{
    crossing_data =
        {
            k: 0,
            vect: init_v(0, 0, 0),
            p: init_p(),
	    color: color,
        }
    return (crossing_data);
}

function        init_p()
{
    var p;

    p =
        {
            x: 0,
            y: 0,
            z: 0,
        }
    return (p);;
}

function        init_v(vx, vy, vz)
{
    var vect;

    vect =
        {
            vx: vx,
            vy: vy,
            vz: vz,
        }
    return (vect);;
}

function        init_l(p, light)
{
    var l;

    l =
        {
            x: light.x - p.x,
            y: light.y - p.y,
            z: light.z - p.z,
        }
    return (l);
}

function        fill_p(rt, crossing_data, k)
{
    crossing_data.p.x = rt.eye.x + k * crossing_data.vect.vx;
    crossing_data.p.y = rt.eye.y + k * crossing_data.vect.vy;
    crossing_data.p.z = rt.eye.z + k * crossing_data.vect.vz;
    return (crossing_data.p);
}
