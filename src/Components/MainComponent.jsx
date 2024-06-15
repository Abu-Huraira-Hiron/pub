import React, { useState } from 'react';
import PDFViewer from './PDFViewer'
import RegistrationForm from './RegistrationForm'

const MainComponent = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const pdfFile = 'path/to/your/pdf/file.pdf';

    const handleRegister = () => {
        setIsRegistered(true);
    };

    return (
        <div>
            {isRegistered ? (
                <Pdfviewer file={pdfFile} />
            ) : (
                <RegistrationForm onRegister={handleRegister} />
            )}
        </div>
    );
};

export default MainComponent;