/*
** IMPORTANT : les noms les plus longs en premier dans le dico
** si un conflit peut arriver (x et x_rot par exemple) !
** sinon le match se fera trop tot et ca fera du chacarron ...
*/

function	get_dict2(dict)
{

    return (dict);
}

function	get_dict()
{
    var		dict;

    dict = [];
    dict[0] = "width:";
    dict[1] = "height:";
    dict[2] = "alpha:";
    dict[3] = "shine:";
    dict[4] = "radius:";
    dict[5] = "height:";
    dict[6] = "brightness:";
    dict[7] = "red:";
    dict[8] = "green:";
    dict[9] = "blue:";
    dict[10] = "x_rot:";
    dict[11] = "y_rot:";
    dict[12] = "z_rot:";
    dict[13] = "f1_1:";
    dict[14] = "f1_2:";
    dict[15] = "f1_3:";
    dict[16] = "f2_1:";
    dict[17] = "f2_2:";
    dict[18] = "f2_3:";
    dict[19] = "f3_1:";
    dict[20] = "f3_2:";
    dict[21] = "f3_3:";
    dict[22] = "x:";
    dict[23] = "y:";
    dict[24] = "z:";
    dict[25] = "a:";
    dict[26] = 'h:';
    dict[27] = null;
    return (dict);
}

function	get_functab()
{
    var		functab;

    functab = [];

    functab[0] = set_width;
    functab[1] = set_height;
    functab[2] = set_alpha;
    functab[3] = set_shine;
    functab[4] = set_radius;
    functab[5] = set_height;
    functab[6] = set_brightness;
    functab[7] = set_red;
    functab[8] = set_green;
    functab[9] = set_blue;
    functab[10] = set_x_rot;
    functab[11] = set_y_rot;
    functab[12] = set_z_rot;
    functab[13] = set_f1_1;
    functab[14] = set_f1_2;
    functab[15] = set_f1_3;
    functab[16] = set_f2_1;
    functab[17] = set_f2_2;
    functab[18] = set_f2_3;
    functab[19] = set_f3_1;
    functab[20] = set_f3_2;
    functab[21] = set_f3_3;
    functab[22] = set_x;
    functab[23] = set_y;
    functab[24] = set_z;
    functab[25] = set_a;
    functab[26] = set_h;
    functab[27] = null;
    return (functab);
}

function	get_pos_in_dict(map, cpt)
{
    var		i;
    var		j;
    var		dict;
    var		sv;

    dict = get_dict();
    i = -1;
    while (dict[++i])
	{
	    j = 0;
	    sv = cpt.x;
	    while ((map[cpt.y][sv] && map[cpt.y][sv] === dict[i][j]) && ++sv)
		{
		    ++j;
		    if (dict[i][j] == undefined)
		    	{
			    cpt.x += my_strlen(dict[i]);
			    return (i);
			}
		}
	}
    console.log("unknown object property : ", map[cpt.y], "line", cpt.y + 1);
    skip_word(map, cpt);
    skip_space(map, cpt);
    return (null);
}
