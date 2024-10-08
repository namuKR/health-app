import React from 'react';
import './WelcomePage.css';
import { Button, Typography } from '@mui/joy';

function WelcomePage({ onStart }) {
    return (
        <div className="welcome-page">
            <div>
                <Typography level="h1">가장 쉽고 간단한</Typography>
                <Typography level="h1">건강 상태 진단 앱</Typography>
                <p>해당 프로젝트는 종료되었습니다.</p>
            </div>
            {/* <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Button onClick={onStart} size='xl' color='success'>시작하기</Button>
                </div> */}
            
        </div>
    );
}

export default WelcomePage;