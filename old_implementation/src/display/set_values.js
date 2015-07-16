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

function        set_eye(camera, rt)
{
    camera.oeil.x = rt.eye_save.x;
    camera.oeil.y = rt.eye_save.y;
    camera.oeil.z = rt.eye_save.z;
}

function        set_color(color, tmp)
{
    color.red = tmp.data.red;
    color.green = tmp.data.green;
    color.blue = tmp.data.blue;
}
