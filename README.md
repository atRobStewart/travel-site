# udemy-travel-site

This README will serve more as a note to myself on sections and lessons rather than being a TL;DR description for anyone looking through here. In saying that I do hope hope it's descriptive enough for Recruiters and Devs otherwise I'll assume I'm not explaining it well enough for future me to understand.

My commits will likely serve as a good refresher for all that I have done because I am over-commiting with the intent of them acting as notes. I do want to keep good commit practices so anything noteworthy that is too long will be written in here.


With the power of npm, webpack and postcss I am learning how to use the IMPORT postcss plugin to split my css code into partial files for better understanding and organisation from which I will import into the main styles.css style sheet. This will put a good file architecture in place (commit dates for this lesson start 01/June/2023)

Reintroduced myself to CSS Selectors and specifcally used the class selector on a div block to move text over an image. Traditonally further changes can be made to specific elements in the div tag by making a new rule and following it with the element name. If I want to change h1 I will make a new .large-hero rule and follow it with h1, its syntax will look like: .large-hero h1 {} (will replace with image when I learn how)

![text](TraditionalCSSselectorSyntax.png)

In this lesson I will move away from using type and decendant selectors and use a methodology called BEM (Block Element Modifier). So consider the div class large-hero to be a block than contains many elements that will only ever be associated with that block, this means that the cascading part of css cannot interfere with other blocks on the page. Javascript will be used in the future to modify blocks and elements think of opening and closing a hamburger menu or reusing a button in many places for different actions.
The double underscore is to indiate an element that belongs to the block, large-hero is the block, __title is the element.

Elements can be written nested in the base block rule, this allows me to replace the base block name with the '&' symbol and make the association between a block and its elements easier to identify

![text](ElementAndNestedElement.png)