// binary recursion

const dib = (n) => {
    if (n<=1) return;
    dib(n-1);
    dib(n-1);
}

// linear recursion

const dib = (n) => {
    if (n<=1) return;
    dib(n-2);
}