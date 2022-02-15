const confirmHealth = (snack) => {
    if(typeof snack.protein !== "number" || typeof snack.fiber !== "number" || typeof snack.added_sugar !== "number"){
        return null;
    };
    if(snack.protein >= 5 && snack.added_sugar < 5 || snack.fiber >= 5 && snack.added_sugar < 5){
        return true;
    } else{
        return false;
    }
};

module.exports = confirmHealth;
