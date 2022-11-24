import React from 'react';
import {StInfoBar, StInfoBars } from './styled';
import List from "../List";
import ISSMap from "../ISSMap";

const ISSInfo = () => (
    <StInfoBars>
        <StInfoBar  width="69%">
            <ISSMap/>
        </StInfoBar>
        <StInfoBar withPadding width="30%">
            <List/>
        </StInfoBar>
    </StInfoBars>
);

export default ISSInfo;
