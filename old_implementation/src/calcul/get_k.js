function        get_k(a, b, c, delta)
{
    var root1;
    var root2;

    if (delta == 0)
        return (-b / (2 * a));
    root1 = (-b + Math.sqrt(delta)) / (2 * a);
    root2 = (-b - Math.sqrt(delta)) / (2 * a);
    if (root2 < root1 && root2 > 0)
        return (root2);
    else
        return (root1);
}

function        objs_finis(camera, vecteur, obj)
{
    var k;

    vecteur.z += obj.h;
    rotate_x(vecteur, obj.x);
    rotate_y(vecteur, obj.y);
    rotate_z(vecteur, obj.z);
    k = - (camera.oeil.z  + 90) / (vecteur.z);
    set_vecteur(camera, vecteur);
    if (k < 0)
    	return (42);
    else
	return (k);
}

function        calc_cone_2(delta, a, b, c)
{
    if (delta < 0)
        return (42);
    else
        return (get_k(a, b, c, delta));
}

function        calc_cylinder_2(data, camera, vecteur, cylinder)
{
    var	delta;
    var tmp;
    var k;

    delta = (data.b * data.b) - (4 * data.a * data.c);
    if (delta < 0)
        return (42);
    else
        k = get_k(data.a, data.b, data.c, delta);
    if (k != 42)
        tmp = objs_finis(camera, vecteur, cylinder);
    if (tmp <= k && tmp != 42)
        return (42);
    return (k);
}
