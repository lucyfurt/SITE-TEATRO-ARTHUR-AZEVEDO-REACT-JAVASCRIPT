import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, Divider } from 'antd';
import MenuBurguer from '../components/Header/MenuBurguer.js';
import FooterComponent from '../components/Footer/FooterComponent';
import '../Pages/css/historia.css';

const { Content } = Layout;

function Historia() {
    return (
        <>
            <MenuBurguer />
            <Layout>
                <Divider orientation="left">
                    <p>Visite o Teatro Arthur Azevedo</p>
                </Divider>
                <Content className="Content">
                    <div className="image-container">
                        <img
                            className="image"
                            src="https://i.ibb.co/8Ppnk0Q/Teatro-Arthur-Azevedo.jpg"
                            alt="taa"
                        />
                        <div className="text">
                            <p>
                                O Teatro Arthur Azevedo
                            </p>
                            <p>
                                O teatro foi construído entre os anos de 1816 e 1817, idealizado pelo então governador Bernardo de Sousa Franco, que buscava proporcionar à população um espaço dedicado às artes cênicas e à cultura em gerale, sendo inicialmente chamado de Theatro União.

                                Ao longo do tempo, o teatro passou por diversas reformas e modificações para atender às demandas e necessidades da época. No ano de 1884, o teatro foi reinaugurado e recebeu o nome de Theatro Arthur Azevedo em homenagem ao dramaturgo e jornalista maranhense Arthur Azevedo, uma das figuras principais da literatura e do teatro brasileiro naquele período.     </p>
                            <iframe width="660" height="415" src="https://www.youtube.com/embed/-lxloupKM4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>
                                Quem foi Arthur Azevedo?
                            </p>
                            <p>
                                Arthur Azevedo nasceu em uma família de tradição artística e literária, onde seu pai, Sotero dos Reis Azevedo, era poeta e dramaturgo, e sua mãe, Flora Amélia Gomes de Azevedo, também possuía habilidades artísticas.

                                Desde cedo, Arthur Azevedo demonstrou interesse pela literatura e teatro, participando de peças teatrais amadoras em sua cidade natal. Em 1877, aos 22 anos, Arthur Azevedo mudou-se para o Rio de Janeiro, então capital do Brasil, onde deu continuidade à sua carreira no teatro e jornalismo. Ele colaborou com diversos jornais e revistas, tornando-se conhecido por suas crônicas e críticas teatrais. O dramaturgo também se destacou como autor de peças teatrais, comédias e sainetes, sendo um dos principais representantes do teatro de fantasias do Brasil. Suas obras retratavam a sociedade brasileira da época, satirizando comportamentos e questões sociais.
                            </p>
                        </div>
                    </div>
                </Content>
                <FooterComponent />
            </Layout>
        </>
    );
}
export default Historia;