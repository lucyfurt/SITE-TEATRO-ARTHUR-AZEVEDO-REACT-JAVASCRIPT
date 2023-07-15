import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './css/historiaHome.css'

function HistoriaHome() {
    return (
        <div className='history'>
            <div>
                <Row>
                    <Col span={12}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-lxloupKM4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                    <Col span={12} >
                        <div>
                            <h1 >
                                O Teatro
                            </h1>
                            <p>
                                O Teatro Arthur Azevedo é atualmente o segundo teatro mais antigo do Brasil e um dos espaços culturais mais importantes de São Luís, no Maranhão. Com mais de 200 anos de história, esse teatro possui um estilo arquitetônico único e já recebeu inúmeros artistas nacionais e internacionais. Confira a programação, agende sua visita e mergulhe na cultura maranhense.     </p>
                            <div>
                                <span>
                                    <p>Saiba mais</p>
                                </span>
                                <Button type="primary"
                                    href='/teatro'
                                    shape="round"
                                    icon={<RightOutlined />}
                                    size="large"
                                    className='btn' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default HistoriaHome;
