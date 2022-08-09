<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico" />
    <title>VETLIVA - сервис онлайн-бронирования</title>

    <!-- Scripts -->

    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>

    <link
      rel="stylesheet"
      href="/assets/libs/jquery-ui-1.13.2.custom/jquery-ui.css"
    />

    <link rel="stylesheet" href="/resources/demos/style.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="/assets/libs/jquery-ui-1.13.2.custom/jquery-ui.js"></script>

    <!-- <script src="./assets/scripts/script.js"></script> -->
    <!-- slick -->

    <link
      rel="stylesheet"
      href="./assets/libs/slick-1.8.1/slick/slick.css"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <link
      rel="stylesheet"
      href="./assets/libs/slick-1.8.1/slick/slick-theme.css"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <script
      src="./assets/libs/slick-1.8.1/slick/slick.min.js"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <!-- Fonts -->

    <link rel="stylesheet" href="./assets/css/fonts.css" />

    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      crossorigin="anonymous"
    />

    <!-- Styles -->
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <link rel="stylesheet" href="./assets/css/main.css" />
    <link rel="stylesheet" href="./assets/css/booking_form.css" />
    <link rel="stylesheet" href="./assets/css/guide.css" />
    <link rel="stylesheet" href="./assets/css/popular.css" />
    <link rel="stylesheet" href="./assets/css/offers.css" />
    <link rel="stylesheet" href="./assets/css/blog.css" />
  </head>
  <body>
    <div class="right-modal">
      <div class="right-modal__bg"></div>
      <div class="right-modal__content">
        <div class="modal-nav__back arrow-back">
          <svg
            class=""
            viewBox="0 0 35 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.000873856 15.0996V15.0956V15.0606L0.00166827 15.0265L0.00246269 15.0085L0.0032571 14.9922L0.00492537 14.9581L0.00571979 14.9573C0.0488343 14.2739 0.410817 13.6777 0.945274 13.314L13.6299 0.630244C14.4703 -0.210081 15.8336 -0.210081 16.674 0.630244C17.5143 1.47057 17.5143 2.83396 16.674 3.67428L7.40434 12.9431H32.8475C34.036 12.9431 35 13.9071 35 15.0956C35 16.2841 34.036 17.248 32.8475 17.248H7.33276L16.674 26.5893C17.5143 27.4296 17.5143 28.793 16.674 29.6333C15.8336 30.4736 14.4703 30.4736 13.6299 29.6333L0.894829 16.8983C0.802092 16.8316 0.713422 16.7559 0.630447 16.6729C0.210691 16.2531 0 15.7033 0 15.1525V15.1265V15.1119L0.000873856 15.0996Z"
              fill="#264B87"
            />
          </svg>
        </div>

        <div class="modal-nav cu-p"></div>
        <ul class="modal-actions modal-menu p-0">
          <div class="modal-lang bold">
            <span>RU</span>

            <svg
              class="cu-p modal-arrow main-arrow"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                fill="#264B87"
              />
            </svg>
          </div>

          <div class="modal-lang__options">
            <div class="modal-options__lang">
              <span class="text-gray bold">Язык</span>
              <div class="modal-lang__select modal-lang__current">
                <span class="text-main semi-bold">Русский</span>
                <svg
                  class="cu-p modal-arrow main-arrow"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                    fill="#264B87"
                  />
                </svg>
              </div>

              <div class="modal-lang-list">
                <div class="modal-lang-item">
                  <span class="text-gray">Белорусский</span>
                </div>
                <div class="modal-lang-item modal-lang-item__active">
                  <span class="text-gray">Русский</span>
                </div>
                <div class="modal-lang-item text-gray">
                  <span class="text-gray">Английский</span>
                </div>
              </div>
            </div>

            <div class="modal-options__currency">
              <span class="text-gray bold">Валюта</span>
              <div class="modal-lang__select modal-currency__current">
                <span class="text-main semi-bold">BYN</span>
                <svg
                  class="cu-p modal-arrow main-arrow"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                    fill="#264B87"
                  />
                </svg>
              </div>

              <div class="modal-currency__select">
                <span
                  class="text-gray modal-currency__select__item modal-currency__select__item__active"
                  >BYN</span
                ><span class="text-gray modal-currency__select__item">RUB</span
                ><span class="text-gray modal-currency__select__item">EUR</span>
                <span class="text-gray modal-currency__select__item">USD</span>
              </div>
            </div>
          </div>

          <a href="#"
            ><li class="modal-menu__item modal-menu__rates bold cu-p">
              Курс валют
            </li></a
          >
          <a href="#"><li class="modal-menu__item bold cu-p">Беларусь</li></a>
          <a href="#"><li class="modal-menu__item bold cu-p">О компании</li></a>
          <a href="#"><li class="modal-menu__item bold cu-p">Партнерам</li></a>
          <a href="#"
            ><li class="modal-menu__item bold cu-p">Дополнительно</li></a
          >
        </ul>

        <div class="modal-actions__rates">
          <span class="text-main bold modal-actions__header">Курс валют</span>

          <div class="modal-rates">
            <div class="modal-rates__rate">
              <div class="modal-rate__items">
                <span class="rate text-gray bold">RUB</span>
                <span class="rate text-gray bold">USD</span>
                <span class="rate text-gray bold">EUR</span>
              </div>
            </div>
            <div class="modal-rates__buy">
              <div class="modal-rates__desc">
                <span class="text-gray semi-bold">Покупка</span>
              </div>
              <div class="modal-buy__item">
                <span class="text-main bold">0.038</span>
                <span class="text-main bold">2.62</span>
                <span class="text-main bold">2.74</span>
              </div>
            </div>
            <div class="modal-rates__sell">
              <div class="modal-rates__desc">
                <span class="text-gray semi-bold">Продажа</span>
              </div>
              <div class="modal-sell__item">
                <span class="text-main bold">0.048</span>
                <span class="text-main bold">2.74</span>
                <span class="text-main bold">2.85</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <main>
    
      <header>
        <nav>
          <div class="header-logo cu-p">
            <a href="#"
              ><img loading="lazy" src="./assets/images/logo.svg" alt="Vetliva"
            /></a>
          </div>
          <div class="nav-menu">
            <div class="nav-search">
              <a href="#">
                <svg
                  class="cu-p mob-icon"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1767 11.362L10.2457 11.3157C10.4864 11.1519 10.7113 10.9694 10.9185 10.7701C11.8784 9.85171 12.4722 8.58309 12.4722 7.18621C12.4722 5.78934 11.8774 4.52072 10.9185 3.60328C9.95273 2.67795 8.61011 2.10479 7.12346 2.10479C5.6378 2.10479 4.29519 2.67795 3.32843 3.60328C2.37054 4.52072 1.77569 5.78934 1.77569 7.18621C1.77569 8.57618 2.36067 9.83593 3.30771 10.7494L3.32843 10.7692C4.29519 11.6955 5.6378 12.2686 7.12346 12.2686C8.2599 12.2686 9.31249 11.9342 10.1767 11.362V11.362ZM11.8734 12.2943L14.9276 17.3589C15.1801 17.7772 15.044 18.3237 14.6257 18.5763C14.2065 18.8298 13.66 18.6937 13.4074 18.2744L10.3947 13.2778C9.4141 13.7681 8.30133 14.0443 7.12346 14.0443C5.16527 14.0443 3.38959 13.2798 2.10123 12.0457L2.07558 12.02C0.792152 10.779 0 9.06943 0 7.18621C0 5.28919 0.804977 3.56874 2.10123 2.32675C3.38959 1.09363 5.16626 0.329102 7.12346 0.329102C9.07968 0.329102 10.8583 1.09363 12.1467 2.32675C13.4429 3.56874 14.2469 5.28919 14.2469 7.18621C14.2469 9.08324 13.4429 10.8047 12.1467 12.0467L11.8734 12.2943V12.2943Z"
                    fill="#B0B5BD"
                  />
                </svg>

                <svg
                  class="cu-p desk-icon"
                  viewBox="0 0 45 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3092 31.8367C29.3997 31.769 29.4941 31.7047 29.5923 31.6445C30.201 31.2202 30.7722 30.75 31.3003 30.239C33.7946 27.8251 35.3374 24.4969 35.3374 20.827C35.3374 17.1572 33.7946 13.829 31.3003 11.4151C28.7723 8.9686 25.2576 7.4552 21.3561 7.4552C17.4547 7.4552 13.9399 8.9686 11.412 11.4151C8.9177 13.829 7.3748 17.1571 7.3748 20.827C7.3748 24.4969 8.9176 27.825 11.412 30.239C13.94 32.6855 17.4546 34.1989 21.3561 34.1989C24.3175 34.1989 27.0559 33.3268 29.3092 31.8367ZM36.3132 35.6797L44.4707 49.3541C45.5208 51.1152 44.9597 53.4034 43.2176 54.4649C41.4754 55.5264 39.2119 54.9592 38.1618 53.1981L30.167 39.7965C27.4781 40.9892 24.4942 41.6541 21.3561 41.6541C15.4996 41.6541 10.1796 39.3393 6.3131 35.5974C2.4125 31.8225 0 26.6008 0 20.827C0 15.0532 2.4126 9.8314 6.3131 6.0567C10.1796 2.3146 15.4998 0 21.3561 0C27.2124 0 32.5326 2.3148 36.3992 6.0567C40.2996 9.8314 42.7123 15.0533 42.7123 20.827C42.7123 26.6008 40.2995 31.8225 36.3992 35.5974L36.3132 35.6797Z"
                    fill="#B0B5BD"
                  />
                </svg>
              </a>
            </div>
            <div class="nav-booking cu-p">
              <div class="mobile-nav mobile-booking">
                <svg
                  class="mob-icon"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.4134 2.01845H12.0157V1.21742C12.0157 0.727136 12.4133 0.330566 12.9035 0.330566C13.3938 0.330566 13.7914 0.727136 13.7914 1.21742V2.02142C14.7848 2.06088 15.6864 2.48408 16.3484 3.14503C17.0468 3.84446 17.4789 4.80431 17.4789 5.8569V14.8665C17.4789 15.925 17.0458 16.8859 16.3523 17.5794L16.2921 17.6337C15.6016 18.2956 14.6644 18.706 13.6405 18.706H4.78767C3.73015 18.706 2.7693 18.2729 2.0758 17.5794C1.38229 16.8859 0.949219 15.925 0.949219 14.8665V5.8569C0.949219 4.80431 1.38131 3.84446 2.0758 3.14898C2.73576 2.48507 3.63939 2.05989 4.63772 2.02142V1.26872C4.63772 0.779422 5.03527 0.381866 5.52556 0.381866C6.01585 0.381866 6.4134 0.779422 6.4134 1.26872V2.01845V2.01845ZM5.37462 10.7055C5.04316 10.3464 5.06783 9.78413 5.42691 9.45365C5.78599 9.12219 6.3473 9.14685 6.67876 9.50594L8.28379 11.2491L11.7572 7.56846C12.0926 7.21234 12.653 7.19458 13.0091 7.52999C13.3652 7.8654 13.383 8.42573 13.0476 8.78186L8.87569 13.2003C8.5166 13.5318 7.95529 13.5072 7.62383 13.1481L5.37462 10.7055V10.7055ZM13.7914 3.79908V4.59419C13.7914 5.08447 13.3938 5.48203 12.9035 5.48203C12.4133 5.48203 12.0157 5.08447 12.0157 4.59419V3.79414H6.4134V4.64647C6.4134 5.13676 6.01585 5.53432 5.52556 5.53432C5.03527 5.53432 4.63772 5.13676 4.63772 4.64647V3.79908C4.13165 3.83657 3.67194 4.0605 3.3316 4.40084C2.95673 4.77373 2.72491 5.29065 2.72491 5.8569V14.8665C2.72491 15.4328 2.95772 15.9497 3.3316 16.3236C3.7045 16.6965 4.22241 16.9303 4.78767 16.9303H13.6405C14.187 16.9303 14.6871 16.7142 15.0571 16.364L15.0965 16.3236C15.4704 15.9497 15.7032 15.4328 15.7032 14.8665V5.8569C15.7032 5.29065 15.4714 4.77373 15.0985 4.39886C14.7572 4.05951 14.2984 3.83657 13.7914 3.79908V3.79908Z"
                    fill="#B0B5BD"
                  />
                </svg>
              </div>
              <span class="bold text-white nav-desktop text-shadow"
                >Забронировать</span
              >
              <svg
                class="cu-p nav-desktop main-arrow svg-whiteFill"
                viewBox="0 0 15 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                  fill="#264B87"
                />
              </svg>

              <div class="options booking-options b-r">
                <ul>
                  <a href="#"
                    ><li class="option booking-option bold b-r">
                      Проживание
                    </li></a
                  >
                  <a href="#"
                    ><li class="option booking-option bold b-r">
                      Экскурсии
                    </li></a
                  >
                  <a href="#"
                    ><li class="option booking-option bold b-r">Туры</li></a
                  >
                  <a href="#"
                    ><li class="option booking-option bold b-r">
                      Санатории
                    </li></a
                  >
                  <a href="#"
                    ><li class="option booking-option bold b-r">
                      Трансферы
                    </li></a
                  >
                </ul>
              </div>
            </div>
            <div class="nav-favourites">
              <a href="#">
                <svg
                  class="mob-icon cu-p"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1659 0.886032L13.637 6.06216L19.261 6.83755C19.701 6.89575 20.0098 7.30218 19.9516 7.74216C19.9259 7.93748 19.8312 8.10815 19.6951 8.23048L15.608 12.1903L16.6182 17.8557C16.6942 18.2937 16.4022 18.7129 15.9632 18.7889C15.7777 18.8215 15.5952 18.7869 15.4403 18.7031L10.4378 15.9892L5.43532 18.7041C5.04368 18.9152 4.55339 18.7712 4.34228 18.3795C4.25251 18.2128 4.22687 18.0293 4.25745 17.8557L5.26762 12.1903L1.16085 8.21173C0.843194 7.90197 0.836291 7.39195 1.14506 7.0743C1.27627 6.94112 1.44298 6.86122 1.61463 6.83853L7.23863 6.06216L9.7098 0.886032C9.90118 0.48453 10.3826 0.313868 10.7841 0.505247C10.9587 0.587126 11.0889 0.725234 11.1659 0.886032V0.886032ZM12.3684 7.14534L10.4378 3.10465L8.50824 7.14534C8.39282 7.38209 8.16593 7.55966 7.88675 7.59715L3.46727 8.2068L6.65364 11.2935C6.86573 11.4731 6.98115 11.7572 6.92985 12.0512L6.13869 16.4874L10.0442 14.3674C10.278 14.2382 10.571 14.2264 10.8226 14.3625L14.737 16.4874L13.9458 12.0512C13.9044 11.7976 13.9813 11.5283 14.1786 11.336L17.4084 8.2068L13.0343 7.60306C12.7571 7.58136 12.4966 7.41564 12.3684 7.14534Z"
                    fill="#B0B5BD"
                  />
                </svg>

                <svg
                  class="cu-p desk-icon"
                  viewBox="0 0 58 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.9878 1.88647L39.058 16.6804L55.1478 18.8996C56.9556 19.1495 58.2184 20.8167 57.9683 22.6233C57.8582 23.4186 57.4732 24.1083 56.9224 24.61L45.2462 35.9123L48.1405 52.1212C48.4549 53.9205 47.2499 55.634 45.4493 55.9482C44.6846 56.0816 43.9354 55.9411 43.3024 55.5975L43.3015 55.5992L28.999 47.8426L14.6964 55.5992C13.0886 56.4704 11.0785 55.8741 10.2067 54.2675C9.81613 53.5477 9.72063 52.7472 9.87833 52.0045L12.7517 35.9123L0.99993 24.5368C-0.30767 23.2658 -0.33657 21.176 0.93533 19.8693C1.46893 19.321 2.14673 18.9979 2.85033 18.9011L2.85013 18.8996L18.9399 16.6804L26.0103 1.88647C26.7963 0.237071 28.7717 -0.463329 30.4223 0.322071C31.1364 0.661972 31.6726 1.22427 31.9878 1.88647ZM33.8476 21.1299L28.999 10.9847L24.1504 21.1299L24.1452 21.1274C23.6827 22.0958 22.7576 22.8207 21.6145 22.9787L10.4727 24.5155L18.4618 32.2487C19.3246 32.9831 19.7874 34.1413 19.5784 35.3378L17.5847 46.5024L27.3829 41.1885C28.3404 40.6548 29.5424 40.6072 30.5775 41.1682L40.4132 46.5023L38.4196 35.3378L38.4261 35.3366C38.2457 34.2988 38.5644 33.1927 39.3769 32.4028L47.5253 24.5155L36.5863 23.0067C35.4425 22.9191 34.3761 22.239 33.8476 21.1299Z"
                    fill="#B0B5BD"
                  />
                </svg>
              </a>
            </div>

            <div class="nav-lang nav-desktop cu-p">
              <span class="text-white bold">RU</span>
              <svg
                class="cu-p nav-desktop header-lang__svg"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                  fill="#264B87"
                />
              </svg>

              <div class="modal-lang__options header__modal-lang__options">
                <div class="modal-options__lang">
                  <span class="text-gray bold">Язык</span>
                  <div class="modal-lang__select modal-lang__current">
                    <span class="text-main semi-bold">Русский</span>
                    <svg
                      class="cu-p modal-arrow main-arrow"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                        fill="#264B87"
                      />
                    </svg>
                  </div>

                  <div class="modal-lang-list">
                    <div class="modal-lang-item">
                      <span class="text-gray">Белорусский</span>
                    </div>
                    <div class="modal-lang-item modal-lang-item__active">
                      <span class="text-gray">Русский</span>
                    </div>
                    <div class="modal-lang-item text-gray">
                      <span class="text-gray">Английский</span>
                    </div>
                  </div>
                </div>

                <div class="modal-options__currency">
                  <span class="text-gray bold">Валюта</span>
                  <div class="modal-lang__select modal-currency__current">
                    <span class="text-main semi-bold">BYN</span>
                    <svg
                      class="cu-p modal-arrow main-arrow"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                        fill="#264B87"
                      />
                    </svg>
                  </div>

                  <div class="modal-currency__select">
                    <span
                      class="text-gray modal-currency__select__item modal-currency__select__item__active"
                      >BYN</span
                    ><span class="text-gray modal-currency__select__item"
                      >RUB</span
                    ><span class="text-gray modal-currency__select__item"
                      >EUR</span
                    >
                    <span class="text-gray modal-currency__select__item"
                      >USD</span
                    >
                  </div>
                </div>
              </div>

              <!-- <div class="options lang-options b-r">
                <ul>
                  <li class="lang-option bold b-r">
                    <span class="bold text-gray">Язык</span>
                    <div class="lang-params">
                      <span class="lang-active semi-bold">Русский</span>
                      <svg
                        class="cu-p nav-desktop"
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                          fill="#264B87"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="lang-option bold b-r">
                    <span class="bold text-gray">Валюта</span>
                    <div class="lang-params currency-params">
                      <span class="currency currency__active semi-bold"
                        >BYN</span
                      >

                      <svg
                        style="margin-top: 2px"
                        class="cu-p nav-desktop"
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.617962 3.67354C-0.0915052 2.96258 -0.207119 1.66485 0.359752 0.775043C0.926623 -0.114765 1.96134 -0.259767 2.6708 0.451198L7.5 5.29658L12.3292 0.451198C13.0387 -0.259767 14.0734 -0.114765 14.6402 0.775043C15.2071 1.66485 15.0915 2.96258 14.382 3.67354L8.55223 9.52289C7.96475 10.1376 7.09456 10.1711 6.47358 9.5488L0.617962 3.67354Z"
                          fill="#264B87"
                        />
                      </svg>

                      <div class="modal-currency__select">
                        <span
                          class="text-gray modal-currency__select__item modal-currency__select__item__active"
                          >BYN</span
                        ><span class="text-gray modal-currency__select__item"
                          >RUB</span
                        ><span class="text-gray modal-currency__select__item"
                          >EUR</span
                        >
                        <span class="text-gray modal-currency__select__item"
                          >USD</span
                        >
                      </div>
                    </div>
                  </li>
                </ul>
              </div> -->
            </div>

            <div class="nav-cart">
              <a href="#">
                <svg
                  class="mob-icon cu-p"
                  viewBox="0 0 23 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.086 7.89372H18.0479L18.2057 8.16599C18.4425 8.57835 18.3004 9.1071 17.8881 9.34386C17.4747 9.5816 16.946 9.43955 16.7092 9.0272L16.0542 7.89372H6.56707L5.85186 9.13176C5.61511 9.5451 5.08635 9.68618 4.674 9.44942C4.26066 9.21266 4.11959 8.68389 4.35635 8.27055L4.57436 7.89372H2.28767L4.63157 16.641H17.7411L20.086 7.89372V7.89372ZM1.15912 6.15947H5.57467L8.82122 0.537435C9.05798 0.125081 9.58673 -0.0169713 9.99908 0.219787C10.4124 0.456545 10.5535 0.985313 10.3167 1.39865L7.56836 6.15947H15.0539L12.2443 1.29309C12.0076 0.880738 12.1496 0.351983 12.562 0.115225C12.9753 -0.12252 13.5041 0.0195314 13.7409 0.431885L17.0476 6.15947H21.2145L21.4375 6.19004C21.8982 6.31237 22.1734 6.78884 22.0511 7.24954L19.2544 17.6847C19.1725 18.0793 18.8233 18.3752 18.406 18.3752H3.96767C3.58589 18.3732 3.2347 18.1177 3.13112 17.731L0.335404 7.29787C0.307782 7.21205 0.291992 7.1203 0.291992 7.02659C0.291992 6.54715 0.680674 6.15947 1.15912 6.15947V6.15947Z"
                    fill="#B0B5BD"
                  />
                </svg>

                <svg
                  class="cu-p desk-icon"
                  viewBox="0 0 65 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.7429 16.4289C62.5214 16.8006 63.2114 17.3416 63.7591 18.0257C64.2997 18.7011 64.6704 19.4755 64.858 20.2925C65.0458 21.1105 65.0493 21.9686 64.8559 22.8105L58.4738 50.5662C58.1747 51.8674 57.4433 52.9754 56.4459 53.7595C55.4489 54.5432 54.1956 55 52.8511 55H12.1489C10.8044 55 9.55111 54.5432 8.55411 53.7595C7.55651 52.9753 6.82531 51.8674 6.52611 50.5662L0.144113 22.8106C-0.0494871 21.9688 -0.0458868 21.1106 0.142013 20.2927C0.329813 19.4755 0.700313 18.7011 1.24091 18.0259C1.78841 17.3417 2.47851 16.8008 3.25691 16.429C4.03571 16.0572 4.89031 15.8583 5.76681 15.8583V15.864L16.7539 15.8641L22.8493 1.96738C23.2138 1.13618 23.8809 0.531381 24.6646 0.225881C25.446 -0.079319 26.3464 -0.0868172 27.1793 0.275183C28.0141 0.638183 28.6216 1.30238 28.9287 2.08278C29.2351 2.86098 29.2428 3.75768 28.8791 4.58718L23.9355 15.8583H41.0644L36.1211 4.58788C35.757 3.75778 35.7646 2.86118 36.0711 2.08278C36.3784 1.30248 36.9857 0.638183 37.82 0.275383C38.6535 -0.087117 39.5539 -0.079319 40.3354 0.225881C41.119 0.531781 41.7861 1.13668 42.1505 1.96708L48.2435 15.8582H59.2331C60.1096 15.8582 60.9642 16.0571 61.7429 16.4289ZM12.7889 48.4409H52.2114L58.1952 22.4173H50.9537C51.0099 22.9452 50.9346 23.4715 50.7451 23.9527C50.4378 24.7329 49.8305 25.3972 48.9964 25.76C48.7849 25.8519 48.5689 25.92 48.3517 25.9654C48.1176 26.0144 47.8932 26.0382 47.6815 26.0382C47.039 26.0382 46.4107 25.8484 45.8764 25.5005C45.3605 25.1645 44.9328 24.6776 44.6656 24.0682L43.9416 22.4176H21.0586L20.3346 24.0682C20.0674 24.6776 19.6394 25.1645 19.1238 25.5005C18.5895 25.8484 17.9612 26.0382 17.3187 26.0382C17.107 26.0382 16.8826 26.0144 16.6485 25.9654C16.4313 25.9202 16.2153 25.8519 16.0042 25.7601C15.1697 25.3973 14.5623 24.7331 14.2553 23.9527C14.0659 23.4715 13.9906 22.9452 14.0467 22.4173H6.80501L12.7889 48.4409Z"
                    fill="#B0B5BD"
                  />
                </svg>
              </a>
            </div>
            <div class="nav-auth">
              <div class="mobile-nav nav-auth-mobile">
                <svg
                  class="mob-icon cu-p"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.39579 9.13548C3.75487 8.805 4.31618 8.82868 4.64764 9.18776C4.9791 9.54783 4.95445 10.1091 4.59537 10.4406C3.89397 11.0838 3.34844 11.799 2.93805 12.5813C2.58193 13.261 2.32051 14.0038 2.139 14.8039C2.33038 15.015 2.53063 15.2123 2.73681 15.3938C4.12579 16.6131 5.89358 17.2247 7.68012 17.2306C9.47948 17.2356 11.3045 16.6328 12.7941 15.4283C13.0397 15.23 13.2775 15.014 13.5044 14.7831C13.3209 13.992 13.0545 13.259 12.6955 12.5872C12.2772 11.8039 11.7208 11.0868 11.0155 10.4406C10.6564 10.1091 10.6327 9.54783 10.9632 9.18776C11.2946 8.82868 11.856 8.805 12.216 9.13548C13.0634 9.91283 13.7382 10.7888 14.2561 11.7556C14.7691 12.7165 15.1232 13.7611 15.3353 14.8848C15.3827 15.1432 15.3156 15.4184 15.1311 15.6305C14.7493 16.0656 14.336 16.4602 13.9039 16.8094C12.0917 18.2734 9.87112 19.0063 7.68012 18.9994C5.47531 18.9925 3.29024 18.2359 1.57176 16.7265C1.18802 16.3901 0.824984 16.0133 0.493523 15.6029C0.337657 15.4076 0.263674 15.1491 0.312999 14.8848C0.525095 13.7621 0.868391 12.7194 1.37052 11.7615C1.87757 10.7928 2.54346 9.91579 3.39579 9.13548V9.13548ZM7.80639 0.625C8.87477 0.625 9.84449 1.07583 10.5439 1.80387C11.2354 2.52302 11.6636 3.51346 11.6636 4.60156C11.6636 5.68966 11.2354 6.6801 10.5439 7.39826C9.84449 8.12728 8.87477 8.57712 7.80639 8.57712C6.73605 8.57712 5.76534 8.1263 5.0669 7.39826C4.37537 6.6801 3.94822 5.68966 3.94822 4.60156C3.94822 3.51346 4.37537 2.52302 5.0669 1.80387C5.76534 1.07682 6.73605 0.625 7.80639 0.625ZM9.2674 3.03205C8.8945 2.64238 8.37461 2.40069 7.80639 2.40069C7.2362 2.40069 6.71731 2.64238 6.34343 3.03205C5.96067 3.4296 5.72391 3.98599 5.72391 4.60156C5.72391 5.21614 5.96067 5.77253 6.34343 6.17008C6.71731 6.55975 7.2362 6.80143 7.80639 6.80143C8.37461 6.80143 8.8945 6.55975 9.2674 6.17008C9.65016 5.77253 9.88789 5.21614 9.88789 4.60156C9.88789 3.98599 9.65016 3.4296 9.2674 3.03205Z"
                    fill="#B0B5BD"
                  />
                </svg>
              </div>
              <a href="#"
                ><span class="bold text-white nav-desktop cu-p">Войти</span></a
              >
            </div>
          </div>
          <div class="header-burger cu-p">
            <div class="header-burger__block"></div>
          </div>
        </nav>
      </header>
        </main>
    