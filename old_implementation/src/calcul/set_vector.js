function        set_vecteur(camera, vecteur)
{
    vecteur.x = 100 - camera.oeil.x;
    vecteur.y = (camera.plan.width / 2) - vecteur.pix_x - camera.oeil.y;
    vecteur.z = (camera.plan.height / 2) - vecteur.pix_y - camera.oeil.z;
}
