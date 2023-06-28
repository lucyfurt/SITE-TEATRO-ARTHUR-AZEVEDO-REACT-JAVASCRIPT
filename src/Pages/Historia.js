import React from 'react';
import { Layout, Typography, Tabs, Carousel } from 'antd';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;

function Historia() {
return (
<Layout>
<Header style={{ background: '#6d0202', padding: '20px' }}>
<Title level={3} style={{ color: '#fff', margin: 0 }}>
<a style={{ color: '#fff' }} href='/'>Teatro Arthur Azevedo</a>
</Title>
</Header>
<Content style={{ padding: '50px' }}>
<Title level={2}>História</Title>
<Tabs defaultActiveKey="1" type="card">
<TabPane tab="Fundação" key="1">
<Title level={4}>Fundação</Title>
<p>No ano de 1815, dois comerciantes portugueses desejavam ter um teatro em São Luís, no Maranhão, que fosse semelhante aos da Europa. Apesar das dificuldades enfrentadas, eles construíram o Teatro União, inaugurado em 1817. O teatro foi posteriormente renomeado para Teatro São Luiz e, mais tarde, recebeu o nome de Teatro Arthur Azevedo em homenagem a um importante teatrólogo maranhense. O local passou por crises, funcionou como cinema e foi restaurado várias vezes. Hoje, é considerado um dos principais teatros históricos do Brasil, sendo palco de diversas apresentações artísticas e eventos culturais. Sua arquitetura neoclássica e sua relevância cultural o tornam um símbolo da arte no Maranhão.</p>
<Carousel autoplay>
<div>
<img src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg" alt="Fundação" width={'100%'} />
</div>
</Carousel>
</TabPane>
<TabPane tab="Apolônia Pinto" key="2">
<Title level={4}>Apolônia Pinto</Title>
<p>Apolônia Pinto foi uma atriz maranhense que se destacou como uma das maiores intérpretes do teatro brasileiro. Nascida em 1854, ela nasceu nos bastidores do Teatro Arthur Azevedo, então chamado de Teatro União e Teatro São Luiz. Desde cedo, demonstrou talento e aos doze anos de idade já encantava plateias com sua atuação na peça "A Cigana de Paris". Ao longo de sua carreira, que durou 83 anos, Apolônia se tornou conhecida como a maior atriz do país, emocionando o público com suas interpretações das paixões humanas. É lembrada como uma artista que trabalhava por amor à arte, em uma época em que os artistas dependiam de doações para sobreviver. Seu legado é reverenciado no camarim nº 1 do Teatro Arthur Azevedo, onde placas e homenagens perpetuam sua memória.</p>
<Carousel autoplay>
<div>
<img src="https://i.ibb.co/JxKBXZC/IMG-7889.jpg" alt="Apolônia Pinto" width={'100%'} />
</div>
</Carousel>
</TabPane>
<TabPane tab="Arthur Azevedo" key="3">
<Title level={4}>Arthur Azevedo</Title>
<p>Arthur Azevedo foi um renomado comediógrafo brasileiro do século XIX, conhecido por sua habilidade como autor teatral, poeta e crítico. Nascido em São Luís, Maranhão, ele se destacou como um dos principais escritores da belle époque no Rio de Janeiro, retratando a vida cotidiana e as peculiaridades da sociedade da época. Suas peças teatrais, contos e poesias abordavam principalmente o cenário carioca, revelando as fraquezas, alegrias e medos da geração da época. Além disso, Azevedo foi um defensor da vida e promoveu uma campanha contra o suicídio. Embora algumas de suas obras originais tenham se perdido, seu legado perdura na história do teatro e da literatura brasileira.</p>
<Carousel autoplay>
<div>
<img src="https://i.ibb.co/yfP12Y1/IMG-7888.jpg" alt="Arthur Azevedo" width={'100%'} />
</div>
</Carousel>
</TabPane>
<TabPane tab="Atualidade" key="4">
<Title level={4}>Atualidade</Title>
<p>O trabalho de Arthur Azevedo foi marcado pelo estímulo ao surgimento de novos talentos e pela colaboração com outros comediógrafos, como Moreira Sampaio. Ele valorizava a solidariedade humana e dedicou-se a ajudar artistas envelhecidos e suas famílias, alimentando crianças órfãs e enteados. Embora tenham sido preservados apenas alguns de seus manuscritos, seu impacto na cultura brasileira é inegável, deixando um legado duradouro na história do teatro e na produção literária do país.</p>
<Carousel autoplay>
<div>
<img src="https://i.ibb.co/LCkKg7M/0004.png" alt="Atualidade" width={'100%'} />
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