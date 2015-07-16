function	init_cam_vect(x, y, rt, color)
{
    var camera =
        {
            oeil :
            {
                x : rt.eye.x,
                y : rt.eye.y,
                z : rt.eye.z,
            },
            plan :
            {
                width : rt.width,
                height : rt.height,
            }
        };
    var vecteur =
        {
            x : 100,
            y : (camera.plan.width / 2) - x,
            z : (camera.plan.height / 2) - y,
	    pix_x : x,
	    pix_y : y,
	    k : 42,
	};
    return (init_k(rt, color, camera, vecteur));
}

function	init_k(rt, color, camera, vecteur)
{
    var tmp;

    tmp = rt.obj_list;
    while (tmp.data.is_an_entity)
	tmp = tmp.next;
    vecteur.k = (tmp.data.calc_k)(camera, vecteur, tmp.data);
    set_color(color, tmp);
    set_eye(camera, rt);
    return (init_k_2(rt, color, camera, vecteur));
}

function	init_k_2(rt, color, camera, vecteur)
{
    var good_k;
    var tmp_k;
    var tmp;
    var crossing_data;

    tmp = rt.obj_list;
    good_k = vecteur.k;
    crossing_data = init_crossing(color);
    crossing_data.vect.vx = vecteur.x;
    crossing_data.vect.vy = vecteur.y;
    crossing_data.vect.vz = vecteur.z;
    while (tmp)
    {
        if (!tmp.data.is_an_entity)
    	{
    	    tmp_k = (tmp.data.calc_k)(camera, vecteur, tmp.data);
    	    set_eye(camera, rt);
    	    if (tmp_k < good_k && tmp_k != 42)
            {
                good_k = tmp_k;
    		set_color(color, tmp);
            }
    	}
        tmp = tmp.next;
    }
    if (good_k == 42)
    {
	color = init_color(color);
    	crossing_data.color = init_color(color);
    	crossing_data.k = 0;
    }
    else
    {
    	crossing_data.k = good_k;
    	crossing_data.color.red = color.red;
    	crossing_data.color.green = color.green;
    	crossing_data.color.blue = color.blue;
	crossing_data.p = fill_p(rt, crossing_data, good_k);
    }
    crossing_data = luminosite(rt, crossing_data, vecteur);
    return (crossing_data.color);
}
