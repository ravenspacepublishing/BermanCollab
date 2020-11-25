$(document).ready(function () {
  $("body").on("pageLoadComplete", function () {
    $("#mainMenuInside .home_link > a")
      .eq(0)
      .html('<span class="menuIcon" id="homeIcon"></span>Home');
  });

  $("body").attr("id", "body");
  $("article").attr("id", "article");

  var shareThis = window.ShareThis;
  const twitterSharer = window.ShareThisViaTwitter;
  const facebookSharer = window.ShareThisViaFacebook;
  const emailSharer = window.ShareThisViaEmail;

  const selectionShare = shareThis({
    selector: ".primary_role_composite",
    sharers: [twitterSharer, facebookSharer, emailSharer],
  });

  selectionShare.init();
});

window.customColophon = function () {
  var footer = $("#footer");
  footer.removeClass("caption_font");

  var footerContent =
    '<div class="footer__content">' +
    '<div class="footer__item footer__item--1">' +
    '<a class="footer__logo" href="https://ravenspacepublishing.org/">' +
    '<img class="teaching__img" src="http://publications.ravenspacepublishing.org/as-i-remember-it/media/ravenspace-logo.png"></a>' +
    "</div>" +
    '<div class="footer__item footer__item--2">' +
    '<ul class="footer__list">' +
    '<li class="footer__list-item footer__list-item--territory"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/territory">Sample Theme 1</a></li>' +
    '<li class="footer__list-item footer__list-item--colonialism"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/colonialism">Sample Theme 2</a></li>' +
    '<li class="footer__list-item footer__list-item--community"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/community">Sample Theme 3</a></li>' +
    '<li class="footer__list-item footer__list-item--wellness"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/wellness">Sample Theme 4</a></li>' +
    "</ul>" +
    "</div>" +
    '<div class="footer__item footer__item--3">' +
    '<ul class="footer__list">' +
    '<li class="footer__list-item"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/language">Sample Resource 1</a></li>' +
    '<li class="footer__list-item"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/our-process">Sample Resource 2</a></li>' +
    '<li class="footer__list-item"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/resources">Sample Resource 3 </a></li>' +
    '<li class="footer__list-item"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/about">Sample About</a></li>' +
    "</ul>" +
    "</div>" +
    '<div class="footer__item footer__item--4">' +
    '<ul class="footer__list">' +
    '<li class="" style="font-size: 1.6rem; line-height: 1.5;">' +
    '<a href="http://publications.ravenspacepublishing.org/as-i-remember-it/respecting-traditional-knowledge">Respecting Traditional Knowledge</a>' +
    "</li>" +
    '<li class="" style="font-size: 1.6rem; line-height: 1.5;"><a href="http://publications.ravenspacepublishing.org/as-i-remember-it/terms-of-use">Terms of Use</a></li>' +
    '<li class="footer__info-list-item footer__info-list-item--1">© UBC Press 2019</li>' +
    '<li class="footer__info-list-item">ISBN 978-0-7748-6125-0</li>' +
    "</ul>" +
    "</div>" +
    "</div>";

  footer.append(footerContent);
};
