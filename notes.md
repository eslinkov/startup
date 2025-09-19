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

p --> paragraph element

opening tag --> `<element>` 

closing tag --> `</element>`





This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

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
















