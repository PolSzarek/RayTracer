function        cos_angle(data, light, vecteur)
{
    var vec_a;
    var vec_b;
    var norm_a_b;
    var cos_a;

    norm_a_b = (light.x * data.p.x) + (light.y *
        data.p.y) + (light.z * data.p.z);
    vec_a = Math.sqrt((light.x * light.x) + (light.y *
                      light.y) + (light.z * light.z));
    vec_b = Math.sqrt((data.p.x * data.p.x) + (data.p.y *
                      data.p.y) + (data.p.z * data.p.z));
    cos_a = norm_a_b / (vec_a * vec_b);
    // if (cos_a > 0)
    // {
    //     if (data.color.red + light.red * cos_a < 255)
    //         data.color.red = data.color.red + light.red * cos_a;
    //     else
    //         data.color.red = 255;
    //     if (data.color.green + light.green * cos_a < 255)
    //         data.color.green = data.color.green + light.green * cos_a;
    //     else
    //         data.color.green = 255;
    //     if (data.color.blue + light.blue * cos_a < 255)
    //         data.color.blue = data.color.blue + light.blue * cos_a;
    //     else
    //         data.color.blue = 255;
    // }
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
    crossing_data.k[0] = -(-300 / vect.vz);
    crossing_data.k[1] = -(rt.eye.z / vect.vz);
    crossing_data.k[2] = null;
    crossing_data.k[3] = null;
    while (obj != null)
    {
        if (my_strcmp(obj.data.type, "sphere") == 1)
        {
            if (x == 300 && y == 400)
                console.log(rt, vect, obj.data);
            if (crossing_data.k[2] == null && inter_sphere(rt, vect, obj.data) > 0)
                crossing_data.k[2] = inter_sphere(rt, vect, obj.data);
            else if (inter_sphere(rt, vect, obj.data) <= crossing_data.k[1] &&
                     inter_sphere(rt, vect, obj.data) > 0)
                crossing_data.k[2] = inter_sphere(rt, vect, obj.data);
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

function        luminosite(rt, crossing_data, vecteur)
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
            crossing_data.color = ombre(rt, crossing_data, v, light.data);
        }
        light = light.next;
    }
    return (crossing_data);
}

function        inter_sphere(data, v, sphere)
{
    var a;
    var b;
    var c;
    var delta;
    var k;
    var vx;
    var vy;
    var vz;

    vx = v.vx - sphere.x;
    vy = v.vy - sphere.y;
    vz = v.vz - sphere.z;
    a = vx * vx + vy * vy + vz * vz;
    b = 2 * (data.eye.x * vx + data.eye.y * vy + data.eye.z * vz);
    c = my_pow(data.eye.x) + my_pow(data.eye.y) + my_pow(data.eye.z) -
        my_pow(sphere.radius);
    delta = b * b - 4 * a * c;
    k = calc_k(a, b, delta);
    return (k);
}

function        calc_k(a, b, delta)
{
    var k;
    var k2;

    if (delta >= 0)
    {
        k = (-b + Math.sqrt(delta)) / (2 * a);
        k2 = (-b - Math.sqrt(delta)) / (2 * a);
        if (k > 0 && k2 > 0)
            {
                if (k < k2)
                    return (k);
                else
                    return (k2);
            }
        else if (k > 0 && k2 < 0)
            return (k);
        else if (k2 > 0 && k < 0)
            return (k2);
        else
            return (0);
    }
    else
        return (0);
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

