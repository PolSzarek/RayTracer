function	piximage(img, x, y, color)
{
    img.data[(x * 4) + (y * img.width * 4)] = color[0];
    img.data[(x * 4) + (y * img.width * 4) + 1] = color[1];
    img.data[(x * 4) + (y * img.width * 4) + 2] = color[2];
    img.data[(x * 4) + (y * img.width * 4) + 3] = color[3];
    return (img);
}

function	colormap(img, color)
{
    var	x;
    var	y;

    x = 0;
    y = 0;
    while (y < img.height * 4)
    {
        while (x < img.width)
            piximage(img, x++, y, color);
        x = 0;
        y++;
    }
    return (img);
}

function	getcolor(img, x, y)
{
    var	color = [];

    if (x > img.width)
	{
	    console.log("getcolor() > x > image width");
	    return (0);
	}
    if (y > img.height)
	{
	    console.log("getcolor() > y > image height");
	    return (0);
	}
    color[0] = img.data[(img.width * 4 * y) + (x * 4)];
    color[1] = img.data[(img.width * 4 * y) + (x * 4) + 1];
    color[2] = img.data[(img.width * 4 * y) + (x * 4) + 2];
    color[3] = img.data[(img.width * 4 * y) + (x * 4) + 3];
    return (color);
}
