import React,{useContext, Suspense} from 'react';
import styled from 'styled-components'
import {ButtonGroup, Button, Loader } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';

const FeaturesEth = React.lazy(() => import ('./featureEth'))
const FeaturesBsc = React.lazy(() => import ('./featureBsc'))
const FeaturesPolygon = React.lazy(() => import ('./featureBsc'))
const FeaturesCelo = React.lazy(() => import ('./featureBsc'))
const FeaturesSolana = React.lazy(() => import ('./featureBsc'))
const FeaturesOne = React.lazy(() => import ('./featureBsc'))
const FeaturesTron = React.lazy(() => import ('./featureBsc'))
const FeaturesAlgo = React.lazy(() => import ('./featureBsc'))
const FeaturesFlow = React.lazy(() => import ('./featureBsc'))

const Kontejner = styled.div`
  margin-left: 5%;
  width: 25rem;
  height: auto;
  padding: 2%;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 12px 24px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
`

const BtnGroup = styled(ButtonGroup)`
    margin-top: 0.5rem;
`

const Title = styled.h3`
    text-align: center;
    margin-bottom: 2%;
`

const FeatureSelector =()=>{ 

    const {feature, method, setMethod} = useContext(FeatureContext);
    const {chain} = useContext(BlockchainContext)

    const changeMethod = (newMethod) => {
        setMethod(newMethod)
    }
        return (
            <Kontejner>
                <Title>Select feature</Title>
                        {chain === 'ETH' ? <Suspense fallback={<Loader />}> <FeaturesEth method={method}/> </Suspense> : null}
                        {chain === 'BSC' ? <Suspense fallback={<Loader />}> <FeaturesBsc method={method}/> </Suspense> : null}
                        {chain === 'POLYGON' ? <Suspense fallback={<Loader />}> <FeaturesPolygon method={method}/> </Suspense> : null}
                        {chain === 'CELO' ? <Suspense fallback={<Loader />}> <FeaturesCelo method={method}/> </Suspense> : null}
                        {chain === 'SOLANA' ? <Suspense fallback={<Loader />}> <FeaturesSolana method={method}/> </Suspense> : null}
                        {chain === 'ONE' ? <Suspense fallback={<Loader />}> <FeaturesOne method={method}/> </Suspense> : null}
                        {chain === 'TRON' ? <Suspense fallback={<Loader />}> <FeaturesTron method={method}/> </Suspense> : null}
                        {chain === 'ALGO' ? <Suspense fallback={<Loader />}> <FeaturesAlgo method={method}/> </Suspense> : null}
                        {chain === 'FLOW' ? <Suspense fallback={<Loader />}> <FeaturesFlow method={method}/> </Suspense> : null}
                    <div>
            {/* Change code snippet method  */}
              {feature === 'Select feature' ? null :   <BtnGroup>
                    <Button onClick={()=>(changeMethod('API'))} >API</Button>
                    <Button  onClick={()=>(changeMethod('SDK'))} >SDK JS</Button>
                    <Button >SDK PHP</Button>
                 </BtnGroup>}
                 </div>
            </Kontejner>
        );
}

export default FeatureSelector;