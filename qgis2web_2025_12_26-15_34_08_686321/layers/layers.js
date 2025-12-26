ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-71.542288, -32.990358, -70.410336, -32.127954]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Comunas_vecinas_2 = new ol.format.GeoJSON();
var features_Comunas_vecinas_2 = format_Comunas_vecinas_2.readFeatures(json_Comunas_vecinas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Comunas_vecinas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunas_vecinas_2.addFeatures(features_Comunas_vecinas_2);
var lyr_Comunas_vecinas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunas_vecinas_2, 
                style: style_Comunas_vecinas_2,
                popuplayertitle: 'Comunas_vecinas',
                interactive: true,
                title: '<img src="styles/legend/Comunas_vecinas_2.png" /> Comunas_vecinas'
            });
var format_unidades_vecinales_3 = new ol.format.GeoJSON();
var features_unidades_vecinales_3 = format_unidades_vecinales_3.readFeatures(json_unidades_vecinales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_unidades_vecinales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unidades_vecinales_3.addFeatures(features_unidades_vecinales_3);
var lyr_unidades_vecinales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_unidades_vecinales_3, 
                style: style_unidades_vecinales_3,
                popuplayertitle: 'unidades_vecinales',
                interactive: true,
                title: '<img src="styles/legend/unidades_vecinales_3.png" /> unidades_vecinales'
            });
var format_Limite_comunal_4 = new ol.format.GeoJSON();
var features_Limite_comunal_4 = format_Limite_comunal_4.readFeatures(json_Limite_comunal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Limite_comunal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_comunal_4.addFeatures(features_Limite_comunal_4);
var lyr_Limite_comunal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_comunal_4, 
                style: style_Limite_comunal_4,
                popuplayertitle: 'Limite_comunal',
                interactive: true,
                title: '<img src="styles/legend/Limite_comunal_4.png" /> Limite_comunal'
            });
var format_limite_urbano_5 = new ol.format.GeoJSON();
var features_limite_urbano_5 = format_limite_urbano_5.readFeatures(json_limite_urbano_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_limite_urbano_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_urbano_5.addFeatures(features_limite_urbano_5);
var lyr_limite_urbano_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_urbano_5, 
                style: style_limite_urbano_5,
                popuplayertitle: 'limite_urbano',
                interactive: true,
                title: '<img src="styles/legend/limite_urbano_5.png" /> limite_urbano'
            });
var format_Lotes_Nogales_6 = new ol.format.GeoJSON();
var features_Lotes_Nogales_6 = format_Lotes_Nogales_6.readFeatures(json_Lotes_Nogales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lotes_Nogales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_Nogales_6.addFeatures(features_Lotes_Nogales_6);
var lyr_Lotes_Nogales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_Nogales_6, 
                style: style_Lotes_Nogales_6,
                popuplayertitle: 'Lotes_Nogales',
                interactive: true,
                title: '<img src="styles/legend/Lotes_Nogales_6.png" /> Lotes_Nogales'
            });
var format_Zonificacin_7 = new ol.format.GeoJSON();
var features_Zonificacin_7 = format_Zonificacin_7.readFeatures(json_Zonificacin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Zonificacin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonificacin_7.addFeatures(features_Zonificacin_7);
var lyr_Zonificacin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonificacin_7, 
                style: style_Zonificacin_7,
                popuplayertitle: 'Zonificación',
                interactive: true,
    title: 'Zonificación<br />\
    <img src="styles/legend/Zonificacin_7_0.png" /> ZCC<br />\
    <img src="styles/legend/Zonificacin_7_1.png" /> ZEC<br />\
    <img src="styles/legend/Zonificacin_7_2.png" /> ZH1<br />\
    <img src="styles/legend/Zonificacin_7_3.png" /> ZH2<br />\
    <img src="styles/legend/Zonificacin_7_4.png" /> ZHI<br />\
    <img src="styles/legend/Zonificacin_7_5.png" /> ZI<br />\
    <img src="styles/legend/Zonificacin_7_6.png" /> ZRP<br />' });
var format_red_vial_mop_8 = new ol.format.GeoJSON();
var features_red_vial_mop_8 = format_red_vial_mop_8.readFeatures(json_red_vial_mop_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_red_vial_mop_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_mop_8.addFeatures(features_red_vial_mop_8);
var lyr_red_vial_mop_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_mop_8, 
                style: style_red_vial_mop_8,
                popuplayertitle: 'red_vial_mop',
                interactive: true,
                title: '<img src="styles/legend/red_vial_mop_8.png" /> red_vial_mop'
            });
var format_Sistemas_APR_9 = new ol.format.GeoJSON();
var features_Sistemas_APR_9 = format_Sistemas_APR_9.readFeatures(json_Sistemas_APR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sistemas_APR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistemas_APR_9.addFeatures(features_Sistemas_APR_9);
var lyr_Sistemas_APR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistemas_APR_9, 
                style: style_Sistemas_APR_9,
                popuplayertitle: 'Sistemas_APR',
                interactive: true,
                title: '<img src="styles/legend/Sistemas_APR_9.png" /> Sistemas_APR'
            });
var format_Sedes_Comunitarias_10 = new ol.format.GeoJSON();
var features_Sedes_Comunitarias_10 = format_Sedes_Comunitarias_10.readFeatures(json_Sedes_Comunitarias_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sedes_Comunitarias_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sedes_Comunitarias_10.addFeatures(features_Sedes_Comunitarias_10);
var lyr_Sedes_Comunitarias_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sedes_Comunitarias_10, 
                style: style_Sedes_Comunitarias_10,
                popuplayertitle: 'Sedes_Comunitarias',
                interactive: true,
    title: 'Sedes_Comunitarias<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_0.png" /> Sede El Litre<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_1.png" /> Sede JJ VV El Cristo<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_2.png" /> Sede JJVV El Poligono<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_3.png" /> Sede JJVV Juanita Fernandez<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_4.png" /> Sede JJVV Las Araucarias<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_5.png" /> Sede JJVV Los Almendros<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_6.png" /> Sede JJVV Los Cañamos<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_7.png" /> Sede JJVV Villa Disputada<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_8.png" /> Sede JJVV: Villa San Jose<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_9.png" /> Sede JJVV. Collahue<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_10.png" /> Sede JJVV. El Escorial<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_11.png" /> Sede JJVV. El Peumo<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_12.png" /> Sede JJVV. El Poligono<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_13.png" /> Sede JJVV. El Rungue<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_14.png" /> Sede JJVV. Pobl Cemento Melon<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_15.png" /> Sede JJVV. Pobl. El Carmen<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_16.png" /> Sede JJVV. Ramon Freire<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_17.png" /> Sede JJVV. Roberto Cartagena<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_18.png" /> Sede Organizacion Minusvalidos<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_19.png" /> Sede Pobl. Ferronort<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_20.png" /> Sede Pobl. Los Jardines<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_21.png" /> Sede Pobl. Nuevo Amanecer<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_22.png" /> Sede Pobl. UNO<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_23.png" /> Sede Pobl. Valdivia<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_24.png" /> Sede Sindicato Anglo American<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_25.png" /> Sede Social El Poligono<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_26.png" /> Sede UNCO El Melon<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_27.png" /> Sede UNCO Nogales<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_28.png" /> Sede Asoc. Funcionarios Municipales<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_29.png" /> Sede Centro de Madres Pobl El Carmen<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_30.png" /> Sede Centro de Madres Pobl Valdivia<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_31.png" /> Sede Club de Rayuela<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_32.png" /> Sede Club Deportes Nogales<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_33.png" /> Sede Club Deportivo Estrella Roja<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_34.png" /> Sede Club Deportivo EX Asto. El Melon.<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_35.png" /> Sede Club Deportivo La Peña<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_36.png" /> Sede Club Deportivo Sta Teresa<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_37.png" /> Sede Club Deportivo Union Catolica<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_38.png" /> Sede Condominio San Ignacio<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_39.png" /> Sede Cooperativa del Agua San Jose<br />\
    <img src="styles/legend/Sedes_Comunitarias_10_40.png" /> Sede de Extrabajadores Anglo American<br />' });
var group_Equipamientos = new ol.layer.Group({
                                layers: [lyr_Sedes_Comunitarias_10,],
                                fold: 'open',
                                title: 'Equipamientos'});
var group_Plan_Regulador_Comunal = new ol.layer.Group({
                                layers: [lyr_Zonificacin_7,],
                                fold: 'close',
                                title: 'Plan_Regulador_Comunal'});
var group_SHPQGIS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'SHP QGIS'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Comunas_vecinas_2.setVisible(true);lyr_unidades_vecinales_3.setVisible(true);lyr_Limite_comunal_4.setVisible(true);lyr_limite_urbano_5.setVisible(true);lyr_Lotes_Nogales_6.setVisible(true);lyr_Zonificacin_7.setVisible(true);lyr_red_vial_mop_8.setVisible(true);lyr_Sistemas_APR_9.setVisible(true);lyr_Sedes_Comunitarias_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_Comunas_vecinas_2,lyr_unidades_vecinales_3,lyr_Limite_comunal_4,lyr_limite_urbano_5,lyr_Lotes_Nogales_6,group_Plan_Regulador_Comunal,lyr_red_vial_mop_8,lyr_Sistemas_APR_9,group_Equipamientos];
lyr_Comunas_vecinas_2.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', });
lyr_unidades_vecinales_3.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 't_com': 't_com', 't_uv_cod': 't_uv_cod', 't_uv_nom': 't_uv_nom', 't_reg_ca': 't_reg_ca', 't_reg_nom': 't_reg_nom', 't_prov_ca': 't_prov_ca', 't_prov_nom': 't_prov_nom', 't_com_nom': 't_com_nom', 'comuna': 'comuna', 'concatenad': 'concatenad', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Limite_comunal_4.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', });
lyr_limite_urbano_5.set('fieldAliases', {'gid': 'gid', 'region': 'region', 'nombre': 'nombre', 'instrument': 'instrument', 'condicio': 'condicio', 'admin': 'admin', 'comuna': 'comuna', 'capa': 'capa', 'do': 'do', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', });
lyr_Lotes_Nogales_6.set('fieldAliases', {'COMUNA': 'COMUNA', 'MANZ_SII': 'MANZ_SII', 'PREDIO': 'PREDIO', 'ROL_SII': 'ROL_SII', 'SECTOR': 'SECTOR', 'ESTADO': 'ESTADO', });
lyr_Zonificacin_7.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', });
lyr_red_vial_mop_8.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'rol': 'rol', 'rol_label': 'rol_label', 'nombre': 'nombre', 'carpeta': 'carpeta', 'region': 'region', 'enrolado': 'enrolado', 'concesiona': 'concesiona', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'shape_leng': 'shape_leng', });
lyr_Sistemas_APR_9.set('fieldAliases', {'Cod_APR': 'Cod_APR', 'NR': 'NR', 'Region': 'Region', 'Provincia': 'Provincia', 'Comuna': 'Comuna', 'Servicio': 'Servicio', 'Nombre': 'Nombre', 'Año': 'Año', 'Arranques': 'Arranques', 'Estado': 'Estado', 'Fondos': 'Fondos', 'Ben_est': 'Ben_est', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'CLASE_SUEL': 'CLASE_SUEL', });
lyr_Sedes_Comunitarias_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Comunas_vecinas_2.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', });
lyr_unidades_vecinales_3.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 't_com': 'TextEdit', 't_uv_cod': 'TextEdit', 't_uv_nom': 'TextEdit', 't_reg_ca': 'TextEdit', 't_reg_nom': 'TextEdit', 't_prov_ca': 'TextEdit', 't_prov_nom': 'TextEdit', 't_com_nom': 'TextEdit', 'comuna': 'TextEdit', 'concatenad': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Limite_comunal_4.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', });
lyr_limite_urbano_5.set('fieldImages', {'gid': '', 'region': '', 'nombre': '', 'instrument': '', 'condicio': '', 'admin': '', 'comuna': '', 'capa': '', 'do': '', 'shape_star': '', 'shape_stle': '', });
lyr_Lotes_Nogales_6.set('fieldImages', {'COMUNA': 'Range', 'MANZ_SII': 'Range', 'PREDIO': 'Range', 'ROL_SII': 'TextEdit', 'SECTOR': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Zonificacin_7.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'draworder': 'TextEdit', 'icon': 'TextEdit', });
lyr_red_vial_mop_8.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'rol': 'TextEdit', 'rol_label': 'TextEdit', 'nombre': 'TextEdit', 'carpeta': 'TextEdit', 'region': 'TextEdit', 'enrolado': 'TextEdit', 'concesiona': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'shape_leng': 'TextEdit', });
lyr_Sistemas_APR_9.set('fieldImages', {'Cod_APR': 'TextEdit', 'NR': 'TextEdit', 'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Comuna': 'TextEdit', 'Servicio': 'TextEdit', 'Nombre': 'TextEdit', 'Año': 'TextEdit', 'Arranques': 'TextEdit', 'Estado': 'TextEdit', 'Fondos': 'TextEdit', 'Ben_est': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'CLASE_SUEL': 'Range', });
lyr_Sedes_Comunitarias_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Comunas_vecinas_2.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', });
lyr_unidades_vecinales_3.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 't_com': 'no label', 't_uv_cod': 'no label', 't_uv_nom': 'no label', 't_reg_ca': 'no label', 't_reg_nom': 'no label', 't_prov_ca': 'no label', 't_prov_nom': 'no label', 't_com_nom': 'no label', 'comuna': 'no label', 'concatenad': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Limite_comunal_4.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'hidden field', 'COMUNA': 'header label - visible with data', });
lyr_limite_urbano_5.set('fieldLabels', {'gid': 'no label', 'region': 'no label', 'nombre': 'no label', 'instrument': 'no label', 'condicio': 'no label', 'admin': 'no label', 'comuna': 'no label', 'capa': 'no label', 'do': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', });
lyr_Lotes_Nogales_6.set('fieldLabels', {'COMUNA': 'no label', 'MANZ_SII': 'no label', 'PREDIO': 'no label', 'ROL_SII': 'no label', 'SECTOR': 'no label', 'ESTADO': 'no label', });
lyr_Zonificacin_7.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', });
lyr_red_vial_mop_8.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'rol': 'no label', 'rol_label': 'no label', 'nombre': 'no label', 'carpeta': 'no label', 'region': 'no label', 'enrolado': 'no label', 'concesiona': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'shape_leng': 'no label', });
lyr_Sistemas_APR_9.set('fieldLabels', {'Cod_APR': 'no label', 'NR': 'no label', 'Region': 'no label', 'Provincia': 'no label', 'Comuna': 'no label', 'Servicio': 'no label', 'Nombre': 'no label', 'Año': 'no label', 'Arranques': 'no label', 'Estado': 'no label', 'Fondos': 'no label', 'Ben_est': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', 'CLASE_SUEL': 'no label', });
lyr_Sedes_Comunitarias_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Sedes_Comunitarias_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});