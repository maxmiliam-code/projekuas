import React from 'react';
import { Jumbotron,  } from 'reactstrap';


function HomeComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Selamat Data,Admin !</h1>
                <p className="lead">Semoga Harimu Menyenangkan</p>
                <hr className="my-2" />
                <p>Bekerjalah dengan kerja keras dan Tanggung Jawab</p>
            </Jumbotron>
        </div>
    );
};

export default HomeComp;