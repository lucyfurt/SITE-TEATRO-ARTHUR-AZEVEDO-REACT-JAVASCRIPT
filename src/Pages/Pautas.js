import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, message, Layout, Typography } from 'antd';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

const Pautas = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
        // Lógica para enviar as informações de reserva para o servidor
        // Aqui você pode fazer uma chamada de API para salvar os dados
        // ou executar qualquer outra ação necessária.

        // Exemplo de exibição de mensagem de sucesso
        message.success('Reserva de pauta realizada com sucesso!');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Form error:', errorInfo);
        // Exemplo de exibição de mensagem de erro
        message.error('Por favor, preencha todos os campos obrigatórios!');
    };

    return (
        <Layout>
            <Header style={{ background: '#6d0202', padding: '20px' }}>
                <Title level={3} style={{ color: '#fff', margin: 0 }}>
                    <a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
                </Title>
            </Header>
            <Content>
                <h1 style={{ textAlign: 'center' }}>Reserva de pautas</h1>
                <Form
                    name="reservation_form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                    <Form.Item
                        label="Nome"
                        name="name"
                        rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                            { required: true, message: 'Por favor, insira seu e-mail!' },
                            { type: 'email', message: 'Por favor, insira um e-mail válido!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Data"
                        name="date"
                        rules={[{ required: true, message: 'Por favor, insira a data!' }]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="Horário"
                        name="time"
                        rules={[{ required: true, message: 'Por favor, insira o horário!' }]}
                    >
                        <TimePicker format="HH:mm" />
                    </Form.Item>

                    <Form.Item
                        label="Detalhes"
                        name="details"
                        rules={[{ required: true, message: 'Por favor, insira os detalhes!' }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                            <Button htmlType="submit" style={{ backgroundColor: 'orange', borderColor: 'orange', color: 'white' }}>
                                Reservar
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Content>
            <Footer style={{ marginTop: '70px', background: '#6d0202', padding: '20px', textAlign: 'center', color: '#fff' }}>
                Teatro Arthur Azevedo  © Todos os direitos reservados 2023
            </Footer>
        </Layout>

    );
};

export default Pautas;
