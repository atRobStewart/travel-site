# udemy-travel-site

This README will serve more as a note to myself on sections and lessons rather than being a TL;DR description for anyone looking through here. In saying that I do hope hope it's descriptive enough for Recruiters and Devs otherwise I'll assume I'm not explaining it well enough for future me to understand.

My commits will likely serve as a good refresher for all that I have done because I am over-commiting with the intent of them acting as notes. I do want to keep good commit practices so anything noteworthy that is too long will be written in here.


With the power of npm, webpack and postcss I am learning how to use the IMPORT postcss plugin to split my css code into partial files for better understanding and organisation from which I will import into the main styles.css style sheet. This will put a good file architecture in place (commit dates for this lesson start 01/June/2023)

Reintroduced myself to CSS Selectors and specifcally used the class selector on a div block to move text over an image. Traditonally further changes can be made to specific elements in the div tag by making a new rule and following it with the element name. If I want to change h1 I will make a new .large-hero rule and follow it with h1, its syntax will look like: .large-hero h1 {} (will replace with image when I learn how)

![Example image 1](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/TraditionalCSSselectorSyntax.png)

In this lesson I will move away from using type and decendant selectors and use a methodology called BEM (Block Element Modifier). So consider the div class large-hero to be a block than contains many elements that will only ever be associated with that block, this means that the cascading part of css cannot interfere with other blocks on the page. Javascript will be used in the future to modify blocks and elements think of opening and closing a hamburger menu or reusing a button in many places for different actions.
The double underscore is to indiate an element that belongs to the block, large-hero is the block, __title is the element.

Elements can be written nested in the base block rule, this allows me to replace the base block name with the '&' symbol and make the association between a block and its elements easier to identify

![Example image 2](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/ElementAndNestedElement.png)


I have created a variable css partial file to create instances of repeated code to make rewriting easier, a shade of blue is constantly recurring so it made sense to store it in a variable and use when nesessary rather than typing out the hex code every time.
Very improtant to note that the cascade in css is important when importing on the styles sheet. The _variable.css must preceed any other imports where the variable will be used otherwise the variable will not be recognised in those css files, I learned this the hard way when I put the _variables.css on the last line and not above the imports where the variable is being used.

![Example image 3](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/ImportOrderImportance.png)

You can also modify element classes by giving the class a second class with a modifier, example being: class="btn btn--orange". This allows me to recycle classes. The double dash indicates a BEM modifier and the name of the modifier is orange. There is no restriction on the amount of modifier classes that can be added. In the below snip btn and btn--orange are recycled and btn--large is new, this new one can be applied to other elements if need be.

![Example image 4](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/ClassModifier.png)

Whilst learning how to use Webpack Dev Server to run the website in localhost and to auto update any changes made I ran into problems. A new devServer property was added to the webpack.config.js file which is fine but the tutorial uses a deprecated property within the devServer object that no longer functions in Webpack v5 called contentBase. I had to go on to webpack.js.org to to find the currently used property called static with which I made into an object within which I had to use another property called directory to achieve what the tutorial set out to do. This tutorial does provide a way to use the version of Webpack that is showcased but I felt it was a better option to use the most up to date version of Webpack to provide a challenge rather than getting trapped in a glorified type along lesson.

Tutorials deprecated Webpack code:

![Example image 5](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/DeprecatedcontentBase.png)

My up to date code (as of writing this): 

![Example image 6](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/Currentv5Properites.png)

The trend of deprecated properties looks like it will be a constant problem for me, this is a welcome problem as it exercises my problem solving skills and refines my ability to serarch for solutions. The latest depricated property is before:, below you can see webpack failing to build because before: is unknown. Note that the commented out watchFiles above it is the current webpack v5 property. The webpack-cli additionally offers a multitude of other options with watchFiles being one of them, it is highlighted on the last line of the red text. Initally I tried onBeforeSetupMiddleware: due to before being a keyword, but webpack.js.org brought me to the devServer.watchFiles section of the website.

![Example image 7](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/Deprecatedbefore.png)

Addtionally I came across the open: property and used it to auto open the page in localhost to save me from opening a new webpage and opening localhost manually. I found this while trying to fix the previous problem it does not show up in the tutorial, hopefully it doesn't show up later so I can take all the credit. I will note that automating this was in the back of my mind as it was becoming a repetitive task so this was a nice find.

![Example image 8](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/openProperty.png)

With mobiles being the most used device for web browsing nowadays development will now use a Mobile First approach where I will develop for small mobile screens first and scale up for larger devices. I will be using Mixin a postCSSplugin to make working with @media queries easier. A Mixin is a reusable piece of code that will be written in its own separate stylesheet and called in where it's needed. 
In the image below you can see mixin being used to call in small, medium and large sizes for the Title font with the baseline styles preceeding them as the basline is the smallest.
The second image shows the mixin code that is being called in from the _mixins.css stylesheet.

![Example image 9](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/Mixin.png)

![Example image 10](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/MixinStyleSheet.png)

For this update I learned how to apply responsive images for different screen sizes. Both Art Direction and Image resolution had to be considered to keep the look flow and feel of the website consistent across multiple devices and to reduce load times and file sizes on small devices like phones, there's no sense in downloading a 4k image to a smartphone. 
Below is an image of the html used to achieve this, each srcset has two images for both standard and high resolution as well as for both landscape and portrait views on smaller devices.

![Example image 11](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/ResponsiveImageCode.png)

Today I learned the power of creating Reusable Blocks. When looking at a websites completed design it is important to identify any repeating patterns, in this case I created a new _wrapper.css module which was then imported to the styles.css and then used in the html.

![Example image 12](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/WrapperCSS.png)

I created new div classes that used wrapper to apply the CSS contained within the _wrapper.css to the body of text within large-hero, our-beginning and features. Additionally I created a _page-section.css module to apply additional padding and to apply a blue background with white text in features.

![Example image 13](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/ReusableBlocks.png)

The Website has been updated with new _headline.css module file which directly styled the "our-beginning" header text in the html which is the upper main body of the website. This time I decided to pause the tutorial and go ahead when appropriate in an attempt to apply as much of my previous learning as possible, I was successful in parts with this having created modifier classes in the html and rules for them in the css but I was caught off guard with the amount of class modifiers and rules that were required. I had initially grouped styles under a single rule but the tutorial separated them out. There's no doubt about how well organised, managable and readible this makes the code but I can see certain criticisms about this postCSS method coming through, particularly regarding how messy the html can get with all the class modifiers.

![Example image 13](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/HeadlineClassModifiers.png)

![Example image 13](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/HeadlineModifierRules.png)