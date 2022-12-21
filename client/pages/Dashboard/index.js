import React, { Component } from "react";

function DashBoard() {
   
  return (
    <body className="top">
      <header>
        <div className="container">
          <a href="#" className="logo">
            <img src="" alt="NAFT logo" />
          </a>

          <div className="header-right">
            <div className="header-nav-wrapper">
              <button className="navbar-toggle-btn" data-navbar-toggle-btn>
                <ion-icon name="menu-outline"></ion-icon>
              </button>

              <nav className="navbar" data-navbar>
                <ul className="navbar-list">
                  <li>
                    <a href="#" className="navbar-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navbar-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navbar-link">
                      Explore
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navbar-link">
                      Creators
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navbar-link">
                      Collections
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-actions">
              <input
                type="search"
                placeholder="Search"
                className="search-field"
              />

              <button className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </div>
      </header>

    {/* main */}

    <main>
    <article>
      
        {/* - #HERO */}
      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">Discover digital art sell your specific <span>NFT</span></h1>
            <p className="hero-text">
              Upload Some of your Art Items
            </p>
            <div className="btn-group">
              <button className="btn btn-primary">Explore more</button>
              <button className="btn btn-secondary">Create now</button>
            </div>
          </div>

          <figure className="hero-banner">
            <img src="https://png.pngtree.com/png-clipart/20220207/ourlarge/pngtree-bitcoin-skull-png-image_4380783.png" alt="nft art"/>
          </figure>

        </div>
      </section>
     
        {/* - #NEW PRODUCT */}
    
      <section className="new-product">
        <div className="container">
          <div className="section-header-wrapper">
            <h2 className="h2 section-title">Newest Items</h2>
            <button className="btn btn-primary">View all</button>
          </div>
          <ul className="product-list">
            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="product-banner">
                  <img src="https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-one-eye-badge-vector-illustration-png-image_1570355.jpg" alt="Blue Bird in the Ocean"/>
                  <div className="product-actions">
                    <button className="product-card-menu">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>

                    <button className="add-to-whishlist" data-whishlist-btn>
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div>

                  <button className="place-bid-btn">Place bid</button>

                </figure>

                <div className="product-content">

                  <a href="#" className="h4 product-title">Blue Bird in the Ocean</a>

                  <div className="product-meta">

                    <div className="product-author">

                      <figure className="author-img">
                        <img src="./assets/images/bidding-user.png" alt="Vikash Pathak"/>
                      </figure>

                      <div className="author-content">
                        <h4 className="h5 author-title">Vikash Pathak</h4>

                        <a href="#" className="author-username">@Pathak</a>
                      </div>

                    </div>

                    <div className="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p className="label">Current Bid</p>
                    </div>

                  </div>

                  <div className="product-footer">
                    <p className="total-bid">3+ Place Bid.</p>

                    <button className="tag">New</button>
                  </div>

                </div>

              </div>

            </li>

            <li className="product-item">

              <div className="product-card" tabindex="0">

                <figure className="product-banner">

                  <img src="https://png.pngtree.com/png-clipart/20210413/ourmid/pngtree-linear-style-mysterious-eye-tattoo-png-image_3212934.jpg" alt="Blue Bird in the Ocean"/>

                  <div className="product-actions">
                    <button className="product-card-menu">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>

                    <button className="add-to-whishlist" data-whishlist-btn>
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div>

                  <button className="place-bid-btn">Place bid</button>

                </figure>

                <div className="product-content">

                  <a href="#" className="h4 product-title">Blue Bird in the Ocean</a>

                  <div className="product-meta">

                    <div className="product-author">

                      <figure className="author-img">
                        <img src="./assets/images/bidding-user.png" alt="Vikash Pathak"/>
                      </figure>

                      <div className="author-content">
                        <h4 className="h5 author-title">Vikash Pathak</h4>

                        <a href="#" className="author-username">@Pathak</a>
                      </div>

                    </div>

                    <div className="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p className="label">Current Bid</p>
                    </div>

                  </div>

                  <div className="product-footer">
                    <p className="total-bid">12+ Place Bid.</p>

                    <button className="tag">New</button>
                  </div>

                </div>

              </div>

            </li>

            <li className="product-item">

              <div className="product-card" tabindex="0">

                <figure className="product-banner">

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53uSNSKvq5J5LSJmn-4KVeoE2ZHSHY-fBVKQf0pi4I9Y4oY6tcSeqB7Ow1tHuwXXKe3Y&usqp=CAU" alt="Blue Bird in the Ocean"/>

                  <div className="product-actions">
                    <button className="product-card-menu">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>

                    <button className="add-to-whishlist" data-whishlist-btn>
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div>

                  <button className="place-bid-btn">Place bid</button>

                </figure>

                <div className="product-content">

                  <a href="#" className="h4 product-title">Blue Bird in the Ocean</a>

                  <div className="product-meta">

                    <div className="product-author">

                      <figure className="author-img">
                        <img src="./assets/images/bidding-user.png" alt="Vikash Pathak"/>
                      </figure>

                      <div className="author-content">
                        <h4 className="h5 author-title">Vikash Pathak</h4>

                        <a href="#" className="author-username">@Pathak</a>
                      </div>

                    </div>

                    <div className="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p className="label">Current Bid</p>
                    </div>

                  </div>

                  <div className="product-footer">
                    <p className="total-bid">12+ Place Bid.</p>

                    <button className="tag">New</button>
                  </div>

                </div>

              </div>

            </li>

          </ul>

        </div>
      </section>
    
        {/* - #ABOUT */}
    
      <section className="about">
        <div className="container">

          <h2 className="h2 about-title">Create and sell your NFTs</h2>

          <ol className="about-list">

            <li className="about-item">
              <div className="about-card">

                <div className="card-number">01</div>

                <div className="card-icon">
                  <img src="./assets/images/single-create-sell-item-1.png" alt="wallet icon"/>
                </div>

                <h3 className="h3 about-card-title">Set up Your Wallet</h3>

                <p className="about-card-text">
                  customise later
                </p>

              </div>
            </li>

            <li className="about-item">
              <div className="about-card">

                <div className="card-number">02</div>

                <div className="card-icon">
                  <img src=" " alt="collection icon"/>
                </div>

                <h3 className="h3 about-card-title">Create Your Collection</h3>

                <p className="about-card-text">
                  customise later
                </p>

              </div>
            </li>

            <li className="about-item">
              <div className="about-card">

                <div className="card-number">03</div>

                <div className="card-icon">
                  <img src="./assets/images/single-create-sell-item-3.png" alt="folder icon"/>
                </div>

                <h3 className="h3 about-card-title">Add Your NFT's</h3>

                <p className="about-card-text">
                  customise later
                </p>

              </div>
            </li>

            <li className="about-item">
              <div className="about-card">

                <div className="card-number">04</div>

                <div className="card-icon">
                  <img src="./assets/images/single-create-sell-item-4.png" alt="diamond icon"/>
                </div>

                <h3 className="h3 about-card-title">Sell Your NFT's</h3>

                <p className="about-card-text">
                  customise later
                </p>

              </div>
            </li>

          </ol>

        </div>
      </section>
     
        {/* - #EXPLORE PRODUCT */}
    
      <section className="explore-product">
        <div className="container">

          <div className="section-header-wrapper">

            <h2 className="h2 section-title">Explore Product</h2>

            <button className="btn btn-primary">Explore</button>

          </div>

          <ul className="product-list">

            <li className="product-item">

              <div className="product-card" tabindex="0">

                <figure className="product-banner">

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWAwRJ6fVYEWF1al73uu87hmakoKyiA0XXZQ71ntZRC3DfkzP-K62M002iD8-xMywkW8&usqp=CAU" alt="Blue Bird in the Ocean"/>

                  <div className="product-actions">
                    <button className="product-card-menu">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>

                    <button className="add-to-whishlist" data-whishlist-btn>
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div>

                  <button className="place-bid-btn">Place bid</button>

                </figure>

                <div className="product-content">

                  <a href="#" className="h4 product-title">Blue Bird in the Ocean</a>

                  <div className="product-meta">

                    <div className="product-author">

                      <figure className="author-img">
                        <img src="./assets/images/bidding-user.png" alt="Vikash Pathak" />
                      </figure>

                      <div className="author-content">
                        <h4 className="h5 author-title">Vikash Pathak</h4>

                        <a href="#" className="author-username">@Pathak</a>
                      </div>

                    </div>

                    <div className="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p className="label">Current Bid</p>
                    </div>

                  </div>

                  <div className="product-footer">
                    <p className="total-bid">12+ Place Bid.</p>

                    <button className="tag">New</button>
                  </div>

                </div>

              </div>

            </li>

          

            <li className="product-item">

              <div className="product-card" tabindex="0">

                <figure className="product-banner">

                  <img src="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-blue-watercolor-whale-image_2246438.jpg" alt="Blue Bird in the Ocean" />

                  <div className="product-actions">
                    <button className="product-card-menu">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>

                    <button className="add-to-whishlist" data-whishlist-btn>
                      <ion-icon name="heart"></ion-icon>
                    </button>
                  </div>

                  <button className="place-bid-btn">Place bid</button>

                </figure>

                <div className="product-content">

                  <a href="#" className="h4 product-title">Blue Bird in the Ocean</a>

                  <div className="product-meta">

                    <div className="product-author">

                      <figure className="author-img">
                        <img src="./assets/images/bidding-user.png" alt="Vikash Pathak" />
                      </figure>

                      <div className="author-content">
                        <h4 className="h5 author-title">Vikash Pathak</h4>

                        <a href="#" className="author-username">@Pathak</a>
                      </div>

                    </div>

                    <div className="product-price">
                      <data value="0.568">0.568ETH</data>

                      <p className="label">Current Bid</p>
                    </div>

                  </div>

                  <div className="product-footer">
                    <p className="total-bid">12+ Place Bid.</p>

                    <button className="tag">New</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </section>

      {/* 
         #TOP SELLER
       */}

      <section className="top-seller">
        <div className="container">

          <h2 className="h2 top-seller-title">
            Top seller in <span>1</span> day
            <ion-icon name="chevron-down"></ion-icon>
          </h2>

          <ol className="top-seller-list">


            <li className="top-seller-item">
              <a href="#" className="top-seller-card">

                <div className="card-number">12</div>

                <figure className="card-avatar">
                  <img src="./assets/images/seller-04.png" alt="Nikola tesla"/>
                </figure>

                <div className="card-content">
                  <h3 className="h5 card-title">Nikola tesla</h3>

                  <data value="2500000">$2500,000</data>
                </div>

              </a>
            </li>

          </ol>

        </div>
      </section>

    </article>

  </main>

  <footer>
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
          
            <a href="#" class="logo">
            <img src="./assets/images/logo.png" alt="NAFT logo"/>
            </a>
            
          <h3 className="h4 social-title">Join the community</h3>

          <ul className="social-list">

            <li>
              <a href="https://github.com/chotapathak" className="social-link">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

          </ul>

        </div>
        <div className="footer-link-box">
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          &copy; 2022 <a href="https://github.com/chotapathak">@PAthak</a> all rights reserved
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>
    </div>
  </footer>
  <script src="./assets/js/script.js"></script>

    </body>
  );
}

export default DashBoard;
