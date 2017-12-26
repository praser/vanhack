class HTMLFormValidation {
  constructor(btn, fields) {
    this.btn = btn;
    this.fields = fields;
  }
  handleButton() {
    const btnState = this.validateForm() ? this.btn.disabled = false : this.btn.disabled = true;
    return btnState;
  }

  validateForm() {
    return this.fields.map(field => field.checkValidity()).every(el => el);
  }
}

export default HTMLFormValidation;
