import { Card, Row, Col, Button } from 'antd';
import {RightCircleOutlined} from '@ant-design/icons'
import '../Content/css/ProgramacaoHome.css'
const { Meta } = Card;
const ProgramacaoHome = () => {
  return (
    <>
      <div>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.ibb.co/QPqp4P0/soon.jpg"
                />
              }
              actions={[
                <Button type="text" href="https://www.ingressodigital.com/" target="_blank">
                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="Agosto" description="Em construção..." />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.ibb.co/QPqp4P0/soon.jpg"
                />
              }
              actions={[
                <Button type="text" href="https://www.ingressodigital.com/" target="_blank">
                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="Agosto" description="Em construção..." />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://i.ibb.co/QPqp4P0/soon.jpg"
                />
              }
              actions={[
                <Button type="text" href="https://www.ingressodigital.com/" target="_blank">
                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="Agosto" description="Em construção..." />
            </Card>
          </Col>
        </Row>
      </div>
      <div className='programacao'>
        <Button href='/allevents' type='text'> Veja a programação completa</Button>
      </div>
    </>
  );
};
export default ProgramacaoHome;
