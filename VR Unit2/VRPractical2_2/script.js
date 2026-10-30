
let scene, car, pokeball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    
    car = document.querySelector("#car");
    car.x = 0;
    car.dx = 0.01;
    
    pokeball = document.querySelector("#pokeball");
    pokeball.x = 0;
    pokeball.xr = 10;

    rocket = document.querySelector("#rocket");
    rocket.y = 0;
    rocket.dy = 0.01
    
    dude = document.querySelector("#dude");
    dude.y = 0;
    dude.dsize = 0.1;

    sun = document.querySelector("#sun");
    sun.opacity = 0;
    sun.opacity2 = 0.005;

    loop()
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position",{x:car.x, y:0, z:0});

    pokeball.x += pokeball.xr;
    pokeball.setAttribute("rotation",{x:-pokeball.x, y:0, z:0});

    rocket.dy += 0.3;
    rocket.y += Math.log(rocket.dy);
    rocket.setAttribute("position",{x:0, y:rocket.dy, z:0});

    dude.y += dude.dsize;
    dude.setAttribute("scale",{x:dude.y, y:dude.y, z:dude.y});
    dude.setAttribute("position",{x:1, y:dude.y/2, z:1});

    sun.opacity += sun.opacity2;
    sun.setAttribute("opacity", sun.opacity);

    
    window.requestAnimationFrame(loop);
}