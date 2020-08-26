import React, { FunctionComponent } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { TableCell, Table, TableBody, TableRow, TableHead, Box, Grid, Paper } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { Profile } from '../../models/Profile';
interface IUserProfileProps{
    profile:Profile | null
}
const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    large: {
      width: 210,
      height: 210,
    },
  }));
  const defaultProps = {
    borderColor: '#4DD0E1',
    m: 1,
    border: 6,
    style: { width: '15rem', height: '15rem' },
  };
export const UserDisplayComponent:FunctionComponent<IUserProfileProps> = (props) =>{
    let classes = useStyles();
    return (
        <div>
          <Grid container>
          <Grid item direction="column" justify="flex-end" alignItems="flex-end">
            <Box width="50%" >
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow>
                    <TableCell>First Name: </TableCell>
                    <TableCell> {props.profile.firstName} </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Last Name: </TableCell>
                    <TableCell> {props.profile.lastName}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Email: </TableCell>
                    <TableCell> {props.profile.email}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Higher Education: </TableCell>
                    <TableCell> {props.profile.degree}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Batch: </TableCell>
                    <TableCell> {props.profile.batchId}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Nickname: </TableCell>
                    <TableCell> {props.profile.nickname}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Introvert: </TableCell>
                    <TableCell> {props.profile.introvert}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Pronouns: </TableCell>
                    <TableCell> {props.profile.pronouns}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Favorite Food: </TableCell>
                    <TableCell> {props.profile.favFoods}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Favorite Programming Language: </TableCell>
                    <TableCell> {props.profile.favLanguage}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Hobbies: </TableCell>
                    <TableCell> {props.profile.hobbies}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Special Trait: </TableCell>
                    <TableCell> {props.profile.specialTrait}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Relevant Skills: </TableCell>
                    <TableCell> {props.profile.relevantSkills}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Study Group: </TableCell>
                    <TableCell> {props.profile.studyGroup}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </Box>
            </Grid>
          </Grid>
          </div>
        );
    }