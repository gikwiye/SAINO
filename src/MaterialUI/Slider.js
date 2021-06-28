import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1125
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 50,
    label: "200K $"
  },
  {
    value: 100,
    label: "1M $"
  }
];

const PrettoSlider = withStyles({
  root: {
    color: "#C4C4C4",
    height: 8,
    width: 1125,
    fontFamily: 'Arial',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#AAAAAA",


    marginTop: -6,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  mark: {
    visibility: "hidden",
  },
  markLabel: {

    fontFamily: 'GTWalsheim',
    color: '#FFF',
    transform: 'translateY(-35px) translateX(-10px)',


  },


  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 12,
    borderRadius: 12
  },
  rail: {
    height: 12,
    borderRadius: 12
  },



})(Slider);

export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PrettoSlider
        aria-label="pretto slider"
        defaultValue={30}
        marks={marks}
      />
    </div>
  );
}