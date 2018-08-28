export default {
  getSomething: () => {
    // Just returning a Promise that resolves after 1000ms
    return new Promise((resolve, reject) => {
      window.setTimeout(resolve, 1000);
    });
  },
};
