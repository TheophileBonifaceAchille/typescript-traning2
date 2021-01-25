var space1;
(function (space1) {
    space1.a = "foo";
    function exportNameSpace() {
        console.log('Export namespace');
    }
    space1.exportNameSpace = exportNameSpace;
})(space1 || (space1 = {}));
