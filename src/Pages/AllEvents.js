import { ZoomInOutlined } from '@ant-design/icons';
import { Card, Row, Col, Layout, Typography } from 'antd';
const { Meta } = Card;
const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const App = () => {
    return (
        <Layout>
            <Header style={{ background: '#6d0202', padding: '20px' }}>
                <Title level={3} style={{ color: '#fff', margin: 0 }}>
                    <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
                </Title>
            </Header>
            <Content style={{ padding: '50px' }}>
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
                                actions={[<ZoomInOutlined />]}
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
                                actions={[<ZoomInOutlined />]}
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
                                actions={[<ZoomInOutlined />]}
                            >
                                <Meta title="18.06" description="This is the description" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                style={{ width: '100%', height: '100%' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[<ZoomInOutlined />]}
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
                                actions={[<ZoomInOutlined />]}
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
                                actions={[<ZoomInOutlined />]}
                            >
                                <Meta title="18.06" description="This is the description" />
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
                                actions={[<ZoomInOutlined />]}
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
                                actions={[<ZoomInOutlined />]}
                            >
                                <Meta title="18.06" description="This is the description" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
                Teatro Arthur Azevedo  © Todos os direitos reservados 2023
            </Footer>
        </Layout>




    );
};

export default App;