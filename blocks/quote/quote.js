export default function decorate(block) {
    console.log("Inside quote decorate");
    console.log(block);
    const [quoteWrapper] = block.children;
  
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = quoteWrapper.textContent.trim();
    quoteWrapper.replaceChildren(blockquote);
  }