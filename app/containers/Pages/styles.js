const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all',
        padding: theme.spacing(1)
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          padding: theme.spacing(1),
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  },
  chip: {
    marginLeft: theme.spacing(4)
  },
  stage_tag: {
    borderRadius: '2px',
    width: '8px',
    height: '39px',
    marginRight: '6px'
  },
  pink: {
    backgroundColor: '#ec407a'
  },
  red: {
    backgroundColor: '#f44336'
  },
  purple: {
    backgroundColor: '#9c27b0'
  },
  deepPurple: {
    backgroundColor: '#673ab7'
  },
  indigo: {
    backgroundColor: '#3f51b5'
  },
  blue: {
    backgroundColor: '#2196f3'
  },
  lightBlue: {
    backgroundColor: '#03a9f4'
  },
  cyan: {
    backgroundColor: '#00bcd4'
  },
});

export default styles;
