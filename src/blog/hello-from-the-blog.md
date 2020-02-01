---
path: Making Your Website Accessible
date: 2020-02-01T07:07:24.449Z
title: Hello from the blog
category: dev
---


Making your the web accessible to as many people as possible should be everyones goal. Below you will find a basic guide to accessibility to get you started.

Make accessibility part of the process from the beginning and make it everyone’s job.

## Terminology

Here is some basic terminology you will want to know before you get started.

* **WCAG** - Web Content Accessibility Guidelines
* **A11Y** - Accessibility

## Tabindex property

Managing tab experience is highly important. This can be done with the tab index property.

* `tabindex=”0”` - Adds an element to the tab order.
* `tabindex=”-1”` - Removes an element from the tab order, and allows an element to receive focus using the JS focus() function.
* `tabindex=”(>0)”` - Use a tabindex greater than one to alter the natural tab order.

TODO: Add information about natural tab order.

## Skip Links

One way to help make your site more accessible is by adding skip links. Here is an example below.

### HTML:

```html
<a href=”#main-content” class=”skip-link”>Skip to main content</a> <!-- add before nav -->
<main id=”main-content” tabindex=”-1” <!-- for older browsers --> </main>
```

### CSS:

```css
.skip-link { position: absolute; top: -40px; left: 0; }
.skip-link:focus { top: 0; }
```

## Roving Focus

Move focus on arrow down. Wrap back around once user reached end.

```html
<li tabindex=”0” checked></li>
<li  tabindex=”-1”></li>
<li tabindex=”-1”></li>
<li tabindex=”-1”></li>
```

## Find Missing Content

To find your missing focus you can type the following into your console:

```javascript
document.activeElement
```

## Fix Offscreen Elements

Take offscreen elements out of tabindex by adding:

```css
h1 {
  display: none
}

/* or */

h1 {
  visibility: hidden
}
```

to element when offscreen. When element comes back on screen change CSS to:

```css
h1 {
display: block 
}

/* or */

h1 {
visibility: visible.
}
```

## HTML Semantic Elements

* This ensures screen readers can understand the content and allows you to access the browser’s built-in accessibility functionality.
* Screen Readers will reach the elements role, name (label), value, and state Use labels to describe elements on a page.
* *Forms:*

  ```html
  <label for=”example”><input id=”example”></input></label>
  Images: <img srce=”#” alt=”example”>
  ```

  To skip image leave alt text empty
* Test website with broken image to ensure web content still makes sense.
* Only add alt text to important images - not decorative images
* Don’t say that an image is a logo or where it links to.
* *Headings:* Use headings to mark main sections of the page. Make sure not to use headings just to achieve a particular styling. Instead, use headings to logically label page sections.
* *Links:* Always label links with an anchor tag and href attribute—even in single page applications.
* Home logo image should have alt text. Purpose of link should be discernable from link text alone.
* *Semantic Elements:* Main, Header, Footer, nav, article (test: would it’s content make sense in another section of the site), section (should include heading), aside (related content). This helps assistive technology understand how page elements relate to one another.

## VoiceOver Commands

* CTRL+Option+U to open Web Rotor
* ← and → to change panes within Web Rotor
* Type search term with Web Rotor open to search within Web Rotor
* Enter to move VoiceOver focus to item from Web Rotor
* CTRL + Option + Spacebar to activate link/button/other element
* CTRL + Option + ← ↑ ↓ → to explore content
* CTRL + Option + CMD + H to move forward by heading
* CTRL + Option + CMD + Shift + H to move backward by heading
* CTRL + Option + W to have a word spelled out

## WAI-ARIA

* *Stands for Web Accessibility Initiative - Accessible Rich Internet Applications*. Aria only affects the accessibility tree.
* Custom checkbox:

  ```html
  <div tabindex=”0” class=”checkbox” role=”checkbox” aria-checked=”true”></div>
  ```
* \**Role:*v Shorthand for a particular UI pattern. Should always be applied in the same place as the tabindex attribute.
* *Aria-label:* Used to describe an elements purpose. Overrides any other label element used, other than Aria-labelledby
* *Aria-labelledby:* Let’s you refer to an ID of another DOM element as this elements label. * Can be used on any element, not just labellable elements.

  * Can take a list of ID references to compose a label out of multiple elements.
  * Overrides any other label element.
* *Buttons:* Don’t need labels.
* *No need to redefine native semantics*, unless the native semantic elements are not supported across all browsers. This is especially applicable in HTML landmark elements.
* *Aria-owns:* Labels child elements. Can take a list of IDs. By default, native children will come before aria-owns children.
* *Aria-activedescendent:* When parent has page focus, it should be presented to user as actual focused element.
* *Aria-describedby:* Allow you to provide an accessible description, such as requirements for a PW field. Good for supplemental information. Can reference elements that are otherwise not visible.
* *Aria-setsize:* Specifies the actual size of the set, such as when lazy rendering elements in the DOM. Set on the items in the set, not on the container.
* *Aria-posinset:* Specifies the position of the element in the set
* *Hidden:* Anything explicitly hidden will not be included in the accessibility tree. If not explicitly hidden, it will still be included in the accessibility tree, even if not visually rendered.
* *Aria-hidden:* Hides element and descendants from accessibility tree, even if not explicitly hidden. This will not hide labelled by or described by attributes.
* *Aria-live:* tells browsers that users should be alerted to something in a timely manner, whether or not they decide to explore that part of the page.
* *Values:* off, polite, assertive

  * Should be in initial page load
  * Different screen readers act differently.
  * Test different content changes to see what works.
* *Aria-atomic:* Entire region should be communicated as a whole.
* *Aria-relevant:* Types of changes presented - additions, removals, text. Most often defined as ‘additions text’
* *Aria-busy:* temporarily ignore changes to the element. Once everything back in place, set to false.

## Style

* *Focus:*

  * `:focus` - selector for styling focus ring. outline - property for styling focus ring
  * Always provide a focus style! `box-shadow` can be a great option.
  * `:focus:before` - for styling radio buttons’ focus ring.
  * *Use default focus ring when you can.*
  * *:focusring* - style only keyboard focus.
* *Pressed:*

  * Use aria-pressed=”true” via JS
  * Set styling using aria-pressed attribute
* *Responsive:*

  * Use

    ```html
    <meta name=”viewport” content=”width=”device-width, initial-scale=”1”>
    ```
* Don’t set `max-scale=”1”` or set `user-scalable=“no”`
* Use a grid layout
* Use relative units (% for width and em, rem for font)
* Interactive elements should have large enough touch targets for them to be easy to press. Recommended - 48dp minimum touch point size. You can add padding to achieve this. Space between touchpoints ~32dp apart (both horizontally and vertically). This is achieved by using margin.
* *Contrast:*

  * Minimum of 4.5:1 contrast ratio for all body text and images. Exception made of text over 18 point or 14 point bold. This text can be 3:1.
  * For low vision impairments, contrast ratio should be 7:1 for body copy and 4:5 for larger text.
  * Run accessibility audit and view accessibility properties for any warnings. Use options for minimum or enhance contrast.
  * Make sure you site is still usable in high contrast mode using Mac Accessibility high contrast mode.
* *Color:*

  * Color alone should not be used as the sole method of conveying content of distinguishing visual elements. Should not be used to distinguish links from surrounding text (underline works well).

## Resources

* [WebAim Checklist](https://webaim.org/standards/wcag/checklist)
* [Skip links](https://webaim.org/techniques/skipnav/)
* [Focus](https://developers.google.com/web/updates/2016/03/focus-start-point?hl=en)
* [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/)
* [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)
* [WAI-ARIA and Native HTML](https://www.w3.org/TR/html-aria/)
* [Screen reader only text](https://webaim.org/techniques/css/invisiblecontent/)
