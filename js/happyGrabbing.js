const startGame = document.querySelector('.boxBtnHover');
    //const redGet = document.querySelector('.snowflakeList');
    const playBtn = document.querySelectorAll('.snowflakeLista');
    const loadback = document.querySelector('.loadingBlack');
    const winback = document.querySelector('.win');
    const nowinback = document.querySelector('.notwin');
    const gold = document.querySelector('#amount');
    const playTimes = document.querySelector('#playTimes');
    const playMessage = document.querySelector(".tle");
    const totalPeople = document.querySelector("#totalPeople");
    const formatTotalMoney = document.querySelector("#formatTotalMoney");
    const howToPlayBox = document.querySelector(".howToPlayBox");
    const closeBtn = document.querySelector(".closeBtn");
    

    let playTime = 3;
    playTimes.textContent = playTime+'times';

    let peoplenumberNum = (Math.floor(Math.random()*10)+1)*100 + (Math.floor(Math.random()*10)+1);
    let formatTotalMoneyNum = (Math.floor(Math.random()*1000)+1)*100;
    let userGoldNum = 0;
    let luckynumberNum = 0;    
    

    totalPeople.textContent = peoplenumberNum;
    formatTotalMoney.textContent = formatTotalMoneyNum;

    startGame.addEventListener('click',function(){
        howToPlayBox.style.display = "block";
        
    })

    closeBtn.addEventListener('click',function(){
        howToPlayBox.style.display = "none";
        
    })

    //紅包點擊
    playBtn.forEach(e => {
        e.addEventListener('click',function(e){

            console.log("press");
            
     
            luckynumber = Math.floor(Math.random()*10)+1;
            console.log(luckynumber);           


            if (luckynumber % 2 == 0) {
             console.log("luckyNum");
             redGet.style.display = "none";
             loadback.style.display = "block";
             setTimeout(function(){    
                loadback.style.display = "none"; 
                winback.style.display = "block";                 
                gold.textContent =  luckynumber *100;
                
                

            },5000);  
            winback.addEventListener("click",function(){
                winback.style.display = "none";
            }); 
            luckynumberNum = luckynumber *100;       

             }else {
                console.log("Nolucky");
                redGet.style.display = "none";
                loadback.style.display = "block";
                setTimeout(function(){    
                   loadback.style.display = "none"; 
                   nowinback.style.display = "block";
                             
               },5000); 
               nowinback.addEventListener("click",function(){
                nowinback.style.display = "none";                
                });
                luckynumberNum = 0;          
             }
            
                
            playTime = playTime-1;
            playTimes.textContent = playTime+'times'; 
            
            userGoldNum = userGoldNum + luckynumberNum ;
            //userGold.textContent = "You got" + userGoldNum + "dallows" ;
            userGold.innerHTML = `You got <strong>${userGoldNum}</strong> dallows` ;
           
         })
    })

    //登入功能

    const quickSign = document.querySelector("#quicksign");

    const userNameLogin = document.querySelector('.userNameLogin');
    const userPasswordLogin = document.querySelector(".userPasswordLogin");
    const btnSendLogin = document.querySelector(".btnSendLogin");
    
    const messageText = document.querySelector(".messageText");
    const userName = document.querySelector(".userName");
    const userGold = document.querySelector(".userGold");

    const playbutton = document.querySelector("#play_button");
    let userLogin = false;
    
    playbutton.addEventListener('click',function(e){
        console.log("startpress");
        


        if(userLogin == false){
            quickSign.style.display = "block"; 
            quickSign.style.position = "absolute";           
            userLogin = true;
            playMessage.textContent="You can play :";            
            playTimes.style.display="block";
            
        }else if(userLogin == true) {
            
            if (playTime == 0) {
                alert("Your play times is ZERO !");
            }else {
                redGet.style.display = "block";
                console.log("startGame");
            }
        }


    })

    
    btnSendLogin.addEventListener('click',function(e){
        console.log("press");
        callLogin();
        //userName.textContent= "Hi~ Welcome player "+ userNameLogin.value;
        userName.innerHTML= `Hi~ Welcome player <strong>${userNameLogin.value}</strong>`;
        //userGold.textContent = "You got" + " " + userGoldNum + " dallows" ; 
        userGold.innerHTML = `You got  <strong>${userGoldNum}</strong> dallows `;        
    })

    function callLogin(){

        if(userNameLogin.value =="" || userPasswordLogin.value =="" ){
            messageText.textContent = "Login account & password input error.";
            return;
          }else {
            
            messageText.textContent = "Login successfully! Let'a start the game!";
            setTimeout(function(){    
                quickSign.style.display = "none"; 
                        
            },3000); 
          }
    }
    
    function renderRedEnvelope(){
        let str = "";        
        for( let i=0; i<20; i++ ){
            let ranNum = (Math.floor(Math.random()*20)+1);
            str+=` <a class="snowflakeLista" href="javascript:void(0)" title="Click to open the red envelope" style="left: ${i*5}%; animation: udmoving ${ranNum}.${i}s linear infinite,lrmoving ${ranNum}.${i}s infinite linear alternate both;transform: translateY(-20vh);"><img src="images/xhb.gif"></a> ` ;
       } 
       redGet.innerHTML = str;
    }

      

    
