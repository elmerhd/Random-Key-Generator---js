var GenType = {DIGITS_ONLY:0,LETTERS_LOWERCASE:1,LETTERS_UPPERCASE:2,
        LETTERS_UPPERLOWERCASE:3,DIGITS_LETTERS_LOWERCASE:4,
        DIGITS_LETTERS_UPPERCASE:5,DIGITS_LETTERS_UPPERLOWERCASE:6};
function RandomKeyGenerator() {
    var checkifEscapped = function (pattern,index) {
        if(index ===0){
            return false;
        }else {
            return pattern.charAt(index-1) == ':';
        }
    }
    this.generateByPattern = function (patt) {
        var pattern = patt;
        var gen = '';
        if(!pattern.startsWith("[") || !pattern.endsWith(']')){
            gen = "invalid format";
        }else{
            pattern = pattern.substring(1, pattern.length-1);
            for (var i = 0; i < pattern.length; i++) {
                switch (pattern.charAt(i)) {
                    case 'i':
                        if(checkifEscapped(pattern,i)){
                            gen += pattern.charAt(i);
                        }else{
                            gen += g_d();
                        }
                        break;
                    case 'x':
                        if(checkifEscapped(pattern,i)){
                            gen += pattern.charAt(i);
                        }else{
                            gen += g_l_lc();
                        }
                        break;
                    case 'X':
                        if(checkifEscapped(pattern,i)){
                            gen += pattern.charAt(i);
                        }else{
                            gen += g_l_uc();
                        }
                        break;
                    case ':':
                        break;
                    default:
                        gen += pattern.charAt(i);
                        break;
                }
            }
        }
        return gen;
    }
    
    this.generate = function (type,length) {
        var generated = "";
        switch(type) {
            case GenType.DIGITS_ONLY:
                for (var i = 0; i < length; i++) {
                    generated = generated + g_d();
                }
                break;
            case GenType.LETTERS_LOWERCASE:
                for (var i = 0; i < length; i++) {
                  generated = generated + g_l_lc();
                }
                break;
            case GenType.LETTERS_UPPERCASE:
                for (var i = 0; i < length; i++) {
                    generated = generated + g_l_uc();
                }
                break;
            case GenType.LETTERS_UPPERLOWERCASE:
                for (var i = 0; i < length; i++) {
                    generated = generated + g_l_luc();
                }
                break;
            case GenType.DIGITS_LETTERS_LOWERCASE:
                for (var i = 0; i < length; i++) {
                    generated = generated + g_d_l_lc();
                }
                break;
            case GenType.DIGITS_LETTERS_UPPERCASE:
                for (var i = 0; i < length; i++) {
                    generated = generated + g_d_l_uc();
                }
                break;
            case GenType.DIGITS_LETTERS_UPPERLOWERCASE:
                for (var i = 0; i < length; i++) {
                    generated = generated + g_d_l_luc();
                }
                break;
        }
        return generated;
    }
    /**
     * Generates Random Digit
     * @returns {Number} the random digit from 0 - 9
     */
    var g_d = function () {
        var nums_0_9 = new Array(0,1,2,3,4,5,6,7,8,9);
        var ran = nums_0_9[Math.floor(Math.random() * nums_0_9.length)];
        return ran;
    }
    /**
     * Generates Random Lowercase Letter
     * @returns {String} the random lowercase letter from a-z
     */
    var g_l_lc = function (){
        var let_a_z = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
        var ran = let_a_z[Math.floor(Math.random() * let_a_z.length)];
        return ran;
    }
    /**
     * Generates Random Uppercase Letter
     * @returns {String} the random uppercase letter from A-Z
     */
    var g_l_uc = function () {
        var let_A_Z = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
        var ran = let_A_Z[Math.floor(Math.random() * let_A_Z.length)];
        return ran;
    }
    var g_l_luc = function () {
        var ran_ = new Array(1,2);
        var ran = ran_[Math.floor(Math.random() * ran_.length)];
        if(ran === 1){
            return g_l_lc();
        }else{
            return g_l_uc();
        }
    }
    var g_d_l_lc = function (){
        var ran_ = new Array(1,2);
        var ran = ran_[Math.floor(Math.random() * ran_.length)];
        if(ran ===1){
            return g_d();
        }else{
            return g_l_lc();
        }
    }
    var g_d_l_uc = function () {
        var ran_ = new Array(1,2);
        var ran = ran_[Math.floor(Math.random() * ran_.length)];
        if(ran === 1){
            return g_d();
        }else{
            return g_l_uc();
        }
    }
    var g_d_l_luc = function () {
        var ran_ = new Array(1,2,3);
        var ran = ran_[Math.floor(Math.random() * ran_.length)];
        if(ran === 1){
            return g_d();
        }else if(ran === 2){
            return g_l_lc();
        }else if (ran === 3){
            return g_l_uc();
        }
    }
}

