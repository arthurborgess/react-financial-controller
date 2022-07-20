import { useState } from "react";
import { newDateAdjusted } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import * as C from "./styles";

interface InputAreaProps {
    onAdd: (item: Item) => void;
}


export const InputArea = ({ onAdd }: InputAreaProps) => {

    const [dateField, setDateField] = useState('');
    const [valueField, setValueField] = useState(0);

    const handleAddEvent = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);

        let category = (data.get('category')) as string;
        let title = (data.get('title')) as string;
        let newItem: Item = {
            date: newDateAdjusted(dateField),
            category: category,
            title: title,
            value: valueField
        }
        onAdd(newItem);
    }

    return (
        <C.Container onSubmit={handleAddEvent}>
            <input type="date" required={true} value={dateField} onChange={e => setDateField(e.target.value)} />
            <select name="category">
                <option value="food">Food</option>
                <option value="rent">Rent</option>
                <option value="salary">Salary</option>
            </select>
            <input type="text"
                placeholder="Title"
                required={true}
                name="title"
            />
            <input type="number"
                placeholder="R$ 0,00"
                autoComplete="off"
                required
                onChange={e => setValueField(parseFloat(e.target.value))}
            />
            <button type="submit">Add</button>
        </C.Container>
    );
}