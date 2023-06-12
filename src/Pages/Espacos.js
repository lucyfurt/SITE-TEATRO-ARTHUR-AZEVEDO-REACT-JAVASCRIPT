import React from 'react';
import { Row, Col, Typography, Layout, Button, Divider } from 'antd';
import rider_medidas from '../assets/Rider_Tecnico_-_Medidas_e_material_cenico.pdf'
import rider_luz from '../assets/Rider_Tecnico_de_Luz.pdf'
import rider_som from '../assets/Rider_Tecnico_de_Som.pdf'
const { Title, Text } = Typography;
const { Content, Header, Footer } = Layout;
const TheatreParts = () => {
    return (
        <div>
            <Layout>
                <Header style={{ background: '#f0f2f5', padding: '20px' }}>
                    <Title level={3} style={{ color: '#1890ff', margin: 0 }}>
                        Teatro Arthur Azevedo
                    </Title>
                </Header>
                <Content>
                    <h1 style={{ textAlign: 'center' }}> Espaços</h1>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Auditorium" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Foyer</Text>
                            <Text>
                                Este grande salão tem a função de receber e acomodar o público nos momentos que antecedem
                                o início do espetáculo. É neste salão que se encontra
                                a homenagem da Secretaria da Cultura a Arthur Azevedo
                                e Apolônia Pinto na forma de bustos assentados em colunas. Á esquerda do local encontram-se
                                a bilheteria.O salão conta com 3 grandes e largas portas na fachada frontal e 2 em cada lado.
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Stage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Plateia</Text>
                            <Text>
                                Dedicada ao conforto e visibilidade do espetáculo,
                                a plateia tem o clássico formato de ferradura, poltronas acolchoadas. Constituída de um espaço central,
                                com excelente ângulo de visão frontal,
                                e de quatro ordens de espaços verticais: frisa, camarote, balcão e galeria,
                                além de um camarote oficial.
                                <ul>
                                    <li>
                                        O Teatro tem a lotação de 750 lugares:
                                    </li>
                                    <li>
                                        - 222 lugares na Plateia;
                                    </li>
                                    <li>
                                        - 132 lugares nas Frisas;
                                    </li>
                                    <li>
                                        - 120 lugares nos Camarotes;
                                    </li>
                                    <li>
                                        - 132 lugares nos Balcões;
                                    </li>
                                    <li>
                                        - 132 lugares nas Galerias;
                                    </li>
                                    <li>
                                        - 12 lugares no Camarote Oficial.
                                    </li>
                                </ul>
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Palco</Text>
                            <Text>
                                O espaço mais importante mede, 324m² com 15m de profundidade por 12m de boca de cena,
                                dispondo de um fosso e elevador de orquestra.
                                O espaço aéreo é constituído de um sistema de 32 varas de cenários e 7 varas de luz, mais o ciclorama em madeira,
                                5 bambolinas, 10 rompimentos, 2 rotundas e 3 coxias de circulação para artistas e técnicos que formam a caixa cênica,
                                oferecendo padrões excelentes de acústica.
                                O palco oferece, ainda, o uso de 30 quarteladas para efeitos cênicos.
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Salão Nobre</Text>
                            <Text>
                                Localizado sobre o salão de entrada no nível dos camarotes e do camarote oficial do governador (a), tem suas amplas janelas voltadas para a Rua do Sol, ornadas com delicadas cortinas.

                                O salão com 230m² é decorado com mesas de época, jarros e objetos, também de época, conjuntos de sofás e poltronas de palhinha e estofados sobre tapete. As paredes são ornadas com espelhos de cristal e molduras douradas e a iluminação provém de 3 lustres de cristal. O piso em granito róseo.
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Salão Versátil</Text>
                            <Text>
                                Um amplo e bem equipado salão climatizado com 230 m², situado na parte frontal do prédio, no terceiro piso, com janelas que se abrem para Rua do Sol. Com uma parede espelhada, barras de apoio para dança, um piano para uso profissional, piso em madeira de lei, permite sua utilização para pequenas audições ao piano, de canto lírico, coro, música popular e erudita; além de aulas de dança e ainda para ensaios de teatro e música, justificando, assim, a denominação "versátil" desse espaço
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Sala de dança</Text>
                            <Text>
                                O salão de dança, com climatização exclusiva, mede 154 m² localizado no terceiro piso, no anexo do TAA. Equipado com duas paredes contendo espelhos de 3,5 m de altura, piso de madeira adequado para dança, barras fixas e móveis, iluminação especial para aulas e ensaios e sistema de som e vídeo. Dispõe, também, de uma sala mezanino para observação dos coreógrafos e dos responsáveis, com tv e vídeo. Poderá ser alugada ou permutada por um tempo limitado para cada grupo.
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Sala de coro</Text>
                            <Text>
                                A sala de ensaios do coro, com 63 m², é climatizada e localizada no terceiro piso do anexo administrativo. Dispõe de um piano de gabinete, uma parede espelhada do teto ao piso e barras móveis. Voltada para ensaios de corais e pequenos grupos teatrais e de dança. Eventualmente, poderá ser utilizada como estúdio de gravação, pois a mesma está equipada com mesa de 20 canais soundcraft. Vale ressaltar aqui que todos os materiais referentes à gravação ficarão por conta do usuário.
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Bar</Text>
                            <Text>
                                Localizado à direita do palco, dispõe de um monitor de vídeo que reproduz a ação do palco. Atende ao público antes e nos intervalos dos espetáculos, servindo refrigerantes, águas, cervejas e bebidas quentes. É vedada a entrada de bebidas alcoólicas, refrigerantes e líquidos em geral na plateia.
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Carpintaria</Text>
                            <Text>
                                Oficina de carpintaria cênica, com 90 m², localizada no piso térreo, anexo do TAA, com acesso direto para o palco, o que agilizará as montagens. Composta por quatro máquinas: uma serra de fita, uma serra circular, uma tupia e uma plaina; além de todas as ferramentas menores de apoio.
                            </Text>
                        </Col>
                    </Row>

                    <h1 style={{ textAlign: 'center' }}>Mapa de assentos</h1>
                    <img src="https://i.ibb.co/f2ysCHK/teatroMP.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                    <Divider />
                    <h1 style={{ textAlign: 'center' }}>Rider técnico</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                        <Button href={rider_medidas} style={{ marginRight: '8px', backgroundColor: 'orange', borderColor: 'orange', color: 'white' }}>Rider Técnico Medidas e Material Cênico</Button>
                        <Button href={rider_luz} style={{ marginRight: '8px', backgroundColor: 'orange', borderColor: 'orange', color: 'white' }}>Rider Técnico de Luz</Button>
                        <Button href={rider_som} style={{ backgroundColor: 'orange', borderColor: 'orange', color: 'white' }}>Rider Técnico de Som</Button>
                    </div>
                    <Divider />
                </Content>
                <Footer style={{ background: '#001529', padding: '20px', textAlign: 'center', color: '#fff' }}>
                    Teatro Arthur Azevedo  © Todos os direitos reservados 2023
                </Footer>
            </Layout>
        </div>
    );
};

export default TheatreParts;
