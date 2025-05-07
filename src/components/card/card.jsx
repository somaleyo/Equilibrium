import './card.css'

export default function Card() {
    return (
        <>
            <section id='card'>
                <div className='cards-container'>
                    <div className="card">
                        <div className="img-container">
                        <img src="../../src/assets/images/image-equilibrium.jpg" className='card-img' alt="" />
                            <div className='overlay'>
                                <img src="../../src/assets/images/icon-view.svg" className='icon1' alt="" />
                                </div>
                            </div>
                            <div className="card-body">
                        <h5>Equilibrium #3429</h5>
                        <p>Our Equilibrium collection promotes balance and calm.</p>
                        <div className='info'>
                            <p><span className='cyan'><img src="../../src/assets/images/icon-ethereum.svg" className='icon' alt="" />0.041ETH</span></p>
                            <p><span><img src="../../src/assets/images/icon-clock .svg" className='icon' alt="" />3 days left</span></p>
                        </div>
                        <hr />
                        <div className="profile">
                            <img src="../../src/assets/images/image-avatar.png" alt="" className="pfp" />
                            <p>Creation of <span className='autor'>Jules Wyvern</span></p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}