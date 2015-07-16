function        make_my_pixel(rendu, cpt_y, color)
{
    rendu.data[cpt_y++] = color.red;
    rendu.data[cpt_y++] = color.green;
    rendu.data[cpt_y++] = color.blue;
    rendu.data[cpt_y++] = color.opacity;
}

function        aff_loading(pixel_x, x)
{
    if (pixel_x / x * 100 == 0)
        console.log("0%");
    else if (pixel_x / x * 100 >= 24.95 && pixel_x / x * 100 <= 25.05)
        console.log("25%");
    else if (pixel_x / x * 100 >= 49.95 && pixel_x / x * 100 <= 50.05)
        console.log("50%");
    else if (pixel_x / x * 100 >= 74.95 && pixel_x / x * 100 <= 75.05)
        console.log("75%");
}

function        eye_save(eye)
{
    var eye_save;

    eye_save = {};
    eye_save.x = eye.x;
    eye_save.y = eye.y;
    eye_save.z = eye.z;
    eye_save.x_rot = eye.x_rot;
    eye_save.y_rot = eye.y_rot;
    eye_save.z_rot = eye.z_rot;
    return (eye_save);
}

function        my_pow(nbr)
{
    var res;

    res = nbr * nbr;
    return (res);
}
