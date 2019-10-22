import React, { Component } from 'react'

export default class jumbotron extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron card card-image " style={{ height: '100vh' ,backgroundImage: 'url(https://static.wixstatic.com/media/afaf46_d5f95f16a80a4f25a72bf4e0552db9ce~mv2.jpg/v1/fill/w_1600%2Ch_900%2Cal_c%2Cq_90/file.jpg',
            backgroundSize: 'cover'
            }}>
                    <div class="text-white text-center py-5 px-4">
                        <div>
                            <h2 class="card-title h1-responsive pt-3 mb-5 font-bold texto">Bienvenido a Lapro-Orto</h2>
                            <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                            </p>
                 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
