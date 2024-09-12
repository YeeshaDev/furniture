//import React from 'react'
import Container from '../common/Container'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

function Faq() {
    return (
        <div className='overflow-hidden'>
      <div className='text-center flex flex-col items-center justify-center mt-7 mb-5'> 
         <span className='text-5xl '><AiOutlineQuestionCircle /></span>
      <h1 className='text-3xl text-center font-medium capitalize my-5'>Frequently Asked Questions.</h1></div>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10'>
          <article>
           
            <div className='py-8 '>
            <h3 className='font-semibold text-2xl mb-5 lg:text-3xl'>01. Orders</h3>
            <ul>
                <li className='flex flex-col'>
                <span className='text-gray-600 text-xl font-medium mt-3 mb-3'>When do I receive my order?</span>
                <span  className='text-gray-500  mb-5'>When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.</span>
                </li>
                <li className='flex flex-col'>
                    <span  className='text-gray-600 text-xl mt-3 mb-3'>I now see the longer delivery time of (a part of) my order. How can I cancel it?</span>
                    <span className='text-gray-500  mb-5'>If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled.</span>
                </li>
                <li className='flex flex-col'>
                    <span  className='text-gray-600 text-xl mt-3 mb-3'>When will I receive the invoice for my order?</span>
                    <span className='text-gray-500  mb-5'>When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.</span>
                </li>
            </ul>
            </div>
            </article> 

            <article>
            
            <div className='py-8 '>
            <h3 className='font-semibold text-2xl mb-5 lg:text-3xl'>02. Payments </h3>
            <ul>
                <li className='flex flex-col'>
                <span className='text-gray-600 text-xl font-medium mt-3 mb-3'>When do I receive my order?</span>
                <span  className='text-gray-500  mb-5'>When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.</span>
                </li>
                <li className='flex flex-col'>
                    <span  className='text-gray-600 text-xl mt-3 mb-3'>I now see the longer delivery time of (a part of) my order. How can I cancel it?</span>
                    <span className='text-gray-500  mb-5'>If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled.</span>
                </li>
                <li className='flex flex-col'>
                    <span  className='text-gray-600 text-xl mt-3 mb-3'>When will I receive the invoice for my order?</span>
                    <span className='text-gray-500  mb-5'>When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.</span>
                </li>
            </ul>
            </div>
            </article> 

            <article id='shipment'>
            
            <div className='py-8 ' >
            <h3 className='font-semibold text-2xl mb-5 lg:text-3xl'>03. Shipments</h3>
            <ul>
                <li className='flex flex-col'>
                <span className='text-gray-600 text-xl font-medium mt-3 mb-3'>When do I receive my order?</span>
                <span  className='text-gray-500  mb-5'>When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.</span>
                </li>
                <li className='flex flex-col'>
                    <span  className='text-gray-600 text-xl mt-3 mb-3'>I now see the longer delivery time of (a part of) my order. How can I cancel it?</span>
                    <span className='text-gray-500  mb-5'>If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled.</span>
                </li>
                <li className='flex flex-col'>
                    <span  className='text-gray-600 text-xl mt-3 mb-3'>When will I receive the invoice for my order?</span>
                    <span className='text-gray-500  mb-5'>When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.</span>
                </li>
            </ul>
            </div>
            </article> 

            <article>
            
            <div className='py-8 '>
            <h3 className='font-semibold text-2xl lg:text-3xl mb-5 capitalize'>04.  Returns, exchanges and complaints</h3>
            <ul>
                <li className='flex flex-col'>
                <span className='text-gray-600 text-xl font-medium mt-3 mb-3'>When do I receive my order?</span>
                <span  className='text-gray-500  mb-5'>When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.</span>
                </li>
                <li className='flex flex-col'>
                    <span  className='text-gray-600 text-xl mt-3 mb-3'>I now see the longer delivery time of (a part of) my order. How can I cancel it?</span>
                    <span className='text-gray-500  mb-5'>If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled.</span>
                </li>
                <li className='flex flex-col'>
                    <span  className='text-gray-600 text-xl mt-3 mb-3'>When will I receive the invoice for my order?</span>
                    <span className='text-gray-500  mb-5'>When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways.The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice.</span>
                </li>
            </ul>
            </div>
            </article> 
          </div>
     </Container>

        </div>
    )
}

export default Faq
