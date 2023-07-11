import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, Typography } from 'antd';
import './Historia.css'

const { Content, Header, Footer } = Layout;
const { Title } = Typography;

function Historia() {
    return (
        <Layout>
            <Header style={{ background: '#6d0202', padding: '20px' }}>
                <Title level={3} style={{ color: '#fff', margin: 0 }}>
                    <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
                </Title>
            </Header>
            <Content style={{ padding: '50px' }}>
                <h1>História</h1>

                <div style={{ display: 'block', width: 700, padding: 30 }}>

                    <Carousel >
                    <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg"
                                alt="Image Two"
                            />
                            <Carousel.Caption>
                                <h3>Fundação</h3>
                                <p>No ano de 1815, dois comerciantes portugueses desejavam ter um teatro em São Luís, no Maranhão, que fosse semelhante aos da Europa. Apesar das dificuldades enfrentadas, eles construíram o Teatro União, inaugurado em 1817. O teatro foi posteriormente renomeado para Teatro São Luiz e, mais tarde, recebeu o nome de Teatro Arthur Azevedo em homenagem a um importante teatrólogo maranhense. O local passou por crises, funcionou como cinema e foi restaurado várias vezes. Hoje, é considerado um dos principais teatros históricos do Brasil, sendo palco de diversas apresentações artísticas e eventos culturais. Sua arquitetura neoclássica e sua relevância cultural o tornam um símbolo da arte no Maranhão.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                                alt="Image One"
                            />
                            <Carousel.Caption>
                                <h3>Label for first slide</h3>
                                <p>Sample Text for Image One</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
                <h1>TAA 206 Anos</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-lxloupKM4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Content>
            <Footer style={{ background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
                <Title level={5} style={{ color: '#fff', margin: 0 }}>
                    Teatro Arthur Azevedo © Todos os direitos reservados {new Date().getFullYear()}
                </Title>
            </Footer>
        </Layout>


    );
}

export default Historia;