function	print_filter(filter)
{
    if (!filter)
	return (false);
    console.log("\n\n\n\nprinting filter's informations !");
    console.log("-------------------------------------");
    console.log("filter.f1_1", filter.f1_1);
    console.log("filter.f1_2", filter.f1_2);
    console.log("filter.f1_3", filter.f1_3);
    console.log("filter.f2_1", filter.f2_1);
    console.log("filter.f2_2", filter.f2_2);
    console.log("filter.f2_3", filter.f2_3);
    console.log("filter.f3_1", filter.f3_1);
    console.log("filter.f3_2", filter.f3_2);
    console.log("filter.f3_3", filter.f3_3);
    console.log("-------------------------------------\n\n");
}

function	print_filter_matrix(filter)
{
    if (!filter)
	return (false);
    console.log("\n\n\nprinting filter's matrix");
    console.log("-------------------------------------");
    console.log(filter[0][0], filter[0][1], filter[0][2]);
    console.log(filter[1][0], filter[1][1], filter[1][2]);
    console.log(filter[2][0], filter[2][1], filter[2][2]);
    console.log("-------------------------------------");
}

function	get_filter_matrix(filter)
{
    var		res;


    res =
	[
	    [filter.f1_1, filter.f1_2, filter.f1_3],
	    [filter.f2_1, filter.f2_2, filter.f2_3],
	    [filter.f3_1, filter.f3_2, filter.f3_3]
	]
    console.log(res);
    return (res);
}

function	fill_filter(rt, filter)
{
    filter.f1_1 = (filter.f1_1 != undefined) ? filter.f1_1 : 0;
    filter.f1_2 = (filter.f1_2 != undefined) ? filter.f1_2 : 0;
    filter.f1_3 = (filter.f1_3 != undefined) ? filter.f1_3 : 0;
    filter.f2_1 = (filter.f2_1 != undefined) ? filter.f2_1 : 0;
    filter.f2_2 = (filter.f2_2 != undefined) ? filter.f2_2 : 1;
    filter.f2_3 = (filter.f2_3 != undefined) ? filter.f2_3 : 0;
    filter.f3_1 = (filter.f3_1 != undefined) ? filter.f3_1 : 0;
    filter.f3_2 = (filter.f3_2 != undefined) ? filter.f3_2 : 0;
    filter.f3_3 = (filter.f3_3 != undefined) ? filter.f3_3 : 0;
    rt.filter = get_filter_matrix(filter);
    if (filter)
	print_filter(filter);
    if (rt.filter)
	print_filter_matrix(rt.filter);
    return (true);
}

function	get_filter(rt)
{
    var		cur;

    console.log("filter !");
    if ((cur = rt.obj_list) == null || cur == undefined)
	return (null);

    console.log("filter !");
    while ((cur))
	{
	    if (my_strcmp(cur.data.type, "filter"))
		{
		    fill_filter(rt, cur.data);
		    console.log("filter !");
		    return (true);
		}
	    cur = cur.next;
	}
    console.log("no filter object defined in the source file !");
    return (true);
}
