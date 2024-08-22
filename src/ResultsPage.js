import React, { useEffect, useState } from 'react';
import './ResultsPage.css';
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Grid, Link, Tooltip } from '@mui/joy';

function FlashCard({ props }) {
    const [OpenToolTip, setOpenToolTip] = useState(false)
    var title = props.title;
    var severity = props.severity;
    var content = props.content;
    var reason = props.reason;
    var link = props.link
    var severity_korean;
    var color;
    var variant = "solid";
    if (severity > 0.7) {
        severity_korean = '매우 위험';
        color = 'danger';
    }
    else if (severity > 0.5) {
        severity_korean = '위험';
        color = 'warning';
    }
    else if (severity > 0.3) {
        severity_korean = '경고';
        color = 'neutral';
    }
    else {
        severity_korean = '안내';
        color = 'neutral';
        variant = "outlined"
        content = '다른 사람들에 비해 ' + title + '에 걸릴 확률이 높습니다. 주의하세요.'
    }

    return (
        <Card
            color={color}
            variant={variant}
            sx={{
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
            </Box>
            <CardContent>
                <Typography level="title-lg" color="white">{title} {severity_korean}</Typography>
                <Typography level="body-sm" color="white">
                    {content || `당신과 동일한 상태에 놓인 사람의 ${Math.ceil(severity * 100)}%가 ${title}으로 삶에 심각한 영향을 받았습니다.`}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', flexDirection: 'row' }}>
                <Tooltip title={reason} placement="top" open={OpenToolTip}>
                    <Button variant="solid" color="success" style={{ 'width': '100%' }} onClick={() => setOpenToolTip(!OpenToolTip)}>
                        원인 확인하기
                    </Button>
                </Tooltip>
                <Button variant="solid" color="primary" style={{ 'width': '100%' }} onClick={() => { window.open(link, '_blank') }}>
                    병에 대한 정보
                </Button>
            </CardActions>
        </Card>
    );
}

function ResultsPage({ userData }) {
    const [disclaimer, setDisclaimer] = useState(false)
    // Calculate Score
    const height = parseInt(userData.height)
    const weight = parseInt(userData.weight) // kg
    const bmi = weight / height / height * 10000
    var status;
    var bmi_severity = 0;
    var score = 100;
    console.log(height)
    console.log(weight)
    console.log(bmi)
    if (bmi <= 18.5) {
        status = '저체중';
        score -= 4
    }
    else if (bmi <= 22.9) {
        status = '정상';
    }
    else if (bmi <= 24.9) {
        status = '과체중';
        bmi_severity = 0.4;
        score -= 10
    }
    else if (bmi <= 29.9) {
        status = '비만(비만 1단계)';
        bmi_severity = 0.6;
        score -= 13
    }
    else if (bmi <= 34.9) {
        status = '고도비만(비만 2단계)';
        bmi_severity = 0.8
        score -= 17
    }
    else {
        status = '초고도비만(비만 3단계)';
        bmi_severity = 0.99
        score -= 23
    }


    var hypertensive = 0;
    var ischemic = 0;
    var Cardiomyopathy = 0; //심장질환
    var chronic_liver_diseases = 0;
    var oral_cancer = 0;
    var chronic_kidney_diseases = 0;
    var diabetes = bmi_severity;
    var gout = bmi_severity; //통풍
    var gallbladder_diseases = bmi_severity; // 쓸개
    var Osteoarthritis = bmi_severity; //골관절염
    var Uterine_cancer = bmi_severity; //자궁경부암
    var stroke = 0;
    var Mesothelioma = 0; //중피종
    var Pneumoconiosis = 0; //진폐증
    var Chronic_obstructive_pulmonary_disease = 0; //만성 폐질환
    var Lower_respiratory_infections = 0; //하부 호흡기 감염
    var Neonatal_disorders = 0;
    var lung_cancer = 0;
    var Aortic_aneurysm = 0; //대동맥류
    var Bladder_cancer = 0; //방광암
    var Larynx_cancer = 0; //후두암
    var Esophageal_cancer = 0; //식도암
    var osteoporosis = 0; // 골다공증
    const ans = userData.answers
    function addDALY(variable, value) {
        return 1 - ((1 - variable) * (1 - value))
    }
    if (ans[0] === 'Yes') {
        // Diet Low In Fruits
        hypertensive = addDALY(hypertensive, 0.38)
        score -= 6
    }
    if (ans[1] === 'Yes') {
        // Diet Low in Veggies
        hypertensive = addDALY(hypertensive, 0.28)
        score -= 5
    }
    if (ans[2] === 'Yes') {
        // Diet high in sodium
        hypertensive = addDALY(hypertensive, 0.23)
        score -= 4
    }
    if (ans[3] === 'Yes') {
        // Alcohol use
        Cardiomyopathy = addDALY(Cardiomyopathy, 0.22)
        chronic_liver_diseases = addDALY(chronic_liver_diseases, 0.38)
        oral_cancer = addDALY(oral_cancer, 0.21)
        score -= 11

    }
    if (ans[4] === 'Yes') {
        // High Cholestreol
        ischemic = addDALY(ischemic, 0.36)
        score -= 7
    }
    if (ans[5] === 'Yes') {
        // PM
        Chronic_obstructive_pulmonary_disease = addDALY(Chronic_obstructive_pulmonary_disease, 0.49)
        ischemic = addDALY(ischemic, 0.3)
        Lower_respiratory_infections = addDALY(Lower_respiratory_infections, 0.36)
        Neonatal_disorders = addDALY(Neonatal_disorders, 0.24)
        stroke = addDALY(stroke, 0.3)
        lung_cancer = addDALY(lung_cancer, 0.21)
        score -= 12
    }
    if (ans[6] === 'Yes') {
        // Smoking
        Aortic_aneurysm = addDALY(Aortic_aneurysm, 0.39)
        Bladder_cancer = addDALY(Bladder_cancer, 0.29)
        Chronic_obstructive_pulmonary_disease = addDALY(Chronic_obstructive_pulmonary_disease, 0.36)
        Esophageal_cancer = addDALY(Esophageal_cancer, 0.37)
        ischemic = addDALY(ischemic, 0.2)
        Larynx_cancer = addDALY(Larynx_cancer, 0.67)
        oral_cancer = addDALY(oral_cancer, 0.23)
        lung_cancer = addDALY(lung_cancer, 0.61)
        score -= 17
    }
    if (ans[7] === 'Yes') {
        // Occupational Cancer
        Mesothelioma = addDALY(Mesothelioma, 0.85)
        Pneumoconiosis = addDALY(Pneumoconiosis, 0.73)
        score -= 12
    }
    if (ans[8] === 'Yes') {
        // low bone mineral density
        osteoporosis = addDALY(osteoporosis, 0.24)
        score -= 6
    }
    if (ans[9] === "Yes") {
        // High blood pressure
        chronic_kidney_diseases = addDALY(chronic_kidney_diseases, bmi_severity === 0 ? 0.24 : 0.46)
        hypertensive = addDALY(hypertensive, 0.99)
        ischemic = addDALY(ischemic, 0.5)
        stroke = addDALY(stroke, 0.57)
        score -= 13
    }
    console.log((score))



    // severe red <=35 ff0000 a70000
    // warn orange <= 50 ff7400 ff4d00
    // not bad yellow <= 5 ffce00 ffa700 ! text color=black
    // good green <= 90 4ae54a  30cb00
    // excellent blue 5588ff 3366ff
    const [bgColor, setBgColor] = useState("")
    const [lineColor, setLineColor] = useState("")
    useEffect(() => {
        if (score <= 35) {
            setBgColor("#ff0000"); // Severe red
            setLineColor("#a70000");
        } else if (score <= 50) {
            setBgColor("#ff7400"); // Warn orange
            setLineColor("#ff4d00");
        } else if (score <= 75) {
            setBgColor("#ffce00"); // Warn orange
            setLineColor("#ffa700");
        } else if (score <= 90) {
            setBgColor("#4ae54a"); // Good green
            setLineColor("#30cb00");
        } else {
            setBgColor("#5588ff"); // Excellent blue
            setLineColor("#3366ff");
        }
    }, [])


    // Create an array of disease data
    const diseaseData = [
        { title: '고혈압성 심장질환', severity: hypertensive, link: 'https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5302', reason: '고나트륨 식단, 과일 및 채소 섭취 부족, 높은 BMI, 고혈압' },
        { title: '관상동맥 질환', severity: ischemic, link: 'https://healthcare.cmcseoul.or.kr/bbs/view.do?idx=132', reason: '높은 LDL 콜레스테롤, 고혈압, 고농도 미세먼지 노출, 흡연' },
        { title: '심근병증', severity: Cardiomyopathy, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=30320', reason: '과도한 알코올 섭취' },
        { title: '만성 간염', severity: chronic_liver_diseases, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31687&diseaseKindId=C000009', reason: '과도한 알코올 섭취' },
        { title: '구강암', severity: oral_cancer, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32564', reason: '과도한 알코올 섭취, 흡연' },
        { title: '만성 신장 질환', severity: chronic_kidney_diseases, link: 'https://www.msdmanuals.com/ko-kr/home/신장-및-요로-질환/신부전/만성-신장-질환', reason: '고혈압' },
        { title: '당뇨병', severity: diabetes, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31596', reason: '높은 BMI, 선천적인 이유' },
        { title: '통풍', severity: gout, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=30832', reason: '높은 BMI' },
        { title: '담낭 관련 질환', severity: gallbladder_diseases, link: 'https://www.amc.seoul.kr/asan/search/search.do?kwd=담낭&category=DISEASE&pageNum=1&sort=&dtCode=', reason: '높은 BMI' },
        { title: '골관절염', severity: Osteoarthritis, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=30828', reason: '높은 BMI' },
        { title: '자궁경부암', severity: Uterine_cancer, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31818', reason: '높은 BMI' },
        { title: '뇌졸중', severity: stroke, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=30518', reason: '고농도 미세먼지 노출, 고혈압' },
        { title: '중피종', severity: Mesothelioma, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32113', reason: '직업적 요인' },
        { title: '진폐증', severity: Pneumoconiosis, link: 'http://www.snuh.org/health/nMedInfo/nView.do?category=DIS&medid=AA000413', reason: '직업적 요인' },
        { title: '만성 폐쇄성 폐질환', severity: Chronic_obstructive_pulmonary_disease, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31528', reason: '고농도 미세먼지 노출, 흡연' },
        { title: '하기도감염', severity: Lower_respiratory_infections, link: 'https://ko.wikipedia.org/wiki/하기도감염', reason: '고농도 미세먼지 노출' },
        { title: '신생아 질환', severity: Neonatal_disorders, link: 'https://neo.amc.seoul.kr/asan/depts/neo/K/bbs.do?menuId=1760', reason: '고농도 미세먼지 노출' },
        { title: '폐암', severity: lung_cancer, link: 'http://www.snuh.org/health/nMedInfo/nView.do?category=DIS&medid=AA001122', reason: '고농도 미세먼지 노출, 흡연' },
        { title: '대동맥류', severity: Aortic_aneurysm, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=30450', reason: '흡연' },
        { title: '방광암', severity: Bladder_cancer, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=30649', reason: '흡연' },
        { title: '후두암', severity: Larynx_cancer, link: 'https://www.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31961', reason: '흡연' },
        { title: '식도암', severity: Esophageal_cancer, link: 'https://cancer.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=32044', reason: '흡연' },
        { title: '골다공증', severity: osteoporosis, link: 'https://cancer.amc.seoul.kr/asan/healthinfo/disease/diseaseDetail.do?contentId=31611', reason: '칼슘 섭취 및 운동 부족' }
    ];
    diseaseData.sort((a, b) => b.severity - a.severity);
    // Filter out diseases where severity is 0
    const filteredDiseaseData = diseaseData.filter(disease => disease.severity > 0);


    const scoreProps = {
        percent: score, // is require
        colorSlice: "#00a1ff",
        colorCircle: "#00a1ff",
        fontColor: "#ffffff",
        fontSize: "1.6rem",
        fontWeight: 400,
        size: 200,
        stroke: 10,
        strokeBottom: 5,
        speed: 100,
        cut: 0,
        rotation: -90,
        fill: bgColor,
        unit: "",
        textPosition: "0.35em",
        animationOff: false,
        strokeDasharray: "10,1",
        inverse: false,
        round: false,
        number: true,
        linearGradient: [lineColor],
        styles: {
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #a2caff",
            fontFamily: 'Gothic, Gothic2, -apple-system, sans-serif',
        }
    }
    useEffect(() => {
        try {
            if (document.getElementById('inner-container').clientHeight >= window.innerHeight) {
                document.getElementById('container').style.alignItems = 'unset';
            }
        }
        catch {}
    }, [])

    return (
        <div className="results-page">
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '60%' }}>
                <Typography level="h1">종합 점수</Typography>
                <br />
                <CircularProgressBar {...scoreProps} />
                <Typography sx={{ marginTop: 1 }} level="body-md">BMI: {status}</Typography><br />
                <Button color="success" onClick={() => { window.location.reload() }}>다시하기</Button>
            </div>
            {score !== 100 &&
                <div id="container" style={{ width: '100%', justifyContent: 'center', height: '100%', alignItems: 'center', display: 'flex' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column', // Align items vertically
                        alignItems: 'center', // Center horizontally
                        overflowY: 'auto', // Enable vertical scrolling
                        //maxHeight: '94dvh', // Set max height to control the visible area
                        padding: '16px', // Optional: add some padding
                    }}>
                        <Grid container id="inner-container" justifyContent="center" spacing={1} xs={12} lg={11} sx={{ margin: 0 }}>
                            {filteredDiseaseData.map((disease, index) => {
                                return (<Grid item xs={12} md={6} lg={4}>
                                    <FlashCard props={disease} />
                                </Grid>)
                            })}
                        </Grid>
                        <Tooltip title={<Box color="white"><Typography fontSize="md" color="white">DISCLAIMER</Typography><Typography color="white" fontSize="sm">면책 조항이 적용됩니다.</Typography><Link fontSize="sm" href="https://shtus.notion.site/DISCLAIMER-afd5eab0f81d459faaef6d79ac7f9f78?pvs=4" color='white'>여기를 눌러 내용 보기 (새 탭)</Link></Box>} placement="top" open={disclaimer}>
                            <Typography sx={{ textDecoration: 'underline' }} onClick={() => { setDisclaimer(!disclaimer) }}>DISCLAIMER</Typography>
                        </Tooltip>
                    </Box>

                </div>
            }

        </div>
    );
}

export default ResultsPage;