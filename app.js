const data = [
  {
    offices: '1a',
    floor: [
      {
        key: 'floor-1',
        data: {
          room_1: 'Phòng HV 08',
          room_2: 'Phòng HV 07',
          room_3: 'Phòng HV 06',
          room_4: 'Phòng HV 05',
          room_5: 'Phòng HV 04',
          room_6: 'Phòng HV 03',
          room_7: 'Phòng HV 02',
          room_8: 'Phòng HV 01',
          room_9: 'Phòng khách 84',
          room_10: 'Phòng HV 11',
          room_11: 'Phòng HV 10',
          room_12: 'room_12',
          room_13: 'Phòng kỹ thuật',
          room_14: 'Thang xem kt-th-01',
          room_15: 'Phòng kỹ thuật',
          room_16: 'Trực ban văn thư',
          room_17: 'Sảnh tầng 1',
          room_18: 'Phòng kinh danh và quan hệ Khách hàng',
          room_19: 'Phòng dịch vụ pháp lý',
          room_20: 'Phòng hành chính tổng hợp',
          room_21: 'Phòng hội thảo',
          room_22: 'Kho',
          room_23: 'Nhà vệ sinh',
          room_24: 'Nhà vệ sinh',
          room_25: 'Sảnh giải lao',
          room_27: 'Hành lang',
          room_28: 'Hành lang',
          room_29: 'Thang bộ lên tầng 2',
          room_30: 'Hành lang',
        },
      },
      {
        key: 'floor-2',
        data: {
          room_1: 'Phòng phát triển ứng dụng trên thiết bị di động',
          room_2: 'Phòng triển khai dự án phần mềm 03',
          room_3: 'Sảnh nghỉ giải lao',
          room_4: 'Phòng triển khai dự án phần mềm 02',
          room_5: 'Phòng triển khai dự án phần mềm 01',
          room_6: 'Thông tầng',
          room_7: 'Phòng khách chỉ huy',
          room_8: 'Phòng đào tạo vào hợp tác quốc tế',
          room_9: 'Sảnh nghỉ giải lao',
          room_10: 'Ban tài chính',
          room_11: 'Ban chính trị',
          room_12: 'Phó chủ tịch hội đồng quản lý',
          room_13: 'Giám đốc',
          room_14: 'Thang máy',
          room_15: 'Thang bộ',
          room_16: 'Sảnh tầng 2',
          room_17: 'Kỹ thuật',
          room_18: 'WC',
          room_19: 'Cầu thang thoát hiểm',
          room_20: 'Phó Giám đốc',
          room_21: 'Phó Giám đốc',
          room_22: 'Phòng nghiên cứu phát triển và chuyển giao công nghệ',
          room_23: 'Hành lang',
        },
      },
      {
        key: 'floor-3',
        data: {
          room_1: 'Phòng đào tạo kỹ năng CNTT 02',
          room_2: 'Phòng đào tạo kỹ năng CNTT 02',
          room_3: 'Sảnh nghỉ giải lao',
          room_4: 'Phòng đào tạo an toàn ANTT 02',
          room_5: 'Phòng thi tiếng anh CNTT trực tuyến',
          room_6: 'Phòng đào tạo an toàn ANTT 01',
          room_7: 'Sảnh nghỉ giải lao',
          room_8: 'Phòng đào tạo Tác chiến không gian mạng 02',
          room_9: 'Phòng đào tạo Tác chiến không gian mạng 01',
          room_10: 'Phòng thảo luận giáo viên',
          room_11: 'Phòng đào tạo tiếng anh 02',
          room_12: 'Cầu thang bộ',
          room_13: 'Phòng kỹ thuật',
          room_14: 'Nhà vệ sinh',
          room_15: 'Sảnh tầng 3',
          room_16: 'Thang máy',
          room_17: 'Thang bộ',
          room_18: 'Phòng thảo luận giáo viên',
          room_19: 'Phòng đào tạo tiếng anh 01',
        },
      },
      {
        key: 'floor-4',
        data: {
          room_1: 'Đào tạo lập trình nhúng',
          room_2: 'Sảnh nghỉ giải lao',
          room_3: 'Phòng thực hành tổng hợp an toàn thông tin - Tác chiến KGM',
          room_4: 'Sảnh nghỉ giải lao',
          room_5: 'Đào tạo lập trình ứng dụng',
          room_6: 'Đào tạo quản trị mạng và hệ thống',
          room_7: 'Cầu thang bộ',
          room_8: 'Thang máy',
          room_9: 'Sảnh tầng 4',
          room_10: 'WC',
          room_11: 'Kỹ thuật',
          room_12: 'Cầu thang thoát hiểm',
          room_13: 'Đào tạo trực tuyến',
          room_14: 'Hành lang',
        },
      },
      {
        key: 'floor-5',
        data: {
          room_1: 'CIVIL SERVER FARM',
          room_2: 'MIUTARY SERVER FARM',
          room_3: 'PHÒNG HỌP',
          room_4: 'THANG BỘ',
          room_5: 'KHO KỸ THUẬT',
          room_6: 'NHÀ VỆ SINH',
          room_7: 'SẢNH TẦNG 5',
          room_8: 'THANG MÁY',
          room_9: 'THANG BỘ',
          room_9: 'PHÒNG LÀM VIỆC',
          room_10: 'PHÒNG LÀM VIỆC',
        },
      },
      {
        key: 'floor-6',
        data: {
          room_1: 'BATTERY FARM',
          room_2: 'UPS ROOM',
          room_3: 'CIVIL SNOC',
          room_4: 'MILITARY SNOC',
          room_5: 'KHO KỸ THUẬT',
          room_6: 'NHÀ VỆ SINH',
          room_7: 'SẢNH TẦNG 6',
          room_8: 'THANG MÁY',
          room_9: 'THANG BỘ',
        },
      },
    ],
  },
];

var query = '(min-width: 576px)';
var media = window.matchMedia(query);

let content_floor_0 = {
  room_1: 'Tầng 1 <br />',
  room_2: 'Tầng 2',
  room_3: 'Tầng 3',
  room_4: 'Tầng 4',
  room_5: 'Tầng 5',
  room_6: 'Tầng 6',
};

// a cross reference of area names to text to be shown for each area
var xref = {
  carrots: '<b>Carrots</b> are delicious and may turn your skin orange!',
  asparagus:
    '<b>Asparagus</b> is one of the first vegetables of the spring. ' +
    "Being a dark green, it's great for you, and has interesting side effects.",
  squash:
    '<b>Squash</b> is a winter vegetable, and not eaten raw too much. Is that really squash?',
  redpepper:
    "<b>Red peppers</b> are actually the same as green peppers, they've just been left on " +
    'the vine longer. Delicious when fire-roasted.',
  yellowpepper:
    'Similar to red peppers, <b>yellow peppers</b> are sometimes sweeter.',
  celery:
    '<b>Celery</b> is a fascinating vegetable. Being mostly water, it actually takes your body ' +
    'more calories to process it than it provides.',
  cucumbers: '<b>Cucumbers</b> are cool.',
  broccoli:
    '<b>Broccoli</b> is like a forest of goodness in your mouth. And very good for you. ' +
    'Eat lots of broccoli!',
  dip: "Everything here is good for you but this one. <b>Don't be a dip!</b>",
};

var defaultDipTooltip =
  "I know you want the dip. But it's loaded with saturated fat, just skip it " +
  'and enjoy as many delicious, crisp vegetables as you can eat.';

const initLoadData = () => {
  const image = $('#vegetables');
  const floor0 = $('#floor-0');

  image.mapster(handlerMapster(xref));
  floor0.mapster(handlerMapsterFloor0(content_floor_0));

  //setup Another Floor

  for (const office of data) {
    for (const floorData of office.floor) {
      const _querySelector = $(`#${floorData.key}`);
      _querySelector.mapster(handlerMapster(floorData.data));
    }
  }
};

const handlerMapster = (contentFloor) => {
  return {
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

    onMouseover: function (e) {
      // Nếu trình duyệt đang ở chế độ di động
      // Chạy mã JavaScript của bạn

      if (media.matches) {
        // Cập nhật tooltip dựa trên area hiện tại
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
      if (!media.matches) {
        // Cập nhật tooltip dựa trên area hiện tại
        $(this).tooltipster({
          content: contentFloor[e.key], // Nội dung tooltip
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

$(document).ready(function () {
  initLoadData();

  $('#photos').change(function () {
    _data_image = $('option:selected', this).data('image');
    $('.active').removeClass('active');
    $(_data_image).addClass('active');

    initLoadData();
  });
});
