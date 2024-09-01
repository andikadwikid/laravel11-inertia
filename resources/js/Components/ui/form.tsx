import React, { FormHTMLAttributes } from 'react';

export default function Form({ onSubmit, ...props }: FormHTMLAttributes<HTMLFormElement> & { onSubmit(): void }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            {...props}
        />
    );
}
