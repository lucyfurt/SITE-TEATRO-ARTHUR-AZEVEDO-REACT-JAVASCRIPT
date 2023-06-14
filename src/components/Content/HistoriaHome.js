import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

function HistoriaHome() {
    return (
        <div style={{ background: "#6d0202" }}>
            <Row>
                <Col span={12}>
                    <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Fundação" width={'600px'} height={'500px'} />
                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <h1>
                        O Teatro
                        Com mais de 200 anos de história, o Teatro Arthur Azevedo é hoje o segundo
                        teatro mais antigo do Brasil e mais bem equipados palcos do Estado do Maranhão.
                    </h1>
                </Col>
            </Row>
            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ alignSelf: 'center', marginRight: '8px' }}>
                    <h1>Saiba mais</h1>
                </span>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                    <Button type="primary" shape="round" icon={<RightOutlined />} size="large" style={{ backgroundColor: 'orange' }} />
                </div>
            </div>
        </div>
    );
}

export default HistoriaHome;
