function	get_types_dict()
{
    var		dict;

    dict = [];
    dict[0] = "sphere";
    dict[1] = "cone";
    dict[2] = "cylinder";
    dict[3] = null;
    return (dict);
}

function	get_k_hashtable()
{
    var		hash;

    hash = {};
    hash["sphere"] = calc_k_sphere;
    hash["cone"] = calc_k_cone;
    hash["cylinder"] = calc_k_cylinder;
    return (hash);
}

function	assign_k_ptr(obj)
{
    var		i;
    var		dict;
    var		hash;

    i = -1;
    dict = get_types_dict();
    hash = get_k_hashtable();
    while ((dict[++i]))
	{
	    if ((my_strcmp(obj.type, dict[i])))
	    {
		my_strcmp(obj.type, dict[i]);
		obj.is_an_entity = false;
		obj.calc_k = hash[dict[i]];
		return (true);
	    }
	}
    return (false);
}

function	assign_k_calc(obj)
{
    if (!obj)
    {
	console.log("null/undefined object");
	return (false);
    }
    if (!(assign_k_ptr(obj)))
	obj.is_an_entity = true;
   return (true);
}

function	assign_funcptr(list)
{
    var		cur;

    if (!(cur = list))
	return (false);
    while ((cur))
	{
	    if (!(assign_k_calc(cur.data)))
		return (false);
	    cur = cur.next
	}
    return (true);
}
