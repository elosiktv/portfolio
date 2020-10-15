import React, { useContext } from 'react';
import styled from 'styled-components';

import mainContext from '../../context/mainContext';

import Skills from '../molecules/Skills';
import Projects from '../molecules/Projects';
import Contact from '../molecules/Contact';

const Container = styled.div`
    width: 45%;
    position: relative;
`

const RightSide = () => {
    const { state } = useContext(mainContext);

    return (
        <Container>
            <Skills active={state.active === 0} index={state.active} prevIndex={state.prevActive} />
            <Projects active={state.active === 1} index={state.active} prevIndex={state.prevActive} />
            <Contact active={state.active === 2} index={state.active} prevIndex={state.prevActive} />
        </Container>
    );
};

export default RightSide;