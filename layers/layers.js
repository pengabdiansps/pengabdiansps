var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Indo_Kab_Kot_1 = new ol.format.GeoJSON();
var features_Indo_Kab_Kot_1 = format_Indo_Kab_Kot_1.readFeatures(json_Indo_Kab_Kot_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indo_Kab_Kot_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Indo_Kab_Kot_1.addFeatures(features_Indo_Kab_Kot_1);var lyr_Indo_Kab_Kot_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indo_Kab_Kot_1, 
                style: style_Indo_Kab_Kot_1,
                title: '<img src="styles/legend/Indo_Kab_Kot_1.png" /> Indo_Kab_Kot'
            });var format_pkm_sps_2016_2 = new ol.format.GeoJSON();
var features_pkm_sps_2016_2 = format_pkm_sps_2016_2.readFeatures(json_pkm_sps_2016_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pkm_sps_2016_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_pkm_sps_2016_2.addFeatures(features_pkm_sps_2016_2);var lyr_pkm_sps_2016_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pkm_sps_2016_2, 
                style: style_pkm_sps_2016_2,
                title: '<img src="styles/legend/pkm_sps_2016_2.png" /> pkm_sps_2016'
            });var format_pkm_sps_2017_3 = new ol.format.GeoJSON();
var features_pkm_sps_2017_3 = format_pkm_sps_2017_3.readFeatures(json_pkm_sps_2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pkm_sps_2017_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_pkm_sps_2017_3.addFeatures(features_pkm_sps_2017_3);var lyr_pkm_sps_2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pkm_sps_2017_3, 
                style: style_pkm_sps_2017_3,
                title: '<img src="styles/legend/pkm_sps_2017_3.png" /> pkm_sps_2017'
            });var format_pkm_sps_2018_4 = new ol.format.GeoJSON();
var features_pkm_sps_2018_4 = format_pkm_sps_2018_4.readFeatures(json_pkm_sps_2018_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pkm_sps_2018_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_pkm_sps_2018_4.addFeatures(features_pkm_sps_2018_4);var lyr_pkm_sps_2018_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pkm_sps_2018_4, 
                style: style_pkm_sps_2018_4,
                title: '<img src="styles/legend/pkm_sps_2018_4.png" /> pkm_sps_2018'
            });var format_pkm_sps_2016_2018_5 = new ol.format.GeoJSON();
var features_pkm_sps_2016_2018_5 = format_pkm_sps_2016_2018_5.readFeatures(json_pkm_sps_2016_2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pkm_sps_2016_2018_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_pkm_sps_2016_2018_5.addFeatures(features_pkm_sps_2016_2018_5);var lyr_pkm_sps_2016_2018_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pkm_sps_2016_2018_5, 
                style: style_pkm_sps_2016_2018_5,
                title: '<img src="styles/legend/pkm_sps_2016_2018_5.png" /> pkm_sps_2016_2018'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Indo_Kab_Kot_1.setVisible(true);lyr_pkm_sps_2016_2.setVisible(true);lyr_pkm_sps_2017_3.setVisible(true);lyr_pkm_sps_2018_4.setVisible(true);lyr_pkm_sps_2016_2018_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Indo_Kab_Kot_1,lyr_pkm_sps_2016_2,lyr_pkm_sps_2017_3,lyr_pkm_sps_2018_4,lyr_pkm_sps_2016_2018_5];
lyr_Indo_Kab_Kot_1.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', });
lyr_pkm_sps_2016_2.set('fieldAliases', {'Id': 'Id', 'Tahun': 'Tahun', 'Judul': 'Judul', 'Pelaksana': 'Pelaksana', 'Lokasi': 'Lokasi', 'Lat': 'Lat', 'Lon': 'Lon', 'Sumber_Dan': 'Sumber_Dan', 'Besar_Dana': 'Besar_Dana', });
lyr_pkm_sps_2017_3.set('fieldAliases', {'Id': 'Id', 'Tahun': 'Tahun', 'Judul': 'Judul', 'Pelaksana': 'Pelaksana', 'Lokasi': 'Lokasi', 'Lat': 'Lat', 'Lon': 'Lon', 'Sumber_Dan': 'Sumber_Dan', 'Besar_Dana': 'Besar_Dana', });
lyr_pkm_sps_2018_4.set('fieldAliases', {'Id': 'Id', 'Tahun': 'Tahun', 'Judul': 'Judul', 'Pelaksana': 'Pelaksana', 'Lokasi': 'Lokasi', 'Lat': 'Lat', 'Lon': 'Lon', 'Sumber_Dan': 'Sumber_Dan', 'Besar_Dana': 'Besar_Dana', });
lyr_pkm_sps_2016_2018_5.set('fieldAliases', {'Id': 'Id', 'Tahun': 'Tahun', 'Judul': 'Judul', 'Pelaksana': 'Pelaksana', 'Lokasi': 'Lokasi', 'Lat': 'Lat', 'Lon': 'Lon', 'Sumber_Dan': 'Sumber_Dan', 'Besar_Dana': 'Besar_Dana', });
lyr_Indo_Kab_Kot_1.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', });
lyr_pkm_sps_2016_2.set('fieldImages', {'Id': 'TextEdit', 'Tahun': 'TextEdit', 'Judul': 'TextEdit', 'Pelaksana': 'TextEdit', 'Lokasi': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Sumber_Dan': 'TextEdit', 'Besar_Dana': 'TextEdit', });
lyr_pkm_sps_2017_3.set('fieldImages', {'Id': 'TextEdit', 'Tahun': 'TextEdit', 'Judul': 'TextEdit', 'Pelaksana': 'TextEdit', 'Lokasi': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Sumber_Dan': 'TextEdit', 'Besar_Dana': 'TextEdit', });
lyr_pkm_sps_2018_4.set('fieldImages', {'Id': 'TextEdit', 'Tahun': 'TextEdit', 'Judul': 'TextEdit', 'Pelaksana': 'TextEdit', 'Lokasi': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Sumber_Dan': 'TextEdit', 'Besar_Dana': 'TextEdit', });
lyr_pkm_sps_2016_2018_5.set('fieldImages', {'Id': 'TextEdit', 'Tahun': 'TextEdit', 'Judul': 'TextEdit', 'Pelaksana': 'TextEdit', 'Lokasi': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Sumber_Dan': 'TextEdit', 'Besar_Dana': 'TextEdit', });
lyr_Indo_Kab_Kot_1.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', });
lyr_pkm_sps_2016_2.set('fieldLabels', {'Id': 'no label', 'Tahun': 'no label', 'Judul': 'no label', 'Pelaksana': 'no label', 'Lokasi': 'no label', 'Lat': 'no label', 'Lon': 'no label', 'Sumber_Dan': 'no label', 'Besar_Dana': 'no label', });
lyr_pkm_sps_2017_3.set('fieldLabels', {'Id': 'no label', 'Tahun': 'no label', 'Judul': 'no label', 'Pelaksana': 'no label', 'Lokasi': 'no label', 'Lat': 'no label', 'Lon': 'no label', 'Sumber_Dan': 'no label', 'Besar_Dana': 'no label', });
lyr_pkm_sps_2018_4.set('fieldLabels', {'Id': 'no label', 'Tahun': 'no label', 'Judul': 'no label', 'Pelaksana': 'no label', 'Lokasi': 'no label', 'Lat': 'no label', 'Lon': 'no label', 'Sumber_Dan': 'no label', 'Besar_Dana': 'no label', });
lyr_pkm_sps_2016_2018_5.set('fieldLabels', {'Id': 'no label', 'Tahun': 'no label', 'Judul': 'no label', 'Pelaksana': 'no label', 'Lokasi': 'no label', 'Lat': 'no label', 'Lon': 'no label', 'Sumber_Dan': 'no label', 'Besar_Dana': 'no label', });
lyr_pkm_sps_2016_2018_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});