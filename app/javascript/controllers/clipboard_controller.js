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
  // data-clipboard-copy-text-value="bar"   this.copyTextValue
  static values = {
    confirm: { type: String, default: 'Done' },
    delayMs: { type: Number, default: 2000 },
    copyText: { type: String, default: 'Copy' }
  }

  // temp debug to confirm data attributes are refreshed when language is switched
  connect() {
    console.log("=== Clipboard Controller connected: copyTextValue: " + this.copyTextValue + ", confirmValue: " + this.confirmValue + ", delayMsValue: " + this.delayMsValue)
  }

  copy() {
    const text = this.contentTarget.innerText
    navigator.clipboard.writeText(text)
      .then(() => {
        this.buttonTarget.textContent = this.confirmValue;
        setTimeout(() => {
          this.buttonTarget.textContent = this.copyTextValue;
        }, this.delayMsValue);
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });
  }
}
