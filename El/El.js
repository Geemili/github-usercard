// Convienent API for building HTML stuff
class El {
    constructor(elementName) {
        this.element = document.createElement(elementName);
    }

    attr(attr, val) {
        this.element.setAttribute(attr, val);
        return this;
    }

    className(className) {
        this.element.classList.add(className);
        return this;
    }

    children(childrenEls) {
        childrenEls.forEach(el => this.element.appendChild(el.element));
        return this;
    }

    text(textContent) {
        this.element.textContent = textContent;
        return this;
    }

    text(textContent) {
        this.element.textContent = textContent;
        return this;
    }

    onClick(callback) {
        this.element.onclick = callback;
        return this;
    }

    done() {
        return this.element;
    }
}

function p(text) {
    return new El("p").text(text);
}

function h2(text) {
    return new El("h2").text(text);
}

function h3(text) {
    return new El("h3").text(text);
}

function span(text) {
    return new El("span").text(text);
}

function li(text) {
    return new El("li").text(text);
}

function div(className, children) {
    const el = new El("div");
    if (className !== undefined) {
        el.className(className);
    }
    if (children !== undefined) {
        el.children(children);
    }
    return el;
}

function ul(children) {
    const el = new El("ul");
    if (children !== undefined) {
        el.children(children);
    }
    return el;
}

function img(src) {
    return new El("img").attr("src", src);
}

function a(text, href) {
    return new El("a").text(text).attr("href", href);
}

