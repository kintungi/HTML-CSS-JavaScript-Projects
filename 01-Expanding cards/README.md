# Expanding cards
This project is about the cards each containing a quote. When you click on a card it expands and displays a quote.


## How I did it

### HTML
1. I created a container to hold the cards
2. Inside the container, I created five `div` and I added an `h3` with a text node containing a quote.


### CSS
1. I used flex box to center the container and its containing elements
2. I Flexed the items horizontally with the flex grow of 0.5 for inactive panels and 8 for the active panel so that it takes the size of 8 items when expanded.
3. A panel is a grid container and the quote inside a panel is centered horizontally and vertically with a margin to ensure it does not touch the borders of the panel when shrinked.
4. I used a media querry to turn the display property to none for the last 2 panels in small width.


### JavaScript
1. Added a "click" event listener to the container so that I can capture its children, the panels.
2. When a panel is clicked, it is checked if it is an active panel or inactive, if active do nothing. If inactive, a loop will go on to search for an active loop and turn it off.
3. A class of active is added to the clicked panel which makes it to grow 8 times the other panels.
4. When the panel is active, a timing function waits for some seconds before displaying a quote.