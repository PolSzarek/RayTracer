function        calc_central_component(matrix, filter, div, component)
{
    var         c_pxl;
    var         x;
    var         y;

    c_pxl = matrix[1][1];
    c_pxl[component] *= filter[1][1];
    x = y = 0;
    while (x < 3)
        {
            y = 0;
            while (y < 3)
                {
                    if (matrix[x][y][component] != undefined &&
                       !(x == 1 && y == 1))
                        c_pxl[component] +=
                    (filter[x][y] * matrix[x][y][component]);
                    y++;
                }
            x++;
        }

    c_pxl[component] /= div;
    return (c_pxl);
}

function        fourierize_matrix(matrix, filter)
{
    var         div;

    div = get_div(matrix, filter);
    matrix[1][1] = calc_central_component(matrix, filter, div, 0);
    matrix[1][1] = calc_central_component(matrix, filter, div, 1);
    matrix[1][1] = calc_central_component(matrix, filter, div, 2);
    return (matrix);
}

function	get_coordinates(x, y)
{
    var		ret;

    ret = [];
    ret[0] = x;
    ret[1] = y;
    return (ret);
}
