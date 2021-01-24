import styles from './ActivityWidget.module.scss';
import 'react-circular-progressbar/dist/styles.css';

const ActivityWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p className={styles.title}><b>Activity</b></p>
      <svg width="275" height="177" viewBox="0 0 275 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 122.885L67.2979 41.8059L101.596 63.4269L135.894 103.966L170.191 29.644L204.489 108.02L238.787 143.155L273.085 117.48" stroke="#0023F7" stroke-width="2"/>
        <path d="M4.95156 45.263C4.95156 44.3 4.24056 43.832 3.75456 43.742V43.715C4.14156 43.589 4.76256 43.229 4.76256 42.311C4.76256 41.294 3.83556 40.7 2.81856 40.7C1.80156 40.7 1.26156 41.132 0.856563 41.582L1.26156 42.104C1.67556 41.699 2.11656 41.393 2.74656 41.393C3.37656 41.393 3.91656 41.744 3.91656 42.401C3.91656 43.049 3.45756 43.409 2.80056 43.409H2.34156V44.102H2.80056C3.51156 44.102 4.08756 44.48 4.08756 45.227C4.08756 45.974 3.50256 46.379 2.69256 46.379C1.88256 46.379 1.27956 45.632 1.18056 45.506L0.694563 46.037C0.784563 46.154 1.45956 47.09 2.71056 47.09C3.97056 47.09 4.95156 46.397 4.95156 45.263ZM10.513 43.904C10.513 42.284 9.811 40.7 8.137 40.7C6.472 40.7 5.761 42.284 5.761 43.904C5.761 45.515 6.463 47.099 8.137 47.099C9.811 47.099 10.513 45.515 10.513 43.904ZM9.631 43.886C9.631 45.299 9.136 46.334 8.137 46.334C7.138 46.334 6.643 45.299 6.643 43.886C6.643 42.464 7.138 41.438 8.137 41.438C9.136 41.438 9.631 42.464 9.631 43.886ZM5.10456 65V64.28H1.93656L3.52956 62.759C3.91656 62.399 4.84356 61.625 4.84356 60.527C4.84356 59.429 4.00656 58.7 2.76456 58.7C1.53156 58.7 0.901563 59.519 0.730563 59.897L1.18956 60.41C1.44156 59.996 1.92756 59.411 2.71056 59.411C3.50256 59.411 3.98856 59.915 3.98856 60.617C3.98856 61.31 3.45756 61.877 2.98056 62.336L0.784563 64.415L0.910563 65H5.10456ZM10.243 63.011C10.243 61.652 9.136 60.977 8.128 60.977C7.786 60.977 7.489 61.031 7.246 61.139L7.57 59.492H10.063V58.79H6.94L6.4 61.706L6.841 61.967C7.084 61.751 7.534 61.634 7.939 61.634C8.65 61.634 9.379 62.066 9.379 63.011C9.379 63.956 8.641 64.388 7.939 64.388C7.246 64.388 6.661 64.019 6.391 63.56L5.905 64.064C6.13 64.46 6.778 65.108 7.948 65.108C9.118 65.108 10.243 64.37 10.243 63.011ZM5.10456 83V82.28H1.93656L3.52956 80.759C3.91656 80.399 4.84356 79.625 4.84356 78.527C4.84356 77.429 4.00656 76.7 2.76456 76.7C1.53156 76.7 0.901563 77.519 0.730563 77.897L1.18956 78.41C1.44156 77.996 1.92756 77.411 2.71056 77.411C3.50256 77.411 3.98856 77.915 3.98856 78.617C3.98856 79.31 3.45756 79.877 2.98056 80.336L0.784563 82.415L0.910563 83H5.10456ZM10.513 79.904C10.513 78.284 9.811 76.7 8.137 76.7C6.472 76.7 5.761 78.284 5.761 79.904C5.761 81.515 6.463 83.099 8.137 83.099C9.811 83.099 10.513 81.515 10.513 79.904ZM9.631 79.886C9.631 81.299 9.136 82.334 8.137 82.334C7.138 82.334 6.643 81.299 6.643 79.886C6.643 78.464 7.138 77.438 8.137 77.438C9.136 77.438 9.631 78.464 9.631 79.886ZM3.52232 101L3.52232 94.79H1.46132V95.429H2.67632L2.67632 101H3.52232ZM9.56624 99.011C9.56624 97.652 8.45924 96.977 7.45124 96.977C7.10924 96.977 6.81224 97.031 6.56924 97.139L6.89324 95.492H9.38624V94.79H6.26324L5.72324 97.706L6.16424 97.967C6.40724 97.751 6.85724 97.634 7.26224 97.634C7.97324 97.634 8.70224 98.066 8.70224 99.011C8.70224 99.956 7.96424 100.388 7.26224 100.388C6.56924 100.388 5.98424 100.019 5.71424 99.56L5.22824 100.064C5.45324 100.46 6.10124 101.108 7.27124 101.108C8.44124 101.108 9.56624 100.37 9.56624 99.011ZM3.52232 119V112.79H1.46132V113.429H2.67632V119H3.52232ZM9.83624 115.904C9.83624 114.284 9.13424 112.7 7.46024 112.7C5.79524 112.7 5.08424 114.284 5.08424 115.904C5.08424 117.515 5.78624 119.099 7.46024 119.099C9.13424 119.099 9.83624 117.515 9.83624 115.904ZM8.95424 115.886C8.95424 117.299 8.45924 118.334 7.46024 118.334C6.46124 118.334 5.96624 117.299 5.96624 115.886C5.96624 114.464 6.46124 113.438 7.46024 113.438C8.45924 113.438 8.95424 114.464 8.95424 115.886ZM7.60628 135.011C7.60628 133.652 6.49928 132.977 5.49128 132.977C5.14928 132.977 4.85228 133.031 4.60928 133.139L4.93328 131.492H7.42628V130.79H4.30328L3.76328 133.706L4.20428 133.967C4.44728 133.751 4.89728 133.634 5.30228 133.634C6.01328 133.634 6.74228 134.066 6.74228 135.011C6.74228 135.956 6.00428 136.388 5.30228 136.388C4.60928 136.388 4.02428 136.019 3.75428 135.56L3.26828 136.064C3.49328 136.46 4.14128 137.108 5.31128 137.108C6.48128 137.108 7.60628 136.37 7.60628 135.011ZM7.87628 151.904C7.87628 150.284 7.17428 148.7 5.50028 148.7C3.83528 148.7 3.12428 150.284 3.12428 151.904C3.12428 153.515 3.82628 155.099 5.50028 155.099C7.17428 155.099 7.87628 153.515 7.87628 151.904ZM6.99428 151.886C6.99428 153.299 6.49928 154.334 5.50028 154.334C4.50128 154.334 4.00628 153.299 4.00628 151.886C4.00628 150.464 4.50128 149.438 5.50028 149.438C6.49928 149.438 6.99428 150.464 6.99428 151.886Z" fill="#BCC1C8"/>
        <path d="M48.7043 176L48.1373 169.79H47.0663L45.2753 174.587H45.2573L43.4663 169.79H42.3863L41.8283 176H42.6923L43.0883 171.095H43.1153L45.0143 176.054H45.5093L47.4083 171.095H47.4353L47.8403 176H48.7043ZM53.938 173.876C53.938 172.553 52.948 171.644 51.679 171.644C50.401 171.644 49.411 172.553 49.411 173.876C49.411 175.208 50.401 176.099 51.679 176.099C52.948 176.099 53.938 175.208 53.938 173.876ZM53.065 173.849C53.065 174.695 52.534 175.361 51.679 175.361C50.815 175.361 50.284 174.695 50.284 173.849C50.284 173.012 50.815 172.346 51.679 172.346C52.534 172.346 53.065 173.012 53.065 173.849ZM58.5576 176V173.471C58.5576 172.445 58.2426 171.644 57.0276 171.644C56.4066 171.644 55.9476 171.977 55.7226 172.4H55.6956L55.7046 171.725H54.8406V176H55.7046V173.849C55.7046 173.03 56.0016 172.355 56.8026 172.355C57.5676 172.355 57.6936 172.895 57.6936 173.615V176H58.5576ZM94.0332 170.519V169.79H89.6592V170.519H91.4142V176H92.2872V170.519H94.0332ZM97.6143 176V171.716H96.7503V174.011C96.7503 174.731 96.4443 175.379 95.6883 175.379C94.9233 175.379 94.7973 174.83 94.7973 174.245V171.716H93.9423V174.281C93.9423 175.343 94.2573 176.099 95.4453 176.099C96.0483 176.099 96.5343 175.802 96.7683 175.388L96.7773 176H97.6143ZM102.709 173.687C102.709 172.49 101.872 171.644 100.684 171.644C99.4965 171.644 98.5155 172.508 98.5155 173.858C98.5155 175.217 99.3885 176.099 100.657 176.099C101.935 176.099 102.484 175.469 102.538 175.424L102.178 174.929C102.079 174.992 101.566 175.424 100.765 175.424C99.9735 175.424 99.4335 174.911 99.3885 174.065H102.682C102.682 174.065 102.709 173.849 102.709 173.687ZM101.89 173.489H99.3975C99.4245 172.976 99.8025 172.265 100.657 172.265C101.521 172.265 101.881 173.012 101.89 173.489ZM106.447 174.749C106.447 174.191 106.087 173.849 105.61 173.651C105.43 173.579 105.268 173.525 105.034 173.444C104.611 173.309 104.197 173.156 104.197 172.805C104.197 172.454 104.467 172.274 104.881 172.274C105.295 172.274 105.709 172.472 105.961 172.733L106.321 172.202C106.051 171.914 105.619 171.644 104.863 171.644C104.107 171.644 103.423 172.076 103.423 172.868C103.423 173.678 104.053 173.903 104.683 174.119C104.971 174.218 105.646 174.362 105.646 174.83C105.646 175.298 105.223 175.442 104.827 175.442C104.431 175.442 103.927 175.208 103.567 174.83L103.153 175.334C103.513 175.802 104.098 176.099 104.818 176.099C105.646 176.099 106.447 175.667 106.447 174.749ZM145.496 169.79H144.578L143.237 174.686L141.806 169.79H140.915L139.484 174.686L138.143 169.79H137.225L139.016 176.009H139.871L141.356 170.987L142.85 176.009H143.705L145.496 169.79ZM149.863 173.687C149.863 172.49 149.026 171.644 147.838 171.644C146.65 171.644 145.669 172.508 145.669 173.858C145.669 175.217 146.542 176.099 147.811 176.099C149.089 176.099 149.638 175.469 149.692 175.424L149.332 174.929C149.233 174.992 148.72 175.424 147.919 175.424C147.127 175.424 146.587 174.911 146.542 174.065H149.836C149.836 174.065 149.863 173.849 149.863 173.687ZM149.044 173.489H146.551C146.578 172.976 146.956 172.265 147.811 172.265C148.675 172.265 149.035 173.012 149.044 173.489ZM154.904 176V169.79H154.049V172.391H154.031C153.734 171.95 153.23 171.644 152.537 171.644C151.286 171.644 150.476 172.598 150.476 173.858C150.476 175.127 151.286 176.099 152.555 176.099C153.176 176.099 153.707 175.838 154.058 175.316H154.076V176H154.904ZM154.076 173.849C154.076 174.704 153.572 175.361 152.717 175.361C151.862 175.361 151.358 174.704 151.358 173.849C151.358 172.994 151.862 172.346 152.717 172.346C153.572 172.346 154.076 172.994 154.076 173.849ZM188.665 170.519V169.79H184.291V170.519H186.046V176H186.919V170.519H188.665ZM193.093 176V173.453C193.093 172.436 192.796 171.644 191.563 171.644C190.942 171.644 190.474 171.977 190.249 172.4H190.231V169.79H189.376V176H190.231V173.885C190.231 173.03 190.564 172.355 191.347 172.355C192.13 172.355 192.229 172.967 192.229 173.579V176H193.093ZM197.897 176V171.716H197.033V174.011C197.033 174.731 196.727 175.379 195.971 175.379C195.206 175.379 195.08 174.83 195.08 174.245V171.716H194.225V174.281C194.225 175.343 194.54 176.099 195.728 176.099C196.331 176.099 196.817 175.802 197.051 175.388L197.06 176H197.897ZM201.472 171.716C201.472 171.716 201.31 171.644 201.022 171.644C200.563 171.644 200.176 171.896 199.969 172.382H199.942L199.951 171.725H199.087V176H199.951V173.867C199.951 173.246 200.14 172.427 200.914 172.427C201.148 172.427 201.301 172.481 201.382 172.517H201.418L201.472 171.716ZM236.119 170.519V169.79H232.672V176H233.545V173.318H235.966V172.589H233.545V170.519H236.119ZM239.414 171.716C239.414 171.716 239.252 171.644 238.964 171.644C238.505 171.644 238.118 171.896 237.911 172.382H237.884L237.893 171.725H237.029V176H237.893V173.867C237.893 173.246 238.082 172.427 238.856 172.427C239.09 172.427 239.243 172.481 239.324 172.517H239.36L239.414 171.716ZM241.07 170.321C241.07 170.015 240.836 169.79 240.512 169.79C240.179 169.79 239.945 170.015 239.945 170.321C239.945 170.627 240.179 170.852 240.512 170.852C240.836 170.852 241.07 170.627 241.07 170.321ZM240.944 176V171.725H240.08V176H240.944Z" fill="#BCC1C8"/>
        <line x1="17" y1="159.6" x2="275" y2="159.6" stroke="#C4C4C4" stroke-width="0.8"/>
        <line x1="17.4" y1="-1.74846e-08" x2="17.4" y2="159" stroke="#C4C4C4" stroke-width="0.8"/>
      </svg>
      <p className={styles.center}>Hours spent on modules</p>
    </div>
  )
}

export default ActivityWidget;