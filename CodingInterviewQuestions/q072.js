// Asked by Twitch

// Describe what happens when you type a URL into your browser and press Enter.

// 1. type maps.google.com in browser and hit enter

// 2. browser check for cached DNS record, it looks in:
// 2.1. browser cache
// 2.2. OS cache
// 2.3. router cache
// 2.4. ISP cache (internet service provider)

// 3. if there is npo cached DNS record, ISP DNS server requests recursively other DNS servers to find a host
//    corresponding to the requested hostname
//    There are domain levels:
//    - . root domain
//    - com - top level domain
//    - microsoft.com - second level domains
//    - help.microsoft.com - third level domain
//    Each of these levels contains their own name server, which is queried during the DNS lookup process. Root name
//    server will redirect it to the .com domain name server. .com name server will redirect it to the google.com name
//    server. The google.com name server will find the matching IP address for maps.google.com in its DNS records and
//    return it to your DNS recursor, which will send it back to browser

// 4. browser initiates TCP connection with the server, establishing connection includes 3 stages:
// 4.1 browser sends a SYN packet to the server, asking if it is open for new connections
// 4.2 if the server has open ports that can accept and initiate new connections, it’ll respond with an ACKnowledgment
//     of the SYN packet using a SYN/ACK packet
// 4.3 browser receive the SYN/ACK packet from the server and acknowledge it by sending an ACK packet

// 5. browser sends an HTTP request 

// 6. webserver (example Nginx, Apache) hosted on server recieve HTTP request and pass it to request handler (example
//    nodejs express), and it makes corresponding action (endpoint) and generate response (html, json, etc.)

// 7. browser gets response and process it, for html response it starts with rendering html skeleton and then checks
//    html tags and request HTTP GET for additional data for page, like js, css, images, etc.