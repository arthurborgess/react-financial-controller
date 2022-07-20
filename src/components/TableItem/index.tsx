import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { formatMoney } from "../../helpers/formatMoney";
import { Item } from "../../types/Item";
import * as C from "./styles";

interface TableItemProps {
    item: Item;
}

export const TableItem = ({ item }: TableItemProps) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    {formatMoney(item.value)}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}