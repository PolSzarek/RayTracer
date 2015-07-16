function	init_rt(map)
{
    var		rt;

    rt = {};
    rt.win = null;
    rt.img = null;
    if (!(rt.obj_list = parse_file(map)))
	return (null);
    if (!(get_eye(rt)))
	return (null);
    if (!(get_window(rt)))
	return (null);
    if (!(get_filter(rt)))
	return (null);
    console.log(rt.filter);
    if (!(assign_funcptr(rt.obj_list)))
	return (null);
    return (rt);
}

function	get_buffer(buffer)
{
    var	x;
    var	y;
    var	map;
    var	obj_list;
    var	rt;

    if (!(map = buffer_parser(buffer, x, y)))
        return (0);
    if ((rt = init_rt(map)) == null)
	return (0);
    print_eye(rt.eye);
    print_win(rt);
    print_filter_matrix(rt.filter);
    print_list(rt.obj_list);
    main_display(rt);
    return (1);
}

function	buf_valid(buffer)
{
    if (!buffer)
	{
	    console.log("upload failed");
	    return (0);
	}
    console.log("file uploaded");
    if ((broken_scope(buffer)) == true)
	return (0);
    if (!(get_buffer(buffer)))
	return (0);
    return (1);
}

function	main()
{
    mlj_init();
    if (!(mlj_upload_button(buf_valid)))
	return (0);
    return (0);
}
