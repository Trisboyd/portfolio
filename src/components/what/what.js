import { WhatBlock, WhatGrid, WhatSection } from './styledWhat';
import { SectionTitle } from '../who/styledWho';
import WhatBlockHover from '../whatBlock/whatBlockHover';
import Fade from 'react-reveal/Fade';
import { NewsData, NewCrobData, AroundData } from '../../constants/what/what';

const What = (props) => {

    const handlePopupClick = (data) => {
        props.handlePopupClick(data);
    }

    return (
        <WhatSection id='what'>
            <SectionTitle>What?</SectionTitle>
            <Fade>
                <WhatGrid>
                    <WhatBlock />
                    <WhatBlock
                        pic={NewsData.images[0]}
                        $real='real'>
                        <WhatBlockHover
                            data={NewsData}
                            handlePopupClick={handlePopupClick} />
                    </WhatBlock>
                    <WhatBlock />
                    <WhatBlock
                        pic={AroundData.images[0]}
                        $real='real'>
                        <WhatBlockHover
                            data={AroundData}
                            handlePopupClick={handlePopupClick} />
                    </WhatBlock>

                    <WhatBlock />
                    <WhatBlock
                        pic={NewCrobData.images[0]}
                        $real='real'>
                        <WhatBlockHover
                            data={NewCrobData}
                            handlePopupClick={handlePopupClick} />
                    </WhatBlock>
                </WhatGrid>
            </Fade>
        </WhatSection>
    )
}

export default What;