function	buffer_parser_map_init(buffer, map, y)
{
    var	to_y;

    to_y = 0;
    while (to_y < y)
	{
	    map[to_y] = [];
	    to_y++;
	}
    return (map);
}

function	echo_parser_success(map)
{
    var	to_y;

    console.log("i parsed the file ! check out this log !");
    to_y = 0;
    while (map[to_y])
	console.log(map[to_y++]);
    return (0);
}

function	buffer_parser(buffer)
{
    var	map;
    var	x;
    var	y;
    var	i;

    map = [[]]
    x = 0;
    y = 0;
    i = 0;
    map[y] = [];
    while (buffer[i])
    {
	if (buffer[i] == '\n')
	    {
		i++;
		++y;
		map[y] = [];
		x = 0;
	    }
	else if (buffer[i])
	    {
		map[y][x] = buffer[i];
		x++;
		i++;
	    }
    }
    return (map);
}
