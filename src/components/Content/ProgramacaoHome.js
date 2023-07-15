import { RightOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button } from 'antd';
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
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button type="primary" href="https://www.ingressodigital.com/" target="_blank">
                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="16.06 Stand-up" description="Emerson Ceará" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button type="primary" href="https://www.ingressodigital.com/" target="_blank">
                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="17.06 Show" description="This is the description" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button type="primary" href="https://www.ingressodigital.com/" target="_blank">
                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="18.06" description="This is the description" />
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <span>
          <h1>Veja a programação completa</h1>
        </span>
        <div>
          <Button
            type="primary"
            shape="round"
            icon={<RightOutlined />}
            size="large"
            href='/allevents'
          />
        </div>
      </div>
    </>
  );
};
export default ProgramacaoHome;
