import { ContactType } from "../models/contact";

export function useHome() {
    const handleShowMore = () => {
        const reelsUrl = import.meta.env.VITE_APP_INSTAGRAM_REELS_URL;

        window.open(reelsUrl, '_blank');
    };

    const handleOpenContact = (type: ContactType) => {
        const instagramUrl = import.meta.env.VITE_APP_INSTAGRAM_MAIN_URL;
        const wppUrl = import.meta.env.VITE_APP_WPP_MESSAGE_URL;
        const mailUrl = import.meta.env.VITE_APP_MAIL_MESSAGE_URL;

        if (type === 'instagram') window.open(instagramUrl, '_blank');

        if (type === 'wpp') window.open(wppUrl, '_blank');
        
        if (type === 'mail') window.open(mailUrl, '_blank');
    };

    return {
        handleShowMore,
        handleOpenContact,
    };
};