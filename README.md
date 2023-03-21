#Element Highlighter Chrome Extension
This Chrome extension allows you to highlight elements on a web page using CSS selectors by leveraging a content script that listens for messages from the extension's popup.

#Installation
Download the extension files and unzip them to a folder on your computer.
In Chrome, open the Extensions page by navigating to chrome://extensions or clicking on the three-dot menu > More tools > Extensions.
Enable "Developer mode" by toggling the switch in the top right corner of the Extensions page.
Click the "Load unpacked" button and select the folder containing the extension files.

#Usage
Click on the Element Highlighter icon in the Chrome toolbar to open the extension popup.
In the input field, enter a valid CSS selector.
Click the "Highlight" button to apply a highlight effect on the matching elements on the current web page.

You can paste any valid CSS selector in the input field of the Element Highlighter Chrome Extension to highlight the matching elements on the web page. Some examples of CSS selectors are:

Element selector: `p` - This will highlight all paragraph elements on the page.
Class selector: `.example-class` - This will highlight all elements with the example-class class.
ID selector: `#example-id` - This will highlight the element with the ID example-id.
Attribute selector: `[data-attribute="value"]` - This will highlight all elements with the data-attribute attribute set to "value".
Descendant combinator: `div p` - This will highlight all paragraph elements that are descendants of a div element.
Child combinator: `div > p` - This will highlight all paragraph elements that are direct children of a div element.
Adjacent sibling combinator: `h1 + p` - This will highlight all paragraph elements that immediately follow an h1 element.
General sibling combinator: `h1 ~ p` - This will highlight all paragraph elements that follow an h1 element, regardless of their position.
You can also combine selectors to create more complex queries. For example, you can use `.example-class[data-attribute="value"]` to target elements with the class example-class and the attribute data-attribute set to "value".
