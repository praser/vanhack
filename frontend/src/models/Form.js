class Form {
  constructor(btn, fields) {
    this._btn = btn;
    this._fields = fields;
  }
  handleButton() {
    this.validateForm() ? this._btn.disabled = false : this._btn.disabled = true;
  }

  validateForm() {
    return this._fields.map((field) => field.checkValidity()).every((el) => el);
  }
}

export default Form