import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function MUI() {
    return (
        <>
            <div>Mui buttons</div>


            <div>Basic Button
                <Button variant="contained" color="success">
                    Success
                </Button></div>

            <div>custom buttons
                <Button size="small" variant="contained" color="success"
                    sx={{
                        boxSizing: 'border-box',
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                    }}
                >
                    custom button
                </Button></div>

            <div>
                button group
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>

        </>
    )
}