function        init_color(color)
{
    color =
        {
            red: 10,
            green: 10,
            blue: 255,
            opacity: 255,
        }
    return (color);
}

function        color_sphere(color)
{
    color.red = 255;
    color.green = 10;
    color.blue = 10;
    color.opacity = 255;
    return (color);
}

function        color_font(color)
{
    color.red = 0;
    color.green = 0;
    color.blue = 0;
    color.opacity = 255;
    return (color);
}

function        color_plan(color)
{
    color.red = 100;
    color.green = 100;
    color.blue = 100;
    color.opacity = 255;
    return (color);
}

function        color_black(color, k, data)
{
    color.red = 0;
    color.green = 0;
    color.blue = 0;
    color.opacity = 255;
    return (color);
}
