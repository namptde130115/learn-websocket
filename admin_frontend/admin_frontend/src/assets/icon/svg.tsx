import React from "react";

const size = "1em";

const defaultSetting = {
  viewBox: "0 0 1024 1024",
  width: size,
  height: size,
  fill: "currentColor",
};

const svg = {

  FacebookSvg: () => (
    <svg {...defaultSetting}>
      <g>
        <path d="M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z"></path>
      </g>
    </svg>
  ),

  DownSvg: () => (
    <svg {...defaultSetting}>
      <g>
        <path d="M225.835 414.165l256 256c16.683 16.683 43.691 16.683 60.331 0l256-256c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
      </g>
    </svg>
  ),

  TrashSvg: () => (
    <svg {...defaultSetting} viewBox="0 0 12 13.11">
      <g id="Group_2190" transform="translate(581.383 -2655.025)">
        <path
          id="Path_3166"
          d="M-569.383 2657.541c0-.238-.1-.334-.333-.334-.812 0-1.624 0-2.436.007a.176.176 0 0 1-.193-.124c-.163-.4-.339-.8-.5-1.207a1.313 1.313 0 0 0-1.19-.852c-.909 0-1.818-.016-2.727.005a1.2 1.2 0 0 0-1.109.744c-.19.415-.356.841-.528 1.264a.227.227 0 0 1-.251.17c-.8-.011-1.6-.007-2.4-.006-.249 0-.335.092-.336.343v.393c0 .277.078.352.36.352h.732v8.026a2.679 2.679 0 0 0 .034.482 1.576 1.576 0 0 0 .87 1.229 2.241 2.241 0 0 0 .383.105h7.237a.3.3 0 0 1 .071-.023 1.052 1.052 0 0 0 .654-.319 1.828 1.828 0 0 0 .561-1.351v-8.144h.794a.264.264 0 0 0 .3-.3c.008-.154.007-.307.007-.46zm-7.751-.733c.073-.177.151-.352.22-.53a.23.23 0 0 1 .239-.163h1.838c.261 0 .523-.007.784.007a.263.263 0 0 1 .192.122c.134.292.25.593.371.891a.3.3 0 0 1 .008.073h-3.818c.061-.14.112-.271.165-.4zm5.584 3.435c0 .655-.007 1.309-.007 1.963s.007 1.318.007 1.977c0 .716-.009 1.431 0 2.147a1.1 1.1 0 0 1-.127.565.253.253 0 0 1-.247.149c-1.711-.005-3.422 0-5.132 0h-1.785a.226.226 0 0 1-.221-.125 1.017 1.017 0 0 1-.142-.535c.007-.393 0-.785 0-1.178s.006-.785.006-1.178-.006-.777-.006-1.165 0-.785.005-1.178 0-.777 0-1.165v-1.14-1.072h7.664c-.015.652-.014 1.292-.016 1.935z"
        />
        <path
          id="Path_3167"
          d="M-510.14 2760.989h-.414c-.239 0-.312.118-.312.5V2768.724c0 .278.082.432.241.44a4.357 4.357 0 0 0 .524 0c.152-.01.234-.159.234-.409v-7.331c-.001-.3-.088-.431-.273-.435z"
          transform="translate(-67.4 -102.792)"
        />
        <path
          id="Path_3168"
          d="M-416.1 2760.985h-.439c-.2 0-.28.135-.28.458v7.277c0 .292.091.434.269.437h.429c.219 0 .3-.131.3-.482v-3.6-3.639c.001-.319-.079-.448-.279-.451z"
          transform="translate(-157.292 -102.788)"
        />
        <path
          id="Path_3169"
          d="M-462.986 2760.987a3.393 3.393 0 0 0-.579 0c-.135.011-.213.165-.213.358q0 3.017.006 6.034v1.317c0 .3.083.451.269.451.152 0 .3-.009.456-.013.2-.006.271-.114.271-.435v-3.637-3.676c-.002-.251-.064-.386-.21-.399z"
          transform="translate(-112.405 -102.778)"
        />
      </g>
    </svg>
  ),
  PrintSvg: () => (
    <svg {...defaultSetting} width="0.956em" viewBox="0 0 979 1024">
      <g>
        <path d="M813.475 133.554h-647.557c-0.998-0.030-2.172-0.047-3.349-0.047-63.961 0-116.047 50.844-118.046 114.319l-0.005 0.184v305.259c1.98 63.679 54.076 114.547 118.052 114.547 1.177 0 2.351-0.017 3.52-0.051l-0.172 0.004h647.557c0.998 0.030 2.172 0.047 3.349 0.047 63.961 0 116.047-50.844 118.046-114.319l0.005-0.184v-305.304c-2.004-63.659-54.090-114.503-118.051-114.503-1.178 0-2.351 0.017-3.521 0.051l0.172-0.004zM651.563 209.857v38.152c-0.66 21.218-18.018 38.168-39.336 38.168-0.398 0-0.794-0.006-1.189-0.018l0.058 0.001h-242.8c-0.337 0.010-0.733 0.016-1.131 0.016-21.318 0-38.676-16.95-39.334-38.108l-0.001-0.061v-38.152zM853.897 553.268c-0.66 21.218-18.018 38.168-39.336 38.168-0.398 0-0.794-0.006-1.189-0.018l0.058 0.001h-647.512c-0.337 0.010-0.733 0.016-1.131 0.016-21.318 0-38.676-16.95-39.334-38.108l-0.001-0.061v-305.259c0.66-21.218 18.018-38.168 39.336-38.168 0.398 0 0.794 0.006 1.189 0.018l-0.058-0.001h80.933v38.152c1.979 63.679 54.075 114.549 118.052 114.549 1.193 0 2.382-0.018 3.566-0.053l-0.174 0.004h242.845c0.998 0.030 2.172 0.047 3.349 0.047 63.961 0 116.047-50.844 118.046-114.319l0.005-0.184v-38.196h80.933c0.337-0.010 0.733-0.016 1.131-0.016 21.318 0 38.676 16.95 39.334 38.108l0.001 0.061z"></path>
        <path d="M718.652 447.805h-457.911c-21.501 1.842-38.256 19.749-38.256 41.57 0 1.037 0.038 2.066 0.112 3.084l-0.008-0.136c-0.066 0.882-0.104 1.911-0.104 2.948 0 21.821 16.755 39.728 38.101 41.559l0.155 0.011h457.911c21.501-1.842 38.256-19.749 38.256-41.57 0-1.037-0.038-2.066-0.112-3.084l0.008 0.136c0.066-0.882 0.104-1.911 0.104-2.948 0-21.821-16.755-39.728-38.101-41.559l-0.155-0.011z"></path>
        <path d="M249.3 586.567c-24.574 0-44.518 34.012-44.518 75.947v151.895c0 41.936-2.938 73.766 44.518 75.947s44.518-34.012 44.518-75.947v-151.895c0-41.936-19.944-75.947-44.518-75.947z"></path>
        <path d="M730.093 586.567c-24.574 0-44.518 34.012-44.518 75.947v151.895c0 41.936 3.472 75.235 44.518 75.947s44.518-34.012 44.518-75.947v-151.895c0-41.936-19.944-75.947-44.518-75.947z"></path>
        <path d="M222.589 801.322h534.214v89.036h-534.214z"></path>
      </g>
    </svg>
  ),

  EditSvg: () => (
    <svg {...defaultSetting} viewBox="0 0 12 13.11">
      <rect
        id="Rectangle_85"
        data-name="Rectangle 85"
        style={{ fill: "none" }}
        width="14"
        height="14"
      />
      <g id="Layer" transform="translate(0.583 1.461)">
        <g id="Vrstva_143" data-name="Vrstva 143">
          <path
            id="Path_156"
            data-name="Path 156"
            style={{ fill: "#717171" }}
            d="M10,6.639l.082,2.392,2.392.082,3.8-3.792a1.167,1.167,0,0,0,0-1.651l-.84-.823a1.167,1.167,0,0,0-1.645,0ZM14.509,3.81h0a.3.3,0,0,1,.1,0h.169a.193.193,0,0,1,.058.035l.414.414a.292.292,0,0,1,0,.414L12.018,7.905l-.793-.029-.058-.77L14.4,3.874a.268.268,0,0,1,.1-.064Z"
            transform="translate(-4.75 -2.508)"
          />
          <path
            id="Path_157"
            data-name="Path 157"
            style={{ fill: "#717171" }}
            d="M13.25,7.833a.583.583,0,0,0-.583.583v4.667a.583.583,0,0,1-.583.583H2.75a.583.583,0,0,1-.583-.583V7.25a.583.583,0,0,1,.583-.583H5.083a.583.583,0,0,0,0-1.167H2.75A1.75,1.75,0,0,0,1,7.25v5.833a1.75,1.75,0,0,0,1.75,1.75h9.333a1.75,1.75,0,0,0,1.75-1.75V8.417A.583.583,0,0,0,13.25,7.833Z"
            transform="translate(-1 -3.755)"
          />
        </g>
      </g>
    </svg>
  ),
  DoubleRightSvg: () => (
    <svg {...defaultSetting}>
      <g>
        <path d="M584.832 755.499l213.333-213.333c16.683-16.683 16.683-43.691 0-60.331l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l183.168 183.168-183.168 183.168c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM286.165 755.499l213.333-213.333c16.683-16.683 16.683-43.691 0-60.331l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l183.168 183.168-183.168 183.168c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
      </g>
    </svg>
  ),
  DoubleLeftSvg: () => (
    <svg {...defaultSetting}>
      <g>
        <path d="M499.499 695.168l-183.168-183.168 183.168-183.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331zM798.165 695.168l-183.168-183.168 183.168-183.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
      </g>
    </svg>
  ),
  ArrowLeft: () => (
    <svg {...defaultSetting}>
      <g>
        <path d="M307.029 275.029l-166.4 207.787c-7.795 7.733-12.621 18.45-12.621 30.293s4.826 22.56 12.618 30.291l0.003 0.003 166.4 207.787c7.797 8.246 18.813 13.379 31.027 13.379 23.564 0 42.667-19.103 42.667-42.667 0-8.801-2.664-16.979-7.231-23.772l0.097 0.153-115.2-140.8h593.92c23.564 0 42.667-19.103 42.667-42.667s-19.103-42.667-42.667-42.667v0h-593.92l115.2-144.213c7.208-7.623 11.639-17.938 11.639-29.287 0-23.564-19.103-42.667-42.667-42.667-14.764 0-27.776 7.498-35.436 18.895l-0.097 0.153z"></path>
      </g>
    </svg>
  ),

  DeliveryCarSvg: () => (
    <svg {...defaultSetting}>
      <g>
        <path d="M847.36 319.36c-9.523-12.509-24.423-20.501-41.189-20.501-0.52 0-1.038 0.008-1.554 0.023l0.076-0.002h-79.36v-42.667c0-70.692-57.308-128-128-128v0h-426.667c-70.692 0-128 57.308-128 128v0 426.667c0 70.692 57.308 128 128 128v0h7.68c18.382 49.611 65.296 84.33 120.32 84.33s101.938-34.719 120.032-83.444l0.288-0.886h143.36c18.218 49.923 65.288 84.922 120.533 84.922s102.315-34.998 120.249-84.033l0.284-0.889c1.086 0.098 2.35 0.154 3.627 0.154s2.54-0.056 3.788-0.166l-0.162 0.011h119.467c28.277-0 51.2-22.923 51.2-51.2l0 0v-244.48c0.002-0.169 0.003-0.37 0.003-0.57 0-11.398-3.853-21.897-10.328-30.264l0.085 0.114zM298.667 810.88c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667c23.564 0 42.667 19.103 42.667 42.667v0c0 23.564-19.103 42.667-42.667 42.667v0zM682.667 810.88c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667c23.564 0 42.667 19.103 42.667 42.667v0c0 23.564-19.103 42.667-42.667 42.667v0zM896 725.547h-85.333c-1.086-0.098-2.35-0.154-3.627-0.154s-2.54 0.056-3.788 0.166l0.162-0.011c-18.218-49.923-65.288-84.922-120.533-84.922s-102.315 34.998-120.249 84.033l-0.284 0.889h-143.36c-18.382-49.611-65.296-84.33-120.32-84.33s-101.938 34.719-120.032 83.444l-0.288 0.886h-7.68c-23.564 0-42.667-19.103-42.667-42.667v0-426.667c0-23.564 19.103-42.667 42.667-42.667v0h426.667c23.564 0 42.667 19.103 42.667 42.667v0 298.667c0 23.564 19.103 42.667 42.667 42.667s42.667-19.103 42.667-42.667v0-170.667h64l106.667 142.080z"></path>
      </g>
    </svg>
  ),

  DeliveryManSvg: () => (
    <svg {...defaultSetting}>
      <g fill="red">
        <path d="M18.085 15.364l-.695-4.837a3.143 3.143 0 0 0-3.047-2.736h-3v-.918a.462.462 0 0 0-.02-.105 3.254 3.254 0 0 0 1.336-2.648V3.2h1.319v-.916h-1.451A3.058 3.058 0 0 0 8.69.139 3.2 3.2 0 0 0 6.5 3.2v.92a3.254 3.254 0 0 0 1.343 2.648.469.469 0 0 0-.02.105v.918h-3a3.143 3.143 0 0 0-3.047 2.736l-.695 4.837a2.222 2.222 0 0 0 .484 1.725 2.188 2.188 0 0 0 1.692.8h2.81a.9.9 0 0 0 .879-.918v-.459h5.274v.459a.9.9 0 0 0 .879.918h2.81a2.187 2.187 0 0 0 1.691-.8 2.222 2.222 0 0 0 .485-1.725zM9.581.907a2.2 2.2 0 0 1 2.012 1.377H7.569A2.2 2.2 0 0 1 9.581.907zM7.383 4.12V3.2h4.4v.92a2.248 2.248 0 0 1-2.2 2.295 2.248 2.248 0 0 1-2.2-2.295zm3.078 3.213v.459H8.7v-.46zm-7.819 3.33a2.245 2.245 0 0 1 2.177-1.954h9.524a2.244 2.244 0 0 1 2.177 1.954l.115.8h-1.777V9.627a.45.45 0 0 0-.44-.459H4.744a.45.45 0 0 0-.44.459v1.836H2.527zm11.336-.577V11H10.9v-.918zm-3.957 0v1.836h-.879v-1.836zm-1.759 0V11H5.184v-.918zm-5.276 5.966v.889a1.316 1.316 0 0 1-.757-.45 1.261 1.261 0 0 1-.281-.989l.452-3.121h1.9v2.754h-.44a.9.9 0 0 0-.874.917zm3.078.918h-2.2v-.918H4.3a.45.45 0 0 0 .44.459h1.324zm-.879-1.377v-3.671h3.077v.459a.45.45 0 0 0 .44.459h1.759a.45.45 0 0 0 .44-.459v-.459h3.078v3.672zM15.3 16.97h-2.2v-.459h1.319a.45.45 0 0 0 .44-.459h.44v.918zm1.637-.479a1.318 1.318 0 0 1-.757.45v-.889a.9.9 0 0 0-.879-.918h-.44v-2.753h1.909l.448 3.121a1.26 1.26 0 0 1-.284.989z" />
      </g>
    </svg>
  ),

  EditSvg1: () => (
    <svg {...defaultSetting}>
      <g>
        <path d="M426.667 409.031l5.973 174.933 174.933 5.973 277.732-277.333c15.454-15.444 25.013-36.785 25.013-60.359s-9.559-44.915-25.012-60.359l-0-0-61.44-60.188c-15.424-15.335-36.685-24.814-60.16-24.814s-44.736 9.479-60.164 24.818l0.004-0.004zM756.622 202.126c1.086-0.192 2.336-0.302 3.612-0.302s2.526 0.11 3.742 0.321l-0.13-0.019h12.345c1.643 0.632 3.057 1.498 4.283 2.574l-0.016-0.014 30.265 30.322c3.889 3.865 6.296 9.218 6.296 15.132s-2.407 11.267-6.295 15.131l-0.001 0.001-236.43 236.316-58.027-2.105-4.267-56.32 236.373-236.373c1.98-2.039 4.392-3.647 7.090-4.677l0.135-0.045z"></path>
        <path d="M938.667 405.163c-23.564 0-42.667 19.103-42.667 42.667v0 341.333c0 23.564-19.103 42.667-42.667 42.667v0h-682.667c-23.564 0-42.667-19.103-42.667-42.667v0-426.667c0-23.564 19.103-42.667 42.667-42.667v0h170.667c23.564 0 42.667-19.103 42.667-42.667s-19.103-42.667-42.667-42.667v0h-170.667c-70.692 0-128 57.308-128 128v0 426.667c0 70.692 57.308 128 128 128v0h682.667c70.692 0 128-57.308 128-128v0-341.333c0-23.564-19.103-42.667-42.667-42.667v0z"></path>
      </g>
    </svg>
  ),

  PlusSvg: () => (
    <svg {...defaultSetting}>
      <g>
        <path d="M0 512c0-60.622 21.911-112.065 50.923-118.127h916.525c31.264 0 56.552 52.915 56.552 118.127s-25.288 118.127-56.552 118.127h-916.525c-29.012-6.062-51.096-57.245-50.923-118.127z"></path>
        <path d="M512 0c60.622 0 112.065 21.911 118.127 50.923v916.525c0 31.264-52.915 56.552-118.127 56.552s-118.127-25.375-118.127-56.552v-916.525c6.062-29.012 57.245-51.096 118.127-50.923z"></path>
      </g>
    </svg>
  ),

  LayoutLeftMenuSvg: () => (
    <svg {...defaultSetting} height="16" width="16" viewBox="0 0 20.571 19.2">
      <g id="Layer" transform="translate(.85 .794)">
        <path
          d="M1 3.381A2.471 2.471 0 0 1 3.551 1h13.608a2.471 2.471 0 0 1 2.551 2.381v12.7a2.471 2.471 0 0 1-2.551 2.381H3.551A2.471 2.471 0 0 1 1 16.082zm2.551-.794a.824.824 0 0 0-.85.794v12.7a.824.824 0 0 0 .85.794h13.608a.824.824 0 0 0 .85-.794v-12.7a.824.824 0 0 0-.85-.794z"
          transform="translate(-1 -1)"
        />
        <path
          d="M1 3.381A2.471 2.471 0 0 1 3.551 1h13.608a2.471 2.471 0 0 1 2.551 2.381v5.557H1zm2.551-.794a.824.824 0 0 0-.85.794V7.35h15.308V3.381a.824.824 0 0 0-.85-.794z"
          transform="translate(-1 -1)"
        />
        <path
          d="M1 17.732a2.471 2.471 0 0 0 2.551 2.381H9.5V9H1zm2.551.794a.824.824 0 0 1-.85-.794v-7.144H7.8v7.938z"
          transform="translate(-1 -2.65)"
        />
      </g>
    </svg>
  ),
  NavOrderSvg: () => (
    <svg {...defaultSetting} height="16" width="16" viewBox="0 0 13.942 13.247">
      <g>
        <path
          d="M8.414 15.221H3.442a1.982 1.982 0 0 1-1.981-1.674 2.5 2.5 0 0 1 .066-.939c.231-1.125.456-2.256.66-3.38.213-1.019.413-2.038.621-3.05a1.982 1.982 0 0 1 1.75-1.541H5.3a.112.112 0 0 0 .112-.066c.231-.437.442-.88.7-1.323A2.588 2.588 0 0 1 8.09 2a2.7 2.7 0 0 1 2.773 1.468l.574 1.091a.1.1 0 0 0 .106.06h.74a1.982 1.982 0 0 1 1.723 1.541c.224 1.078.442 2.163.66 3.248s.449 2.216.66 3.307a1.98 1.98 0 0 1-1.921 2.461zm0-1.323h4.939a.661.661 0 0 0 .66-.84c-.119-.562-.231-1.125-.343-1.693L12.679 6.5a.661.661 0 0 0-.66-.536H4.756A.661.661 0 0 0 4.1 6.5c-.066.337-.139.661-.2 1.012Q3.336 10.253 2.768 13a.861.861 0 0 0 0 .43.66.66 0 0 0 .66.463zm1.525-9.261a.3.3 0 0 0 0-.06l-.3-.549a1.4 1.4 0 0 0-1.888-.542 1.494 1.494 0 0 0-.568.6c-.092.185-.191.364-.291.556z"
          transform="translate(-1.443 -1.973)"
        />
      </g>
    </svg>
  ),
  EcommerceDeliverySvg: () => (
    <svg {...defaultSetting} width="16" height="17" viewBox="0 0 16 17">
      <g id="Layer" transform="translate(.66 1.988)">
        <path
          d="M13.453 5.963a.8.8 0 0 0-.66-.318h-1.228v-.661A1.983 1.983 0 0 0 9.584 3h-6.6A1.983 1.983 0 0 0 1 4.984V11.6a1.983 1.983 0 0 0 1.981 1.984H3.1a1.98 1.98 0 0 0 3.724 0h2.218a1.98 1.98 0 0 0 3.731 0 .659.659 0 0 0 .112 0h1.849a.793.793 0 0 0 .792-.794V9a.768.768 0 0 0-.158-.476zm-8.491 7.62a.661.661 0 1 1 .66-.661.661.661 0 0 1-.66.662zm5.943 0a.661.661 0 1 1 .66-.661.661.661 0 0 1-.665.662zm3.3-1.323h-1.32a.659.659 0 0 0-.112 0 1.98 1.98 0 0 0-3.731 0H6.824a1.98 1.98 0 0 0-3.724 0h-.119a.661.661 0 0 1-.66-.661V4.984a.661.661 0 0 1 .66-.661h6.6a.661.661 0 0 1 .66.661v4.63a.66.66 0 1 0 1.321 0V6.969h.99l1.651 2.2z"
          transform="translate(-1 -3)"
        />
      </g>
    </svg>
  ),

  BoxSvg: () => (
    <svg
      {...defaultSetting}
      width="16.545"
      height="17.903"
      viewBox="0 0 16.545 17.903"
    >
      <defs>
        <style>
          {`.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:2px}`}
        </style>
      </defs>
      <g transform="translate(1.156 1.027)">
        <path
          className="cls-1"
          d="M14.233 11.076v-6.33a1.583 1.583 0 0 0-.791-1.369L7.907.212a1.58 1.58 0 0 0-1.581 0L.791 3.377A1.583 1.583 0 0 0 0 4.746v6.33a1.583 1.583 0 0 0 .791 1.369l5.535 3.165a1.58 1.58 0 0 0 1.581 0l5.535-3.165a1.583 1.583 0 0 0 .791-1.369z"
        />
        <path
          d="M0 0l6.938 3.34L13.875 0"
          className="cls-1"
          transform="translate(.179 4.136)"
        />
        <path
          d="M.5 7.965V0"
          className="cls-1"
          transform="translate(6.616 7.911)"
        />
      </g>
    </svg>
  ),

  ActionUserSvg: () => (
    <svg {...defaultSetting} width="16" height="16" viewBox="0 0 16 16">
      <g id="Layer" transform="translate(1.321 .66)">
        <path
          d="M11.046 8.09a3.964 3.964 0 1 0-4.886 0A6.615 6.615 0 0 0 2 14.228v.661a.66.66 0 1 0 1.321 0v-.661a5.282 5.282 0 1 1 10.565 0v.661a.66.66 0 1 0 1.321 0v-.661a6.615 6.615 0 0 0-4.16-6.139zM5.962 4.968A2.641 2.641 0 1 1 8.6 7.614a2.644 2.644 0 0 1-2.638-2.646z"
          transform="translate(-2 -.997)"
        />
      </g>
    </svg>
  ),

  ReportSvg: () => (
    <svg {...defaultSetting} width="16" height="16" viewBox="0 0 16 16">
      <g transform="translate(.644 .65)">
        <path
          d="M8.863 15.541h-5.85a1.983 1.983 0 0 1-1.981-1.984C1 9.587 1 5.618 1 1.683a.662.662 0 1 1 1.319-.033v11.906a.661.661 0 0 0 .555.661h11.991a.662.662 0 0 1 .059 1.323z"
          transform="translate(-.996 -.965)"
        />
        <path
          d="M4.707 10.121V7.078a3 3 0 0 1 1.842-2.785 3.027 3.027 0 0 1 3.48.536 3.005 3.005 0 0 1 1.03 2.3v1.762A3.637 3.637 0 0 0 14 12.509a5.273 5.273 0 0 0 .726.066h.726a.668.668 0 0 1 .007 1.336 9.993 9.993 0 0 1-1.406-.04 4.722 4.722 0 0 1-2.021-.714 4.915 4.915 0 0 1-2.254-3.406 5.089 5.089 0 0 1-.059-.774V7.112a1.855 1.855 0 0 0-3.7-.185 1.69 1.69 0 0 0 0 .258v6.039a.66.66 0 1 1-1.321 0v-3.1z"
          transform="translate(-2.255 -1.982)"
        />
      </g>
    </svg>
  ),

  SettingSvg: () => (
    <svg {...defaultSetting} width="16" height="16" viewBox="0 0 21.973 21.944">
      <g>
        <path
          d="M11.975 8a3.975 3.975 0 1 0 3.975 3.975A3.975 3.975 0 0 0 11.975 8zm0 5.963a1.988 1.988 0 1 1 1.988-1.988 1.988 1.988 0 0 1-1.988 1.988z"
          transform="translate(-1.043 -1.043)"
        />
        <path
          d="M20.27 8.483a2.981 2.981 0 0 0-.258-3.926l-.706-.706a2.981 2.981 0 0 0-3.975-.258A2.981 2.981 0 0 0 12.429 1h-.994a2.981 2.981 0 0 0-2.981 2.594 2.981 2.981 0 0 0-3.926.258l-.706.706a2.981 2.981 0 0 0-.258 3.926A2.981 2.981 0 0 0 1 11.435v.994a2.981 2.981 0 0 0 2.594 2.981 2.981 2.981 0 0 0 .258 3.975l.706.706a2.981 2.981 0 0 0 3.926.258 2.981 2.981 0 0 0 2.981 2.594h.994a2.981 2.981 0 0 0 2.981-2.594 2.981 2.981 0 0 0 3.975-.258l.706-.706a2.981 2.981 0 0 0 .258-3.975 2.981 2.981 0 0 0 2.594-2.981v-.994a2.981 2.981 0 0 0-2.7-2.952zm.606 3.975a.994.994 0 0 1-.994.994 1.8 1.8 0 0 0-1.272 3.081.994.994 0 0 1 0 1.4l-.706.706a.994.994 0 0 1-1.4 0 1.8 1.8 0 0 0-3.081 1.242.994.994 0 0 1-.994.994h-.994a.994.994 0 0 1-.994-.994A1.8 1.8 0 0 0 7.36 18.61a.994.994 0 0 1-1.4 0l-.706-.716a.994.994 0 0 1 0-1.4 1.8 1.8 0 0 0-1.272-3.071.994.994 0 0 1-.994-.994v-.994a.994.994 0 0 1 .994-.994A1.8 1.8 0 0 0 5.254 7.36a.994.994 0 0 1 0-1.391l.716-.716a.994.994 0 0 1 1.4 0 1.8 1.8 0 0 0 3.071-1.272.994.994 0 0 1 .994-.994h.994a.994.994 0 0 1 .994.994A1.8 1.8 0 0 0 16.5 5.254a.994.994 0 0 1 1.4 0l.706.706a.994.994 0 0 1 0 1.4 1.8 1.8 0 0 0 1.272 3.081.994.994 0 0 1 .994.994z"
          transform="translate(-1 -1)"
        />
      </g>
    </svg>
  ),

  ConnectSvg: () => (
    <svg {...defaultSetting} width="16" height="16" viewBox="0 0 21.973 21.944">
      <g>
        <path
          d="M11.975 8a3.975 3.975 0 1 0 3.975 3.975A3.975 3.975 0 0 0 11.975 8zm0 5.963a1.988 1.988 0 1 1 1.988-1.988 1.988 1.988 0 0 1-1.988 1.988z"
          transform="translate(-1.043 -1.043)"
        />
        <path
          d="M537.009,52.103c-41.348,0-74.991,33.641-74.991,74.991c0,22.798,10.238,43.237,26.347,57.003l-70.466,133.881
          c-6.214-1.672-12.736-2.578-19.47-2.578c-16.092,0-31.006,5.113-43.233,13.774l-53.625-48.369
          c6.13-10.862,9.648-23.388,9.648-36.723c0-41.351-33.643-74.991-74.994-74.991c-41.348,0-74.991,33.641-74.991,74.991
          c0,19.961,7.854,38.109,20.616,51.56l-79.882,119.313c-8.378-3.242-17.469-5.04-26.978-5.04C33.64,409.915,0,443.556,0,484.906
          s33.64,74.991,74.991,74.991c41.348,0,74.991-33.641,74.991-74.991c0-19.961-7.854-38.111-20.616-51.562l79.882-119.313
          c8.378,3.242,17.469,5.04,26.978,5.04c16.095,0,31.006-5.113,43.236-13.775l53.622,48.369
          c-6.127,10.862-9.646,23.387-9.646,36.723c0,41.35,33.643,74.991,74.991,74.991c41.351,0,74.994-33.641,74.994-74.991
          c0-22.798-10.241-43.237-26.347-57.002l70.464-133.88c6.214,1.672,12.736,2.579,19.47,2.579
          c41.351,0,74.991-33.641,74.991-74.991C612,85.744,578.36,52.103,537.009,52.103z M74.991,526.902
          c-23.157,0-41.996-18.839-41.996-41.996c0-23.157,18.839-41.996,41.996-41.996s41.996,18.839,41.996,41.996
          C116.987,508.063,98.148,526.902,74.991,526.902z M236.225,286.077c-23.157,0-41.996-18.839-41.996-41.994
          c0-23.157,18.839-41.996,41.996-41.996s41.999,18.839,41.999,41.996C278.224,267.238,259.382,286.077,236.225,286.077z
           M356.434,390.389c0-23.154,18.839-41.993,41.996-41.993s41.999,18.839,41.999,41.993c0,23.157-18.842,41.996-41.999,41.996
          C375.273,432.385,356.434,413.546,356.434,390.389z M537.009,169.09c-23.157,0-41.996-18.839-41.996-41.996
          s18.839-41.996,41.996-41.996c23.157,0,41.996,18.839,41.996,41.996C579.005,150.252,560.166,169.09,537.009,169.09z"
          transform="translate(-1 -1)"
        />
      </g>
    </svg>
  ),
};

export default svg;