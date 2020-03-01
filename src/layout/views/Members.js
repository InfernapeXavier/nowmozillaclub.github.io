import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Members extends Component {
  constructor() {
    super();
    this.state = {
      members: [
        { name: 'Rohit Choudhari', role: 'Club Captain', image: 'Rohit Choudhari.png', github: 'InfernapeXavier' },
        { name: 'Akash Agarwal', role: 'Build Lead', image: 'Akash Agarwal.png', github: 'akash20995' },
        { name: 'Jay Alaknure', role: 'Advocate Lead', image: 'Jay Alaknure.png', github: 'pacondeved' },
        { name: 'Nishant Deshpande', role: 'Teach Lead', image: 'Nishant Deshpande.png', github: 'nishantde' },
        { name: 'Mihir Desai', role: 'Design Lead', image: 'Mihir Desai.png', github: 'mihir3k' },
      ]
    }
  }

  componentWillMount() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <div className="Members">
        <Helmet>
          <title>NOW - Members</title>
        </Helmet>
        <section className="hero is-fullheight-with-navbar is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">Oh hey! You found us <span role="img" aria-label="Smile">😊</span> </h1>
              <h3 className="title is-3 is-spaced">We were there at the beginning</h3>
              <p className="subtitle is-5">Dedicated to <b>Open Source</b> and the <b>Open Web</b> culture.</p>
            </div>
          </div>
        </section>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-multiline">
                {this.state.members.map(function (member) {
                  return (
                    <div className="column is-one-fifth">
                      {/* <figure className="image">
                        <img className="member-image" src={"images/members/" + member.image} alt={member.name} style={{ border: '2px solid white', borderRadius: '10px' }} />
                      </figure>
                      <div className="is-size-5 has-text-centered has-text-weight-bold ">{member.name}</div>
                      <div className="is-size-6 has-text-centered">{member.role}</div>
                      <div className="is-size-6 has-text-centered">
                        <a href={"https://github.com/" + member.github} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github" /> <span style={{ borderBottom: '1px dashed grey' }}>{member.github}</span>
                        </a>
                      </div> */}
                      <div class="card">
                        <div class="card-image">
                          <figure class="image">
                            <img className="member-image" src={"images/members/" + member.image} alt={member.name} style={{ overflow: 'hidden' }} />
                          </figure>
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-left">
                              <figure class="image is-48x48">
                                <img src={"images/logos/GitHub-Mark-120px-plus.png"} alt="Icon" />
                              </figure>
                            </div>
                            <div class="media-content">
                              <p class="title is-6 has-text-black">{member.name}</p>
                              <p class="subtitle is-6 has-text-black">
                                <a href={"https://github.com/" + member.github} target="_blank" rel="noopener noreferrer">
                                  {member.github}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Members;
