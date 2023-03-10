import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomBar from '../components/layouts/BottomBar';
import FooterArea from '../components/layouts/FooterArea';
import HeaderBar from '../components/layouts/HeaderBar';
import UnderConstruction from '../components/layouts/UnderConstruction';

export default function FairLaunch() {
  const theme = useTheme();
  return (
    <>
      <Box>
        <HeaderBar />
        <UnderConstruction label="Launch your own token, fairly." />
        <FooterArea />
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomBar />
        </Paper>
      </Box>
    </>
  );
}
