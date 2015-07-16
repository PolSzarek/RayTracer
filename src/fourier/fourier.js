function	get_div(matrix, filter)
{
    var		ret;
    var		x;
    var		y;

    ret = x = y = 0;
    while (x < 3)
	{
	    y = 0;
	    while (y < 3)
		{
		    if (matrix[x][y] != undefined)
			ret += filter[x][y];
		    y++;
		}
	    x++;
	}
    if (ret == 0)
	return (1);
    return (ret);
}

function	img_cpy(img, new_img)
{
    var		i;
    var		j;

    i = j = 0;
    while (i < 1900)
	{
	    j = 0;
	    while (j < 900)
		{
		    piximage(new_img, i, j, getcolor(img, i, j));
		    j++;
		}
	    i++;
	}
    return (new_img);
}

function	transform_pixel(img, coordinates, filter, new_img)
{
    var		pix_mtrx;

    pix_mtrx = get_pixel_matrix(img, coordinates[0], coordinates[1]);
    pix_mtrx = fourierize_matrix(pix_mtrx, filter);
    piximage(new_img, coordinates[0], coordinates[1], pix_mtrx[1][1]);
}

function	fourier(img, win, filter)
{
    var		filter;
    var		x;
    var		y;
    var		coordinates;
    var		new_img;

    x = y = 0;
    new_img = mlj_new_image(win, 1900, 900);
    while (x < 1900)
	{
	    while (y < 900)
		{
		    coordinates = get_coordinates(x, y);
		    transform_pixel(img, coordinates, filter, new_img);
		    y++;
		}
	    y = 0;
	    x++;
	}
    return (new_img);
}
