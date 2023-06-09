import logo from "../ingflex_logo.png";
import { Link } from "react-router-dom";

//css
import { banner_style, logo_container_style } from "../Css/style";

function Banner() {
  return (
    <>
      <div className="banner" style={banner_style.banner}>
        <div className="logo_container" style={banner_style.logo_container}>
          <img src={logo} alt="ingflex 로고 이미지" width="100%" />
        </div>
        {/* 네비게이션 바 */}
        <div className="banner_link" style={{ width: "50%", marginLeft: "30px" }}>
          <Link to="/" style={banner_style.link_style}>
            홈
          </Link>
          <Link to="/series" style={banner_style.link_style}>
            시리즈
          </Link>
          <Link to="/game" style={banner_style.link_style}>
            Game
          </Link>
          <Link to="/other" style={banner_style.link_style}>
            외부 출연
          </Link>
        </div>
        {/* 넷플릭스 제일 오른쪽 프로필 부분 */}
        <div style={{ width: "50%" }}>
          <div className="notification" style={{ display: "flex", justifyContent: "flex-end" }}>
            <button class="searchTab" tabindex="0" aria-label="검색" data-uia="search-box-launcher" style={banner_style.menu_btn_style}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon" data-name="Search">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div>
              <span>키즈</span>
            </div>
            <button class="notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="알림" style={banner_style.menu_btn_style}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="Notification">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div class="nav-element">
              <div class="account-menu-item">
                <div class="account-dropdown-button">
                  <span class="profile-link" role="presentation">
                    <img
                      class="profile-icon"
                      src="http://occ-0-988-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                      alt=""
                    />
                  </span>
                  <span class="caret" role="presentation"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
