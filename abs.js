function isPositive(num) {
    if (num > 0) {
        return true;
    }else if (num < 0)  {
        return false;
    }
}

function abs(num) {
    if (num < 0){
        return -num;
    }else {
        return num;
    }
}