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

## CSS

## CSS

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


























This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

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
















