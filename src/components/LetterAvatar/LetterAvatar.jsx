import React from 'react';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { deepPurple } from '@mui/material/colors';

const LetterAvatar = ({ login }) => {
  return (
    <Avatar sx={{ bgcolor: deepPurple[500] }}>
      {login ? login[0].toUpperCase() : null}
    </Avatar>
  );
};

LetterAvatar.propTypes = {
  login: PropTypes.string,
};

export default LetterAvatar;
