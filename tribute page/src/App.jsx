import React from "react";

const App = () => {
  return (
    <>
      <main className="hero">
        <div className="left">
          <div className="detail">
            <div className="title">A Great Hero</div>
            <div className="name">HEATH LEDGER</div>
            <h4>
              <span>&#8212;</span>&nbsp;1979 - 2008
            </h4>
          </div>
          <p className="quote">
            <sup className="start-quote">&#x275D;</sup>
            Whwn I die, my money's not gonna come with me. My movies will livw
            on for people to judge what I was as a person. I just want to stay
            curious.
            <sup className="end-quote">&#x275E;</sup>
          </p>
          <div className="btns">
            <a href="#biography">
              <button className="min-bio">Mini Biography</button>
            </a>
            <a href="#works">
              <button className="works">Works</button>
            </a>
          </div>
        </div>
      </main>
      <main className="biography">
        <div className="bio-container">
          <div className="image">
            <img
              src="https://pbs.twimg.com/media/C7xKMvhXkAAIaAv.jpg"
              alt="heath ledger"
            />
          </div>
          <div className="bio">
            <h2 id="biography">Biography</h2>
            <p>
              Heath Andrew Ledger (4 April 1979 – 22 January 2008) was an
              Australian actor and music video director. After playing roles in
              several Australian television and film productions during the
              1990s, Ledger moved to the United States in 1998 to develop his
              film career further. His work consisted of twenty films, including
              10 Things I Hate About You (1999), The Patriot (2000), A Knight's
              Tale (2001), Monster's Ball (2001), Lords of Dogtown (2005),
              Brokeback Mountain (2005), Candy (2006), I'm Not There (2007), The
              Dark Knight (2008), and The Imaginarium of Doctor Parnassus
              (2009), the latter two being posthumous releases. He also produced
              and directed music videos and aspired to be a film director.
            </p>
            <p style={{ marginTop: "0.25em" }}>
              Ledger died in January 2008 as a result of an accidental overdose
              of medications. A few months before his death, Ledger had finished
              filming his role as the Joker in The Dark Knight, with his
              performance earning him universal acclaim and popularity.
            </p>
          </div>
        </div>
      </main>
      <main className="cinemas-work">
        <div className="cinema-work-container">
          <h2 id="works">Works</h2>
          <div className="cinema-grid">
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://pbs.twimg.com/media/FtEb113WcAEzOKj?format=png&name=small"
                  alt=""
                />
              </div>
              <span>The Dark Knight Rises</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://pbs.twimg.com/media/FtkphSAWwAEDxuU?format=jpg&name=small"
                  alt=""
                />
              </div>
              <span>A knight's Tale</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://pbs.twimg.com/media/FtEWLurWcAAgFLU?format=jpg&name=small"
                  alt=""
                />
              </div>
              <span>10 Things I Hate About You</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://flxt.tmsimg.com/assets/p90693_v_v13_am.jpg"
                  alt=""
                />
              </div>
              <span>Brokeback Mountain</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://resizing.flixster.com/YSTwxdyrZof3AK_HEvM2Cg8SH_A=/206x305/v2/https://flxt.tmsimg.com/assets/p25478_p_v8_aa.jpg"
                  alt=""
                />
              </div>
              <span>Two Hands</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://resizing.flixster.com/LDm2h3pmaJmZXYdFFAFFaiThsS0=/206x305/v2/https://flxt.tmsimg.com/assets/p7809757_p_v7_ah.jpg"
                  alt=""
                />
              </div>
              <span>The Imaginarium of Doctor Parnassus</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://resizing.flixster.com/wNpTc8cz3XfHgdEhuvOtdnSz14w=/206x305/v2/https://flxt.tmsimg.com/assets/p89991_p_v8_ax.jpg"
                  alt=""
                />
              </div>
              <span>Brother's Grimm</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://resizing.flixster.com/zVJd55JTug9w-YbDKxGee02A_58=/206x305/v2/https://flxt.tmsimg.com/assets/p171925_p_v8_ad.jpg"
                  alt=""
                />
              </div>
              <span>I'm Not There</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://resizing.flixster.com/algj-1uPYAbFZzm4E5OaECCkoHA=/206x305/v2/https://flxt.tmsimg.com/assets/p28827_p_v8_ai.jpg"
                  alt=""
                />
              </div>
              <span>Monster's Ball</span>
            </div>
            <div className="cine-images">
              <div className="img">
                <img
                  src="https://www.joblo.com/wp-content/uploads/2018/10/2006-candy-2-1.jpg"
                  alt=""
                />
              </div>
              <span>Candy</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
        Made with <span>&#x2764;</span> by Pritam
      </footer>
    </>
  );
};

export default App;
