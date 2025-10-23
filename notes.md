# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)


## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Git

**Making Updates**

  1- Save changes on VS code

  2- git add <fileName>

  3- git commit -am "description"

  4- git push

## AWS

**IP Addresses:**

  - Must have if one device wants to talk to another device


  

**Traceroute:**

  - Console utility used to determine hops in a connection and traces the route the connection between devices takes
  - Type: traceroute <domain name>
    - Results:
      - IP address of the router device 1 is connected to
      - Unidentified addresses
      - Internet service provider gateway for the requesting device
      - IP address of device 2

**TCP/IP model:** actual sending of data across the internet

| Layer       | Example         | Purpose                               |
| ----------- | --------------- | ------------------------------------- |
| Application | HTTPS           | Functionality like web browsing       |
| Transport   | TCP             | Moving connection information packets |
| Internet    | IP              | Establishing connections              |
| Link        | Fiber, hardware | Physical connections                  |


**My Server**

My public IP address is: 100.28.64.219

Elastic IP address: 100.28.64.219

URL - [http://100.28.64.219](http://100.28.64.219)

Remote shell into server from Ubuntu:

```sh
-> ssh -i ~/.ssh/mykey.pem ubuntu@100.28.64.219
```

Launches the console window for the web server, takes you in the ubuntu users home directory

```sh
Run -> ls -l
```

**Caddyfile** - 

**public_html** - 

**services** - directory to install web services once they are built

Run `exit` command to close the connection to the server



## Domains:

  Human friendly symbolic name that represents an IP address

  Domain names are converted to IP address by looking up in the Domain Name System (DNS)

  There can be multiple IP addresses associated with 1 domain

  **Domain Construction:**
  
    Root domain:

    - contains secondary level domain and a top level domain

      -> secondary.top

    Subdomain:

    - Prefix to the root domain

      -> [subdomain].secondary.top

    - Owner of root domain can create any number of subdomains for the root

  **Get information about domain name:**

  ```yaml
  -> whois secondary.top
  ```

  
**DNS**

  Server where domain names can be listed and associated with an IP address

  Keeps a cache of domain names

  Authoritative name servers: Special DNS servers for associating a domain name with an IP address that every DNS server references.

  - DNS requests domain names from here if domain is not in cache
  
  Types of DNS database records that help map domain names to IP addresses:

    1. `Address (A) record`
      - straight map from domain name to IP address

    2. `Canonical name (CNAME) record`
      - maps one domain name to another domain name
      - mapping two domain names to the same IP address
    
    3. `Time to live (TTL) record`
      - Allows you to set how long the cache stays before it's cleared

**Looking up IP address in the DNS:**

  - Open console

  ```yaml
  dig secondary.top
  ```

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

Caddy is a web service that listens for incoming HTTP requests. Caddy then either serves up the requested static files or routes the request to 

another web service.

Gateway or Reverse Proxy: The ability to route requests and expose multiple web services as a single external web service.

**Uses:**

- Creation and rotation of web certificates. This allows us to easily support HTTPS.
- Serves up all static HTML, CSS, and JavaScript files. All of your early application work will be hosted as `static files.`
- A gateway for subdomain requests to your Simon and startup application services.

**Important Caddy Files**

Created in user home directory

- **Configuration File**: `~/Caddyfile`

Contains the deginitions for routing HTTP requests that Caddy receives. This is used to determine the location where static HTML files are loaded from, and also to proxy requests into the services you will create later. Except for when you configure the domain name of your server, you should never have to modify this file manually.

**Web certificate Let's Encrypt**

Caddy uses Let's Encrypt to generate a web certificate every time an HTTPS request is made for a domain name that Caddy doesn't have a web certificate for.

When this happens Caddy asks Let's Encrypt to verify that the domain for the requested certificate is actually owned by the requester.

Issues the certificate to the requeter if successful. 

**Caddy Configuration**





## HTTPS and TLS

**HTTPS:** the secure version of HTTP

**TLS protocol:** secures connections by encrypting data

Console:

```sh
➜  curl -v -s https://byu.edu > /dev/null
```

`curl -v` see verbose output of HTTPS exchange

`> /dev/null` redirection that throws away actual HTTP response so we only see the exchange information

Main exchange info is identifying the domain name of the server creating the secure connection. ALso checks validity

**Web Certificates:** Generated by 3rd party issuer so domain owners can validate their web servers 

    `Let's Encrypt`

**Enabling HTTPS**

  Always support HTTPS for any web application built.

  `ACME protocol`
  `Let's Encrypt`

    Generate needed certificates







## HTML

**HTML Elements and tags**

Common structural elements:

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

opening tag --> `<element>` 

closing tag --> `</element>`

`<!DOCTYPE html>` --> header definition you should include at the top of the HTML file

1. Start with the top level content `body`
  - Three children: `header`, `main`, and `footer`

  2. `Header` --> contains a `p`aragraph with a `span`, and a `nav`igation containing multiple `div`isions of sub-content.

  3. `main` --> contains multiple `section`s that contain either an unordered list (`ul`) or a `table`. Main also contains an `aside` for content that does not fit the content flow of the sections.

  4. `footer` --> contains a content division with a single span

  ```html
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```

Block Element --> a distinct block in the flow of the content structure

Inline Element --> element inline with the content flow of a block element, does not disrupt the flow of a block element's content

**Attributes**

Every HTML element may have attributes, these describe specific details of the element

Written inside the element opening tag with a name followed by an optional value surrounded by quotes:

`<element attribute="value" attribute2="value"> content </element>`

`id` attribute --> gives a unique ID to the element so that you can distringuish it from other elements

`class` attribute --> designates the element as being classifies into a named roup of elements

`width` attribute --> width = "" inside the `<img>` opening tag to change size 

**Hyperlinks**

Lets you navigate from one page to another

Represented with an anchor `a` element that has the `href` attribute containing the address of the hyperlink

Format:

```html
<a href="https://mylink.com">Go to website</a>
```

**Comments**

```html
<!-- commented text -->
```

**Special Characters**

Reserved characters for defining file format

Must use the `entity` syntax associated with a specific character in order to escape them to use

| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |


**index.html**

Name the main HTML file for web application `index.html`

**Rendering HTML**

1. Save HTML file to computer disk and open the file using the browser

2. Open the HTML file in VS Code and use the Live Server extension to display the HTML

3. Use CodePen to render


**HTML Input Elements**

Elements created for accepting the input of user data


| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |


**Form Element**

`form` --> submit the values of the inputs it contains, not required for use but can be used as a cotainer

```html
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id"> --> what the browser uses to generate data
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```

Pressing submit button will send data to the web server

**Input Element**

There are many different input types the input element represents:

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |


**Creating an input** --> specify the desired `type` attribute along with any other attribute associated with that specific input

Common input element attributes:

| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

`required` attribut --> specify on an input element to mark it as requireing a value before it can be submitted

`pattern` attribute --> provides a regular expression that must match for the input to be considered as valid
  - exists on `text`, `search`, `url`, `tel`, `email`, `password` input types

`value` attribute --> "default" value
  - using value attribute for colors: `<input type="color" name="varColor" id="color" value="#FF0000" />`

**Validating Input**

1. Can use `pattern` and `required` attributes

2. Also build valdation into JavaScript that checks input data to ensure validity before submission

3. CSS style selectors for visualizing the validity of the input

Provide sufficient user feedback early in the input process 


**HTML Media Elements**

`img`
- reference to external file
- takes a URL as an attribute --> relative path or full path URL
- use the img element and specify the src attribute with the URL to source image
- include alt attribute that describes image

```html
<img alt="image description" src="https://image.source.hyperlink.location.filetype" />
```

`audio`
- reference to external file
- takes a URL as an attribute --> relative path or full path URL
- use audio element and specify the `src` attributw with the URL to source audio file
- `controls` attribute if you want the user to control audio playback
- `autoplay` attribute starts playing automatically
- `loop` attribute keeps audio playing over and over

```html
<audio controls or autoplay or loop src="audioFile.mp3"></audio>
```

`video` 
- reference to external file
- takes a URL as an attribute `src` --> relative path or full path URL
- `controls` or `autoplay` attributes
- `crossorigin="anonymous"` --> if requesting filrs from different domain than the one serving your content

```html
<video controls or autoplay width="###" crossorigin="anonymous">
    <source src="https://myvideo.com.mp4" />
</video> 
```

`svg` (scalable vector graphics)
- code to render visual image
- internal media
- render graphics inline in HTML
- combine with JS and CSS to produce visualizations

`canvas`
- code to render visual image
- internal media
- facilitates 2D drawing and animation
- requires JS support

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.



# CSS 

**3 ways to associate CSS with HTML**

1. Define the `style` attribute of a single element in the HTML file

```html
<element style="property:value">CSS</element>
```
2. Use the HTML `style` ELEMENT to define a CSS rule in the HTML file
  - `style` element shold appear in the `head` element of the document
  - that makes it so the rules will apply to each instance of the specified element

```html
<head>
  <style>
    element {
      property: value;
    }
  </style>
</head>

<body>
  <p>CSS</p>
</body>
```

3. Create a hyperlink reference to an external CSS file that has the CSS rules
  - hyperlink goes in the head element

  ```html
  <link rel="stylesheet" href="cssFileName.css" />
  ```


**Format of a CSS rule:**

```selector {
          property: value;
}
```

`:` is a declaration

**Redefine the width and height of an element to also include the padding and border**

--> change `box-sizing` property from `content-box` to `border-box` 

**Box Model Format***

Content -> padding -> border -> margin


## CSS Selectors ##

**Make all elements use a specific font**

```css
body {
  font-family: font-type;
}
```

`body` element will select all the elements of the document. Can also use the `*` to select all the elements

**Modify the top level heading**

```css
h1 {
  property: value;
}
```
**Modifying background, padding, and margins of a section**

```css
section {
  background: #000000;
  padding: 1.00em;
  margin: 0.5em;
}
```

margin-bottom or margin-top if you want to be more specific


**Making changed within only a specific section of the content**

`descendant combinator`

`>` direct child

`~` sibling of

`+` adjacent sibling of

**Changing a class of an element**

```css
element.className {
  property: value;
}
```

**Select and make changes to the ID of an element**

```css
#IDname {
  property: value;
}
```

**Select and change attributes of an element**

```css
element[attribute='desired value'] {
  property: value;
}
```

can use wildcards before the = in the attribute selector

**Make change appear when the mouse hovers over an element**

```css
section:hover {
  property: value;
}
```

## CSS Declarations ##


| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

## CSS Units ##

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |


## CSS Color ##

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |


## CSS Fonts ##

`font-family` property

`Serif` `sans-serif` `fixed` `symbol`

**Have browser load a font**

```css
@font-face {
  font-family: 'fontName'
  src: url('link to font source location');
}

rest of CSS
```

**Import the Google Font Service**

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

## CSS Animation ##

`animation-duration: #s;` -> specifies how long the animation should last

`animation-name: demo;` -> specifies that we are animating the selected elements


## Responsive Design ##

Let's you make it so the interface can reconfigure to screen size and orientation

**CSS Display Properties**: lets you change how an HTML element is displayed by the browser


| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.                                                                       |

Where to use them:
  - include them as a class in a div
  - `<div class="property"><div>`
  - If no display property classes are included, the default display property of a div is `block`

**Viewport meta tag**

Tells browsers not to scale the page and get in the way of responsive screen sizing

`<meta name="viewport" content="width=device-width,initial-scale=1" />`

**Float**

Moves an element to the left or right of its container element and allows inline elements to wrap around it. Use this if you need to wrap text around a different thing on the page

```CSS
element {
  float: (right or left);
}
```

**Media Queries**

`@media` selector

Dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change

Tells us if the screen is oriendted in portrait mode or not

```css
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```

Make a piece of the application disappear or move somewhere else if it takes up too much space after resizing

```css
@media (orientation: portrait) {
  element {
    display: none;
  }
}
```

## Grid ##

Display layout to use when you want to display a group of child elements in a responsive grid

Turn a container element `<div>` that has a bunch of child elements into a responsive grid:
  - Assign the container div a class of container `<div class="container"></div>`
  - include a CSS display property with the value of `grid` on the container element

  ```css
  .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
  }
  ```
  - tells the browser that all of the children of this element are to be displayed in a grid flow
  - `grid-template-columns` specifies the layout of the grid columns
  - `grid-auto-rows` fixes the height of the rows to be a specific number of pixels
  -`grid-gap` sets the gap space in # em


## CSS Flexbox ##

`flex` display
  - useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation change

Make the body element into a responsive flexbox:
  - include CSS `display` property with the value of `flex` in the CSS file. Tells browser all the children of the body are displayed in flex flow

  ```css
  body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  }
  ```
  - `flex-direction` specify if you want the flexbox children to be column or row oriented
  - other stuff helps to zero out margin and fill the entire page with the application

Add these flexbox properties to get the division of space for the flexbox children correct:

  - **header** - `flex: 0 80px` - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
  - **footer** - `flex: 0 30px` - Like the header it will not grow and has a height of 30 pixels.
  - **main** - `flex: 1` - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be `flex` and specify the `flex-direction` to be row so that the children are oriented side by side.

```css
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
```

  - the number value for `flex` can determine what percent of the screen the children elements will take up


**Flexbox on Small screen sizes:**

Include these 2 queries:

```css
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}
```
  - detects when we are in portrait orientation.
  - `flex-direction` will change the orientation of main to column or row whichever is specified
  - Makes the children of main be stacked on top of each other instead of being side by side when the app is on a small screen

```css
@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}

```
  - This query makes the header and footer disappear when the screen is too short to display them. 
  - `max-height: #px` if the screen size is less than specified number of pixels, the query is triggered and the header and footer is hidden
  - `display: none` hides the element













**Create Keyframes**

`keyframe` -> tells what CSS propertites should be applied at different key points in the animation sequence. Include frames that are called from and to


```css
@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```

**CSS Files**

1- main.css

2- dashboard.css

3- canvas.css

4- login.css

Each html file will reference main.css and their own css file

Placement:

```css
    <title></title>

    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="dashboard.css" />
```

## CSS Frameworks ##

**Tailwind**

**Bootstrap**

Include this below the footer at the end of the HTML body to use Bootstrap components that require JavaScript

```css
<body>
  ...

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
```

Include Bootstrap in your HTML page using NPM

```css
npm install bootstrap@5.3.3
```

## CSS Bootstrap classes ##

`btn` class: a simple button

`btn-primary` class: shades the button with the current primary color for the application. 

`d-flex` class: transforms an element into a "flex container," causing its children to line up horizontally in a row by default. It's the foundation of modern layouts in Bootstrap because it unlocks powerful alignment and spacing classes. Use it whenever you need to position a group of elements, such as creating toolbars or centering content on a page.

  `d-flex` spacing classes:
    - `justify-content-center` class for horizontal control
    - `align-items-center` class for vertical control
    - `justify-content-between`

`flex-nowrap` class: a Bootstrap class that explicitly tells the flex container: "Do not wrap your children to the next line. Keep them all in a single horizontal row, no matter what."

`.d-none` class: a Bootstrap utility that completely hides an element from the page. It doesn't just make it invisible; it removes the element from the layout entirely, so it takes up absolutely no space, as if it never existed. Its primary function is for creating content that you plan to show or hide dynamically with JavaScript, such as toggling a menu or revealing an edit form when a button is clicked.

`flex-grow-1` class: makes the chosen section fill the available vertical space

`flex-column` class: 

`position-relative` class: 

`vh-100` class: locks the total height of your page to exactly 100% of the viewport height.

list-unstyled to remove bullet points

form-control to style the input

input-group to neatly combine the input and button into a single unit.

position: absolute): This lifts the sidebar out of the normal layout and allows us to place it on top of other content

transform: translateX(100%)): This CSS rule pushes the entire sidebar to the right by 100% of its own width, effectively moving it just out of sight.


Showing (.is-open): When we add the .is-open class (which we'll do with JavaScript next), the transform is set back to translateX(0), and the transition property makes it animate smoothly back into view.


















```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```


# JavaScript & Web Frameworks

## Javascript ##

What is it?

Most used programming language in the world. Runs on every web browser.

Executed using an interpreter at runtime instead of compiling it into a machine specific binary at build time.

There are different versions of Javascript, and you should be aware of browser compatibility with the version you are using

**Javascript examples**

Concatenate strings together:

```js
'Hello' + ' ' + 'world';
```

Output something to the debugger console:

```js
console.log('output');
```

Writing functions:

```js
function functionName(parameter, parameter) {
  return value;
}

// call function
console.log(functionName(parameter, parameter));
```

Deliminate code by ending statements with a semicolon and grouping code blocks in curly braces

**Open a Javascript interpreter**

  - `F12` while in browser displays the browsers debugger, select `Console` menu option


** Add Javascript to HTML **

3 ways:

1. Script block: Directly including the JS code it in the HTML within the content of a `<script>` element

  ```html
  <script>
    function sayGoodbye() {
      alert("Goodbye");
    }
  </script>
  ```

2. External code: Using the `src` attribute of the script element in the HTML to reference an external JavaScript file. References are places in the `<head>`

  ```html
  <head>
    <script src="index.js"></script>
  </head>
  ```

3. Inline event attribute: Putting JavaScript directly inline an HTML element as part of an event attribute handler.

  ```html
    <script>
      let i = 1;
    </script>
    <button onclick="alert(`i = ${i++}`)">counter</button>
  ```

  - `onclick` automaically creates event listeners for different DOM events that call the code contained in the attribute's value. 
  - Can use the `onclick` attribute to call Javascript functions on an element 

## Node.js ##

**What is it?**

Application for deploying Javascript outside of a browser.

Node.js takes the V8 execution engine that browsers run, and ran it insude of a console application. 

V8 reads the code and executes it when you run a JS program in Chrome of Node.js

**Installing Node.js**

Check if installed -> `node -v` in terminal

**Running programs**

Execute a line of Javascript with Node.js from your console with the `-e` parameter

`node -e "javascript code"`

**Run the project Javascript File**

1. Create a single starting JavaScript file
  - name it `index.js`
  - this file will reference the code found in the rest of the project

2. Execute the JS by passing the file to `node`
  - `node index.js`


**Node package manager**

Use preexisting packages of JS for implementing common tasks

**Steps to load package:**

1.  install the package locally on your machine using the Node Package Manager (NPM)
  - NPM is already installed when you install Node.js

2.  include a `require` statement in your code that references the package name.

**NPM:**
  - Can access massive repository of preexisting packages
  - packages: [link](https://www.npmjs.com/) 

**Initialize code to use NPM:**

1. Create a directory that will contain JS
  - `mkdir npmdirectory`

2. Go inside the directory and Run `npm init`

3. Answer questions about project, press enter for defaults 
  - `npm init -y` sets all to default

**Package.json**

A file that is found in the NPM directory you create. 

It contains 3 things:

1. Metadata about your project such as its name and the default entry JavaScript file

2. commands (scripts) that you can execute to do things like run, test, or distribute your code

3. packages that this project depends upon

```json
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Dependencies - the packages that you have installed


**Install/uninstall a node package**

```sh
➜  npm install <package name>
➜  npm uninstall <package name>
```


`package-lock.json` file tracks the version of the package that you installed. That way if you rebuild your node_modules directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible with your code

`node_modules` directory: Installed into project directory when you install packages, contains the actual JavaScript files for the package and all of its dependent packages
  - include in `.gitignore` file


Run `npm install` in project directory after cloning source code from GitHub into my project. It downloads all of the previously installed packages and recreates the `node_modules` directory

**Using the package**

In the JavaScript file reference the package name as a parameter to the `require` function

Call object functions in the pacage. 

index.js

```js
const <objectInstance> = require('<package-name>');
<objectInstance>.<packageFunction>((<parameter>) => {
  console.log(<parameter>);
});
```















## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
hello


# MARDKOWN (this is a title)

## This is a header

### This is a smaller header

**This is an even smaller header**



![THIS IS AN IMAGE](moscow.jpg)

> [!NOTE]
> This is a boxed out note section


- This is a bullet list item
- This is another bullet list item
  - This is an indented bullet list item
















