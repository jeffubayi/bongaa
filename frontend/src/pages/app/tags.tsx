import React from 'react';
import { Container } from '@mui/material';

import TagsList from "../../components/serviceList";

export default function Contracts() {
    return (
        <Container maxWidth="lg" component="main" sx={{ p: 2 }} >
            <TagsList />
        </Container>
    );
}