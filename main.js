const paragraph = document.querySelector('p');

paragraph.style.color = 'lightBlue';

paragraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.';

const item13 = document.querySelector('#item-13');

item13.style.opacity = '.5';

const item3 = document.querySelector('#item-3');

item3.innerText = 'Hi!';

const image = document.querySelector('img');

image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';

image.height = '300';

const image2 = document.createElement('img');
document.querySelector('div').appendChild(image2);

image2.src = 'https://screenrant.com/wp-content/uploads/2018/01/Jurassic-World-and-Jurassic-Park-logo.jpg';

image2.height = '300';

const item16 = document.createElement('li');

document.querySelector('ul').appendChild(item16);


item16.setAttribute('id', 'item-16');


item16.innerText = "Won't get fooled again.";
