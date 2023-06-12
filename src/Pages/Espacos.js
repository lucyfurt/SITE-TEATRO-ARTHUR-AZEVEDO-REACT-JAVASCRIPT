import React from 'react';
import { Row, Col, Typography, Layout } from 'antd';

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
                    <Title level={3}>Espaços</Title>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Auditorium" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Foyer</Text>
                            <Text>
                                Este grande salão tem a função de receber e acomodar o público nos momentos que antecedem
                                o início do espetáculo, oferecendo 4 bancos acolchoados de grandes dimensões para o conforto
                                do público e é iluminado por 3 lustres de cristal.

                                O ambiente é decorado por 6 grandes espelhos de cristal com moldura em relevo dourado e
                                2 grandes jarros com plantas ornamentais. O piso todo em granito com desenhos decorativos.

                                É neste salão que se encontra a homenagem da Secretaria da Cultura a Arthur Azevedo
                                e Apolônia Pinto na forma de bustos assentados em colunas. Á esquerda do local encontram-se
                                a bilheteria e uma lojinha de souvenirs. Para segurança do público e facilitar o fluxo
                                no momento da saída,
                                o salão conta com 3 grandes e largas portas na fachada frontal e 2 em cada lado.
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Stage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Plateia</Text>
                            <Text>
                                Dedicada ao conforto e visibilidade do espetáculo, a plateia tem o clássico formato de ferradura, poltronas acolchoadas, cadeiras de palhinha e lustre central com mobilidade comandada por equipamentos eletrônicos.

                                Constituída de um espaço central, com excelente ângulo de visão frontal, e de quatro ordens de espaços verticais: frisa, camarote, balcão e galeria, além de um camarote governamental.

                                O Teatro tem a lotação de 750 lugares:

                                - 222 lugares na Plateia;

                                - 132 lugares nas Frisas;

                                - 120 lugares nos Camarotes;

                                - 132 lugares nos Balcões;

                                - 132 lugares nas Galerias;

                                - 12 lugares no Camarote Oficial.
                            </Text>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Backstage" style={{ width: '100%', height: 'auto' }} />
                            <Text strong>Palco</Text>
                            <Text>
                                O espaço mais importante mede, 324m² com 15m de profundidade por 12m de boca de cena, dispondo de um fosso e elevador de orquestra. O espaço aéreo é constituído de um sistema de 32 varas de cenários e 7 varas de luz, mais o ciclorama em madeira, 5 bambolinas, 10 rompimentos, 2 rotundas e 3 coxias de circulação para artistas e técnicos que formam a caixa cênica, oferecendo padrões excelentes de acústica.

                                O palco oferece, ainda, o uso de 30 quarteladas para efeitos cênicos. O sistema de iluminação é composto de 8 projetores "Intellabean" de movimento programado, 4 canhões "laser", 2 canhões seguidores, 240 refletores distribuídos em 7 varas de iluminação, mais um conjunto de ribalta constituído de 12 peças.

                                Uma mesa de comando de iluminação cênica contendo 24 canais. O sistema é todo informatizado e a sua potência é de 300 mil watts distribuídos em 240 circuitos. Como parte dos recursos cênicos, o TAA possui também dois projetores de vídeo, telões e máquinas de fumaça e neblina.

                                Sobre o palco, um grande piano de calda inteira marca Steinway Nova York.

                                O arco da boca de cena tem 7 metros de altura e 12 de largura, fechando com uma suntuosa cortina de veludo bordeax, com abertura no estilo à francesa ou “imperial” com dois reguladores verticais e um horizontal.

                                O sistema de som é constituído por 20 caixas acústicas compactas, de alta potência ocultas na arquitetura interligadas a uma mesa de 24 canais instalada na cabine de som, onde também existem processadores de efeito, equalizadores de DAT que permitem uma excelente qualidade sonora. O Teatro possui, ainda, 18 microfones de pé.

                                O sistema de combate a incêndio possui uma cortina d'água, instalada na boca de cena, que é acionada automaticamente, em caso de incêndio, jorrando uma média de 300 metros cúbicos de água por minuto e todo o palco, fosso e camarins estão protegidos por este sistema. Os outros espaços, dedicados à plateia estão protegidos por sistema tradicional de combate a incêndios. Como medida de prevenção contra a propagação de fogo, as paredes do palco e oficina estão revestidas com "climatex" (material acústico à prova de fogo).
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

                </Content>
                <Footer style={{ background: '#001529', padding: '20px', textAlign: 'center', color: '#fff' }}>
                    Teatro Arthur Azevedo  © Todos os direitos reservados 2023
                </Footer>
            </Layout>
        </div>
    );
};

export default TheatreParts;
