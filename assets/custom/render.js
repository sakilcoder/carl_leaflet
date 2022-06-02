function onEachState(feature, layer) {

    var popup = L.popup();
    popup.setContent(feature.properties.name);
    layer.bindPopup(popup, popupOptions);

    if(feature.properties.hilighted==1){
        layer.setStyle({
            'fillColor': '#f1ca20'
        });
    }else{
        layer.setStyle({
            'fillColor': '#b4c9c2'
        });
    }

    // layer.on('mouseover', function (e) {
    //     var popup = e.target.getPopup();
    //     popup.setLatLng(e.latlng).openOn(map);
    //     this.setStyle({
    //         'fillColor': '#FF6B6B'
    //     });
    // });

    // layer.on('mouseout', function(e) {
    //     e.target.closePopup();
    //     this.setStyle({
    //         'fillColor': '#009DAE'
    //     });
    // });

    layer.on('mousemove', function (e) {
        popup.setLatLng(e.latlng).openOn(map);
    });
    
}
