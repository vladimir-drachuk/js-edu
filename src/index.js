
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
      for (key in config) {
        if (key === focus) {
          if (knowsProgramming) return Math.ceil(800/config[key]);
          return Math.ceil(1300/config[key]);
        }
      }


  };
  