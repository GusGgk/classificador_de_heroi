let heroName = "Loud Aspas"
let heroExperience = 22222


if(heroExperience <= 1000){
     classificationPT = "Ferro"
     classificationEN = "Iron"
    console.log("loading...")
    
}
else if(1001 <= heroExperience && heroExperience <= 2000){
     classificationPT = "Bronze"
     classificationEN = "Bronze"
    console.log("loading...")
    
}
else if(2001 <= heroExperience && heroExperience <= 5000){
     classificationPT = "Prata"
     classificationEN = "Silver"
    console.log("loading...")
    
}
else if(5001 <= heroExperience && heroExperience <= 8000){
     classificationPT = "Ouro"
     classificationEN = "Gold"
    console.log("loading...")
    
}
else if(8001 <= heroExperience && heroExperience <= 9000){
     classificationPT = "Platina"
     classificationEN = "Platinum"
    console.log("loading...")
    
}
else if(9001 <= heroExperience && heroExperience <= 10000){
     classificationPT = "Diamante"
     classificationEN = "Diamond"
    console.log("loading...")
}
else if(10001 <= heroExperience && heroExperience <= 11000){
     classificationPT = "Ascendente"
     classificationEN = "Ascending"
    console.log("loading...")
  
}
else if(11001 <= heroExperience && heroExperience <= 12000){
     classificationPT = "Imortal"
     classificationEN = "Imortal"
    console.log("loading...")
}

else{
     classificationPT = "Radiante"
     classificationEN = "Radiant"
    console.log("Loading...Very Points...")
    
}
    console.log("Mensagem em português:")
    console.log("O Héroi chamado: " + heroName + " está com " + heroExperience + "XPs " + " e sua classificação é: " + classificationPT)

    console.log("Message in English:")
    console.log("The Hero Named: "+ heroName + " This with " + heroExperience + "XPs " + " and your classification is: " + classificationEN)