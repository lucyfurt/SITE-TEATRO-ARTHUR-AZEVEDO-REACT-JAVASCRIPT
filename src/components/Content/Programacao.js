import { RightOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button } from 'antd';
const { Meta } = Card;

const App = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{ width: '100%', height: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
                  style={{
                    display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%',
                    backgroundColor: 'transparent', color: '#1890ff', borde: '1px'
                  }}>

                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="16.06 Stand-up" description="Emerson Ceará" />

            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{ width: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
                  style={{
                    display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%',
                    backgroundColor: 'transparent', color: '#1890ff', borde: '1px'
                  }}>

                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="17.06 Show" description="This is the description" />

            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{ width: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
                  style={{
                    display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%',
                    backgroundColor: 'transparent', color: '#1890ff', borde: '1px'
                  }}>

                  Compre aqui
                </Button>
              ]}
            >
              <Meta title="18.06" description="This is the description" />

            </Card>
          </Col>

        </Row>
      </div>
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ alignSelf: 'center', marginRight: '8px' }}>
          <h1>Veja a programação completa</h1>
        </span>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
          <Button
            type="primary"
            shape="round"
            icon={<RightOutlined />}
            size="large"
            style={{ backgroundColor: '#67A4FB' }}
            href='/allevents'
          />
        </div>
      </div>

    </>
  );
};

export default App;
