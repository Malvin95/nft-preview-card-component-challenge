import React from 'react';
import Card from '@mui/material/Card';

const NftCard = () => {
    return (
        <Card>
            <div>Card Image here</div>
            <div>NFT Name</div>
            <div>NFT description</div>
            <div>
                <div>nft value</div>
                <div>time span</div>
            </div>
            <div>footer line</div>
            <div>
                <div>Avatar</div>
                <div>nft owner</div>
            </div>
        </Card>
    );
}

export default NftCard;