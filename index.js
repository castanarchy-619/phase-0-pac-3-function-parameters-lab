function introduction(George) {return `Hi, my name is ${George}.`;}
function introductionWithLanguage(George, JavaScript) {return`Hi, my name is ${George} and I am learning to program in ${JavaScript}.`;}
function introductionWithLanguageOptional(name, language) {language = language || 'JavaScript';return `Hi, my name is ${name} and I am learning to program in ${language}.`;}