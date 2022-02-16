const confirmHealth = (snack) => {
    if(isNaN(snack.protein)  || isNaN(snack.fiber)  || isNaN(snack.added_sugar) ){
        return null;
    };
    if(snack.protein >= 5 && snack.added_sugar < 5 || snack.fiber >= 5 && snack.added_sugar < 5){
        return true;
    } else{
        return false;
    }
};

module.exports = confirmHealth;
