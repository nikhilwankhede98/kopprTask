import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Footer = () => {

    const footer = {
        backgroundColor: 'white',
        marginTop: 0,
        height:'100%',
        color: 'black'
    }

    return (
        <footer style= {footer}>
        {/* <footer > */}
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>

            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                3585  Stadium Drive, Falmouth, MA, Massachusetts, 02540
            </Typography>

            <Copyright />
        </footer>
    )
}

export default Footer
