module.exports = function makeExchange(currency) {
    if (currency<=0) {return {};}
    else if (currency>10000) {return {error: "You are rich, my friend! We don't have so much coins for exchange"};}
    else {
        var Z1 = currency % 50;
        var Z2 = currency / 50;
        var Q1 = Z1 % 25;
        var Q2 = Z1 / 25;
        var D1 = Q1 % 10;
        var D2 = Q1 / 10;
        var N1 = D1 % 5;
        var N2 = D1 / 5;
        var P1 = N1 % 1;
        var P2 = N1 / 1;
        var result = {};
       if (Z2>=0) {if (Math.floor(Z2)>0) {result['H']=Math.floor(Z2)};}
        if (Q1>=0) {if (Math.floor(Q2)>0) {result['Q']=Math.floor(Q2)};}
        if (D1>=0) {if (Math.floor(D2)>0) {result['D']=Math.floor(D2)};}
        if (N1>=0) {if (Math.floor(N2)>0) {result['N']=Math.floor(N2)};}
        if (P1>=0) {if (Math.floor(P2)>0) {result['P']=Math.floor(P2)};}      
return result;  
}
}
