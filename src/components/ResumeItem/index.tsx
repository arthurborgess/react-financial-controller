import { formatMoney } from "../../helpers/formatMoney";
import * as C from "./styles";

interface ResumeItemProps {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: ResumeItemProps) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>{formatMoney(value)}</C.Info>
        </C.Container>
    );
}