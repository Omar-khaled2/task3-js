const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["st", "nd", "rd", "th", "th", "th", "th"];

for (let i = 0; i < color.length; i++) {
    var ordinal = (i + 1) + o[i]; 
    console.log(`${ordinal} choice is ${color[i]}.`);
}
