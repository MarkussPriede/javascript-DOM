# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

After refreshing the page the text is hidden once again. This is happening because after refreshing the script re-runs and the text gets revealed after the button "more" is clicked and the JavaScript code is called.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Window's `load` event listener is the same as document's `DOMContentLoaded`. It waits for the page to be fully loaded.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

The specific object or objects do certain actions, when they do the required event.
