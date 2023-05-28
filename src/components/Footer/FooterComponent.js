import React from 'react';
import { FloatButton, Row, Col } from 'antd';
import { FileTextOutlined, InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';


const FooterComponent = () => {
    return (
        <footer className="footer">
            <Row justify="center">
                <Col span={2}>
                    <InstagramOutlined style={{ fontSize: '50px' }} />
                </Col>
                <Col span={2}>
                    <FacebookOutlined style={{ fontSize: '50px' }} />
                </Col>
                <Col span={2}>
                    <YoutubeOutlined style={{ fontSize: '50px' }} />
                </Col>
            </Row>

            <p>Todos os direitos reservados - Teatro Arthur Azevedo 2023</p>
            <FloatButton
                icon={<FileTextOutlined />}
                shape="circle"
                style={{
                    right: 50
                }}
                href='/pauta'
                tooltip={<div>Pautas e locações</div>}
            />
        </footer>
    );
};
export default FooterComponent;