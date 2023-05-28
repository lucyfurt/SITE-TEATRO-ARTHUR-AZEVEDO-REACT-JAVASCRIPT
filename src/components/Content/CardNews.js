import React from 'react';
import { Row, Col } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

function CardNews() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="TAA 206 anos"
                src="https://i.ibb.co/pJTrCbf/206taa.png"
              />
            }
            actions={[
              <FileTextOutlined key="read1">Leia mais</FileTextOutlined>
            ]}
          >
            <Meta
              title="TAA 206 anos"
              description="O TAA está com novidade! Para comemorar os 206 anos de história, lançamos uma logo que transmite toda importância e valor desse evento."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="example"
                src="https://i.ibb.co/Zf2MNgH/Whats-App-Image-2023-05-25-at-17-40-23.jpg"
              />
            }
            actions={[
              <FileTextOutlined key="read2">Leia mais</FileTextOutlined>
            ]}
          >
            <Meta
              title="Núcleo de Memória e Pesquisa do TAA"
              description="O Núcleo de Memória e Pesquisa do TAA possui acervo riquíssimo e crescente de obras e documentos históricos referentes às artes cênicas, além de projetos de pesquisa e extensão que são desenvolvidas em parceria com instituições públicas, como a UFMA."
            />
          </Card>
        </Col> 
        <Col xs={24} sm={12} lg={6}>
          <Card
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="example"
                src="https://i.ibb.co/y6BjDVk/Whats-App-Image-2023-05-25-at-17-40-32.jpg"
              />
            }
            actions={[
              <FileTextOutlined key="read2">Leia mais</FileTextOutlined>
            ]}
          >
            <Meta
              title="entreATO"
              description="O TAA promove a segunda edição do entreATO, cujo objetivo é promover ações artístico-pedagógicas, nas quais os participantes possam experimentar as mais diversas metodologias de criação cênica."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="Logo significado"
                src="https://i.ibb.co/y6BjDVk/Whats-App-Image-2023-05-25-at-17-40-32.jpg"
              />
            }
            actions={[
              <FileTextOutlined key="read3">Leia mais</FileTextOutlined>
            ]}
          >
            <Meta
              title="entreATO"
              description="O TAA promove a segunda edição do entreATO, cujo objetivo é promover ações artístico-pedagógicas, nas quais os participantes possam experimentar as mais diversas metodologias de criação cênica."
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default CardNews;
