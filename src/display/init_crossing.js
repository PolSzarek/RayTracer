function        init_crossing(color)
{
    var k = [];

    crossing_data =
        {
            k: k,
            vect: null,
            color: color,
            p: init_p(),
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

    if (Number.isNaN(vx) == true)
	vx = 0;
    if (Number.isNaN(vy) == true)
	vy = 0;
    if (Number.isNaN(vz) == true)
	vz = 0;
    vect =
        {
            vx: vx,
            vy: vy,
            vz: vz,
        }
    return (vect);;
}

function        fill_p(rt, vect, k)
{
    crossing_data.p.x = rt.eye.x + k * vect.vx;
    crossing_data.p.y = rt.eye.y + k * vect.vy;
    crossing_data.p.z = rt.eye.z + k * vect.vz;
    return (crossing_data.p);
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
