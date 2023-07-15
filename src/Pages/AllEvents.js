import { Card, Col, Layout, Row, Tabs, Typography, Button } from 'antd';
const { Meta } = Card;
const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;

const AllEvents = () => {
  return (
    <Layout>
      <Header>
        <Title level={3}>
          <a href='/'>Teatro Arthur Azevedo</a>
        </Title>
      </Header>
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
      <Footer>
        Teatro Arthur Azevedo © Todos os direitos reservados 2023
      </Footer>
    </Layout>
  );
};
export default AllEvents;
