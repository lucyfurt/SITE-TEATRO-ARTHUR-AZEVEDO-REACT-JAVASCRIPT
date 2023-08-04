import React from 'react';
import { Layout, Divider } from 'antd';
import MenuBurguer from '../components/Header/MenuBurguer.js';
const { Content } = Layout;

const NucleoMemoria = () => {
    return (
        <Layout>
            <MenuBurguer />
            <Divider orientation="left">
                <p>Núcleo de Memória e Pesquisa</p>
            </Divider>
            <Content>
                <div>
                    <h1>
                        Em construção...
                    </h1>
                </div>
            </Content>
        </Layout>
    );
}
export default NucleoMemoria;
