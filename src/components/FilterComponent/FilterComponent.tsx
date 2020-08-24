import React from 'react'
import { FunctionComponent } from "react";
import { QuarterFilterComponent } from "./QuarterFilterComponent"
import { SkillFilterComponent } from "./SkillFilterComponent"
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { SubmitComponent } from './SubmitComponent';

export const FilterComponent:FunctionComponent<any> = (props) => {
  return (
    <div>
      <QuarterFilterComponent></QuarterFilterComponent>
  <SkillFilterComponent></SkillFilterComponent>
  <SubmitComponent></SubmitComponent>
    </div>
  );
}