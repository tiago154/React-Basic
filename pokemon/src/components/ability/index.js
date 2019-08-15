import React from 'react';
import { Container } from './styles';

export default ({ children, title }) => {
    const formattedTitle = (title.charAt(0).toUpperCase() + title.slice(1)).replace('-', ' ');
    return (
        <Container>
            <h3><span role="img" aria-label="start">⭐</span> {formattedTitle}</h3>
            <p>{children}</p>
        </Container>
    )
}