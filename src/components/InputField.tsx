// src/components/InputField.tsx
import React from 'react';

interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    onChange: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange }) => (
    <div>
        <label>{label}</label>
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
);