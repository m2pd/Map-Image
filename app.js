const data = [
  {
    offices: '1a',
    floor: [],
  },
  {
    offices: '1b',
    floor: [
      {
        key: 'floor-1',
        data: {
          room_1: {
            title: 'Phòng HV 08',
            media: [
              // {
              //   src: 'https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/396548650_826254149281004_3936210838155299195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mLNmZIvcDzkAX97FTqh&_nc_ht=scontent.fdad7-1.fna&oh=00_AfA8mQGEupB0rSQoNeNfY468OmxnRzVb9ZLmm5LXR0n1sQ&oe=654654A7',
              //   opts: {
              //     caption: 'First caption',
              //     thumb: '1_s.jpg',
              //   },
              // },
              // {
              //   src: 'https://scontent.fdad7-2.fna.fbcdn.net/v/t39.30808-6/395621414_3227335997559385_6771990558301914327_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rTnxUbT3GUoAX8gjky9&_nc_ht=scontent.fdad7-2.fna&oh=00_AfCIPZf1S3KccJIuviGduM4qv5xuZX_AIXuLsmOrvmhjbw&oe=654796BD',
              //   opts: {
              //     caption: 'Second caption',
              //     thumb: '2_s.jpg',
              //   },
              // },
            ],
          },
          room_2: {
            title: 'Phòng HV 07',
            media: [
              // {
              //   src: 'https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/396548650_826254149281004_3936210838155299195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mLNmZIvcDzkAX97FTqh&_nc_ht=scontent.fdad7-1.fna&oh=00_AfA8mQGEupB0rSQoNeNfY468OmxnRzVb9ZLmm5LXR0n1sQ&oe=654654A7',
              //   opts: {
              //     caption: 'First caption',
              //     thumb: '1_s.jpg',
              //   },
              // },
              // {
              //   src: 'https://scontent.fdad7-2.fna.fbcdn.net/v/t39.30808-6/395621414_3227335997559385_6771990558301914327_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rTnxUbT3GUoAX8gjky9&_nc_ht=scontent.fdad7-2.fna&oh=00_AfCIPZf1S3KccJIuviGduM4qv5xuZX_AIXuLsmOrvmhjbw&oe=654796BD',
              //   opts: {
              //     caption: 'Second caption',
              //     thumb: '2_s.jpg',
              //   },
              // },
            ],
          },
          room_3: {
            title: 'Phòng HV 06',
            media: [],
          },
          room_4: {
            title: 'Phòng HV 05',
            media: [],
          },
          room_5: {
            title: 'Phòng HV 04',
            media: [],
          },
          room_6: {
            title: 'Phòng HV 03',
            media: [],
          },
          room_7: {
            title: 'Phòng HV 02',
            media: [],
          },
          room_8: {
            title: 'Phòng HV 01',
            media: [],
          },
          room_9: {
            title: 'Phòng khách 84',
            media: [],
          },
          room_10: {
            title: 'Phòng HV 11',
            media: [],
          },
          room_11: {
            title: 'Phòng HV 10',
            media: [],
          },
          room_12: {
            title: 'room_12',
            media: [],
          },
          room_13: {
            title: 'Phòng kỹ thuật',
            media: [],
          },
          room_14: {
            title: 'Thang xem kt-th-01',
            media: [],
          },
          room_15: {
            title: 'Phòng kỹ thuật',
            media: [],
          },
          room_16: {
            title: 'Trực ban văn thư',
            media: [],
          },
          room_17: {
            title: 'Sảnh tầng 1',
            media: [],
          },
          room_18: {
            title: 'Phòng kinh danh và quan hệ Khách hàng',
            media: [],
          },
          room_19: {
            title: 'Phòng dịch vụ pháp lý',
            media: [],
          },
          room_20: {
            title: 'Phòng hành chính tổng hợp',
            media: [],
          },
          room_21: {
            title: 'Phòng hội thảo',
            media: [],
          },
          room_22: {
            title: 'Kho',
            media: [],
          },
          room_23: {
            title: 'Nhà vệ sinh',
            media: [],
          },
          room_24: {
            title: 'Nhà vệ sinh',
            media: [],
          },
          room_25: {
            title: 'Sảnh giải lao',
            media: [],
          },
          room_27: {
            title: 'Hành lang',
            media: [],
          },
          room_28: {
            title: 'Hành lang',
            media: [],
          },
          room_29: {
            title: 'Thang bộ lên tầng 2',
            media: [],
          },
          room_30: {
            title: 'Hành lang',
            media: [],
          },
        },
      },
      {
        key: 'floor-2',
        data: {
          room_1: {
            title: 'Phòng phát triển ứng dụng trên thiết bị di động',
            media: [],
          },
          room_2: {
            title: 'Phòng triển khai dự án phần mềm 03',
            media: [],
          },
          room_3: {
            title: 'Sảnh nghỉ giải lao',
            media: [],
          },
          room_4: {
            title: 'Phòng triển khai dự án phần mềm 02',
            media: [],
          },
          room_5: {
            title: 'Phòng triển khai dự án phần mềm 01',
            media: [],
          },
          room_6: {
            title: 'Thông tầng',
            media: [],
          },
          room_7: {
            title: 'Phòng khách chỉ huy',
            media: [
              // {
              //   src: 'https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/396548650_826254149281004_3936210838155299195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mLNmZIvcDzkAX97FTqh&_nc_ht=scontent.fdad7-1.fna&oh=00_AfA8mQGEupB0rSQoNeNfY468OmxnRzVb9ZLmm5LXR0n1sQ&oe=654654A7',
              //   opts: {
              //     caption: 'First caption',
              //     thumb: '1_s.jpg',
              //   },
              // },
              // {
              //   src: 'https://scontent.fdad7-2.fna.fbcdn.net/v/t39.30808-6/395621414_3227335997559385_6771990558301914327_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rTnxUbT3GUoAX8gjky9&_nc_ht=scontent.fdad7-2.fna&oh=00_AfCIPZf1S3KccJIuviGduM4qv5xuZX_AIXuLsmOrvmhjbw&oe=654796BD',
              //   opts: {
              //     caption: 'Second caption',
              //     thumb: '2_s.jpg',
              //   },
              // },
            ],
          },
          room_8: {
            title: 'Phòng đào tạo vào hợp tác quốc tế',
            media: [],
          },
          room_9: {
            title: 'Sảnh nghỉ giải lao',
            media: [],
          },
          room_10: {
            title: 'Ban tài chính',
            media: [],
          },
          room_11: {
            title: 'Ban chính trị',
            media: [],
          },
          room_12: {
            title: 'Phó chủ tịch hội đồng quản lý',
            media: [],
          },
          room_13: {
            title: 'Giám đốc',
            media: [],
          },
          room_14: {
            title: 'Thang máy',
            media: [],
          },
          room_15: {
            title: 'Thang bộ',
            media: [],
          },
          room_16: {
            title: 'Sảnh tầng 2',
            media: [],
          },
          room_17: {
            title: 'Kỹ thuật',
            media: [],
          },
          room_18: {
            title: 'WC',
            media: [],
          },
          room_19: {
            title: 'Cầu thang thoát hiểm',
            media: [],
          },
          room_20: {
            title: 'Phó Giám đốc',
            media: [],
          },
          room_21: {
            title: 'Phó Giám đốc',
            media: [],
          },
          room_22: {
            title: 'Phòng nghiên cứu phát triển và chuyển giao công nghệ',
            media: [],
          },
          room_23: {
            title: 'Hành lang',
            media: [],
          },
        },
      },
      {
        key: 'floor-3',
        data: {
          room_1: {
            title: 'Phòng đào tạo kỹ năng CNTT 02',
            media: [],
          },
          room_2: {
            title: 'Phòng đào tạo kỹ năng CNTT 02',
            media: [],
          },
          room_3: {
            title: 'Sảnh nghỉ giải lao',
            media: [],
          },
          room_4: {
            title: 'Phòng đào tạo an toàn ANTT 02',
            media: [],
          },
          room_5: {
            title: 'Phòng thi tiếng anh CNTT trực tuyến',
            media: [],
          },
          room_6: {
            title: 'Phòng đào tạo an toàn ANTT 01',
            media: [],
          },
          room_7: {
            title: 'Sảnh nghỉ giải lao',
            media: [],
          },
          room_8: {
            title: 'Phòng đào tạo Tác chiến không gian mạng 02',
            media: [],
          },
          room_9: {
            title: 'Phòng đào tạo Tác chiến không gian mạng 01',
            media: [],
          },
          room_10: {
            title: 'Phòng thảo luận giáo viên',
            media: [],
          },
          room_11: {
            title: 'Phòng đào tạo tiếng anh 02',
            media: [],
          },
          room_12: {
            title: 'Cầu thang bộ',
            media: [],
          },
          room_13: {
            title: 'Phòng kỹ thuật',
            media: [],
          },
          room_14: {
            title: 'Nhà vệ sinh',
            media: [],
          },
          room_15: {
            title: 'Sảnh tầng 3',
            media: [],
          },
          room_16: {
            title: 'Thang máy',
            media: [],
          },
          room_17: {
            title: 'Thang bộ',
            media: [],
          },
          room_18: {
            title: 'Phòng thảo luận giáo viên',
            media: [],
          },
          room_19: {
            title: 'Phòng đào tạo tiếng anh 01',
            media: [],
          },
        },
      },
      {
        key: 'floor-4',
        data: {
          room_1: {
            title: 'Đào tạo lập trình nhúng',
            media: [],
          },
          room_2: {
            title: 'Sảnh nghỉ giải lao',
            media: [],
          },
          room_3: {
            title: 'Phòng thực hành tổng hợp an toàn thông tin - Tác chiến KGM',
            media: [],
          },
          room_4: {
            title: 'Sảnh nghỉ giải lao',
            media: [],
          },
          room_5: {
            title: 'Đào tạo lập trình ứng dụng',
            media: [],
          },
          room_6: {
            title: 'Đào tạo quản trị mạng và hệ thống',
            media: [],
          },
          room_7: {
            title: 'Cầu thang bộ',
            media: [],
          },
          room_8: {
            title: 'Thang máy',
            media: [],
          },
          room_9: {
            title: 'Sảnh tầng 4',
            media: [],
          },
          room_10: {
            title: 'WC',
            media: [],
          },
          room_11: {
            title: 'Kỹ thuật',
            media: [],
          },
          room_12: {
            title: 'Cầu thang thoát hiểm',
            media: [],
          },
          room_13: {
            title: 'Đào tạo trực tuyến',
            media: [],
          },
          room_14: {
            title: 'Hành lang',
            media: [],
          },
        },
      },
      {
        key: 'floor-5',
        data: {
          room_1: {
            title: 'CIVIL SERVER FARM',
            media: [],
          },
          room_2: {
            title: 'MIUTARY SERVER FARM',
            media: [],
          },
          room_3: {
            title: 'PHÒNG HỌP',
            media: [],
          },
          room_4: {
            title: 'THANG BỘ',
            media: [],
          },
          room_5: {
            title: 'KHO KỸ THUẬT',
            media: [],
          },
          room_6: {
            title: 'NHÀ VỆ SINH',
            media: [],
          },
          room_7: {
            title: 'SẢNH TẦNG 5',
            media: [],
          },
          room_8: {
            title: 'THANG MÁY',
            media: [],
          },
          room_9: {
            title: 'PHÒNG LÀM VIỆC',
            media: [],
          },
          room_10: {
            title: 'PHÒNG LÀM VIỆC',
            media: [],
          },
        },
      },
      {
        key: 'floor-6',
        data: {
          room_1: {
            title: 'BATTERY FARM',
            media: [],
          },
          room_2: {
            title: 'UPS ROOM',
            media: [],
          },
          room_3: {
            title: 'CIVIL SNOC',
            media: [],
          },
          room_4: {
            title: 'MILITARY SNOC',
            media: [],
          },
          room_5: {
            title: 'KHO KỸ THUẬT',
            media: [],
          },
          room_6: {
            title: 'NHÀ VỆ SINH',
            media: [],
          },
          room_7: {
            title: 'SẢNH TẦNG 6',
            media: [],
          },
          room_8: {
            title: 'THANG MÁY',
            media: [],
          },
          room_9: {
            title: 'THANG BỘ',
            media: [],
          },
        },
      },
    ],
  },
  {
    offices: '1c',
    floor: [],
  },
];

var query = '(min-width: 576px)';
var media = window.matchMedia(query);

const defaultOptionsMapster = {
  fillOpacity: 0.4,
  fillColor: '04748185',
  stroke: true,
  strokeColor: '04748185',
  strokeOpacity: 1,
  strokeWidth: 1,
  singleSelect: true,
  mapKey: 'name',
  listKey: 'name',
  showToolTip: true,
  toolTipClose: [
    'tooltip-click',
    'area-click',
    'area-mouseout',
    'image-mouseout',
  ],
  highlight: true,
  scaleMap: true,
};

let content_floor_0 = {
  room_1: 'Tầng 1 <br />',
  room_2: 'Tầng 2',
  room_3: 'Tầng 3',
  room_4: 'Tầng 4',
  room_5: 'Tầng 5',
  room_6: 'Tầng 6',
};

let content_floor_office = {
  room_1: 'Toà nhà 1A',
  room_2: 'Toà nhà 1B',
  room_3: 'Toà nhà 1C',
};

const initLoadData = () => {
  const floor0 = $('#floor-0');
  const floor1A = $('#floor-1A');
  const floor1B = $('#floor-1B');
  const floor1C = $('#floor-1C');
  floor0.mapster(handlerMapsterFloor0(content_floor_0));
  floor1A.mapster(handlerMapsterFloor0(content_floor_0));
  floor1B.mapster(handlerMapsterFloor0(content_floor_0));
  floor1C.mapster(handlerMapsterFloor0(content_floor_0));

  //setup Another Floor

  for (const office of data) {
    for (const floorData of office.floor) {
      const _querySelector = $(`#${floorData.key}`);
      const listKeyStyle = [];
      for (const [key, value] of Object.entries(floorData.data)) {
        if (value.media.length > 0) {
          listKeyStyle.push(key);
        }
      }
      _querySelector.mapster(handlerMapster(floorData.data, listKeyStyle));
    }
  }
};

const handleActiveFancyBox = (dataFancyBox) => {
  $.fancybox.open(dataFancyBox, {
    loop: false,
  });
};

const handlerMapster = (contentFloor, listKeyStyle) => {
  return {
    ...defaultOptionsMapster,
    areas:
      listKeyStyle && listKeyStyle.length > 0
        ? listKeyStyle.map((item) => {
            return {
              key: item,
              fillColor: 'd42e16',
              strokeColor: '3320FF',
            };
          })
        : [{}],

    onMouseover: function (e) {
      // Nếu trình duyệt đang ở chế độ di động
      // Chạy mã JavaScript của bạn

      if (media.matches) {
        // Cập nhật tooltip dựa trên area hiện tại
        $(this).tooltipster({
          content: contentFloor[e.key].title, // Nội dung tooltip
          theme: 'tooltipster-custom', // Thay đổi theme theo ý muốn
          trigger: 'click', // Hiển thị tooltip khi hover
          interactive: true, // Cho phép tương tác với tooltip
          contentAsHTML: true, // Cho phép HTML trong tooltip content
          animation: 'grow',
        });

        $(this).tooltipster('open');
      }
    },

    onMouseout: function () {
      $(this).tooltipster('close');
      if (media.matches) {
        // Đóng tooltip khi không hover nữa
      }
    },
    onClick: function (e) {
      // var fancybox = new Fancybox({
      //   selector: '.my-fancybox',
      // });

      // fancybox.render('<h1>Hello, world!</h1>');
      // Fancybox.show([{ src: '#dialog-content', type: 'inline' }]);
      if (media.matches) {
        if (contentFloor[e.key].media.length > 0) {
          handleActiveFancyBox(contentFloor[e.key].media);
        }
      }
      if (!media.matches) {
        // Cập nhật tooltip dựa trên area hiện tại
        $(this).tooltipster({
          content: contentFloor[e.key].title, // Nội dung tooltip
          theme: 'tooltipster-custom', // Thay đổi theme theo ý muốn
          trigger: 'click', // Hiển thị tooltip khi hover
          interactive: true, // Cho phép tương tác với tooltip
          contentAsHTML: true, // Cho phép HTML trong tooltip content
          // animation: 'grow',
        });

        $(this).tooltipster('open');
      }
    },
  };
};

const handlerMapsterFloor0 = (contentFloor) => {
  return {
    ...defaultOptionsMapster,

    onMouseover: function (e) {
      if (media.matches) {
        $(this).tooltipster({
          content: contentFloor[e.key], // Nội dung tooltip
          theme: 'tooltipster-custom', // Thay đổi theme theo ý muốn
          trigger: 'click', // Hiển thị tooltip khi hover
          interactive: true, // Cho phép tương tác với tooltip
          contentAsHTML: true, // Cho phép HTML trong tooltip content
          animation: 'grow',
        });

        $(this).tooltipster('open');
      }
    },

    onMouseout: function () {
      $(this).tooltipster('close');
      if (media.matches) {
        // Đóng tooltip khi không hover nữa
      }
    },
    onClick: function (e) {
      // console.log(e);
      // console.log($('#offices').val());
      // return;
      const valueSelect = e.key.split('_')[1] || 0;
      $('#photos')
        .val('photo-' + valueSelect)
        .change();

      // if (!media.matches) {
      //   $(this).tooltipster({
      //     content: contentFloor[e.key], // Nội dung tooltip
      //     theme: 'tooltipster-custom', // Thay đổi theme theo ý muốn
      //     trigger: 'click', // Hiển thị tooltip khi hover
      //     interactive: true, // Cho phép tương tác với tooltip
      //     contentAsHTML: true, // Cho phép HTML trong tooltip content
      //     animation: 'grow',
      //   });

      //   $(this).tooltipster('open');
      // }
    },
  };
};

const handlerMapsterOffice = (contentFloor) => {
  return {
    ...defaultOptionsMapster,

    onMouseover: function (e) {
      if (media.matches) {
        $(this).tooltipster({
          content: contentFloor[e.key], // Nội dung tooltip
          theme: 'tooltipster-custom', // Thay đổi theme theo ý muốn
          trigger: 'click', // Hiển thị tooltip khi hover
          interactive: true, // Cho phép tương tác với tooltip
          contentAsHTML: true, // Cho phép HTML trong tooltip content
          animation: 'grow',
        });

        $(this).tooltipster('open');
      }
    },

    onMouseout: function () {
      $(this).tooltipster('close');
    },
    onClick: function (e) {
      const valueSelect = e.key.split('_')[1] || 0;
      // console.log('valueSelect::', valueSelect);
      $('#offices')
        .val('office-' + valueSelect)
        .change();
    },
  };
};

$(document).ready(function () {
  const floorOffice = $('#floor-office');
  floorOffice.mapster(handlerMapsterOffice(content_floor_office));

  $('#offices').change(function () {
    // console.log($('#offices').val());
    //

    _data_office = $('option:selected', this).data('office');
    $('.active').removeClass('active');
    $(_data_office).addClass('active');

    const floorOffice = $('#floor-office');
    floorOffice.mapster(handlerMapsterOffice(content_floor_office));
    initLoadData();
  });
});

$(document).ready(function () {
  initLoadData();
  $('#photos').change(function () {
    _data_image = $('option:selected', this).data('image');
    $('.active').removeClass('active');
    $(_data_image).addClass('active');
    initLoadData();
  });
});
