import React from 'react';
import { Card, Button } from 'antd';

import { useState } from 'react';


function FullEvento() {
    const [size, setSize] = useState('large');

    return (
        <>
            <Card
                style={{ width: '90%', marginTop: 18 }}
                title={<span className="card-title">Italo Sena 26/05/2023</span>}
                extra={<Button className="btn text-center" type="primary" shape='primary'
                    href='https://www.ingressodigital.com/'
                    size={size}
                    target='_blank'
                >
                    Comprar
                </Button>
                }
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis at nulla pretium,
                    non euismod mi mollis. Etiam aliquet ultrices sapien. Donec erat sapien, tempor sagittis laoreet
                    efficitur, consequat a turpis. Nunc vel sem sit amet purus ullamcorper dapibus ac at mauris.
                    Vestibulum consequat vestibulum quam, vel fermentum mi convallis a. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. Nullam eget lacus arcu.
                    Suspendisse orci odio, mollis mollis elit nec, imperdiet porttitor erat.

                </p>
            </Card>
            <Card
                style={{ width: '90%', marginTop: 18 }}
                title={<span className="card-title">Atualização 26/05/2023</span>}
                extra={<Button className="btn text-center" type="primary" shape='primary'
                    href='https://www.ingressodigital.com/'
                    size={size}
                    target='_blank'
                >
                    Comprar
                </Button>
                }
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis at nulla pretium,
                    non euismod mi mollis. Etiam aliquet ultrices sapien. Donec erat sapien, tempor sagittis laoreet
                    efficitur, consequat a turpis. Nunc vel sem sit amet purus ullamcorper dapibus ac at mauris.
                    Vestibulum consequat vestibulum quam, vel fermentum mi convallis a. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. Nullam eget lacus arcu.
                    Suspendisse orci odio, mollis mollis elit nec, imperdiet porttitor erat.

                </p>
            </Card>

            <Button className="button text-center" type="primary" shape="primary"
                size={size} href='/eventos' target='_blank'>
                Ver todos os eventos
            </Button>

        </>
    );
}
export default FullEvento;