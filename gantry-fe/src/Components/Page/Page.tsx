import React from 'react';

import './Page.scss';

export interface LayoutProps  {
    children: React.ReactNode
}

export const Page: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <div className='page'>
            {children}
        </div>
    );
};