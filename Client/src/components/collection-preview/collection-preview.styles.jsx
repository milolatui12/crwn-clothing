import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled(Link)`
    width: 150px;
    padding-left: 5px;
    font-size: 28px;
    margin-bottom: 25px;
    border-bottom: 2px solid grey;
    border-left: 2px solid black;
`;

export const  PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;