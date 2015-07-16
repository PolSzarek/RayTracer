function	init_cpt()
{
    var		cpt;

    cpt =
	{
	    x:		0,
	    y:		0,
	    scoped:	0
	};
    return (cpt);
}

function	parse_file(map)
{
    var		list;
    var		cpt;
    var		obj;

    cpt = init_cpt();
    list = null;
    while (map[cpt.y])
	{
	    if ((obj = parse_next_object(map, list, cpt)) == null)
		return (null);
	    list = push_list(list, obj);
	}
    return (list);
}
