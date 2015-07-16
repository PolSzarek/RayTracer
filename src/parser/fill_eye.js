function	print_eye(eye)
{
    console.log("\n\n\n\nprinting eye's informations !");
    console.log("-------------------------------------");
    console.log("eye.x : ", eye.x ? eye.x : "0");
    console.log("eye.y : ", eye.y ? eye.y : "0");
    console.log("eye.x : ", eye.z ? eye.z : "0");
    console.log("eye.x_rot : ", eye.x_rot ? eye.x_rot : "0");
    console.log("eye.y_rot : ", eye.y_rot ? eye.y_rot : "0");
    console.log("eye.z_rot : ", eye.z_rot ? eye.z_rot : "0");
    console.log("-------------------------------------\n\n");
}

function	fill_eye(rt, eye)
{
    rt.eye = eye;
    if ((eye.x == undefined)		||
	(eye.y == undefined)		||
	(eye.z == undefined)		||
	(eye.x_rot == undefined)	||
	(eye.y_rot == undefined)	||
	(eye.z_rot == undefined))
	return (false);
    return (true);
}

function	get_eye(rt)
{
    var		cur;

    if ((cur = rt.obj_list) == null || cur == undefined)
	return (null);
    while ((cur))
	{
	    if (my_strcmp(cur.data.type, "eye"))
		{
		    if ((fill_eye(rt, cur.data)) == false)
		    {
			console.log("missing/invalid properties for the eye");
			return (false);
		    }
		    else
			return (true);
		}
	    cur = cur.next;
	}
    console.log("no eye object defined in the source file !");
    return (false);
}
