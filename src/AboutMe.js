import React from 'react';
import { Card, CardContent, Typography, AccordionGroup, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/joy";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import './AboutMe.css';

// You can replace these with your actual research projects
const researchProjects = [
    {
        title: "Delving into Consciousness Alterations in Parkinson's Disease",
        shortDescription: "Developed predictive models for early disease detection using patient data.",
        longDescription: "This research investigates the relationship between Parkinson's disease and consciousness, emphasizing recent research developments. While Parkinson's disease is traditionally associated with motor deficits, emerging studies reveal significant impacts on cognitive and perceptual processes. This review synthesizes findings on how Parkinson's disease alters aspects of consciousness, including cognitive functioning and sensory perception. We delve into the neurological mechanisms responsible for these changes and discuss their implications for patient experience and treatment. By integrating interdisciplinary insights, this work aims to enhance understanding of consciousness disruptions in Parkinson's disease and guide future research and clinical approaches.",
        image: "/pd.png",
        publications: [
            "Day TKM, Madhyastha TM, Askren MK, Boord P, Montine TJ, Grabowski TJ. Attention Network Test fMRI data for participants with Parkinson's disease and healthy elderly. F1000Res. 2019 Jun 4;8:780. doi: 10.12688/f1000research.19288.1. PMID: 32477494; PMCID: PMC7217223.",
            "Trevor K. M. Day and Tara M. Madyastha and Peter Boord and Mary K. Askren and Nicholas J. Wapstra and Thomas J. Montine and Thomas J. Grabowski (2023). ANT: Healthy aging and Parkinson's disease. OpenNeuro. [Dataset] doi: doi:10.18112/openneuro.ds001907.v3.1.0"
        ]
    },
    {
        title: "Quantitative Purity Assessment of Salicylic Acid in Pharmaceuticals via Absorption Spectroscopy",
        shortDescription: "This study uses UV-Vis absorption spectroscopy to accurately assess the purity of salicylic acid in pharmaceuticals, detecting impurities and ensuring quality control.",
        longDescription: "This study presents a refined method for evaluating the purity of salicylic acid in pharmaceutical preparations using absorption spectroscopy. The research focuses on the application of UV-Vis absorption spectra to accurately detect and quantify impurities in salicylic acid. By analyzing the characteristic absorption peaks and their deviations from standard spectra, we develop a robust framework for purity determination. This approach not only enhances the precision of purity assessments but also supports regulatory compliance and quality control in pharmaceutical manufacturing. Our findings underscore the efficacy of absorption spectroscopy as a critical tool in ensuring the pharmacological integrity of salicylic acid-based medications.",
        image: "/absorption.png",
        publications: [
            "McMahon, G. P., O'Connor, S. J., Fitzgerald, D. J., le Roy, S., & Kelly, M. T. (1998). Determination of aspirin and salicylic acid in transdermal perfusates. Journal of Chromatography B: Biomedical Sciences and Applications, 707(1-2), 322-327.",
            "Ruiz-Medina, A., Fernández-de Córdova, M. L., Ortega-Barrales, P., & Molina-Dı́az, A. (2001). Flow-through UV spectrophotometric sensor for determination of (acetyl) salicylic acid in pharmaceutical preparations. International journal of pharmaceutics, 216(1-2), 95-104."
        ]
    },
    {
        title: "Leveraging Particle Accelerators for the Development of Novel Medicinal Pills",
        shortDescription: "This study explores using particle accelerators to develop new medicinal pills. It highlights how these technologies can enhance drug formulation, improve ingredient precision, and aid in discovering novel compounds, potentially transforming pharmaceutical development and treatment options.",
        longDescription: "This study explores the innovative use of particle accelerators in the creation of new medicinal pills. Particle accelerators, typically used in high-energy physics, offer unique capabilities for manipulating atomic and molecular structures, which can be harnessed for pharmaceutical development. The study details how accelerators can be employed to enhance drug formulation processes, improve the precision of active ingredient delivery, and facilitate the discovery of novel compounds. By integrating accelerator technology into pharmaceutical research, this work aims to advance drug development, optimize pill efficacy, and potentially revolutionize treatment options. The paper provides a comprehensive review of current techniques, case studies, and future directions for applying particle accelerators in medicine.",
        image: "/particleacce.jpeg",
        publications: [
            'Silari, Marco. "Applications of particle accelerators in medicine." Radiation protection dosimetry 146.4: 440-450.',
            'Cuttone, Giacomo. Applications of particle accelerators in medical physics. No. CERN-KTT-2013-001.'
        ]
    },
    {
        title: "Developing Mobile Applications for Patient Surveys: Assessing Health Status Effectively",
        shortDescription: "This app details the development of mobile apps for patient surveys, aiming to improve health status assessments and streamline data collection.",
        longDescription: "This research explores the creation and implementation of mobile applications designed to conduct patient surveys for assessing health status. It outlines the development process, including app design, data collection methods, and user interface considerations. The study highlights how these apps can improve the accuracy and efficiency of health assessments, enhance patient engagement, and streamline data management for healthcare providers. By integrating advanced technology with user-friendly design, this research aims to optimize health status evaluations and contribute to more personalized and effective healthcare solutions.",
        image: "/health-app.png",
        publications: [
            "Global Burden of Disease Collaborative Network. Global Burden of Disease Study 2021 (GBD 2021) Results. Seattle, United States: Institute for Health Metrics and Evaluation (IHME), 2022."
        ]
    },
    {
        title: "Analyzing the Impact of Carbon Emissions on Environmental Health",
        shortDescription: "This study explores the impact of carbon emissions on environmental health, assessing their effects on air quality and ecosystems to inform mitigation strategies.",
        longDescription: "This study examines the effects of carbon emissions on environmental health, focusing on their impact on air quality, ecosystems, and climate. Through data analysis and modeling, it evaluates the relationship between carbon emissions and environmental degradation, providing insights for policy and mitigation strategies.",
        image: "/carbon.png",
        publications: [
            'Florides, Georgios A., and Paul Christodoulides. "Global warming and carbon dioxide through sciences." Environment international 35.2: 390-401.',
            'Mehmood, Iqra, et al. "Carbon cycle in response to global warming." Environment, climate, plant and vegetation growth: 1-15.'
        ]
    },
    {
        title: "Detection of Microplastics in Tap Water: Effects on Microbes, Microorganisms, and Environmental Health",
        shortDescription: "This research investigates microplastics in tap water and their effects on microbes, microorganisms, and environmental health.",
        longDescription: "This research examines microplastics in tap water, focusing on their impact on microbial communities, microorganisms, and overall environmental health. It includes detection methods and evaluates potential ecological and health implications.",
        image: "/microbes.jpeg",
        publications: [
            'Ivleva, Natalia P., Alexandra C. Wiesheu, and Reinhard Niessner. "Microplastic in aquatic ecosystems." Angewandte Chemie International Edition 56.7: 1720-1739.',
            'An, Lihui, et al. "Sources of microplastic in the environment." Microplastics in terrestrial environments: Emerging contaminants and major challenges: 143-159.'
        ]
    },
    
];

export default function MyPage() {
    return (
        <div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
            <header className="tw-text-center tw-mb-12">
                <Typography level="h1" className="tw-mb-4">S.G. Kim</Typography>
                <Typography level="body-lg" className="tw-mb-6">
                    Prominent Researcher Based In Korea
                </Typography>
                <div className="tw-flex tw-justify-center tw-space-x-4">
                    {[
                        { icon: Instagram, href: "https://instagram.com/17tmdrl_", label: "Instagram" },
                        { icon: Github, href: "https://github.com/namuKR", label: "GitHub" },
                    ].map((social, index) => (
                        <Button
                            key={index}
                            variant="plain"
                            color="neutral"
                            component="a"
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                        >
                            <social.icon className="tw-h-5 tw-w-5" />
                        </Button>
                    ))}
                </div>
            </header>

            <main className="tw-space-y-12">
                <section>
                    <Typography level="h2" className="tw-mb-6">About Me</Typography>
                    <div className="tw-grid md:tw-grid-cols-3 tw-gap-6">
                        <div className="md:tw-col-span-1">
                            <img
                                src="/profile.jpeg"
                                alt="My Profile"
                                className="tw-rounded-lg tw-object-cover tw-w-full"
                            />
                        </div>
                        <div className="md:tw-col-span-2 tw-space-y-4">
                            {[
                                "Hello! I'm SG Kim, a passionate, prominent researcher from Korea. My work spans the exciting realms of artificial intelligence, and their applications in healthcare and beyond.",
                                "With over a decade of experience in cutting-edge research, I've dedicated my career to pushing the boundaries of what's possible with technology. I'm particularly fascinated by the potential of AI to solve some of humanity's most pressing challenges.",
                                "My aspiration is to bridge the gap between theoretical advancements and practical applications. I believe that by using the power of AI, we can make significant strides in fields like personalized medicine, climate modeling, and complex system optimization.",
                                "When I'm not in the lab or presenting at conferences, you can find me writing for popular science publications, or exploring the great outdoors. I'm always eager to collaborate on new projects and exchange ideas with fellow researchers and innovators."
                            ].map((paragraph, index) => (
                                <Typography key={index} level="body-md">{paragraph}</Typography>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <Typography level="h2" className="tw-mb-6">Research Projects</Typography>
                    <div className="tw-space-y-6">
                        {researchProjects.map((project, index) => (
                            <Card key={index} variant="outlined">
                                <CardContent>
                                    <Typography level="h3">{project.title}</Typography>
                                    <Typography level="body-md" className="tw-mb-4">{project.shortDescription}</Typography>
                                    <div className="tw-grid md:tw-grid-cols-3 tw-gap-4">
                                        <div className="md:tw-col-span-1">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="tw-rounded-lg tw-object-cover tw-w-full"
                                            />
                                        </div>
                                        <div className="md:tw-col-span-2">
                                            <AccordionGroup>
                                                <Accordion>
                                                    <AccordionSummary>Detailed Description</AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography level="body-md">{project.longDescription}</Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion>
                                                    <AccordionSummary>Related Publications</AccordionSummary>
                                                    <AccordionDetails>
                                                        <ul className="tw-list-disc tw-pl-4">
                                                            {project.publications.map((pub, i) => (
                                                                <li key={i}>
                                                                    <Typography level="body-sm">{pub}</Typography>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </AccordionGroup>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <Typography level="h2">...and MUCH MORE!</Typography>
                    </div>
                </section>
            </main>
            <title>About Me!</title>
        </div>
    );
}