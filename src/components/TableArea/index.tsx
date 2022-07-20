import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import * as C from "./styles";

interface PropsList {
    list: Item[];
}

export const TableArea = ({ list }: PropsList) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={120}>Date</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Category</C.TableHeadColumn>
                    <C.TableHeadColumn>Title</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    );
}