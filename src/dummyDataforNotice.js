let noticedata = [
  {
    heading: 'XYZ',
    content: 'placementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdataplacementdata',
    date: 'ah-qo-ka'
  }
];

if (!localStorage.getItem("isNoticeArraySaved")) {
  localStorage.setItem("notice-data", JSON.stringify(noticedata));
}

export default noticedata;
