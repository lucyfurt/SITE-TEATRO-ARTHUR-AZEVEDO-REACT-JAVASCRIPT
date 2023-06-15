import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

function HistoriaHome() {
    return (
        <div style={{ background: "#6d0202", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
            <div>
                <Row>
                    <Col span={12}>
                        <img src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg" alt="Fundação" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Col>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '30px' }}>
                        <div>
                            <h1 style={{ color: "#fff", marginBottom: '30px', fontSize:"40px" }}>
                                O Teatro
                                
                            </h1>
                            <h1 style={{ color: "#fff", marginBottom: '30px' }}>
                            Com mais de 200 anos de história, o Teatro Arthur Azevedo é hoje o segundo
                                teatro mais antigo do Brasil e um dos mais bem equipados palcos do Estado do Maranhão.
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ alignSelf: 'center', marginRight: '8px', color: '#fff' }}>
                                    <h1>Saiba mais</h1>
                                </span>
                                <Button type="primary" shape="round" icon={<RightOutlined />} size="large" style={{ backgroundColor: 'orange', color: "#fff" }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HistoriaHome;
