// material-ui
import { Link, Typography, Stack } from '@mui/material';


const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="" target="_blank" underline="hover">
      dashboard.io
    </Typography>
    <Typography variant="subtitle2" component={Link} href="" target="_blank" underline="hover">
      &copy; codedthemes.com
    </Typography>
  </Stack>
);

export default AuthFooter;
