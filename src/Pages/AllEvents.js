import { Card, Col, Layout, Row, Tabs, Button, Divider } from 'antd';
import FooterComponent from '../components/Footer/FooterComponent';
import MenuBurguer from '../components/Header/MenuBurguer.js';

const { Meta } = Card;
const { Content } = Layout;
const { TabPane } = Tabs;

const AllEvents = () => {
  return (
    <Layout>
      <MenuBurguer />
      <Divider orientation="left">
        <h1>Programação</h1>
      </Divider>
      <Content>
        <Tabs defaultActiveKey="Agosto" centered style={{marginBottom:'30px'}}> 
          <TabPane tab="Agosto" key="august">
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
                      Compre aqui
                    </Button>
                  ]}
                >
                  <Meta title="18.06" description="This is the description" />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Setembro" key="september" disabled='true'>
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
                      Compre aqui
                    </Button>
                  ]}
                >
                  <Meta title="17.06 Show" description="This is the description" />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Outubro" key="october" disabled='true'>
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
                      Compre aqui
                    </Button>
                  ]}
                >
                  <Meta title="17.06 Show" description="This is the description" />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Novembro" key="november" disabled='true'>
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
                      Compre aqui
                    </Button>
                  ]}
                >
                  <Meta title="17.06 Show" description="This is the description" />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Dezembro" key="december" disabled='true'>
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
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
                    <Button type="text" href="https://www.ingressodigital.com/" target="_blank"
                    >
                      Compre aqui
                    </Button>
                  ]}
                >
                  <Meta title="17.06 Show" description="This is the description" />
                </Card>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default AllEvents;
