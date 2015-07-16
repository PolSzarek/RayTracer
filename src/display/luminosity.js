function        cos_angle(data, light)
{
    var vec_a;
    var vec_b;
    var norm_a_b;
    var cos_a;

    norm_a_b = (light.x * data.p.x) + (light.y * data.p.y) + (light.z*data.p.z);
    vec_a = Math.sqrt((light.x*light.x)+(light.y*light.y)+(light.z * light.z));
    vec_b = Math.sqrt((data.p.x*data.p.x) +
		      (data.p.y*data.p.y)+(data.p.z*data.p.z));
    cos_a = norm_a_b / (vec_a * vec_b);
    if (cos_a > 0)
    {
        if (data.color.red + 0.4 * light.red * cos_a < 255)
            data.color.red = data.color.red  + 0.4 * light.red * cos_a;
     else
         data.color.red = 255;
        if (data.color.green + 0.4* light.green * cos_a < 255)
            data.color.green = data.color.green + 0.4 * light.green * cos_a;
     else
         data.color.green = 255;
        if (data.color.blue + 0.4 * light.blue * cos_a < 255)
            data.color.blue = data.color.blue + 0.4 * light.blue * cos_a;
     else
         data.color.blue = 255;
    }
    return (data.color);
}

function        ombre(rt, data, vect, light, x, y)
{
    var obj;
    var k;

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
                crossing_data.k[2] = sphere;
        }
        else if (my_strcmp(obj.data.type, "cone") == 1)
        {
            if ((crossing_data.k[2] == 0 && (cone = inter_cone(rt, vect, obj.data)) > 0) ||
                ((cone = inter_cone(rt, vect, obj.data)) <= crossing_data.k[2] && cone > 0))
                crossing_data.k[2] = cone;
        }
        else if (my_strcmp(obj.data.type, "cylindre") == 1)
        {
            if ((crossing_data.k[2] == 0 && (cylindre = inter_cylindre(rt, vect, obj.data)) > 0) ||
                ((cylindre = inter_cylindre(rt, vect, obj.data)) <= crossing_data.k[2] && cylindre > 0))
                crossing_data.k[2] = cylindre;
        }
        obj = obj.next;
    }
    k = get_little_k(crossing_data.k);
    if (crossing_data.k[k] > 0 && crossing_data.k[k] <= 1)
        {
            data.color.red = data.color.red - 100;
            data.color.green = data.color.green - 100;
            data.color.blue = data.color.blue - 100;
        }
    return (data.color);
}

function        luminosite(rt, crossing_data, x, y)
{
    var light;
    var L;
    var v;

    light = rt.obj_list;
    while (light != null)
    {
        if (my_strcmp(light.data.type, "light") == 1)
        {
            L = init_l(crossing_data.p, light.data);
            v = init_v(L.x, L.y, L.z);
            crossing_data.color = cos_angle(crossing_data, light.data);
            crossing_data.color = ombre(rt, crossing_data, v, light.data, x, y);
	}
        light = light.next;
    }
    return (crossing_data.color);
}
