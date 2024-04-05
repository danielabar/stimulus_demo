import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = ["content", "button"]

  copy() {
    const text = this.contentTarget.innerText
    navigator.clipboard.writeText(text)
      .then(() => {
        this.buttonTarget.textContent = 'Copied';
        setTimeout(() => {
          this.buttonTarget.textContent = 'Copy';
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });
  }
}
