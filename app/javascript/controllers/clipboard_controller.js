import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = ["content"]

  connect() {
    console.log("=== CLIPBOARD CONTROLLER CONNECTED ===")
  }

  copy() {
    const text = this.contentTarget.innerText
    console.log(`=== TEXT TO BE COPIED: ${text} ===`)
  }
}
