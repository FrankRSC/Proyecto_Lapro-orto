import React, { Component } from 'react'

export default class jumbotron extends Component {
    componentDidMount() {
        let spans = document.querySelectorAll('.word span');
        spans.forEach((span, idx) => {
            span.addEventListener('click', (e) => {
                e.target.classList.add('active');
            });
            span.addEventListener('animationend', (e) => {
                e.target.classList.remove('active');
            });

            // Initial animation
            setTimeout(() => {
                span.classList.add('active');
            }, 750 * (idx + 1))
        });
    }

    render() {
        return (
            <div>
                <div class="jumbotron card card-image " style={{
                    height: '100vh', backgroundImage: 'url(https://static.wixstatic.com/media/afaf46_d5f95f16a80a4f25a72bf4e0552db9ce~mv2.jpg/v1/fill/w_1600%2Ch_900%2Cal_c%2Cq_90/file.jpg',
                    backgroundSize: 'cover'
                }}>
                    <div class="text-white text-center py-5 px-4">
                        <div>
                            <h2 class="card-title h1-responsive pt-3 mb-5 font-bold texto">Bienvenido a Lapro-Orto</h2>
                            <div className="word">
                                <span className="texto">L</span>
                                <span className="texto">A</span>
                                <span className="texto">P</span>
                                <span className="texto">R</span>
                                <span className="texto">O</span>
                                <span className="texto">-</span>
                                <span className="texto">O</span>
                                <span className="texto">R</span>
                                <span className="texto">T</span>
                                <span className="texto">O</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
