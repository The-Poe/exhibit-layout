import React from "react";
import "./Product.scss";
import picShow1 from "../../images/show1.jpg";
import picShow2 from "../../images/show2.jpg";
import picShow3 from "../../images/show3.jpg";
import { NavBar } from "../navBar/NavBar";

export function Product() {
  return (
    <>
      <NavBar />
      <section>
        <div className="product bgPurple">
          <a className="textWhite" href="/detail">
            <div className="productInfo jcfs">
              <div className="productContent ">
                <div className="productTitle">2020 台味設計展</div>
                <div className="productDesc">
                  一年一度的台味設計展由經濟部工業局舉辦、台灣創意設計中心執行，每年，針對在地文化、及產業發展特色，運用設計思考全是新時代的意涵，並以展覽呈現在地設計。
                </div>
              </div>
              <img className="productPic" src={picShow1} alt="product" />
              <div className="productDate">
                <span className="dateSpan">01</span>
                <span className="dateSpan">JUN</span>
                <span className="sepBar">|</span>
                <span className="dateSpan">31</span>
                <span className="dateSpan">OCT</span>
              </div>
            </div>
          </a>
        </div>

        <div className="product bgWhite textPurple">
          <a className="textPurple" href="/detail">
            <div className="productInfo jcfe">
              <div className="productContent ">
                <div className="productTitle">No.22線上設計展</div>
                <div className="productDesc">
                  這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題。創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。
                </div>
              </div>
              <img className="productPic" src={picShow2} alt="product" />
              <div className="productDate">
                <span className="dateSpan">01</span>
                <span className="dateSpan">JUN</span>
                <span className="sepBar">|</span>
                <span className="dateSpan">31</span>
                <span className="dateSpan">OCT</span>
              </div>
            </div>
          </a>
        </div>

        <div className="product bgPurple">
          <a className="textWhite" href="/detail">
            <div className="productInfo jcfs">
              <div className="productContent ">
                <div className="productTitle">高雄設計展</div>
                <div className="productDesc">
                  這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題。創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。
                </div>
              </div>
              <img className="productPic" src={picShow3} alt="product" />
              <div className="productDate">
                <span className="dateSpan">01</span>
                <span className="dateSpan">JUN</span>
                <span className="sepBar">|</span>
                <span className="dateSpan">31</span>
                <span className="dateSpan">OCT</span>
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* 嘗試做點擊product內容用swtich跳到Detail頁面，但switch內只顯示一個product..? */}
      {/*   <section>
        <Switch>
          <div className="product bgPurple textWhite">
             <Route exact path="/detail">
              <div className="productClick"> 
                <div className="productInfo jcfs">
                  <div className="productContent ">
                    <div className="productTitle">2020 台味設計展</div>
                    <div className="productDesc">
                      一年一度的台味設計展由經濟部工業局舉辦、台灣創意設計中心執行，每年，針對在地文化、及產業發展特色，運用設計思考全是新時代的意涵，並以展覽呈現在際設計。
                    </div>
                  </div>
                  <div className="picWrapper">
                    <img className="productPic" src={picShow1} alt="product" />
                  </div>
                  <div className="productDate">
                    <span className="dateSpan">01</span>
                    <span className="dateSpan">JUN</span>
                    <span className="sepBar">|</span>
                    <span className="dateSpan">31</span>
                    <span className="dateSpan">OCT</span>
                  </div>
                </div>
               </div>
            </Route> 
          </div>

          <div className="product bgWhite textPurple">
             <Route exact path="/detail">
              <div className="productClick"> 
                <div className="productInfo jcfe">
                  <div className="productContent ">
                    <div className="productTitle">No.22線上設計展</div>
                    <div className="productDesc">
                      這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題。創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。
                    </div>
                  </div>
                  <div className="picWrapper">
                    <img className="productPic" src={picShow2} alt="product" />
                  </div>
                  <div className="productDate">
                    <span className="dateSpan">01</span>
                    <span className="dateSpan">JUN</span>
                    <span className="sepBar">|</span>
                    <span className="dateSpan">31</span>
                    <span className="dateSpan">OCT</span>
                  </div>
                </div>
               </div>
            </Route> 
          </div>

          <div className="product bgPurple textWhite">
             <Route exact path="/detail">
              <div className="productClick"> 
                <div className="productInfo jcfs">
                  <div className="productContent ">
                    <div className="productTitle">高雄設計展</div>
                    <div className="productDesc">
                      這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題。創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。
                    </div>
                  </div>
                  <div className="picWrapper">
                    <img className="productPic" src={picShow3} alt="product" />
                  </div>
                  <div className="productDate">
                    <span className="dateSpan">01</span>
                    <span className="dateSpan">JUN</span>
                    <span className="sepBar">|</span>
                    <span className="dateSpan">31</span>
                    <span className="dateSpan">OCT</span>
                  </div>
                </div>
               </div>
            </Route> 
          </div>
        </Switch> 
        </section>*/}
    </>
  );
}
