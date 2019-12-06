    
    container = document.getElementById("main");
   

    const text = new Blotter.Text("But your are killing me, killing us. ", {
        family: "Edo SZ",
        size: 30,
        fill: "#000"
    });


    let material = new Blotter.LiquidDistortMaterial();

    let blotter = new Blotter(material, {
        texts: text
    });


   
    var saveUserInfo = function(){
    if (!storageAvailable('localStorage')){ return; }

    if(localStorage.getItem('Speed')){
        var Speed = localStorage.getItem('Speed'); 
        var one = Speed;

    material.uniforms.uSpeed.value = one;
    

    }else{
        material.uniforms.uSpeed.value = 0.1;
    }

    if(localStorage.getItem('Speed')){
        var Speed = localStorage.getItem('Speed'); 
        var one = Speed;

    material.uniforms.uSpeed.value = one;
    

    }else{
        material.uniforms.uSpeed.value = 0.1;
    }

    if(localStorage.getItem('Volatility')){
        var Volatility = localStorage.getItem('Volatility'); 
        var two = Volatility;

    material.uniforms.uVolatility.value = two;
    

    }else{
        material.uniforms.uVolatility.value = 0.02;
    }

    if(localStorage.getItem('Seed')){
        var Seed = localStorage.getItem('Seed'); 
        var three = Seed;

    material.uniforms.uSeed.value = three;
    

    }else{
        material.uniforms.uSeed.value = 1.85;
    }

    }


     document.getElementById("rec").addEventListener('click',function(){

        var newSpeed = Math.random();
        material.uniforms.uSpeed.value = newSpeed;
        localStorage.setItem('Speed',newSpeed)

    })

    document.getElementById("rec1").addEventListener('click',function(){
        
        var newVolatility = Math.random()*0.1;
        material.uniforms.uVolatility.value = newVolatility;
        localStorage.setItem('Volatility',newVolatility)

    })

    document.getElementById("rec2").addEventListener('click',function(){
        
        var newSeed = Math.random()*10;
        material.uniforms.uSeed.value = newSeed;
        localStorage.setItem('Seed',newSeed)

    })

    let scope = blotter.forText(text);

    scope.appendTo(container);

    saveUserInfo();

