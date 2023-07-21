import { Card, Col, Layout, Row, Tabs,  Button } from 'antd';
import MenuHome from '../components/Header/MenuHome';
import FooterComponent from '../components/Footer/FooterComponent';
const { Meta } = Card;
const { Content } = Layout;

const { TabPane } = Tabs;

const AllEvents = () => {
  return (
    <Layout>
  <MenuHome />
      <Content>
        <h1>Eventos</h1>
        <Tabs defaultActiveKey="july" centered>
          <TabPane tab="Julho" key="july">
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
                    >
                      Compre aqui
                    </Button>
                  ]}
                >
                  <Meta title="18.06" description="This is the description" />
                </Card>
              </Col>
              {/* More cards for August */}
            </Row>
          </TabPane>
          <TabPane tab="Setembro" key="september">
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
                    >
                      Compre aqui
                    </Button>
                  ]}
                >
                  <Meta title="17.06 Show" description="This is the description" />
                </Card>
              </Col>
              {/* More cards for July */}
            </Row>
          </TabPane>
          <TabPane tab="Outubro" key="october">
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
          <TabPane tab="Novembro" key="november">
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
          <TabPane tab="Dezembro" key="december">
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
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
                    <Button type="primary" href="https://www.ingressodigital.com/" target="_blank"
                    >
                      Compre aqui
                    </Button>
                  ]}
                >
                  <Meta title="17.06 Show" description="This is the description" />
                </Card>
              </Col>
              {/* More cards for July */}
            </Row>
          </TabPane>
        </Tabs>
      </Content>
     <FooterComponent />
    </Layout>
  );
};
export default AllEvents;
