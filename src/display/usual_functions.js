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

function        my_pow(nbr)
{
    var res;

    res = nbr * nbr;
    return (res);
}
