import React, { ReactNode, useRef } from 'react';

interface UploadFileProps {
    setFile: Function;
    accept: string;
    children: ReactNode;
}

const UploadFile: React.FC<UploadFileProps> = ({ setFile, accept, children }) => {

    const ref = useRef<HTMLInputElement>(null);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div
            onClick={() => ref.current?.click()}
        >
            <input
                type='file'
                accept={accept}
                style={{ display: 'none' }}
                ref={ref}
                onChange={onSelectFile}
            />
            {children}
        </div>
    );
};

export default UploadFile;
