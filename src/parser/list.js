function	push_list(list, added_data)
{
    var		elem;

    elem =
	{
	    data:	added_data,
	    next:	list
	};
    return (elem);
}

function	print_list_data(data)
{
    console.log("type :", data.type);
    console.log("is_an_entity :", (data.is_an_entity ? "entity" : "forme"));
    console.log("calc_k :", (data.calc_k ? data.calc_k : "none"));
    console.log("x :", (data.x));
    console.log("y :", (data.y));
    console.log("z :", (data.z));
    console.log("x_rot :", (data.x_rot));
    console.log("y_rot :", (data.y_rot));
    console.log("z_rot :", (data.z_rot));
    console.log("radius :", (data.radius));
    console.log("angle :", (data.a));
    console.log("brightness :", (data.brightness));
    console.log("red :", (data.red));
    console.log("green :", (data.green));
    console.log("blue :", (data.blue));
    return (true);
}

function	print_list(list)
{
    var		cur;
    var		i;

    i = 0;
    if ((cur = list) == null)
	return (console.log("null list"));
    console.log("printing linked list of objects");
    while ((cur))
    {
	console.log("--------------elem #", i++, "-----------------")
	if ((cur.data))
	    print_list_data(cur.data);
	else
	    console.log("null data");
	console.log("------------------------------------------")
	cur = cur.next;
    }
    return (true);
}
