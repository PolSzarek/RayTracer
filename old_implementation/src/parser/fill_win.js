function	print_win(rt)
{
    console.log("\n\n\n\nprinting window's informations !");
    console.log("-------------------------------------");
    console.log("rt.height : ", rt.height ? rt.height : "0");
    console.log("rt.width : ", rt.width ? rt.width : "0");
    console.log("-------------------------------------\n\n");
}

function	fill_window(rt, win)
{
    if (((rt.height = win.height) == undefined)	||
	((rt.width = win.width)) == undefined)
	return (false);
    rt.height = win.height;
    rt.width = win.width;
    return (true);
}

function	get_window(rt)
{
    var		cur;

    if ((cur = rt.obj_list) == null || cur == undefined)
	return (null);
    while ((cur))
	{
	    if (my_strcmp(cur.data.type, "window"))
		{
		    if ((fill_window(rt, cur.data)) == false)
		    {
			console.log("missing/invalid properties for the win");
			return (false);
		    }
		    else
			{
			    rt.height = 900;
			    rt.width = 1600;
			    return (true);
			}
		}
	    cur = cur.next;
	}
    console.log("no window parameters defined in the source file !");
    return (false);
}
