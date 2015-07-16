function	aff_matrix(matrix)
{
    console.log(matrix[0][0], matrix[0][1], matrix[0][2]);
    console.log(matrix[1][0], matrix[1][1], matrix[1][2]);
    console.log(matrix[2][0], matrix[2][1], matrix[2][2]);
    console.log("");
}

function	get_pixel_matrix(img, x, y)
{
    var		pixel_matrix =
	[
	    [getcolor(img, x - 1, y - 1), getcolor(img, x, y - 1),
	     getcolor(img, x + 1, y - 1)],
	    [getcolor(img, x - 1, y), getcolor(img, x, y),
	     getcolor(img, x + 1, y)],
	    [getcolor(img, x - 1, y + 1), getcolor(img, x, y + 1),
	     getcolor(img, x + 1, y + 1)]
	];
    return (pixel_matrix);
}

function        piximage(img, x, y, color)
{
    img.data[(x * 4) + (y * img.width * 4)] = color[0];
    img.data[(x * 4) + (y * img.width * 4) + 1] = color[1];
    img.data[(x * 4) + (y * img.width * 4) + 2] = color[2];
    img.data[(x * 4) + (y * img.width * 4) + 3] = color[3];
    return (img);
}

function        getcolor(img, x, y)
{
    var color = [];

    if (x > img.width)
        return (0);
    if (y > img.height)
        return (0);
    color[0] = img.data[(img.width * 4 * y) + (x * 4)];
    color[1] = img.data[(img.width * 4 * y) + (x * 4) + 1];
    color[2] = img.data[(img.width * 4 * y) + (x * 4) + 2];
    color[3] = img.data[(img.width * 4 * y) + (x * 4) + 3];
    return (color);
}
