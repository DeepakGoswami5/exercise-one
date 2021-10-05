import React from 'react'
import './skuDetails.scss'

export const SkuDetails = ({currentSKU}) => {
    return (
        <div className="searchDetails">
            {currentSKU.sku_name ? 
                (<ul>
                    <li>Name : {currentSKU.sku_name}</li>
                    <li>Product Code : {currentSKU.product_code}</li>
                    <li>Stock In : {currentSKU.stock_in}</li>
                    <li>Stock Out : {currentSKU.stock_out}</li>
                    <li>Stock On Hand : {currentSKU.stock_on_hand}</li>
                    <li>Stock Reserved : {currentSKU.stock_reserved}</li>
                    <li>Stock Available : {currentSKU.stock_available}</li>
                    <li>Barcode : {currentSKU.barcode}</li>
                </ul>)
                : (<p>No Details Available</p>)
            }
        </div>
    )
}
