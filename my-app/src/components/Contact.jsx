import React from 'react';
import {Container,Row,Col,Table, Image} from 'react-bootstrap';
import {FiPhoneCall} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';
const Contact = () => {
  return (
    <>
        <Container style={{marginTop:'50px'}}>
            <Row>
                <Col md={6}>
                    <h1>Ranjan Pizza Shop</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae sequi doloribus consequuntur assumenda ut illo perspiciatis quisquam id nisi quis, harum maxime impedit laboriosam repudiandae quas minus sapiente ea tempora! Laborum error nisi cupiditate ab impedit deserunt natus nihil consectetur. Magni, adipisci unde voluptates earum facere officia, suscipit, veniam iusto a odit est repellat sed pariatur rem exercitationem maiores facilis quasi cum animi placeat? Molestiae quibusdam incidunt, alias rerum sed soluta eos eligendi accusamus nihil vero qui labore modi esse saepe voluptates atque ducimus optio obcaecati facere quas quae cum provident aperiam? Quidem veniam recusandae voluptatibus iure voluptatem molestiae.</p>
    
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th className="bg-warning text-center" colSpan={3}>Contact Details</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FiPhoneCall/></td>
          <td>Phone</td>
          <td>7677702162</td>
        </tr>
        <tr>
          <td><AiOutlineMail/></td>
          <td>Email</td>
          <td>ranjanswg12@gmail.com</td>
        </tr>
        
      </tbody>
    </Table>
                </Col>  
                <Col md={6}>
                    <Image src="images/farmhouse.jpg" style={{width:'100%', height:'100%'}}/>
                </Col>
            </Row>
        </Container>
      
    </>
  )
}

export default Contact;
