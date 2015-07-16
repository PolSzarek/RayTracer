function	main_display(rt)
{
    var	win;

    rt.win = mlj_new_window(rt.width, rt.height);
    rt.img = mlj_new_image(rt.win, rt.width, rt.height);
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
            color = calc(pixel_x, pixel_y, rt, color);
            make_my_pixel(img, cpt_y, color)
            cpt_y += (width * 4);
	    pixel_y++;
        }
	if (pixel_x % (width / 10) == 0)
	    mlj_put_image_to_window(rt.win, img, 0, 0);
	cpt_x += 4;
        pixel_x++;
    }
    return (img);
}

function        calc(pixel_x, pixel_y, rt, color)
{
    var crossing_data;

    crossing_data = init_crossing(color);
    crossing_data.p = init_p();
    crossing_data.vect = init_v(300 - rt.eye.x, rt.width / 2 - pixel_x -rt.eye.y,
				rt.height / 2 - pixel_y - rt.eye.z);
    crossing_data = my_inter(rt, crossing_data, crossing_data.vect, pixel_x, pixel_y);
    crossing_data.color = luminosite(rt, crossing_data, pixel_x, pixel_y);
    return (crossing_data.color);
}

function        my_inter(rt, crossing_data, vect, x, y)
{
    var	obj;
    var little_k;
    var	cone;
    var	sphere;
    var	cylindre;

    obj = rt.obj_list;
    crossing_data.k[0] = 0;
    crossing_data.k[1] = -(rt.eye.z / vect.vz);
    crossing_data.k[2] = 0;
    crossing_data.k[3] = null;
    while (obj != null)
    {
    	if (my_strcmp(obj.data.type, "sphere") == 1)
	{
	    if ((crossing_data.k[2] == 0 && (sphere = inter_sphere(rt, vect, obj.data)) > 0) ||
		((sphere = inter_sphere(rt, vect, obj.data)) <= crossing_data.k[2] && sphere > 0))
	    {
	    	crossing_data.k[2] = sphere;
	    	crossing_data.color.red = obj.data.red;
	    	crossing_data.color.green = obj.data.green;
	    	crossing_data.color.blue = obj.data.blue;
	    }
	}
    	else if (my_strcmp(obj.data.type, "cone") == 1)
	{
	    if ((crossing_data.k[2] == 0 && (cone = inter_cone(rt, vect, obj.data)) > 0) ||
		((cone = inter_cone(rt, vect, obj.data)) <= crossing_data.k[2] && cone > 0))
	    {
	    	crossing_data.k[2] = cone;
	    	crossing_data.color.red = obj.data.red;
	    	crossing_data.color.green = obj.data.green;
	    	crossing_data.color.blue = obj.data.blue;
	    }
	}
    	else if (my_strcmp(obj.data.type, "cylindre") == 1)
	{
	    if ((crossing_data.k[2] == 0 && (cylindre = inter_cylindre(rt, vect, obj.data)) > 0) ||
		((cylindre = inter_cylindre(rt, vect, obj.data)) <= crossing_data.k[2] && cylindre > 0))
	    {
	    	crossing_data.k[2] = cylindre;
	    	crossing_data.color.red = obj.data.red;
	    	crossing_data.color.green = obj.data.green;
	    	crossing_data.color.blue = obj.data.blue;
	    }
	}
    	obj = obj.next;
    }
    little_k = get_little_k(crossing_data.k);
    if (little_k == -1)
	crossing_data.p = fill_p(rt, crossing_data.vect, -2);
    else
	crossing_data.p = fill_p(rt, crossing_data.vect, crossing_data.k[little_k]);
    if (little_k == 0 || little_k == 1)
        crossing_data.color = color_plan(crossing_data.color);
    else if (little_k == 2)
	crossing_data.color = crossing_data.color;
    else
        crossing_data.color = color_font(crossing_data.color);
    return (crossing_data);
}

function        get_little_k(k)
{
    var save_cpt;
    var res;
    var cpt;

    res = 0;
    cpt = 0;
    while (k[cpt] != null)
    {
        if (k[cpt] > res && res <= 0 && k[cpt] > 0)
        {
            res = k[cpt];
            save_cpt = cpt;
        }
        else if (k[cpt] < res && res > 0 && k[cpt] > 0)
        {
            res = k[cpt];
            save_cpt = cpt;
        }
        cpt++;
    }
    if (res == 0)
        return (-1);
    else
        return (save_cpt);
}
