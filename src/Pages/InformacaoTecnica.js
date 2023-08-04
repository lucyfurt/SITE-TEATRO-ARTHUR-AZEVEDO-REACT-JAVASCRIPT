import React from 'react';
import { Layout, Divider, Button } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';
import rider_taa from '../assets/rider_taa.pdf'

const { Content } = Layout;

export default () => (
    <Layout>
        <MenuBurguer />
        <Divider orientation="center">
            <h1>Informações técnicas </h1>
        </Divider>
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Carousel style={{ width: '50%', height: 'auto' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/RDnMwpk/Foyer-2.jpg"
                        alt="1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/LCkKg7M/0004.png"
                        alt="2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/yqz8DqH/0001.png"
                        alt="3"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XLHVTWB/0005.png"
                        alt="3"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/hWR2DkR/37-Sal-o-Vers-til.jpg"
                        alt="4"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/2SFmgzf/41-Sal-o-de-Dan-a.jpg"
                        alt="5"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/9nRD3z8/Sala-de-Coro.jpg"
                        alt="6"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/8dmxDK8/Bar-1.jpg"
                        alt="7"
                    />
                </Carousel.Item>              
            </Carousel>
            <Tabs direction='rtl' style={{ width: '70%', marginTop: '20px' }}>
                <TabList>
                    <Tab>Foyer</Tab>
                    <Tab>Plateia</Tab>
                    <Tab>Palco</Tab>
                    <Tab>Salão Nobre</Tab>
                    <Tab>Salão Versátil</Tab>
                    <Tab>Sala de dança</Tab>
                    <Tab>Sala de coro</Tab>
                    <Tab>Camarins</Tab>
                    <Tab>Bar</Tab>
                </TabList>
                <TabPanel >
                    <p>Este grande salão tem a função de receber e acomodar o público nos
                        momentos que antecedem o início do espetáculo. Á esquerda
                        do local encontra-se a bilheteria.</p>
                </TabPanel>
                <TabPanel>
                    <p>A plateia tem o clássico formato de ferradura, poltronas acolchoadas.
                        Constituída de um espaço central, com excelente ângulo de visão frontal.</p>
                </TabPanel>
                <TabPanel>
                    <p>
                        O palco mede 324m² com 15m de profundidade por 12m de boca de cena,
                        dispondo de um fosso. O espaço aéreo é constituído de um sistema de 32 varas de
                        cenários e 7 varas de luz, mais o ciclorama em madeira, 5 bambolinas, 10 rompimentos,
                        2 rotundas e 3 coxias de circulação para artistas e técnicos que formam a caixa cênica.
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        O salão com 230m² é decorado com espelhos de cristal e molduras douradas, mesas, jarros
                        e objetos de época, conjuntos de sofás e poltronas de palhinha e estofados sobre tapete.
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        Salão climatizado com 230 m², situado na parte frontal do prédio, no terceiro piso,
                        possui uma parede espelhada, barras de apoio para dança, piso em madeira de lei,
                        permite sua utilização para pequenas audições ao piano, canto, aulas de dança, ensaios de teatro.
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        O salão de dança mede 154m² localizado no anexo do TAA, terceiro piso. Equipado com duas
                        paredes contendo espelhos de 3,5 m de altura, piso de madeira adequado para dança,
                        barras fixas e móveis, iluminação especial para aulas e ensaios e sistema de som e vídeo.
                        Dispõe, também, de uma sala mezanino para observação dos coreógrafos e dos responsáveis, com tv e vídeo.
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        A sala de ensaios do coro mede 63 m², é climatizada e fica localizada no
                        terceiro piso do anexo administrativo. Dispõe de uma parede espelhada do teto
                        ao piso e barras móveis. Voltada para ensaios de corais e pequenos grupos teatrais e de dança.
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        O TAA oferece um total de 08 camarins equipados com espelhos,
                        lâmpadas em grande quantidade proporcionando boa visibilidade,
                        bancadas com água abundante,banheiros e armários para guarda de objetos.
                    </p>
                </TabPanel>
                <TabPanel>
                    <p>
                        Atende ao público antes e nos intervalos dos espetáculos.
                        É vedada a entrada de bebidas e alimentos em geral na plateia.
                    </p>
                </TabPanel>
            </Tabs>
            <div>
                <Button type='text' style={{marginTop:'30px', border:'50px'}}>
                    <a href={rider_taa}>Veja mais Informações Técnicas</a>
                </Button>
            </div>
        </Content>
        <FooterComponent />
    </Layout>

);