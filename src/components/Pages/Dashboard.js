
function Dashboard() {
    return (
        <>
            <div className="directorist-user-dashboard">
                <div className="directorist-container-fluid">
                    <div className="directorist-user-dashboard__toggle">
                        <a href="#" className="directorist-user-dashboard__toggle__link">
                            <i className="la la-bars" />
                        </a>
                    </div>
                    <div className="directorist-user-dashboard__contents directorist-tab directorist-tab-content-grid-fix">
                        <div className="directorist-user-dashboard__nav directorist-tab__nav directorist-dashboard-nav-collapsed">
                            <span className="directorist-dashboard__nav--close">
                                <i className="fa fa-times" />
                            </span>
                            <div className="directorist-tab__nav__wrapper">
                                <ul className="directorist-tab__nav__items">
                                    <li className="directorist-tab__nav__item">
                                        <a
                                            href="#"
                                            className="directorist-booking-nav-link directorist-tab__nav__link"
                                            target="dashboard_my_listings"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span className="directorist_menuItem-text">
                                                <span className="directorist_menuItem-icon">
                                                    <i className="fa fa-list" />
                                                </span>
                                                My Listing (1){" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="directorist-tab__nav__item">
                                        <a
                                            href="#"
                                            className="directorist-booking-nav-link directorist-tab__nav__link directorist-tab__nav__active"
                                            target="dashboard_profile"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span className="directorist_menuItem-text">
                                                <span className="directorist_menuItem-icon">
                                                    <i className="fa fa-user" />
                                                </span>
                                                My Profile{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="directorist-tab__nav__item">
                                        <a
                                            href="#"
                                            className="directorist-booking-nav-link directorist-tab__nav__link"
                                            target="dashboard_fav_listings"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span className="directorist_menuItem-text">
                                                <span className="directorist_menuItem-icon">
                                                    <i className="fa fa-heart" />
                                                </span>
                                                Favorite Listings{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="directorist-tab__nav__item">
                                        <a
                                            href="#"
                                            className="directorist-booking-nav-link directorist-tab__nav__link"
                                            target="dashboard_announcement"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span className="directorist_menuItem-text">
                                                <span className="directorist_menuItem-icon">
                                                    <i className="fa fa-bullhorn" />
                                                </span>
                                                Announcements{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="directorist-tab__nav__item">
                                        <a
                                            href="#"
                                            className="directorist-booking-nav-link directorist-tab__nav__link"
                                            target="packages"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span className="directorist_menuItem-text">
                                                <span className="directorist_menuItem-icon">
                                                    <i className="fa fa-money" />
                                                </span>
                                                Packages{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="directorist-tab__nav__item">
                                        <a
                                            href="#"
                                            className="directorist-booking-nav-link directorist-tab__nav__link"
                                            target="order_history"
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span className="directorist_menuItem-text">
                                                <span className="directorist_menuItem-icon">
                                                    <i className="fa fa-clock-o" />
                                                </span>
                                                Order History{" "}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="directorist-tab__nav__action">
                                <a
                                    href="https://www.blogelse.com/add-listing/"
                                    className="directorist-btn directorist-btn-dark directorist-btn--add-listing"
                                >
                                    Submit Listing
                                </a>
                                <a
                                    href="https://www.blogelse.com/wp-login.php?action=logout&redirect_to=https%3A%2F%2Fwww.blogelse.com&_wpnonce=47215c6f70"
                                    className="directorist-btn directorist-btn-secondary directorist-btn--logout"
                                >
                                    Log Out
                                </a>
                            </div>
                        </div>
                        <div className="directorist-user-dashboard__tab-content directorist-tab__content">
                            <div className="directorist-tab__pane" id="dashboard_my_listings">
                                <div
                                    className="directorist-dashboard-mylistings"
                                    id="directorist-dashboard-mylistings-js"
                                    data-paged={1}
                                    data-search=""
                                >
                                    <div id="directorist-dashboard-preloader">
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                    <div className="directorist-user-dashboard-area">
                                        <div className="directorist-user-dashboard-tab">
                                            <div className="directorist-user-dashboard-tab__nav">
                                                <ul className="directorist-dashboard-listing-nav-js">
                                                    <li className="directorist-tab-nav--content-link">
                                                        <a
                                                            href="#"
                                                            data-tab="all"
                                                            className="directorist-tab__nav__active"
                                                        >
                                                            All Listings
                                                        </a>
                                                    </li>
                                                    <li className="directorist-tab-nav--content-link">
                                                        <a href="#" data-tab="publish">
                                                            Published
                                                        </a>
                                                    </li>
                                                    <li className="directorist-tab-nav--content-link">
                                                        <a href="#" data-tab="pending">
                                                            Pending
                                                        </a>
                                                    </li>
                                                    <li className="directorist-tab-nav--content-link">
                                                        <a href="#" data-tab="expired">
                                                            Expired
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="directorist-user-dashboard-search">
                                                    <div className="directorist-user-dashboard-search__icon">
                                                        <i className="la la-search" />
                                                    </div>
                                                    <form id="directorist-dashboard-listing-searchform">
                                                        <input
                                                            type="text"
                                                            placeholder="Search listings"
                                                            name="searchtext"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="directorist-user-dashboard-tabcontent">
                                                <div className="directorist-listing-table directorist-table-responsive">
                                                    <table className="directorist-table">
                                                        <thead>
                                                            <tr>
                                                                <th className="directorist-table-listing">
                                                                    Listings
                                                                </th>
                                                                <th className="directorist-table-review">Review</th>
                                                                <th className="directorist-table-review">Category</th>
                                                                <th className="directorist-table-ex-date">
                                                                    Expiration Date
                                                                </th>
                                                                <th className="directorist-table-status">Status</th>
                                                                <th className="directorist_table-plan">Plan</th>
                                                                <th className="directorist-table-actions" />
                                                            </tr>
                                                        </thead>
                                                        <tbody className="directorist-dashboard-listings-tbody">
                                                            <tr data-id={9016}>
                                                                <td>
                                                                    <div className="directorist-listing-table-listing-info">
                                                                        <div className="directorist-listing-table-listing-info__img">
                                                                            <a href="https://www.blogelse.com/?post_type=at_biz_dir&p=9016">
                                                                                <img
                                                                                    src="https://www.blogelse.com/wp-content/plugins/directorist/public/assets/images/grid.jpg"
                                                                                    alt="Test"
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                        <div className="directorist-listing-table-listing-info__content">
                                                                            <h4 className="directorist-title">
                                                                                <a href="https://www.blogelse.com/?post_type=at_biz_dir&p=9016">
                                                                                    Test
                                                                                </a>
                                                                            </h4>
                                                                            <span className="directorist-listing-price">
                                                                                $100.00
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="directorist_dashboard_rating">
                                                                    <ul className="rating">
                                                                        <li>
                                                                            <span className="la la-star-o" />
                                                                        </li>
                                                                        <li>
                                                                            <span className="la la-star-o" />
                                                                        </li>
                                                                        <li>
                                                                            <span className="la la-star-o" />
                                                                        </li>
                                                                        <li>
                                                                            <span className="la la-star-o" />
                                                                        </li>
                                                                        <li>
                                                                            <span className="la la-star-o" />
                                                                        </li>
                                                                        <li className="reviews">
                                                                            <span className="atbd_count">
                                                                                (<b>0/5</b> ){" "}
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className="directorist_dashboard_category">
                                                                    <ul>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fa fas fa-user-circle" />
                                                                                <a href="https://www.blogelse.com/single-category/accounting/">
                                                                                    Accounting
                                                                                </a>
                                                                            </span>{" "}
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td>
                                                                    <span className="directorist-ex-plan">
                                                                        September 4, 2022
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="directorist_badge dashboard-badge directorist_status_pending">
                                                                        Pending
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="directorist_listing-plan">
                                                                        Free Plan
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <div className="directorist-actions">
                                                                        <a
                                                                            href="https://www.blogelse.com/add-listing/edit/9016/"
                                                                            className="directorist-link-btn"
                                                                        >
                                                                            <i className="la la-edit" />
                                                                            Edit
                                                                        </a>
                                                                        <div className="directorist-dropdown">
                                                                            <a href="#" className="directorist-btn-more">
                                                                                <i className="fa fa-ellipsis-h" />
                                                                                More
                                                                            </a>
                                                                            <div className="directorist-dropdown-menu directorist-dashboard-listing-actions">
                                                                                <div className="directorist-dropdown-menu__list">
                                                                                    <a
                                                                                        className="directorist-dropdown-item atpp_change_plan"
                                                                                        data-target="atpp-plan-change-modal"
                                                                                        data-listing_id={9016}
                                                                                        href="#"
                                                                                    >
                                                                                        <i className="la la-edit" />
                                                                                        Pay Now
                                                                                    </a>
                                                                                    <a
                                                                                        className="directorist-dropdown-item "
                                                                                        data-task="delete"
                                                                                        href="#"
                                                                                    >
                                                                                        <i className="fa fa-trash" />
                                                                                        Delete Listing
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="directorist-dashboard-pagination"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                            </div>
                            <div
                                className="directorist-tab__pane directorist-tab__pane--active"
                                id="dashboard_profile"
                            >
                                <form action="#" id="user_profile_form" method="post">
                                    <div className="directorist-row">
                                        <div className="directorist-col-lg-3">
                                            <div className="directorist-image-profile-wrap">
                                                <div
                                                    id="user_profile_pic"
                                                    className="ez-media-uploader directorist-profile-uploader"
                                                    data-type="jpg, jpeg, png, gif"
                                                    data-min-file-items={0}
                                                    data-max-file-items={1}
                                                    data-max-total-file-size={0}
                                                    data-allow-multiple={0}
                                                    data-show-alerts="false"
                                                    data-show-file-size="false"
                                                    data-featured="false"
                                                    data-allow-sorting="false"
                                                    data-show-info="false"
                                                    data-uploader-type="avater"
                                                >
                                                    <div className="ezmu__drop-zone-section">
                                                        <h2>Drop Here</h2>
                                                    </div>
                                                    <div className="ezmu__loading-section">
                                                        <span className="ezmu__loading-icon">
                                                            <span className="ezmu__loading-icon-img-bg" />
                                                        </span>
                                                    </div>
                                                    <div className="ezmu__media-picker-section">
                                                        <div className="ezmu__media-picker-controls">
                                                            <span className="ezmu__media-picker-icon-wrap-avater">
                                                                <span className="ezmu__icon ezmu-icon-avater" />
                                                            </span>
                                                            <div className="ezmu__media-picker-buttons">
                                                                <div className="ezmu__upload-button-wrap">
                                                                    <input
                                                                        type="file"
                                                                        id="ezmu__file-input"
                                                                        className="ezmu__file-input"
                                                                        accept=".jpg, .jpeg, .png, .gif"
                                                                    />
                                                                    <label
                                                                        htmlFor="ezmu__file-input"
                                                                        className="ezmu__btn ezmu__input-label"
                                                                    >
                                                                        Select
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ezmu__preview-section ezmu--show">
                                                        <div className="ezmu__thumbnail-area">
                                                            <div className="ezmu__thumbnail-list">
                                                                <div
                                                                    className="ezmu__thumbnail-list-item ezmu__thumbnail_avater"
                                                                    data-id={0}
                                                                >
                                                                    <div className="ezmu__thumbnail-list-item_front">
                                                                        <div className="ezmu__thumbnail-front-item ezmu__front-item__close">
                                                                            <span className="ezmu__front-item__close-icon">
                                                                                <span className="ezmu__front-item__close-btn" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ezmu__thumbnail-list-item_back">
                                                                      <img
                                                                      >
                                                                      </img>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ezmu__media-picker-buttons">
                                                            <div className="ezmu__upload-button-wrap">
                                                                <label
                                                                    className="ezmu__btn ezmu__input-label ezmu__update-file-btn"
                                                                    htmlFor="ezmu__file-input"
                                                                >
                                                                    Change
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="directorist-col-lg-9">
                                            <div className="directorist-user-profile-edit">
                                                <div className="directorist-card directorist-user-profile-box">
                                                    <div className="directorist-card__header">
                                                        <h4 className="directorist-card__header--title">
                                                            My Profile
                                                        </h4>
                                                    </div>
                                                    <div className="directorist-card__body">
                                                        <div className="directorist-user-info-wrap">
                                                            <input type="hidden" name="ID" defaultValue={651} />
                                                            <div className="directorist-user-full-name">
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="full_name">Display Name</label>
                                                                    <input
                                                                        className="directorist-form-element"
                                                                        type="text"
                                                                        id="full_name"
                                                                        name="user[full_name]"
                                                                        defaultValue="nency.patel"
                                                                        placeholder="Enter your display name"
                                                                    />
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="user_name">User Name</label>
                                                                    <input
                                                                        className="directorist-form-element"
                                                                        id="user_name"
                                                                        type="text"
                                                                        disabled="disabled"
                                                                        name="user[user_name]"
                                                                        defaultValue=""
                                                                    />{" "}
                                                                    <span className="directorist-input-extra-info">
                                                                        (username can not be changed)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="directorist-user-first-name">
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="first_name">First Name</label>
                                                                    <input
                                                                        className="directorist-form-element"
                                                                        id="first_name"
                                                                        type="text"
                                                                        name="user[first_name]"
                                                                        defaultValue=""
                                                                    />
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="last_name">Last Name</label>
                                                                    <input
                                                                        className="directorist-form-element"
                                                                        id="last_name"
                                                                        type="text"
                                                                        name="user[last_name]"
                                                                        defaultValue=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="directorist-user-email">
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="req_email">Email (required)</label>
                                                                    <input
                                                                        className="directorist-form-element"
                                                                        id="req_email"
                                                                        type="text"
                                                                        name="user[user_email]"
                                                                        defaultValue=""
                                                                        required=""
                                                                    />
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="phone">Phone</label>
                                                                    <input
                                                                        className="directorist-form-element"
                                                                        type="tel"
                                                                        id="phone"
                                                                        name="user[phone]"
                                                                        defaultValue=""
                                                                        placeholder="Enter your phone number"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="directorist-user-site-url">
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="website">Website</label>
                                                                    <input
                                                                        className="directorist-form-element"
                                                                        id="website"
                                                                        type="text"
                                                                        name="user[website]"
                                                                        defaultValue=""
                                                                    />
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="address">Address</label>
                                                                    <input
                                                                        className="directorist-form-element"
                                                                        id="address"
                                                                        type="text"
                                                                        name="user[address]"
                                                                        defaultValue=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="directorist-user-password">
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="new_pass">New Password</label>
                                                                    <input
                                                                        id="new_pass"
                                                                        className="directorist-form-element"
                                                                        type="password"
                                                                        name="user[new_pass]"
                                                                        placeholder="Enter a new password"
                                                                    />
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="confirm_pass">
                                                                        Confirm New Password
                                                                    </label>
                                                                    <input
                                                                        id="confirm_pass"
                                                                        className="directorist-form-element"
                                                                        type="password"
                                                                        name="user[confirm_pass]"
                                                                        placeholder="Confirm your new password"
                                                                    />
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="bio">About Author</label>
                                                                    <textarea
                                                                        className="wp-editor-area directorist-form-element"
                                                                        style={{ height: 200 }}
                                                                        autoComplete="off"
                                                                        cols={40}
                                                                        name="user[bio]"
                                                                        id="bio"
                                                                        defaultValue={""}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="directorist-user-socials">
                                                                <h4 className="directorist-user-social-label">
                                                                    Social Profiles
                                                                </h4>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="facebook">
                                                                        <span className="directorist-social-icon">
                                                                            <i className="fa fa-facebook" />
                                                                        </span>{" "}
                                                                        Facebook
                                                                    </label>
                                                                    <input
                                                                        id="facebook"
                                                                        className="directorist-form-element"
                                                                        type="url"
                                                                        name="user[facebook]"
                                                                        defaultValue=""
                                                                        placeholder="Enter your facebook url"
                                                                    />
                                                                    <span className="directorist-input-extra-info">
                                                                        Leave it empty to hide
                                                                    </span>
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="twitter">
                                                                        <span className="directorist-social-icon">
                                                                            <i className="fa fa-twitter" />
                                                                        </span>
                                                                        Twitter
                                                                    </label>
                                                                    <input
                                                                        id="twitter"
                                                                        className="directorist-form-element"
                                                                        type="url"
                                                                        name="user[twitter]"
                                                                        defaultValue=""
                                                                        placeholder="Enter your twitter url"
                                                                    />
                                                                    <span className="directorist-input-extra-info">
                                                                        Leave it empty to hide
                                                                    </span>
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="linkedIn">
                                                                        <span className="directorist-social-icon">
                                                                            <i className="fa fa-linkedin" />
                                                                        </span>
                                                                        LinkedIn
                                                                    </label>
                                                                    <input
                                                                        id="linkedIn"
                                                                        className="directorist-form-element"
                                                                        type="url"
                                                                        name="user[linkedIn]"
                                                                        defaultValue=""
                                                                        placeholder="Enter linkedIn url"
                                                                    />
                                                                    <span className="directorist-input-extra-info">
                                                                        Leave it empty to hide
                                                                    </span>
                                                                </div>
                                                                <div className="directorist-form-group">
                                                                    <label htmlFor="youtube">
                                                                        <span className="directorist-social-icon">
                                                                            <i className="fa fa-youtube" />
                                                                        </span>
                                                                        Youtube
                                                                    </label>
                                                                    <input
                                                                        id="youtube"
                                                                        className="directorist-form-element"
                                                                        type="url"
                                                                        name="user[youtube]"
                                                                        defaultValue=""
                                                                        placeholder="Enter youtube url"
                                                                    />
                                                                    <span className="directorist-input-extra-info">
                                                                        Leave it empty to hide
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <button
                                                                type="submit"
                                                                className="directorist-btn directorist-btn-lg directorist-btn-dark directorist-btn-profile-save"
                                                                id="update_user_profile"
                                                            >
                                                                Save Changes
                                                            </button>
                                                            <div id="directorist-prifile-notice" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>{" "}
                            </div>
                            <div className="directorist-tab__pane" id="dashboard_fav_listings">
                                <div className="directorist-favourite-items-wrap">
                                    <div className="directorist-favourirte-items">
                                        <div className="directorist-notfound">Nothing found!</div>
                                    </div>
                                </div>{" "}
                            </div>
                            <div className="directorist-tab__pane" id="dashboard_announcement">
                                <div className="directorist-announcement-wrapper">
                                    <p className="directorist_not-found">No announcements found</p>
                                </div>{" "}
                            </div>
                            <div className="directorist-tab__pane" id="packages">
                                {" "}
                                <div className="atbd_tab_inner" id="manage_fees">
                                    <div className="atbd_manage_fees_wrapper">
                                        <p className="no_package_found">No package found!</p>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="directorist-tab__pane" id="order_history">
                                <div className="atbd_tab_inner" id="manage_invoices">
                                    <div className="atbd_manage_fees_wrapper">
                                        <p className="no_order_found">No order found!</p>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                    </div>
                </div>
                <div className="directorist-shade" />
            </div>

        </>

    );
}

export default Dashboard;