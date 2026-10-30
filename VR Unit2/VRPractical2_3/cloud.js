class Cloud{
     constructor(x,y,z){
        let cloud = document.createElement("a-entity");
  
        let cloud1 = document.createElement("a-sphere");
        cloud1.setAttribute("position","0 0 0");
        cloud.append(cloud1);

        let cloud2 = document.createElement("a-sphere");
        cloud2.setAttribute("position","1.5 0 0");
        cloud.append(cloud2);
        let cloud3 = document.createElement("a-sphere");
        cloud3.setAttribute("position",".5 .5 0");
        cloud.append(cloud3);

        cloud.setAttribute("position",{x:x, y:y, z:z});
        cloud.setAttribute("rotation",{x:y, y:z, z:x});
        scene.append(cloud)
    }
}