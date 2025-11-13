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

`.className` selects by element class



```css
element.className {
  property: value;
}
```

**Select and make changes to the ID of an element**

`#IDname` selects by element ID

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

## Debugging JavaScript

**Console debugging**

Insert `console.log` functions in the index.js file that output the state of the code as it executes

`F12` menu in browser can tell you the results of the JS code

You can execute JS directly in the console window
  - change variables
  - print current value of a variable

**Browser debugging**

Use source tab in browser debugger, it displays the course files that comprise the currently rendered content

## Debugging Node.js ##

VS Code: `F5` executes the debug menu, use the `Node.js` debugger


# Routing #

Set up NPM and install Vite

`npm init -y`

`npm install vite@latest -D`

Add the `node_modules` to the gitignore file

package.json file script commands for running Vite, it won't run if you don't change this 

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
```

React Bootstrap - wraps Bootsrtap CSS framework in React components 

`npm install bootstrap react-bootstrap`

Put this import statement at the top of `.js` or `.jsx` files, it imports the CSS into the Javascript so Vite can handle it

`import 'bootstrap/dist/css/bootstrap.min.css';`

`npm install react react-dom react-router-dom` - console command to install React


## React Bootstrap Components

*Button* 

```jsx
import Button from 'react-bootstrap/Button';

export function NavButton({ text, url }) {
  const navigate = useNavigate();
  return (
    <Button variant="primary" onClick={() => navigate({ url })}>
      {text}
    </Button>
  );
}
```














## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

# React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

## JavaScript Console

`console.log(<message>)` -> Log

*Timers* 

See how long a piece of code is running for, wrap in time and timeEnd calls

```js
console.time('demo time');
for (let i = 0; i < 10000000; i++) {}
// code that takes a while
console.timeEnd('demo time');
// outputs the demo time seconds
```

*Count*

See how many times block of code is called

```js
console.count(<code reference>);
```

## JavaScript Functions

*Syntax*

```js
funciton name(params) {
  return value;
}
```

Functions can either return a variable, or execute the commands inside the function when it is called.

`function name (value, defaultValue = 'default')` -> define a default value within a function that is used when a parameter isn't defined in the function's call

Functions can:
- take a function as a parameter
- be assigned to a variable
- be assigned to a parameter
- be executed within other functions
- return a function
- assign values to other functions
- call a function that is being returned from another function

Anonymous function
- Define the function first then assign to a variable
- use abbreviated arrow syntax `=>` to write anonymous function

## Javascript Arrow Function

Gets rid of the `function` declaration part and only uses the parameters to construct

Good for use in React components 

syntax:

`(<parameters>) => <return value>`

Return values:
- `=> <value>` returns the value
- `=> {<value>;};` returns undefined
- `=> { return <value>;};` returns the value


*Closures*
- allows a function to reference its creation scope
- returns the arrow function that includes the closure of variables that existed when it was created
- useful when executing JS within the scope of an HTML page, since it remembers the values of variables that were in scope when the function was created


## Arrays

Array functions:

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => i < 1)`          |


## Objects

Objects:
- collection of name value pairs `properties`
- Property name must be String or Symbol
- Value can be any data type
- Has constructors
- Has a `this` pointer
- Static properties and functions
- inheritance
- dynamically modifyable

Create an object:

```js
const <objectName> = new Object(<properties>);
```

Reference the properties of an object:

```js
obj.property = <value>;
obj['property'] = <value>;
```

Create an object-literal:

```js
const obj {
  property: int,
  property: string,
  property: function {},
  property: true,
};
```

*Object Functions*

| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

`Object.entries(obj);`

*Constructor*

Any function that returns an object is a constructor, and is called with the `new` operator

```js
const <var> = new Object('value');
```

*This Pointer*

Refers to a pointer to the object, is dependedn on the scope of where it is used

## Classes

Use to define objects

Creates a reusable component rather than a single object

Contains an explicit constructur and function declarations

*Creating a class*:

`Object` can be whatever name you want to give your class

```js
class Object {
  constructor(property) {
    this.property = property;
  }

  function() {
    // action the function performs
  }

}

const obj = new Object('passed in property');
obj.function();
```

`extends` -> create extensions / children of a parent function

`super` -> super. or super() prefix any parameter that need to be passed on to the parent classes from within a child function


## Descructuring

Can do this on arrays or objects

Useful if you only care about a few items in the original structure

Used a lot in React

*Descructure an array*

```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```

*Combine multiple items from the original object*

```js
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```

*Destructuring objects*

Must explicitly specift the properties you want to pull from the source object

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT: 1, ['fish', 'cats']
```

*Map names to new variables*

Changes the reference name

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT: 1, animals
```


*setTimeout* 

Allows you to delay the execution of something until after a certain period has expired

*setInterval*

Function that allows you to execute a block of code periodically at a given time interval

Cancel a setInterval request by capturing the result of the setInterval call and passing it to the clearInterval function

## React hooks

*What they are*: special functions that let you "hook into" React features from your simple function components.

*The `useEffect` Hook*

Function: run code after your component has rendered

Cases of use:
- run code only once when the component first loads
- run code only when a specific value changes
- run "cleanup" code when the component is destroyed

*Rules*:
- Always call hooks at the top level of your function
- Never call hooks inside if statements, loops, or other nested functions
- React relies on them being called in the same order every single time the component renders, these rules make sure the order does not change

# Reactivity

*What it is*: the mechanism React uses to automatically update your webpage when your data changes

*Three key pieces*

1. State: This is the data that can change. You use state to store things like the current user, a list of scores, or whether a menu is open.

2. Props: This is the data a parent component passes down to its children.

3. Render: the act of React calling your component function to build the UI. A render is triggered whenever a component's state changes or its props change.

*The one way data flow*

*When to use*: use this pattern when a child component needs to change data that a sibling component needs to read. The pattern keeps app data predictable, the parent is in charge and the children just display data or ask the parent to make changes. 

*UPDATES ARE ASYNCHRONOUS*

When you call an update function, the variable is NOT updated immediately on the next line of your code. 

What really happens is you are just scheduling an update. React batches these requests and processes them "eventually" which is extremely fast, but not instant

This means you can't call an update function and then try to read the variable on the next line expecting it to be the new value. You must trust that React will re-render your component with the new value when it's ready.


## JSON

*What it is*: a method of sharing and storing data, and is a very popular data format

*What can it do*: can be converted to and from JS objects

*Format*

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |


JSON is always encoded with UTF-8 so it can represent global data

`JSON.parse` and `JSON.stringify` functions allow you to convert JSON to and from JavaScript

```jsx
function Clicker({ initialCount }) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker initialCount={3} />);
```

`initialCount` -> object is destructured to just the initialCount parameter

`React.useState` -> return value from this destructures the array to just the variable and the update function




# LocalStorage API

*Use*: provides the ability to persistently store and retrieve data (i.e. scores, usernames, etc.,) on a user's browser across user sessions and HTML page renderings. Also used as a cache for when data cannot be obtained from the server. Keeps data there even if the page is refreshed or tab is closed
- Usernames displayed across multiple pages
- scores
- Keeping a user logged in
- Saving a name or user name 

*Functions*

| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |


Local storage values must be string, number, or bool. 

To store JS object or array, convert it to a JSON string with `JSON.stringify()` to pass it, then change it back to JS with `JSON.parse()` when received. 



`fetch`: Built in browser function, use to make a web service request by supplying the URL of the web service

`endpoints` & `APIs`: the functions provided by a web service

`URL`: represents the location of a web resource, can be a web page, font, image, video, database record, JSON object

*URL Syntax*

Scheme -> usually https for web applications

Domain name -> owner of the resource represented by the URL ex. emmastartup.com

Port -> specifies the numbered network port used to connect to the domain server. HTTPS port 443, HTTP port 80

Path -> The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.

Parameters -> Key value pairs that provide additional qualifiers on the resource represented by the path.

Anchor -> represents a sub-location in the resource, a request for the browser to automatically scroll to the element with t\

*Common port numbers*

| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |


Each web service I run needs to use a different port to communicate on 


*HTTP Request syntax*

```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

`GET` request: 	Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.

`POST` request: Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.

`PUT` request: Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.

`DELETE` request: Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.

`OPTIONS` request: 	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.

*HTTP response syntax*

```yaml
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```

*Status Codes*

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.


## Node Express Package

`express.Router()` creates a new, mini-Express app, useful to create a special route for api requests

`const` vs `var`: 
- `const` creates a constant variable, it can never be reassigned to point to something else
- `var` creates a variable that can be reassigned to anything

`app.use('/api', apiRouter)`: tells your main app: "If any request comes in for a path that starts with /api, hand it over to apiRouter to deal with."

*Uses*:
- Routing requests for service endpoints
- Manupilating HTTP requests with JSON body content
- Generating HTTP responses
- Using `middleware` to add functionality

*Create an Express application*

1. Use NPM to install the Express package

```sh
➜ npm install express
```

2. Call the `express` constructor to create the Express application and listen for HTTP requests on a desired port

```js
const express = require('express');
const app = express();

app.listen(8080);
```

3. With the `app` objcest you can now add HTTP routing and middleware functions to the application

*Defining routes*

Route: a rule that tells the server what code to run when it receives a request at a specific URL path

*Basic Syntax*

Use the `app` object from Express and match it with an HTTP verb like `app.get()`, `app.post()`, `app.put()`, `app.delete()`

```js
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});
```

*How to make a dynamic route*

Use a URL parameter `:`

```js
app.get('/store/:storeName', (req, res) => {
  // If the user requests '/store/orem'
  // req.params.storeName will be "orem"
  const name = req.params.storeName;
  res.send({ name: name });
});
```

Access the value: Express will automatically take the value from the URL and put it in the `req.params` object

*Next parameter*

The handler function can also take a third argument, next.

```js
app.get('/store/:storeName', (req, res, next) => {
  // ...
});
```
- You call `next()` if you want to pass the request on to the next matching route or middleware in your file.

- If your function sends a response (like `res.send()`), you are done and you don't need to include `next`.


*Middleware*

`next()` function
- `function myMiddleware(req, res, next)`
- after the function does its job, call `next()` to pass the request to the next function
- if next is not included in the middleware function, then the passing stops

*Custom Middleware*
- Write your own middleware for simple tasks
- ex/ logger that prints the URL of every request

```js
// This middleware logs the request URL and then passes it on
app.use((req, res, next) => {
  console.log(req.originalUrl); // Does its job
  next(); // Passes to the next station
});
```

*Built-in Middleware from Express*
- `express.static`

```js 
// This tells Express to serve static files from the 'public' folder
app.use(express.static('public'));
```
- This middleware checks if the request URL matches a file in your public folder (e.g., /index.html or /my-image.png).
- If it finds a match, it sends that file as the response and stops the chain (it doesn't call next).
- This is how you will serve your React application's dist folder.

*Third-party Middleware from NPM*

`cookie-parser`
- Install: `npm install cookie-parser`
- What it does: reads the raw `Cookie` header from the request and turns it into a simple object, which it attaches to the `req` object as `req.cookies`

```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

*Error handling Middleware*
- goes at the end of the line of functions to catch errors
- has 4 parameters `(err, req, res, next)`
- if any other middleware or route throws an error, Express skips all other stations and sens the request directly to this error handler

```js
// This must be defined AFTER all your other routes and middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error
  // Send a clean JSON error message back to the client
  res.status(500).send({ message: 'Something went wrong!' });
});
```

## JavaScript Modules

*What they are*: Modules are just JS files

*Purpose*: to organize your code by splitting it into separate files instead of having one giant file

`export` allows you to send out code like functions, variables or classes from one file

`import` allows you to import the code into another file that needs it

1. *CommonJS*
- Import: use the `require()` function

```js
// Import the 'express' library
const express = require('express');

// Import one of your own files
const DB = require('./database.js');
```

- Export: assign whatever you want to export to the `module.exports` object

```js
// In database.js
function connect() {
  // ...
}

module.exports = {
  connect, // This exports the connect function
};
```

*2. ES Modules*
- Used in React and modern Node.js code
- First tell Node.js to use ESM by adding `"type": "module"` to the `package.json` file
- Import: use the `import` keyword at the top of the file

```js
// Import the 'express' library
import express from 'express';

// Import a specific function from your own file
import { alertDisplay } from './alert.js';
```

- Export: add the `export` keyword in front of the specific thing you want to share

```js
// In alert.js
export function alertDisplay(msg) {
  console.log(msg);
}
```

# DATABASE (mongo)

`.findOne()` - method for when you want tofind one specific document in MongoDB

`updateOne()`

Syntax to change existing field to new value

`collection.updateOne({ field: value }, { $set: { fieldToUpdate: newValue } });`

Syntax to remove a field:

`collection.updateOne({ field: value }, { $unset: { fieldToRemove: '' } });`



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




Padding: applies to spacing between the element and its border

Margin: applies to spacing between the border and other adjscent elements

Display an image with a hyperlink in HTML

```html
<a href="http://mylink.com"><img src="http://imagelink.com/pic.png" /></a>
```

CSS box model order inside -> outside: content, padding, border, margin


JS select an element and change the text color of selected element: `document.getElementById('<element>').style.color = '<color>'`


JavaScript if statement syntax: `if (<condition>)`

`===` strict equality operator, checks condition without type coercion

Javascript create function syntax

Function declaration: `function <name>(<params>) {}`

Arrow function expression:

Function expression: `const <variableName> = <funcName>(<params>) {}`

Create Javascript object: `let <varName> = {<key>: <value>, <key>: <value>};`

Javascript objects are dynamic

`document.querySelector()`: finds first element that matches the provided CSS

`p.demo` selector: specifically targets an element that is a `<p>` tag and the class demo

`.textContent =`: sets selected content equal to a new value

JSON objects contain attribute-value pairs

a server can use the JSON format to send a web browser some data

Remote shell command: `ssh`

`-la` parameter: outputs all files, outputs a long listing 





