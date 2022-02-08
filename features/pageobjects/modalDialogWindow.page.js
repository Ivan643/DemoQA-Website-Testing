const Page = require('./page');
const selectors = {
    smallModalBtn: '#showSmallModal',
    largeModalBtn: '#showLargeModal',
    smallModalWindow: '#example-modal-sizes-title-sm',
    largeModalWindow: '#example-modal-sizes-title-lg',
    closeSmallModalBtn: '#closeSmallModal',
}

class ModalDialogPage extends Page {
  get smallModalBtn() { return $(selectors.smallModalBtn); }

  get largeModalBtn() { return $(selectors.largeModalBtn); }

  get smallModalWindow() { return $(selectors.smallModalWindow); }

  get largeModalWindow() { return $(selectors.largeModalWindow); }

  get closeSmallModalBtn() { return $(selectors.closeSmallModalBtn); }
}

module.exports = new ModalDialogPage();