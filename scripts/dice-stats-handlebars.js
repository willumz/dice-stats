
//==========================================================
//================== HANDLEBARS SHIT =======================
//==========================================================

//handlebars fn used to tell if a die was rolled. 
//If not display something different then charts and dice stats
Handlebars.registerHelper('diceStats_ifDieUsed', function (var1, options) {
    if(var1 != 0){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});

//Handlebars fn used to see if a streak had a blind roll in it.
//If there was a blind roll we dont want to potentally point the result so dont display it for now
Handlebars.registerHelper('diceStats_ifStreakIsBlind', function (var1, options) {
    if(var1 != true){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});

//Handlebars uses this to check if the user has a streak
Handlebars.registerHelper('diceStats_ifHaveStreak', function (streakValue, options) {
    //If the string has more then 1 number
    if(streakValue.length > 1){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});

//Handlebars if Used to check if A Max Or Min Number of the die Was rolled
Handlebars.registerHelper('diceStats_ifRolledCrit', function (rollCount, options) {
    if(rollCount > 0){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});

//TODO Display Warning and close popup if user Has no roll data
Handlebars.registerHelper('diceStats_ifUserHasData', function (var1, options) {
    ui.notifications.warn("No roll data to export");
    return options.inverse(this);
});


//Handlebars helper used to display check on or off on the checkboxes
Handlebars.registerHelper('diceStats_IsChecked', function (bool, options) {
    if(bool){
        return 'checked="checked"'
    }
    return ""
});

//Handlebars helper used to see if we should render die info.
Handlebars.registerHelper('diceStats_ifDisplayDieInfo', function (bool, options) {
    if(bool){
        return options.fn(this);
    }
    return options.inverse(this);
});

//Handlebars helper used to check if the client is the GM
Handlebars.registerHelper('diceStats_ifIsGM', function (options){
    if(game.user.isGM){
        return options.fn(this);
    }
    return options.inverse(this);
});

//Handlebars helper to see if there are any blind rolls stored
Handlebars.registerHelper('diceStats_ifHaveBlindRolls', function (blindRollCount, options){
    if(blindRollCount > 0){
        return options.fn(this);
    }
    return options.inverse(this);
});

//Handlebars helper to check if were opening our own dice stats
Handlebars.registerHelper('diceStats_ifIsMe', function (plyrName, options){
    if(plyrName === game.user.name){
        return options.fn(this);
    }
    return options.inverse(this);
});

Handlebars.registerHelper('diceStats_ifAutoDbActive', function (isAutoDBactive, options){
    if(isAutoDBactive == true){
        return options.fn(this);
    }
    return options.inverse(this);
});