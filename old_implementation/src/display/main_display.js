function	main_display(rt)
{
    var	win;

    rt.win = mlj_new_window(rt.width, rt.height);
    rt.img = mlj_new_image(rt.win, rt.width, rt.height);
    rt.eye_save = eye_save(rt.eye);
    fill_image(rt.img, rt.width, rt.height, rt);
    if (rt.filter != undefined)
        rt.img = fourier(rt.img, rt.win, rt.filter);
    mlj_put_image_to_window(rt.win, rt.img, 0, 0);
    return (1);
}

function	fill_image(img, width, height, rt)
{
    var	color;
    var	pixel_x;
    var	pixel_y;
    var	cpt_y;
    var cpt_x;

    pixel_x = 0;
    cpt_x = 0;
    color = init_color(color);
    while (pixel_x < width)
    {
	pixel_y = 0;
        aff_loading(pixel_x, width);
        cpt_y = cpt_x;
        while (pixel_y < height)
        {
            color = init_cam_vect(pixel_x, pixel_y, rt, color);
            make_my_pixel(img, cpt_y, color)
            cpt_y += (width * 4);
	    pixel_y++;
        }
	cpt_x += 4;
        pixel_x++;
    }
    return (img);
}
