import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  // DOM                                JavaScript
  //---------------------------------------------------
  // data-clipboard-target="content"    this.contentTarget
  // data-clipboard-target="button"     this.buttonTarget
  static targets = ["content", "button"]

  // DOM                                    JavaScript
  //---------------------------------------------------
  // data-clipboard-confirm-value="foo"     this.confirmValue
  // data-clipboard-delay-ms-value="num ms" this.delayMsValue
  static values = {
    confirm: { type: String, default: 'Copied' },
    delayMs: { type: Number, default: 2000 }
  }

  copy() {
    const text = this.contentTarget.innerText
    navigator.clipboard.writeText(text)
      .then(() => {
        this.buttonTarget.textContent = this.confirmValue;
        setTimeout(() => {
          this.buttonTarget.textContent = "Copy";
        }, this.delayMsValue);
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });
  }
}
