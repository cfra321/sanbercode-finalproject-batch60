import React from 'react';

// Sample partner logos
const partners = [
    {
        name: 'Google',
        logo: 'https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png',
    },
    {
        name: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
        name: 'Microsoft',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    },
    {
        name: 'Facebook',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    },
    {
        name: 'Apple',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    },
    {
        name: 'Gojek',
        logo: 'data:image/png;base64,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', 
    },
    {
        name: 'Tokopedia',
        logo: 'https://loosewood.com/wp-content/uploads/2019/01/logo-tokopedia.png', 
    },
    {
        name: 'Bukalapak',
        logo: 'https://www.freepnglogos.com/uploads/bukalapak-logo-png/bukalapak-apa-itu-startup-pengertian-cara-memulai-dan-0.png', 
    },
    {
        name: 'Traveloka',
        logo: 'https://ik.imagekit.io/tvlk/blog/2020/01/Traveloka_Primary_Logo.png?tr=dpr-2,w-675',
    },
    {
        name: 'OVO',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png', 
    },
    {
        name: 'Xendit',
        logo: 'https://tukuz.com/wp-content/uploads/2020/12/xendit-logo-vector.png', 
    },
    {
        name: 'Ruangguru',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ruang_Guru_logo.svg/1200px-Ruang_Guru_logo.svg.png', 
    },
    {
        name: 'BRI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_BRI.png/1200px-Logo_BRI.png', 
    },
];

const OurPartners = () => {
    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto">
                {partners.map((partner, index) => (
                    <div key={index} className="flex justify-center items-center m-6 p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="h-16 w-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPartners;
