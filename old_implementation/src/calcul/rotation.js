function        rotate_x(vecteur, angle)
{
    var angle;
    var save_z;
    var save_y;

    angle = angle * (Math.PI / 180);
    save_y = vecteur.y;
    save_z = vecteur.z;
    vecteur.y = save_y * Math.cos(angle) - save_z * Math.sin(angle);
    vecteur.z = save_y * Math.sin(angle) + save_z * Math.cos(angle);
}

function        rotate_y(vecteur, angle)
{
    var angle;
    var save_x;
    var save_z;

    angle = angle * (Math.PI / 180);
    save_x = vecteur.x;
    save_z = vecteur.z;
    vecteur.x = save_x * Math.cos(angle) + save_z * Math.sin(angle);
    vecteur.z = -save_x * Math.sin(angle) + save_z * Math.cos(angle);
}

function        rotate_z(vecteur, angle)
{
    var angle;
    var save_x;
    var save_y;

    angle = angle * (Math.PI / 180);
    save_y = vecteur.y;
    save_x = vecteur.x;
    vecteur.x = save_x * Math.cos(angle) - save_y * Math.sin(angle);
    vecteur.y = save_x * Math.sin(angle) + save_y * Math.cos(angle);
}
