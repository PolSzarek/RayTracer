function        calc_plan(camera, vecteur, plan)
{
    var k;

    rotate_x(vecteur, plan.x_rot);
    rotate_y(vecteur, plan.y_rot);
    rotate_z(vecteur, plan.z_rot);
    k = - (camera.oeil.z  + 90) / (vecteur.z);
    set_vecteur(camera, vecteur);
    if (k < 0)
        return (42);
    else
        return (k);
}

function        calc_cone(camera, vecteur, cone)
{
    var a;
    var b;
    var c;
    var delta;

    rotate_x(vecteur, cone.x_rot);
    rotate_y(vecteur, cone.y_rot);
    rotate_z(vecteur, cone.z_rot);
    vecteur.x += cone.x;
    vecteur.y += cone.y;
    vecteur.z += cone.z;
    a = (vecteur.x * vecteur.x) + (vecteur.y * vecteur.y) -
	(vecteur.z * (vecteur.z / (cone.a * cone.a)));
    b = 2 * ((camera.oeil.x + cone.x) * vecteur.x) +
        2 * ((camera.oeil.y + cone.y) * vecteur.y) -
        2 * (((camera.oeil.z + cone.z) * vecteur.z) / (cone.a * cone.a));
    c = (( camera.oeil.x + cone.x) * ( camera.oeil.x + cone.x) +
         ( camera.oeil.y + cone.y) * ( camera.oeil.y + cone.y)) -
         ((( camera.oeil.z + cone.z) *
	   ( camera.oeil.z + cone.z)) / (cone.a * cone.a));
    delta = (b * b) - (4 * a * c);
    set_vecteur(camera, vecteur);
    return (calc_cone_2(delta, a, b, c));
}

function        calc_cylinder(camera, vecteur, cylinder)
{
    var data =
        {
            a : 0,
            b : 0,
            c : 0,
	}

    rotate_x(vecteur, cylinder.x_rot);
    rotate_y(vecteur, cylinder.y_rot);
    rotate_z(vecteur, cylinder.z_rot);
    vecteur.x += cylinder.x;
    vecteur.y += cylinder.y;
    vecteur.z += cylinder.z;
    data.a = Math.pow(vecteur.x, 2) + Math.pow(vecteur.y, 2);
    data.b = (2 * (camera.oeil.x * vecteur.x)) + (2 * (camera.oeil.y * vecteur.y));
    data.c = (Math.pow(camera.oeil.x, 2) + Math.pow(camera.oeil.y, 2)) - Math.pow(cylinder.radius, 2);
    set_vecteur(camera, vecteur);
    return (calc_cylinder_2(data, camera, vecteur, cylinder));
}

function        calc_sphere(camera, vecteur, sphere)
{
    var a;
    var b;
    var c;
    var delta;

    vecteur.x += sphere.x;
    vecteur.y += sphere.y;
    vecteur.z += sphere.z;
    a = Math.pow(vecteur.x, 2) +
        Math.pow(vecteur.y, 2) +
        Math.pow(vecteur.z, 2);
    b = 2 * (camera.oeil.x * (vecteur.x) +
             camera.oeil.y * (vecteur.y) +
             camera.oeil.z * (vecteur.z));
    c = Math.pow(camera.oeil.x, 2) +
        Math.pow(camera.oeil.y, 2) +
        Math.pow(camera.oeil.z, 2) -
        sphere.radius * sphere.radius;
    delta = (b * b) - (4 * a * c);
    set_vecteur(camera, vecteur);
    if (delta < 0)
        return (42);
    else
        return (get_k(a, b, c, delta));
}
