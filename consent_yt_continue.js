let buttons = document.querySelectorAll('.VfPpkd-WsjYwc');
buttons.forEach((button, index) => {
    if (index !== 2) {
        button.children[1].children[0].children[1].children[0].children[0].children[0].click();
    } else {
        button.children[1].children[1].children[0].children[1].children[0].children[0].children[0].click();
    }
});

document.querySelector('.bBXLMd').submit();
