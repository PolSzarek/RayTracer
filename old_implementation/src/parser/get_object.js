function	parse_next_object(map, list, cpt)
{
    var		obj;

    skip_space(map, cpt);
    if (map[cpt.y] && isalphanum(map[cpt.y][cpt.x]))
    {
	skip_space(map, cpt);
	if ((obj = get_object(map, list, cpt)) == null)
	{
	    console.log("error : line ", cpt.y, "char n°", cpt.x);
	    return (null);
	}
    }
    else
    {
	console.log("missing object name before {, line ", cpt.y);
	return (null);
    }
    return (obj);
}

function	set_object_data(act, map, cpt, obj)
{
    var		nb;
    var		functab;

    functab = get_functab();
    nb = my_atoi_cpt(map, cpt, obj);
    (functab[act])(obj, nb);
    return (true);
}

function	get_obj_type(map, cpt)
{
    var		name;
    var		i;

    name = [];
    i = 0;
    skip_space(map, cpt);
    if (!isalphanum(map[cpt.y][cpt.x]))
	return (null);
    while (map[cpt.y][cpt.x] && (isalphanum(map[cpt.y][cpt.x])))
    {
	name[i] = map[cpt.y][cpt.x];
	++cpt.x;
	++i;
    }
    skip_space(map, cpt);
    return (name);
}

function	get_object_param(map, cpt, obj)
{
    var		act;

    skip_space(map, cpt);
    if ((map[cpt.y][cpt.x] == '}'))
	{
	    cpt.scoped = false;
	    cpt.x++;
	    skip_space(map, cpt);
	    return (true);
	}
    if ((act = get_pos_in_dict(map, cpt)) == null)
	return (false);
    set_object_data(act, map, cpt, obj)
    return ;
}

function	get_object(map, list, cpt)
{
    var		obj;

    obj = {};
    if ((obj.type = get_obj_type(map, cpt)) == false)
	return (null);;
    skip_word(map, cpt);
    if (!map[cpt.y] || map[cpt.y][cpt.x] != '{')
	{
	    console.log("no { after object declaration, line ", cpt.y);
	    return (null);
	}
    cpt.x++;
    cpt.scoped = true;
    while (cpt.scoped === true && map[cpt.y])
	{
	    skip_space(map, cpt);
	    if (!map[cpt.y]  && !map[cpt.y][cpt.x] && cpt.scoped)
		{
		    console.log("unclosed scope (end of file) !");
		    return (null);
		}
	    else
		get_object_param(map, cpt, obj);
	}
    return (obj);
}
