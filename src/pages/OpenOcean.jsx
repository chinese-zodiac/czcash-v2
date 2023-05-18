import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomBar from '../components/layouts/BottomBar';
import FooterArea from '../components/layouts/FooterArea';
import HeaderBar from '../components/layouts/HeaderBar';
import TopNavTabs from '../components/layouts/TopNavTabs';

export default function OpenOcean() {
  const theme = useTheme();
  return (
    <>
      <Box>
        <HeaderBar />
        <TopNavTabs />
        <h1> Open Ocean Testing </h1>
        <h2>Widget test</h2>
        <Box
          as="iframe"
          allowtransparency="true"
          src="https://widget-openocean.cz.cash?p=JTIzMDAwNTFBJTI0KiUyNCUyMzBCMTIyRSUyNColMjQlMjMwMDA1MUElMjQqJTI0JTIzMUUyMTNCJTI0KiUyNCUyM0ZGRkZGRiUyNColMjQlMjNBMUExQTIlMjQqJTI0JTIzMzIzRUYwJTI0KiUyNCUyM0ZGRkZGRiUyNColMjQlMjM3NzdFREQlMjQqJTI0JTIzMzIzRUYwJTI0KiUyNCUyMzBBRDk5NyUyNColMjQlMjNGODJCNTAlMjQqJTI0Q3pvZGlhYyUyMERleCUyNColMjRSb2JvdG8lMjQqJTI0aHR0cHMlM0ElMkYlMkZjei5jYXNoJTJGbG9nby5wbmclMjQqJTI0Q1pPRElBQyUyNColMjQweDcwZTFjQjc1OTk5NmExNTI3ZUQxODAxQjE2OTYyMUMxOGE5ZjM4RjklMjQqJTI0MC41JTI0KiUyNGJzYyUyNColMjRCTkIlMjQqJTI0Q1pVU0Q="
          sx={{
            height: 600,
            width: 420,
            border: 'none',
          }}
        ></Box>
        <h2>SDK tests</h2>

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
