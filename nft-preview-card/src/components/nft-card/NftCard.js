import React from 'react';
import './NftCard.scss';
import div from '@mui/material/Card';
import image from '../../assets/images/image-equilibrium.jpg';

const NftCard = () => {

    return (
        <div className="main-card">
            <div className="image-container">
                <img className="image" src={image} alt="empty" />
            </div>
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
        </div>
    );
}

export default NftCard;