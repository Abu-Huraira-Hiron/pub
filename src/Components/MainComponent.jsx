import React, { useState } from 'react';
import PDFViewer from './Pdfviewer';
import RegistrationForm from './RegistrationForm';

const MainComponent = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const pdfFile = 'path/to/your/pdf/file.pdf';

    const handleRegister = () => {
        setIsRegistered(true);
    };

    return (
        <div>
            {isRegistered ? (
                <PDFViewer file={pdfFile} />
            ) : (
                <RegistrationForm onRegister={handleRegister} />
            )}
        </div>
    );
};

export default MainComponent;