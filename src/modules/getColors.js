const colors = fetch("../data/colors.json")
    .then(colors => {
        return colors.json();
    })

    // demonstrate await

export default await colors;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules  isormophic

// https://www.typescriptlang.org/docs/handbook/2/modules.html