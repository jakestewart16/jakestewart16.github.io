//document.write("Where is my JS code?");
//window.alert(5 + 6);
//window.alert('5 + 6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');

/*
const x = "web";
const y = "mapping";
const out = x + y;
document.write(out);
*/

// A prompt box is used to prompt users to input a value before entering a page.

/*
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
*/

/*
x = 22;
const y = 33;
document.writeln(x + y);
document.writeln("<br>");
document.writeln(x += 33);
*/

/*
document.writeln("<button onclick='condition()'>Conditional Test</button>")

function condition()
{
  x = confirm("Are you sure you want to proceed?");
  if(x)
  {
    document.writeln("You chose Okay!");
  }
  else
  {
    document.writeln("You chose Cancel!");
  }
}
*/
var webmaps =
  [
    ["WingStop - Store Locator",
    "https://www.wingstop.com/order/",
    "The Wing Stop store locator is a slippy map application used to help the user find Wing Stop 	store locations in their area. GIS functionalities include an area locator query that uses either the 	user’s state, city, or zip code to find the stores nearest to them. Using an API via Google Maps, 	the map is familiar enough for general users to comprehend and navigate effectively."
    ],
    ["LexisNexis Community Crime Map",
    "https://communitycrimemap.com/",
    "CommunityCrimeMap.com is a slippy map application used to locate reported criminal events in participating cities via data from crime analytics firm LexisNexis. GIS functionalities include toggleable layers to allow the user to determine what type of criminal acts are being committed as well as geoprocessing tools like buffers and an address locator. Layers are labeled well but the symbology for each criminal event could be easier to interpret."
    ]
  ];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);

  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message
}

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
