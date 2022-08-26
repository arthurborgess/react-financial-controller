import React, { useState } from "react";

type Props = {
    value: string;
    setValue: (value: string | ((prevVar: string) => string)) => void;
}

export const CurrencyInput = ({ value, setValue }: Props) => {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        let currentValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(formatMoney(Number(currentValue) / 100));
    };
    function formatMoney(value: number): string {
        return value.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
            minimumFractionDigits: 2
        });
    };

    return (
        <input
            type="tel"
            value={value}
            onChange={handleChange}
            placeholder="R$ 0,00"
            name="moneyInput"
            autoComplete="off"
            required
            autoFocus
        />
    );
};