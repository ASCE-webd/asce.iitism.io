var create_flip_card = (data) => {
  var a_fb = $("<a></a>", {
    href: data.fb_url,
    style: "left: 25%",
    class: "fa fa-facebook",
  });
  var a_in = $("<a></a>", {
    href: data.in_url,
    style: "right: 25%",
    class: "fa fa-linkedin",
  });

  var flip_card_social = $("<div></div>", {
    class: "flip-card-social",
  })
    .append(a_fb)
    .append(a_in);

  var flip_card_det = $("<div></div>", {
    class: "flip-card-det",
  })
    .append($("<h3></h3>").text(data.name))
    .append($("<p></p>", { class: "flip-card-underline" }))
    .append($("<p></p>").text(data.det))
    .append(flip_card_social);

  var flip_card_img = $("<img />", {
    class: "flip-card-img",
    src: data.profile_pic_url,
    alt: "User Image",
  });

  var flip_card_back = $("<div></div>", {
    class: "flip-card-back",
  })
    .append(flip_card_img.clone())
    .append(flip_card_det);

  var flip_card_front = $("<div></div>", {
    class: "flip-card-front",
  }).append(flip_card_img.clone());

  var flip_card = $("<div></div>", {
    class: "flip-card",
  })
    .append(flip_card_front)
    .append(flip_card_back);
  var flip_card_container = $("<div></div>", {
    class: "flip-card-container",
  }).append(flip_card);

  return flip_card_container;
};

$().ready(() => {
  var data = [
    {
      name: "Lorem ipsum",
      det: "Lorem ipsum dolor",
      profile_pic_url: "image/profile-pic/dummy.png",
      fb_url: "https://facebook.com",
      in_url: "https://linkedin.com",
    },
    {
      name: "Lorem ipsum",
      det: "Lorem ipsum dolor",
      profile_pic_url: "image/profile-pic/dummy.png",
      fb_url: "https://facebook.com",
      in_url: "https://linkedin.com",
    },
    {
      name: "Lorem ipsum",
      det: "Lorem ipsum dolor",
      profile_pic_url: "image/profile-pic/dummy.png",
      fb_url: "https://facebook.com",
      in_url: "https://linkedin.com",
    },
    {
      name: "Lorem ipsum",
      det: "Lorem ipsum dolor",
      profile_pic_url: "image/profile-pic/dummy.png",
      fb_url: "https://facebook.com",
      in_url: "https://linkedin.com",
    },
    {
      name: "Lorem ipsum",
      det: "Lorem ipsum dolor",
      profile_pic_url: "image/profile-pic/dummy.png",
      fb_url: "https://facebook.com",
      in_url: "https://linkedin.com",
    },
    {
      name: "Lorem ipsum",
      det: "Lorem ipsum dolor",
      profile_pic_url: "image/profile-pic/dummy.png",
      fb_url: "https://facebook.com",
      in_url: "https://linkedin.com",
    },
    {
      name: "Lorem ipsum",
      det: "Lorem ipsum dolor",
      profile_pic_url: "image/profile-pic/dummy.png",
      fb_url: "https://facebook.com",
      in_url: "https://linkedin.com",
    },
  ];
  $("#profile-flip-card").append(data.map((user) => create_flip_card(user)));
});
