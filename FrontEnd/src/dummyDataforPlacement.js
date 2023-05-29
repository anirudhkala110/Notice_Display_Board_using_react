let placementdata = [
    {
        heading:
            "TROC AI",
        content:
            "Company Come and gone",
        date:
            "22nd September, 2023"
    },
];

if (!localStorage.getItem("isPlacementNoticeArraySaved")) {
    localStorage.setItem("placement-notice-data", JSON.stringify(placementdata));
}

export default placementdata;
