import React from "react";
import logo from "../public/logo.png";
import { Grid, styled } from "@mui/material";
import Image from "next/image";

const CustomImage = styled(Image)`
    width: 100%;
    margin-bottom: 20px;
`;

export const Header = () => {
    return (
        <header>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={3}>
                    <CustomImage src={logo} alt='Logo'/>
                </Grid>
            </Grid>
        </header>
    );
};
