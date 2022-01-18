import React from 'react';
import { Book } from '../interfaces';

interface Props {
    book: Book,
    handleDelete(id: number): void,
}

const BookList = ({ book, handleDelete }: Props): JSX.Element => {
    const { id, bookName, authorName } = book;
    return (
        <tr>
            <td>{(id) + 1} </td>
            <td>{bookName}</td>
            <td>{authorName}</td>
            <td><button className='del-btn' onClick={() => handleDelete(id)}>
                <i className="fas fa-trash-alt"></i>
            </button></td>
        </tr>

    );
};

export default BookList;