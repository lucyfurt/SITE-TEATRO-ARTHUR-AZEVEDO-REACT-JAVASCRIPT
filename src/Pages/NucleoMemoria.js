import React from 'react';
import { Layout, Divider } from 'antd';
import MenuBurguer from '../components/Header/MenuBurguer.js';
const { Content } = Layout;

const NucleoMemoria = () => {
    return (
        <Layout>
            <MenuBurguer />
            <Divider orientation="left">
                <h1>Núcleo de Memória e Pesquisa</h1>
            </Divider>
            <Content>
                <div>
                    <p>
                        Em construção...
                    </p>
                </div>
            </Content>
        </Layout>
    );
}
export default NucleoMemoria;
