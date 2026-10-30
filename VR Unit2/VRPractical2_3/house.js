class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("position","0 0 0");
    base.setAttribute("height","0.5");
    base.setAttribute("width","1.1");
    base.setAttribute("depth","1.1");
    base.setAttribute("color","#787169");
    this.obj.append( base );
  
    let walls = document.createElement("a-box");
    walls.setAttribute("position","0 0.5 0");
    walls.setAttribute("width","1");
    walls.setAttribute("depth","1");
    walls.setAttribute("height","2");
    walls.setAttribute("color","#aa8c72");
    this.obj.append( walls );

    let roof = document.createElement("a-cone");
    roof.setAttribute("position","0 1.7 0");
    roof.setAttribute("rotation","0 45 0");
    roof.setAttribute("height","0.5");
    roof.setAttribute("segments-radial","4");
    roof.setAttribute("color","#5a5f5b");
    this.obj.append( roof );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}