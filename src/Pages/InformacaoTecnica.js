
import React from 'react';
import { Layout, Typography, Divider, Button, Card, Col, Row } from 'antd';
import MenuHome from '../components/Header/MenuHome';
import FooterComponent from '../components/Footer/FooterComponent';
import rider_medidas from '../assets/Rider_Tecnico_-_Medidas_e_material_cenico.pdf'
import rider_luz from '../assets/Rider_Tecnico_de_Luz.pdf'
import rider_som from '../assets/Rider_Tecnico_de_Som.pdf'

const { Content, } = Layout;
const { Title } = Typography;
const { Meta } = Card;

function InformacaoTecnica() {
    return (
        <Layout>
            <MenuHome />
            <Content>
            
                <div>
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="example"
                                        src="https://i.ibb.co/RDnMwpk/Foyer-2.jpg"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >

                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Foyer" description="Este grande salão tem a função de receber e acomodar o público nos momentos que antecedem
                            o início do espetáculo. É neste salão que se encontra
                            a homenagem da Secretaria da Cultura a Arthur Azevedo
                            e Apolônia Pinto na forma de bustos assentados em colunas. Á esquerda do local encontram-se
                            a bilheteria.O salão conta com 3 grandes e largas portas na fachada frontal e 2 em cada lado." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="fotografias"
                                        src="https://i.ibb.co/LCkKg7M/0004.png"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >
                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Plateia" description="Dedicada ao conforto e visibilidade do espetáculo,
                            a plateia tem o clássico formato de ferradura, poltronas acolchoadas. Constituída de um espaço central,
                            com excelente ângulo de visão frontal,
                            e de quatro ordens de espaços verticais: frisa, camarote, balcão e galeria,
                            além de um camarote oficial." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="espacos"
                                        src="https://i.ibb.co/yqz8DqH/0001.png"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >
                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Palco" description=" O espaço mais importante mede, 324m² com 15m de profundidade por 12m de boca de cena,
                            dispondo de um fosso e elevador de orquestra.
                            O espaço aéreo é constituído de um sistema de 32 varas de cenários e 7 varas de luz, mais o ciclorama em madeira,
                            5 bambolinas, 10 rompimentos, 2 rotundas e 3 coxias de circulação para artistas e técnicos que formam a caixa cênica,
                            oferecendo padrões excelentes de acústica.
                            O palco oferece, ainda, o uso de 30 quarteladas para efeitos cênicos." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="espacos"
                                        src="https://i.ibb.co/XLHVTWB/0005.png"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >
                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Salão Nobre" description=" Localizado sobre o salão de entrada no nível dos camarotes e do camarote oficial do governador (a), tem suas amplas janelas voltadas para a Rua do Sol, ornadas com delicadas cortinas.
                            O salão com 230m² é decorado com mesas de época, jarros e objetos, também de época, conjuntos de sofás e poltronas de palhinha e estofados sobre tapete. As paredes são ornadas com espelhos de cristal e molduras douradas e a iluminação provém de 3 lustres de cristal. O piso em granito róseo." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="espacos"
                                        src="https://i.ibb.co/hWR2DkR/37-Sal-o-Vers-til.jpg"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >
                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Salão Versátil" description=" Um amplo e bem equipado salão climatizado com 230 m², situado na parte frontal do prédio, no terceiro piso, com janelas que se abrem para Rua do Sol. Com uma parede espelhada, barras de apoio para dança, um piano para uso profissional, piso em madeira de lei, permite sua utilização para pequenas audições ao piano, de canto lírico, coro, música popular e erudita; além de aulas de dança e ainda para ensaios de teatro e música, justificando, assim, a denominação versátil desse espaço" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="espacos"
                                        src="https://i.ibb.co/2SFmgzf/41-Sal-o-de-Dan-a.jpg"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >
                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Sala de dança" description=" O salão de dança, com climatização exclusiva, mede 154 m² localizado no terceiro piso, no anexo do TAA. Equipado com duas paredes contendo espelhos de 3,5 m de altura, piso de madeira adequado para dança, barras fixas e móveis, iluminação especial para aulas e ensaios e sistema de som e vídeo. Dispõe, também, de uma sala mezanino para observação dos coreógrafos e dos responsáveis, com tv e vídeo. Poderá ser alugada ou permutada por um tempo limitado para cada grupo." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="espacos"
                                        src="https://i.ibb.co/9nRD3z8/Sala-de-Coro.jpg"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >
                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Sala de coro" description=" A sala de ensaios do coro, com 63 m², é climatizada e localizada no terceiro piso do anexo administrativo. Dispõe de um piano de gabinete, uma parede espelhada do teto ao piso e barras móveis. Voltada para ensaios de corais e pequenos grupos teatrais e de dança. Eventualmente, poderá ser utilizada como estúdio de gravação, pois a mesma está equipada com mesa de 20 canais soundcraft. Vale ressaltar aqui que todos os materiais referentes à gravação ficarão por conta do usuário." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="espacos"
                                        src="https://i.ibb.co/8dmxDK8/Bar-1.jpg"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >
                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Bar" description=" 
Localizado à direita do palco, dispõe de um monitor de vídeo que reproduz a ação do palco. Atende ao público antes e nos intervalos dos espetáculos, servindo refrigerantes, águas, cervejas e bebidas quentes. É vedada a entrada de bebidas alcoólicas, refrigerantes e líquidos em geral na plateia." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <Card
                                cover={
                                    <img
                                        alt="espacos"
                                        src="https://i.ibb.co/8dmxDK8/Bar-1.jpg"
                                    />
                                }
                                actions={[
                                    <Button type="primary" href='tecnico' target="_blank"
                                    >
                                        Saiba mais
                                    </Button>
                                ]}
                            >
                                <Meta title="Camarins" description="
Para a comodidade, privacidade e efeciencia dos grupos de artistas o TAA oferece um total de 
08 camarins equipados com espelhos,lampadas em grande quantidade proporcionando boa
visibilidade,bancadas com água abundante,banheiros e ármarios para guarda de objetos. Os
08 camarins tem tamanhos diversificados satisfazendo desde pequenos grupos de 2 ou 3
artistas, a grnades grupos de 30 a 35. Auxiliando os 08 camarins o TAA oferece 
ainda 2 baterias de banheiros, masculino e feminino no ultimo piso
-Camarim 1- Capacidade para 02 ou 03 artistas.
           Contém:01 sofá de 03 lugares, tapete, mesa de centro, frigobar,
           cadeiras, araras, bancads com pias,espelhos com lampadas e banheiro.
-Camarim 2- Capacidade para 03 ou 04 artistas.
           Contém: 01 sofá de 02 lugares, bancada com pia, espelhos com
           lampadas, cadeiras, araras, ármarios de aço e banheiro.
-Camarim 3- Capacidade para 03 ou 04 artistas.
            Contém: bancada com pia, espelhos com lampadas,araras, cadeiras,
            ármarios de aço para guarda de pertences e banheiros.
-Camarim 4- Está desativado
-Camarim 5- Capapcidade para 06 a 08 artistas
            Contém: bancadas, espelhos com lampadas, cadeiras, araras, armários
            de aço para guarda de pertences e banheiro com pia.  
-Camarim 6- Capacidade para 06 a 08 artistas
            Contém: Bancadas, espelhos com lampadas, cadeiras, araras, armários
            de aço para guarda de pertences e banheiro com pia.
-Camarim 7- Capacidade para 06 a 08 artistas
            Contém: Bancadas, espelhos com lampadas, cadeiras, araras, armários
            de aço para guarda de pertences e banheiro com pia.
-Camarim 8- Capacidade para 20 a 25 artistas
            Contém: Bancadas, espelhos com lampadas, cadeiras, araras, armários
            de aço para guarda de pertences e banheiro com pia.
-Camarim 9- Capacidade para 30 a 35 artistas
            Contém: Bancadas, espelhos com lampadas, cadeiras, araras, armários
            de aço para guarda de pertences e banheiro com pia.
-Camamrim 10- Está desativado " />
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Title level={2}>Pedido de pautas</Title>
                <Divider />
                <div>
                    <Button>Edital</Button>
                    <Button>Normas </Button>
                    <Button>Inscrever-se </Button>
                </div>
                <Divider />
                <Title level={2}>Informações Técnicas</Title>
                <Divider />
                <h1>Rider Técnico</h1>
                <div>
                    <Button href={rider_medidas}>Rider Técnico Medidas e Material Cênico</Button>
                    <Button href={rider_luz}>Rider Técnico de Luz</Button>
                    <Button href={rider_som}>Rider Técnico de Som</Button>
                </div>
                <Divider />
            </Content>
          <FooterComponent />
        </Layout>
    );
}
export default InformacaoTecnica;