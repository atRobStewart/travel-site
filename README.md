# travel-site

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

Inspite of it being bad practice I have waited until this point to start using branches with Git, it is never a good idea to develop on master as this is typically the live production version of a companies website. I have created both a Dev and QA branch, I will branch off further to appropriate branches like WIP, hotfix, bug, feature etc; branches. In a work place many people will be working on many different areas, features and problems of a given project. There are many different procedures and failsafes a comany can use to best prevent issues from making it to the live master branch, my approach will be to make feature branches and on completion merge them with Dev. Ideally many features, bugfixes and hotfixes would be merged to QA for testing and then merged to Dev for a final test in compatability, you have to mindful of potential conflicts between different features that may run fine on their own but will complain when merged together, and to allow developers to develop further on the updated project. But I am working alone so I will merge directly to Dev and then into master to keep a habit of good practice. Down the line to hope to delve into the QA end of this but it may not happen in this particular project.  

The Website has been updated with new _headline.css module file which directly styled the "our-beginning" header text in the html which is the upper main body of the website. This time I decided to pause the tutorial and go ahead when appropriate in an attempt to apply as much of my previous learning as possible, I was successful in parts with this having created modifier classes in the html and rules for them in the css but I was caught off guard with the amount of class modifiers and rules that were required. I had initially grouped styles under a single rule but the tutorial separated them out. There's no doubt about how well organised, managable and readible this makes the code but I can see certain criticisms about this postCSS method coming through, particularly regarding how messy the html can get with all the class modifiers. 
My view on it so far is that from a development stand point it could be slow, awkward and encumbering initially but from a maintenance stand point I feel it would be quite easy especially when handing it over to another person.

![Example image 14](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/HeadlineClassModifiers.png)

![Example image 15](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/HeadlineModifierRules.png)

As an aside it is sloppy to use an empty element in your html that only exists for styling purposes. A rule was written in the css to target the element which cleared the floats from the previous elements. This allows the parent div to know how tall it should be as this gets overrided by its two child divs which causes problems in the styling.

![Example image 16](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/SloppyEmptyElement.png)

![Example image 17](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/SloppyCSSClear.png)


This need to clear floats is likely to recurr so it is much better practice to write it in a mixin and call it in when needed. Addtionally this will keep the html clear of empty elememts.

![Example image 18](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/ClearFixMixin.png)

![Example image 19](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/ClearFixCall.png)


To prevent this readme from getting out of hand I will be minimizing the amount of notes I leave in it, any documentation on repeat tasks will be left solely to my commits. I will add in any new things that I really need to commit to memory as documenting helps me do this and I will add infomation that I find interesting. This will likely blow up again when I get stuck into Javascript and start to learn concepts like Code Splitting and Lazy Loading. Also if you have actually read this far please hire me, any company that takes the time to actually read through this shows me that they actually care and have passion for their work, that's the kind of place I want to work in. If you're a randomer and made it this far, fair play to ya!

While theres nothing wrong with nesting multiple layers deep in css it is been recommended to me that I avoid nesting more than one layer deep. This presented a problem when tidying up the text of the main body, but it can be resolved by creating a new rule and using a decendant selector.

![Example image 20](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/DecendantSelector.png)

To drive the point home to myself it is important to be selective with what goes in the _global.css file, you don't want to pollute it with rules that don't belong hence the BEM methodology. Adding the colour orange to all link tags highlighted this as it is the default colour on the design. However, in the main body there is a link that is also bold, made so by the css code above. It is also important to note that the code above goes against the BEM methodology but they are scoped to that class, areas where BEM will be abandoned are very few and far between. Most important takeaway is that it is okay to move away from BEM if it is appropriate.

Recurring note that the double underscore in BEM naming convention indicates that this is an element of a block and double dash is a modifier of an element and/or block.

While designing the our-features section I came across the first major instance of BEM reusability by using the row class I used in an earlier section to create a two coloumn layout. This will allow me to write new css in the _row.css module stylesheet where similar css already exists, it currently supports a 1/3 2/3 split but now it will also support a 50/50 split regarding columns. I was able to reuse the gutters modifier from earlier to add padding and margin to the new column layout by adding it to the root row class block in the html.

The > symbol can be used to apply a rule to any child elements nested in the element a class rule is written. In this specific example it is the rows--gutters-large modifier being applied to all proceeding child divs.

![Example image 21](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/RowGuttersLarge.png)

![Example image 22](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/ParentChildElements.png)

The Our Features section of the tutorial has a lot of examples of styling reusability, once I created the styling for one feature item I could directly apply them to other feature items by adding their class names to the appropriate tags in the html. Additionally I added the generic-content-container class to the root row class block to apply the text spacing from a prior section to this section. BEM is starting to prove itself to be a powerful approach to styling inspite of it's inital awkwardness, there is no right or wrong approach or methodology (within reason) but I feel this is one I would be happy to follow through with and expand upon.

I have been introduced to Flexbox. I used a mixin media query to target medium screens or higher to apply flex. To apply flex to all 3 columns they must all be targeted, using the & symbol within a rule will target it's selector saving me from having to rewrite it. In this case the > symbol is used to target direct decendants in the HTML with a tag type of div, this has been seen before when working with the gutters rules but I'm giving it reinforcement because I feel it will prove to be quite useful. Each column needed to be told to stop being floated and to start using Flexbox instead, this resulted in giving me equal height columns.

![Example image 23](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/Flexbox.png)


A note more to myself at this point should I be re-reading this: I have been pausing the tutorial regularly at this point and going ahead with the styling on my own. While not completely accurate to the tutorial I have been reasonably successful with producing close to and in some instances the same styling as the tutorial. When I reached a point I was happy with I went back and redone parts to match the tutorial as I felt a lot of time the lesson code layout made more sense but I have proven to myself that I can come up with it myself, I just need to spend more time practicing to hone my skills I do plan on building my own site from scratch once I complete all of this. It's amazing that with even this practice how much the concept of BEM is sticking to me and how much I understand mixin media queries , I never came across them before this and was completely lost with them initally.


By installing an npm package called postcss-hexrgba I can use a hexadecimal colour code which will save having to find out the rgb values of colours. This is not valid css therefore the web browser will not be able to interpret this postcss plugin will automatically convert hexadecimal codes inside an rgba() into the corresponding red, green and blue values.

![Example image 24](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/rgba.png)

![Example image 25](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/PostrgbaHex.png)

CSS Grid is a more modern way of handling the positioning, centering and overlapping of certain styling, in the case below it is the central text and button at the top of the site in the large-hero css block.

![Example image 26](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/GridBefore.png)

![Example image 27](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/GridAfter.png)

Note the CSS Grid for the colunm layout is not the most graceful way to handle responsive design in CSS Grid, it is a rushed example to update the older float method. If building from scratch the approach would be different. Furthermore, you don't need media queries to have different column layouts for different screen sizes using CSS Grid, it is very powerful. I must look into the better way to do it and I must look up more modern practices once my skills improve.


<h1>Javascript Time!</h1>

So far Javascript has been a reintroduction to object-oriented programming, nothing is strictly new it all just refreshing me on the concepts and terminology. While Javascript is a new language for me my experience with C++ and Java is now paying dividends, the most difficult thing for me so far is the syntax which will come with practice. This also applies to CSS properties, I have a good understanding of B.E.M at this stage I just need to become a lot more familiar with the most popular CSS properties and get experience with seeking out the correct ones for the task I'm trying to achieve, this will also come with practice and repetition.

I am refraining from blowing this up with notes and screenshots, and choosing to let my commits document for me. I and anyone else should be able to look at the commit history and get a decent understanding of what was been done at that point in time. I will tidy up the mess above once this is all complete or I may leave it as a relic to learn from.

I will only use this for concepts that I am truly struggling to understand which I'm sure will hit me soon.

Using the key word "before" and "after" will create a sudo element in the CSS selector instead of using the top and bottom selectors defined in the html, all we need is the middle selector which in turn tidys up the html.

Below are before and afters of the html.

![Example image 28](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/EmptyDivBefore.png)

![Example image 29](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/EmptyDivAfter.png)

Here is how the CSS looks with the sudo elements.

![Example image 30](https://github.com/atRobStewart/udemy-travel-site/blob/master/app/assets/images/mdimages/BeforeAfterCSS.png)

