import Button from '@mui/material/Button';

export default function MUI() {
    return (
        <>
            <div id="nav" className='border-b border-gray-300 flex justify-between p-[10px]'>
                <div className="flexContainer left font-bold text-xl ">
                    <Button size="small" variant="contained" color="success"
                        sx={{
                            boxSizing:'border-box',
                            width:"40px",
                            height:"40px",
                            marginRight:"10px",
                        }}
                    >
                        M
                    </Button>
                    MUI Mastery
                </div>
                <div className="flexContainer mid"></div>
                <div className="flexContainer right">
                    <Button variant="contained" color="success"
                        sx={{
                            height:"40px "
                        }}
                    >
                        Success
                    </Button>
                </div>
            </div>
        </>
    )
}