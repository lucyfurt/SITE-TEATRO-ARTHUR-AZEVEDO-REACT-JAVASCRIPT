import React from 'react';
import { Layout, Divider, Button, Tabs, Card } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';
import rider_taa from '../assets/rider_taa.pdf'
const { TabPane } = Tabs;
const { Meta } = Card;
const { Content } = Layout;

function InformacoesTecnicas() {
    return (
        <Layout>
            <MenuBurguer />
            <Divider orientation="left">
                <h1>Informações Técnicas </h1>
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
                <Tabs style={{ width: '80%', padding:'30px' }}>
            <TabPane tab="Foyer" key="1">
              <Card>
                <Meta
                  description="Este grande salão tem a função de receber e acomodar o público nos
                  momentos que antecedem o início do espetáculo. Á esquerda
                  do local encontra-se a bilheteria." />
              </Card>
            </TabPane>
            <TabPane tab="Plateia" key="2">
              <Card>
                <Meta
                  description="A plateia tem o clássico formato de ferradura, poltronas acolchoadas.
                  Constituída de um espaço central, com excelente ângulo de visão frontal." />
              </Card>
            </TabPane>
            <TabPane tab="Palco" key="3">
              <Card>
                <Meta
                  description=" O palco mede 324m² com 15m de profundidade por 12m de boca de cena,
                  dispondo de um fosso. O espaço aéreo é constituído de um sistema de 32 varas de
                  cenários e 7 varas de luz, mais o ciclorama em madeira, 5 bambolinas, 10 rompimentos,
                  2 rotundas e 3 coxias de circulação para artistas e técnicos que formam a caixa cênica." />
              </Card>
            </TabPane>
            <TabPane tab="Salão Nobre" key="4">
              <Card>
                <Meta
                  description="O salão com 230m² é decorado com espelhos de cristal e molduras douradas, mesas, jarros
                  e objetos de época, conjuntos de sofás e poltronas de palhinha e estofados sobre tapete." />
              </Card>
            </TabPane>
            <TabPane tab="Salão Versátil" key="5">
              <Card>
                <Meta
                  description="Salão climatizado com 230 m², situado na parte frontal do prédio, no terceiro piso,
                  possui uma parede espelhada, barras de apoio para dança, piso em madeira de lei,
                  permite sua utilização para pequenas audições ao piano, canto, aulas de dança, ensaios de teatro." />
              </Card>
            </TabPane>
            <TabPane tab="Sala de dança" key="6">
              <Card>
                <Meta
                  description=" O salão de dança mede 154m² localizado no anexo do TAA, terceiro piso. Equipado com duas
                  paredes contendo espelhos de 3,5 m de altura, piso de madeira adequado para dança,
                  barras fixas e móveis, iluminação especial para aulas e ensaios e sistema de som e vídeo.
                  Dispõe, também, de uma sala mezanino para observação dos coreógrafos e dos responsáveis, com tv e vídeo." />
              </Card>
            </TabPane>
            <TabPane tab="Sala de coro" key="7">
              <Card>
                <Meta
                  description=" A sala de ensaios do coro mede 63 m², é climatizada e fica localizada no
                  terceiro piso do anexo administrativo. Dispõe de uma parede espelhada do teto
                  ao piso e barras móveis. Voltada para ensaios de corais e pequenos grupos teatrais e de dança." />
              </Card>
            </TabPane>
            <TabPane tab="Camarins" key="8">
              <Card>
                <Meta
                  description="O TAA oferece um total de 08 camarins equipados com espelhos,
                  lâmpadas em grande quantidade proporcionando boa visibilidade,
                  bancadas com água abundante,banheiros e armários para guarda de objetos." />
              </Card>
            </TabPane>
            <TabPane tab="Bar" key="9">
              <Card>
                <Meta
                  description="  Atende ao público antes e nos intervalos dos espetáculos.
                  É vedada a entrada de bebidas e alimentos em geral na plateia." />
              </Card>
            </TabPane>
          </Tabs>
                <div>
                    <Button type='text' style={{ marginBottom: '30px'}}>
                        <a href={rider_taa}>Veja mais Informações Técnicas</a>
                    </Button>
                </div>
            </Content>
            <FooterComponent />
        </Layout>
    )
}
export default InformacoesTecnicas;