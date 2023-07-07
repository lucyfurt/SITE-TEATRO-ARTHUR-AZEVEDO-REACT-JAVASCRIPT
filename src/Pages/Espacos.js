import React from 'react';
import { Layout, Typography, Tabs, Carousel, Divider, Button, Form, Input, DatePicker } from 'antd';
import rider_medidas from '../assets/Rider_Tecnico_-_Medidas_e_material_cenico.pdf'
import rider_luz from '../assets/Rider_Tecnico_de_Luz.pdf'
import rider_som from '../assets/Rider_Tecnico_de_Som.pdf'
import { useForm } from '@formspree/react';
const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;
function Historia() {
    const [state, handleSubmit] = useForm("moqoaddy");

    if (state.succeeded) {
      return <p>Formulário enviado com sucesso!</p>;
    }
    return (
        <Layout>
            <Header style={{ background: '#6d0202', padding: '20px' }}>
                <Title level={3} style={{ color: '#fff', margin: 0 }}>
                    <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
                </Title>
            </Header>
            <Content style={{ padding: '50px' }}>
            <Title level={2}>Pedido de pautas</Title>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <Button style={{ marginRight: '8px', backgroundColor: '#67A4FB', borderColor: '#67A4FB', color: 'white' }}>Edital</Button>
          <Button style={{ marginRight: '8px', backgroundColor: '#67A4FB', borderColor: '#67A4FB', color: 'white' }}>Normas </Button>
        </div>
        <Divider />
        <h1>Formulário de inscrição:</h1>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Item label="Nome" name="nome" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Celular com DDD" name="celular" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Data início" name="data_inicio" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Data fim" name="data_fim" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Nome do evento" name="nome_evento" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Ficha técnica e sinopse" name="ficha_sinopse" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Empresa/Produtora" name="empresa" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button className="submit-button" type="primary" htmlType="submit" disabled={state.submitting}>
              Enviar
            </Button>
          </Form.Item>
          {state.errors.length > 0 && (
            <div className="error-message">
              {state.errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </Form>
                <Title level={2}>Informações Técnicas</Title>
                <Divider />
                <h1 style={{ textAlign: 'center' }}>Rider Técnico</h1>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                    <Button href={rider_medidas} style={{ marginRight: '8px', backgroundColor: '#67A4FB', borderColor: '#67A4FB', color: 'white' }}>Rider Técnico Medidas e Material Cênico</Button>
                    <Button href={rider_luz} style={{ marginRight: '8px', backgroundColor: '#67A4FB', borderColor: '#67A4FB', color: 'white' }}>Rider Técnico de Luz</Button>
                    <Button href={rider_som} style={{ backgroundColor: '#67A4FB', borderColor: '#67A4FB', color: 'white' }}>Rider Técnico de Som</Button>
                </div>
                <Divider />
                <Title level={2}>Espaços</Title>
                <Tabs defaultActiveKey="1" type="card">
                    <TabPane tab="Foyer" key="1" style={{ fontSize: '24px' }}>
                        <Title level={4}>Foyer</Title>
                        <p> Este grande salão tem a função de receber e acomodar o público nos momentos que antecedem
                            o início do espetáculo. É neste salão que se encontra
                            a homenagem da Secretaria da Cultura a Arthur Azevedo
                            e Apolônia Pinto na forma de bustos assentados em colunas. Á esquerda do local encontram-se
                            a bilheteria.O salão conta com 3 grandes e largas portas na fachada frontal e 2 em cada lado.</p>
                        <Carousel autoplay>
                            <div>
                                <img src="https://i.ibb.co/RDnMwpk/Foyer-2.jpg" alt="Fundação" width={'100%'} />
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="Plateia" key="2" style={{ fontSize: '24px' }}>
                        <Title level={4}>Plateia</Title>
                        <p> Dedicada ao conforto e visibilidade do espetáculo,
                            a plateia tem o clássico formato de ferradura, poltronas acolchoadas. Constituída de um espaço central,
                            com excelente ângulo de visão frontal,
                            e de quatro ordens de espaços verticais: frisa, camarote, balcão e galeria,
                            além de um camarote oficial.</p>
                        <Carousel autoplay>
                            <div>
                                <img src="https://i.ibb.co/LCkKg7M/0004.png" alt="Apolônia Pinto" width={'100%'} />
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="Palco" key="3" style={{ fontSize: '24px' }}>
                        <Title level={4}>Palco</Title>
                        <p> O espaço mais importante mede, 324m² com 15m de profundidade por 12m de boca de cena,
                            dispondo de um fosso e elevador de orquestra.
                            O espaço aéreo é constituído de um sistema de 32 varas de cenários e 7 varas de luz, mais o ciclorama em madeira,
                            5 bambolinas, 10 rompimentos, 2 rotundas e 3 coxias de circulação para artistas e técnicos que formam a caixa cênica,
                            oferecendo padrões excelentes de acústica.
                            O palco oferece, ainda, o uso de 30 quarteladas para efeitos cênicos.</p>
                        <Carousel autoplay>
                            <div>
                                <img src="https://i.ibb.co/yqz8DqH/0001.png" alt="Arthur Azevedo" width={'100%'} />
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="Salão Nobre" key="4" style={{ fontSize: '24px' }}>
                        <Title level={4}>Salão Nobre</Title>
                        <p> Localizado sobre o salão de entrada no nível dos camarotes e do camarote oficial do governador (a), tem suas amplas janelas voltadas para a Rua do Sol, ornadas com delicadas cortinas.

                            O salão com 230m² é decorado com mesas de época, jarros e objetos, também de época, conjuntos de sofás e poltronas de palhinha e estofados sobre tapete. As paredes são ornadas com espelhos de cristal e molduras douradas e a iluminação provém de 3 lustres de cristal. O piso em granito róseo.</p>
                        <Carousel autoplay>
                            <div>
                                <img src="https://i.ibb.co/XLHVTWB/0005.png" alt="Atualidade" width={'100%'} />
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="Salão Versátil" key="5" style={{ fontSize: '24px' }}>
                        <Title level={4}>Salão Versátil</Title>
                        <p>Um amplo e bem equipado salão climatizado com 230 m², situado na parte frontal do prédio, no terceiro piso, com janelas que se abrem para Rua do Sol. Com uma parede espelhada, barras de apoio para dança, um piano para uso profissional, piso em madeira de lei, permite sua utilização para pequenas audições ao piano, de canto lírico, coro, música popular e erudita; além de aulas de dança e ainda para ensaios de teatro e música, justificando, assim, a denominação "versátil" desse espaço
                        </p>
                        <Carousel autoplay>
                            <div>
                                <img src="https://i.ibb.co/hWR2DkR/37-Sal-o-Vers-til.jpg" alt="Atualidade" width={'100%'} />
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="Sala de Dança" key="6" style={{ fontSize: '24px' }}>
                        <Title level={4}>Sala de Dança</Title>
                        <p>O salão de dança, com climatização exclusiva, mede 154 m² localizado no terceiro piso, no anexo do TAA. Equipado com duas paredes contendo espelhos de 3,5 m de altura, piso de madeira adequado para dança, barras fixas e móveis, iluminação especial para aulas e ensaios e sistema de som e vídeo. Dispõe, também, de uma sala mezanino para observação dos coreógrafos e dos responsáveis, com tv e vídeo. Poderá ser alugada ou permutada por um tempo limitado para cada grupo.

                        </p>
                        <Carousel autoplay>
                            <div>
                                <img src="https://i.ibb.co/2SFmgzf/41-Sal-o-de-Dan-a.jpg" alt="Atualidade" width={'100%'} />
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="Sala de Coro" key="7" style={{ fontSize: '24px' }}>
                        <Title level={4}>Sala de Coro</Title>
                        <p>
                            A sala de ensaios do coro, com 63 m², é climatizada e localizada no terceiro piso do anexo administrativo. Dispõe de um piano de gabinete, uma parede espelhada do teto ao piso e barras móveis. Voltada para ensaios de corais e pequenos grupos teatrais e de dança. Eventualmente, poderá ser utilizada como estúdio de gravação, pois a mesma está equipada com mesa de 20 canais soundcraft. Vale ressaltar aqui que todos os materiais referentes à gravação ficarão por conta do usuário.

                        </p>
                        <Carousel autoplay>
                            <div>
                                <img src="https://i.ibb.co/9nRD3z8/Sala-de-Coro.jpg" alt="Atualidade" width={'100%'} />
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="Bar" key="8" style={{ fontSize: '24px' }}>
                        <Title level={4}>Bar</Title>
                        <p>
                            Localizado à direita do palco, dispõe de um monitor de vídeo que reproduz a ação do palco. Atende ao público antes e nos intervalos dos espetáculos, servindo refrigerantes, águas, cervejas e bebidas quentes. É vedada a entrada de bebidas alcoólicas, refrigerantes e líquidos em geral na plateia.

                        </p>
                        <Carousel autoplay>
                            <div>
                                <img src="https://i.ibb.co/8dmxDK8/Bar-1.jpg" alt="Atualidade" width={'100%'} />
                            </div>
                        </Carousel>
                    </TabPane>
                </Tabs>
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