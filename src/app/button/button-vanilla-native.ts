export class ButtonVanillaNative extends HTMLButtonElement {
  constructor() {
    super();
    // do something so you can recognize your own button
    this.innerHTML = this.innerHTML + ' <-- via is="" 🙏';
  }
}
