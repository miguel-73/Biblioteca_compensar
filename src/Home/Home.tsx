/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid } from "@mui/material";

import { styled } from '@mui/material/styles';

export default function Home() {
    const miEstilo = {
        position: 'relative',
        background: '#FAFAFA',
        borderRadius: '15px',
        p: '20px',
        m: '10px 0 20px 0',
        mb: '20px',
        boxShadow: '0px 3px 6px #042F4A26',
    };
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const titulo = {

        display: 'grid',
        background:
            'transparent linear-gradient(269deg, #1492E6 0%, #062F48 34%, #FF9142 100%) 0% 0% no-repeat padding-box',
        width: '100%',
        height: '40px',
        color: '#fff',
        borderRadius: '10px',
        pl: '20px',
        fontSize: '17px',
        fontWeight: '900',
        alignContent: 'center',
        marginTop: '10px',
    };
    return (
        <>
            <Grid container
                spacing={2} m={2} p={2}
                sx={miEstilo}
            >



            </Grid>
        </>
    );
}
