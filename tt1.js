var solution = function(number) {

    function binary() {
      if (number >= 0) {
        return number.toString(2);
      }
    }

    function longestPlateau(binaryNumber) {
      var ones = 0, count = 0, i;
      for(i=0; i <= binaryNumber.length; i++) {
        if (binaryNumber[i] === "1") {
          count++;
        } else {
          if (count > ones) {
            ones = count;
          }
          count = 0;
        }
      }
      return ones;
    }

return longestPlateau(binary());

};
