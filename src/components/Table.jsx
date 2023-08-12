import React from 'react'

function Table() {
    const tableHeaders = ['Title', 'Price', 'Discount', 'Description']
    const tableData = [{
        id: 1,
        title: 'iPhone 9',
        price: '$549',
        discount: '12.96%',
        description: 'An apple mobile'
    },
    {
        id: 2,
        title: 'iPhone 9',
        price: '$549',
        discount: '12.96%',
        description: 'An apple mobile'
    }, {
        id: 3,
        title: 'iPhone 9',
        price: '$549',
        discount: '12.96%',
        description: 'An apple mobile'
    }, {
        id: 4,
        title: 'iPhone 9',
        price: '$549',
        discount: '12.96%',
        description: 'An apple mobile'
    }, {
        id: 5,
        title: 'iPhone 9',
        price: '$549',
        discount: '12.96%',
        description: 'An apple mobile'
    },]
    return (
        <section>
            <h1>Product Data</h1>
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map((item) => <th key={item}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) =>
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.discount}</td>
                            <td>{item.description}</td>
                        </tr>)}
                </tbody>
            </table>
        </section>
    )
}

export default Table