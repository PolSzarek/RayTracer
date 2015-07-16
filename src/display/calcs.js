function        inter_sphere(data, v, sphere)
{
    var a;
    var b;
    var c;
    var delta;
    var k;
    var vx;
    var vy;
    var vz;

    vx = v.vx - sphere.x;
    vy = v.vy - sphere.y;
    vz = v.vz - sphere.z;
    a = vx * vx + vy * vy + vz * vz;
    b = 2 * (data.eye.x * vx + data.eye.y * vy + data.eye.z * vz);
    c = my_pow(data.eye.x) + my_pow(data.eye.y) + my_pow(data.eye.z) -
        my_pow(sphere.radius);
    delta = b * b - 4 * a * c;
    k = calc_k(a, b, delta);
    return (k);
}

function        inter_cone(data, v, cone)
{
    var a;
    var b;
    var c;
    var angle;
    var delta;
    var k;
    var	vx;
    var	vy;
    var	vz;

    vx = v.vx - cone.x;
    vy = v.vy - cone.y;
    vz = v.vz - cone.z;
    angle = my_pow(Math.tan(cone.radius * 0.0174532925));
    a = vx * vx + vy * vy - (vz * vz) / angle;
    b = 2 * (data.eye.x * vx + data.eye.y * vy - ((data.eye.z * vz) / angle));
    c = my_pow(data.eye.x) + my_pow(data.eye.y) - my_pow(data.eye.z) / angle;
    delta = b * b - 4 * a * c;
    if (delta >= 0)
    {
	k = calc_k(a, b, delta);
	return (k);
    }
    else
      return (0);
}

function        inter_cylindre(data, v, cylindre)
{
    var a;
    var b;
    var c;
    var delta;
    var k;
    var	vx;
    var	vy;
    var	vz;
    
    vx = v.vx - cylindre.x;
    vy = v.vy - cylindre.y;
    vz = v.vz - cylindre.z;
    a = vx * vx + vy * vy;
    b = (2 * data.eye.x * vx) + (2 * data.eye.y * vy);
    c = my_pow(data.eye.x) + my_pow(data.eye.y) - my_pow(cylindre.radius);
    delta = b * b - 4 * a * c;
    if (delta >= 0)
    {
	k = calc_k(a, b, delta);
	return (k);
    }
    else
      return (0);
}

function        calc_k(a, b, delta)
{
    var k;
    var k2;

    if (delta >= 0)
    {
        k = (-b + Math.sqrt(delta)) / (2 * a);
        k2 = (-b - Math.sqrt(delta)) / (2 * a);
        if (k > 0 && k2 > 0)
            {
                if (k < k2)
                    return (k);
                else
                    return (k2);
            }
        else if (k > 0 && k2 < 0)
            return (k);
        else if (k2 > 0 && k < 0)
            return (k2);
        else
            return (0);
    }
    else
        return (0);
}
