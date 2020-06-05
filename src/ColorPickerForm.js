import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import styles from "./styles/ColorPickerFormStyle";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "orange",
      newColorName: "",
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor(newColor) {
    console.log(newColor.hex);
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />

        <ValidatorForm
          onSubmit={this.handleSubmit}
          ref="form"
          instantValidate={false}
        >
          <TextValidator
            value={this.state.newColorName}
            className={classes.colorNameInput}
            placeholder="Color name"
            name="newColorName"
            variant="filled"
            margin="normal"
            onChange={this.handleChange}
            validators={["required", "isColorUnique", "isColorNameUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color already used",
              "Color name must be unique",
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={paletteIsFull}
            className={classes.addColor}
            style={{ backgroundColor: this.state.currentColor }}
          >
            {paletteIsFull ? "Palette full!" : "Add color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
