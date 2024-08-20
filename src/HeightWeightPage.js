import React, { useState } from 'react';
import './HeightWeightPage.css';
import { Button, FormControl, FormLabel, Textarea, Typography } from '@mui/joy';

function HeightWeightPage({ onNext, updateUserData }) {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserData({ height, weight });
        onNext();
    };

    return (
        <>
            <Typography level="h1">키와 몸무게를 입력하세요</Typography><br />
            <div className="height-weight-page">

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="height">키 (cm):</label>

                        <input
                            type="number"
                            max="200"
                            min="140"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                        />


                    </div>
                    <div>
                        <label htmlFor="weight">몸무게 (kg):</label>
                        <input
                            type="number"
                            id="weight"
                            max="180"
                            min="30"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                        />
                    </div>
                    <p>이 설문의 내용은 서버로 전송되지 않으며, 사용자의 기기에서만 처리됩니다.</p>
                    <Button type="submit" size="lg" color="success">다음</Button>
                </form>
            </div>
        </>);
}

export default HeightWeightPage;