
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

let data = [
    {
        "NAME":"Drupal",
        "ICON":"drupal",
        "COLOR":"#0678BE",
        "INVERTCOLOR":false
    },
    {
        "NAME":"PHP",
        "ICON":"php",
        "COLOR":"#777BB4",
        "INVERTCOLOR":true
    },
    {
        "NAME":"IntlliJIdea",
        "ICON":"intellijidea",
        "COLOR":"#000000",
        "INVERTCOLOR":false
    },
    {
        "NAME":"Docker",
        "ICON":"docker",
        "COLOR":"#2496ED",
        "INVERTCOLOR":true
    },
    //{
    //    "NAME":"Kubernetes",
    //    "ICON":"kubernetes",
    //    "COLOR":"#000000"
    //},
    {
        "NAME":"Vue.Js",
        "ICON":"vuedotjs",
        "COLOR":"#4FC08D",
        "INVERTCOLOR":true
    },
    {
        "NAME":"Angular",
        "ICON":"angular",
        "COLOR":"#DD0031",
        "INVERTCOLOR":false
    },
    {
        "NAME":"Ubuntu",
        "ICON":"ubuntu",
        "COLOR":"#E95420",
        "INVERTCOLOR":true
    },
    {
        "NAME":"KeePassXC",
        "ICON":"keepassxc",
        "COLOR":"#6CAC4D",
        "INVERTCOLOR":true
    },
    {
        "NAME":"SCSS",
        "ICON":"sass",
        "COLOR":"#CC6699",
        "INVERTCOLOR":true
    },
    {
        "NAME":"Git",
        "ICON":"git",
        "COLOR":"#F05032",
        "INVERTCOLOR":true
    },
    {
        "NAME":"Simple%20Icons",
        "ICON":"simpleicons",
        "COLOR":"#111111",
        "INVERTCOLOR":false
    },
    {
        "NAME":"JavaScript",
        "ICON":"javascript",
        "COLOR":"#F7DF1E",
        "INVERTCOLOR":true
    },
    {
        "NAME":"TypeScript",
        "ICON":"typescript",
        "COLOR":"#3178C6",
        "INVERTCOLOR":true
    },
    {
        "NAME":"Markdown",
        "ICON":"markdown",
        "COLOR":"#000000",
        "INVERTCOLOR":false
    },
    {
        "NAME":"Node.JS",
        "ICON":"nodedotjs",
        "COLOR":"#339933",
        "INVERTCOLOR":true
    },
    {
        "NAME":"Visual%20Studio%20Code",
        "ICON":"visualstudiocode",
        "COLOR":"#007ACC",
        "INVERTCOLOR":false
    },
];



let url_pattern = "https://img.shields.io/badge/--{{COLOR}}?labelColor={{COLOR}}&label={{NAME}}&style=for-the-badge&logo={{ICON}}";
let md_pattern = "[![{{NAME}}]({{URL}})]()"

data.forEach(item => {
    let url = url_pattern.replace("{{NAME}}",item.NAME);
    let color = item.COLOR;
    if(item.INVERTCOLOR) {
        color = invertColor(color);
    }
    color = color.substring(1);
    url = url.replace("{{ICON}}",item.ICON);
    url = url.replace("{{COLOR}}",color);
    url = url.replace("{{COLOR}}",color);
    let md = md_pattern.replace("{{NAME}}",item.NAME);
    md = md.replace("{{URL}}",url);
    console.log(md);
});