// loaders.gl, MIT license

// Forked from https://github.com/chrelad/openlayers/blob/master/tests/Format/WMSGetFeatureInfo.html
// under OpenLayers license (only used for test cases)
// See README.md in `./data` directory for full license text copy.

import test from 'tape-promise/tape';
import {WMSFeatureInfoLoader, WMSFeatureInfo} from '@loaders.gl/wms';
import {parse} from '@loaders.gl/core';

test('WMSFeatureInfoLoader#read_FeatureInfoResponse', async (t) => {
  // read empty response
  let text =
    '<?xml version="1.0" encoding="UTF-8" ?>' + '<FeatureInfoResponse>' + '</FeatureInfoResponse>';

  let featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;
  t.equal(featureInfo.features.length, 0, 'Parsing empty FeatureInfoResponse response successful');

  // read 1 feature
  text =
    '<?xml version="1.0" encoding="UTF-8" ?>' +
    '<FeatureInfoResponse>' +
    '  <FIELDS OBJECTID="1188" HECTARES="1819.734" ZONENR="5854" NULZONES=" " AREA="18197340.1426" PERIMETER="19177.4073627" SHAPE="NULL" SE_ANNO_CAD_DATA="NULL" SHAPE.AREA="0" SHAPE.LEN="0"/>' +
    '</FeatureInfoResponse>';

  featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;
  t.equal(featureInfo.features.length, 1, 'Parsed 1 feature in total');

  t.equal(
    featureInfo.features[0].attributes.OBJECTID,
    '1188',
    'Attribute OBJECTID contains the right value'
  );

  // read multiple features
  text =
    '<?xml version="1.0" encoding="UTF-8" ?>' +
    '<FeatureInfoResponse>' +
    '  <FIELDS OBJECTID="551" Shape="NULL" NAME="Carbon" STATE_NAME="Wyoming" AREA="7999.91062" POP2000="15639" POP00_SQMI="2" Shape_Length="6.61737274334215" Shape_Area="2.23938983524154"/>' +
    '  <FIELDS OBJECTID="7" Shape="NULL" AREA="97803.199" STATE_NAME="Wyoming" SUB_REGION="Mtn" STATE_ABBR="WY" POP2000="493782" POP00_SQMI="5" Shape_Length="21.9870297323522" Shape_Area="27.9666881382635"/>' +
    '  <FIELDS OBJECTID="99" Shape="NULL" LENGTH="378.836" TYPE="Multi-Lane Divided" ADMN_CLASS="Interstate" TOLL_RD="N" RTE_NUM1=" 80" RTE_NUM2=" " ROUTE="Interstate  80" Shape_Length="7.04294883879398"/>' +
    '</FeatureInfoResponse>';

  featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;

  t.equal(featureInfo.features.length, 3, 'Parsed 3 features in total');

  t.equal(
    featureInfo.features[1].attributes.STATE_NAME,
    'Wyoming',
    'Attribute STATE_NAME contains the right value'
  );

  t.end();
});

test.skip('WMSFeatureInfoLoader#msGMLOutput', async (t) => {
  // function test_read_msGMLOutput(t) {
  // read empty response
  let text =
    '<?xml version="1.0" encoding="ISO-8859-1"?>' +
    '<msGMLOutput ' +
    '	 xmlns:gml="http://www.opengis.net/gml"' +
    '	 xmlns:xlink="http://www.w3.org/1999/xlink"' +
    '	 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
    '</msGMLOutput>';

  let featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;
  t.equal(featureInfo.features.length, 0, 'Parsing empty msGMLOutput response succesfull');

  // read 1 feature from 1 layer
  text =
    '<?xml version="1.0" encoding="ISO-8859-1"?>' +
    '<msGMLOutput ' +
    '	 xmlns:gml="http://www.opengis.net/gml"' +
    '	 xmlns:xlink="http://www.w3.org/1999/xlink"' +
    '	 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
    '	<AAA64_layer>' +
    '		<AAA64_feature>' +
    '			<gml:boundedBy>' +
    '				<gml:Box srsName="EPSG:28992">' +
    '					<gml:coordinates>107397.266000,460681.063000 116568.188000,480609.250000</gml:coordinates>' +
    '				</gml:Box>' +
    '			</gml:boundedBy>' +
    '			<OBJECTID>109</OBJECTID>' +
    '			<ROUTE>N231</ROUTE>' +
    '			<ROUTE_CH>#N231</ROUTE_CH>' +
    '			<COUNT>2</COUNT>' +
    '			<BEHEERDER>P</BEHEERDER>' +
    '			<LENGTH>28641.7</LENGTH>' +
    '			<SHAPE>&lt;shape&gt;</SHAPE>' +
    '			<SE_ANNO_CAD_DATA>&lt;null&gt;</SE_ANNO_CAD_DATA>' +
    '		</AAA64_feature>' +
    '	</AAA64_layer>' +
    '</msGMLOutput>';

  featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;

  t.equal(featureInfo.features.length, 1, 'Parsed 1 feature in total');

  t.equal(
    featureInfo.features[0].attributes.OBJECTID,
    '109',
    'Attribute OBJECTID contains the right value'
  );

  t.equal(featureInfo.features[0].type, 'AAA64', 'Parsed the layer name correctly');

  const bounds = featureInfo.features[0].bounds;
  t.ok(Array.isArray(bounds), 'feature given a bounds');
  t.equal(bounds.left.toFixed(3), '107397.266', 'Bounds left parsed correctly');
  t.equal(bounds.right.toFixed(3), '116568.188', 'Bounds right parsed correctly');
  t.equal(bounds.bottom.toFixed(3), '460681.063', 'Bounds bottom parsed correctly');
  t.equal(bounds.top.toFixed(3), '480609.250', 'Bounds top parsed correctly');

  // read 2 features from 2 layers
  text =
    '<?xml version="1.0" encoding="ISO-8859-1"?>' +
    '<msGMLOutput ' +
    '	 xmlns:gml="http://www.opengis.net/gml"' +
    '	 xmlns:xlink="http://www.w3.org/1999/xlink"' +
    '	 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
    '	<AAA64_layer>' +
    '		<AAA64_feature>' +
    '			<gml:boundedBy>' +
    '				<gml:Box srsName="EPSG:28992">' +
    '					<gml:coordinates>129799.109000,467950.250000 133199.906000,468904.063000</gml:coordinates>' +
    '				</gml:Box>' +
    '			</gml:boundedBy>' +
    '			<OBJECTID>287</OBJECTID>' +
    '			<ROUTE>N403</ROUTE>' +
    '			<ROUTE_CH>#N403</ROUTE_CH>' +
    '			<COUNT>1</COUNT>' +
    '			<BEHEERDER>P</BEHEERDER>' +
    '			<LENGTH>4091.25</LENGTH>' +
    '			<SHAPE>&lt;shape&gt;</SHAPE>' +
    '			<SE_ANNO_CAD_DATA>&lt;null&gt;</SE_ANNO_CAD_DATA>' +
    '		</AAA64_feature>' +
    '	</AAA64_layer>' +
    '	<AAA62_layer>' +
    '		<AAA62_feature>' +
    '			<gml:boundedBy>' +
    '				<gml:Box srsName="EPSG:28992">' +
    '					<gml:coordinates>129936.000000,468362.000000 131686.000000,473119.000000</gml:coordinates>' +
    '				</gml:Box>' +
    '			</gml:boundedBy>' +
    '			<OBJECTID>1251</OBJECTID>' +
    '			<VWK_ID>1515</VWK_ID>' +
    '			<VWK_BEGDTM>00:00:00 01/01/1998</VWK_BEGDTM>' +
    '			<VWJ_ID_BEG>1472</VWJ_ID_BEG>' +
    '			<VWJ_ID_END>1309</VWJ_ID_END>' +
    '			<VAKTYPE>D</VAKTYPE>' +
    '			<VRT_CODE>227</VRT_CODE>' +
    '			<VRT_NAAM>Vecht</VRT_NAAM>' +
    '			<VWG_NR>2</VWG_NR>' +
    '			<VWG_NAAM>Vecht</VWG_NAAM>' +
    '			<BEGKM>18.25</BEGKM>' +
    '			<ENDKM>23.995</ENDKM>' +
    '			<LENGTH>5745.09</LENGTH>' +
    '			<SHAPE>&lt;shape&gt;</SHAPE>' +
    '			<SE_ANNO_CAD_DATA>&lt;null&gt;</SE_ANNO_CAD_DATA>' +
    '		</AAA62_feature>' +
    '	</AAA62_layer>' +
    '</msGMLOutput>';

  featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;

  t.equal(featureInfo.features.length, 2, 'Parsed 2 features in total');

  t.equal(
    featureInfo.features[0].type === featureInfo.features[1].type,
    false,
    'The layer name differs for the two features'
  );

  text =
    '<?xml version="1.0" encoding="ISO-8859-1"?>' +
    '<msGMLOutput ' +
    '        xmlns:gml="http://www.opengis.net/gml"' +
    '        xmlns:xlink="http://www.w3.org/1999/xlink"' +
    '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
    '       <wegbeheerderinfo_layer>' +
    '               <wegbeheerderinfo_feature>' +
    '                       <gml:boundedBy>' +
    '                               <gml:Box srsName="EPSG:28992">' +
    '                                       <gml:coordinates>105002.943000,490037.863000 105271.523000,490262.208000</gml:coordinates>' +
    '                               </gml:Box>' +
    '                       </gml:boundedBy>' +
    '                       <geometry>' +
    '                       <gml:MultiLineString srsName="EPSG:28992">' +
    '                         <gml:lineStringMember>' +
    '                           <gml:LineString>' +
    '                             <gml:coordinates>105270.164000,490262.208000 105098.274000,490258.040000 105028.045000,490089.576000 105002.943000,490048.851000 105049.666000,490037.863000 105271.523000,490064.957000 </gml:coordinates>' +
    '                           </gml:LineString>' +
    '                         </gml:lineStringMember>' +
    '                       </gml:MultiLineString>' +
    '                       </geometry>' +
    '                       <OGR_FID>203327</OGR_FID>' +
    '               </wegbeheerderinfo_feature>' +
    '       </wegbeheerderinfo_layer>' +
    '</msGMLOutput>';

  featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;

  // t.equal(
  //   featureInfo.features[0].geometry instanceof OpenLayers.Geometry.MultiLineString,
  //   true,
  //   'Parsed geometry is of type multi line string'
  // );

  t.end();
});

test.skip('WMSFeatureInfoLoader#Ionic/GeoServer', async (t) => {
  // function test_read_GMLFeatureInfoResponse(t) {
  // read Ionic response, see if parser falls back to GML format
  // url used:
  /* http://webservices.ionicsoft.com/ionicweb/wfs/BOSTON_ORA?service=WMS&request=GetFeatureInfo&layers=roads&version=1.1.1&bbox=-71.1,42.25,-71.05,42.3&width=500&height=500&format=image/png&SRS=EPSG:4326&styles=&x=174&y=252&query_layers=roads&info_format=application/vnd.ogc.gml */
  let text =
    '<?xml version=\'1.0\' encoding=\'utf-8\' ?>' +
    '  <ogcwfs:FeatureCollection xsi:schemaLocation="http://www.ionicsoft.com/wfs http://webservices.ionicsoft.com/ionicweb/wfs/BOSTON_ORA?REQUEST=DescribeAllFeatureType&amp;SERVICE=WFS http://www.opengis.net/wfs http://webservices.ionicsoft.com/ionicweb/wfs/BOSTON_ORA/REQUEST/get/DATA/LPR/wfs/1.0.0/WFS-basic.xsd" xmlns:wfs="http://www.ionicsoft.com/wfs" xmlns:gml="http://www.opengis.net/gml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ogcwfs="http://www.opengis.net/wfs">' +
    '    <gml:boundedBy>' +
    '      <gml:Box srsName="EPSG:4326">' +
    '        <gml:coordinates>-71.08301710045646,42.27320863544783 -71.08020014900377,42.27480054530114</gml:coordinates>' +
    '      </gml:Box>' +
    '    </gml:boundedBy>' +
    '  <gml:featureMember>' +
    '    <wfs:roads fid="roads.9453.0">' +
    '      <wfs:FNODE_>8943.0</wfs:FNODE_>' +
    '      <wfs:TNODE_>9070.0</wfs:TNODE_>' +
    '      <wfs:LPOLY_>0.0</wfs:LPOLY_>' +
    '      <wfs:RPOLY_>0.0</wfs:RPOLY_>' +
    '      <wfs:LENGTH>306.875</wfs:LENGTH>' +
    '      <wfs:MRD_>13109.0</wfs:MRD_>' +
    '      <wfs:MRD_ID>9453.0</wfs:MRD_ID>' +
    '      <wfs:TILE_NAME>126</wfs:TILE_NAME>' +
    '      <wfs:COUNTYCODE>M</wfs:COUNTYCODE>' +
    '      <wfs:SERIAL_NUM>26000.0</wfs:SERIAL_NUM>' +
    '      <wfs:CLASS>5.0</wfs:CLASS>' +
    '      <wfs:ADMIN_TYPE>0.0</wfs:ADMIN_TYPE>' +
    '      <wfs:ALTRT1TYPE>0.0</wfs:ALTRT1TYPE>' +
    '      <wfs:STREETNAME>DOCTOR MARY MOORE BEATTY CIRCLE</wfs:STREETNAME>' +
    '      <wfs:CSN>M  26000</wfs:CSN>' +
    '      <wfs:GEOMETRY>' +
    '        <gml:LineString srsName="EPSG:4326">' +
    '          <gml:coordinates>-71.08300668868151,42.27480054530114 -71.08155305289881,42.27452010256956 -71.08021063085208,42.27320863544783</gml:coordinates>' +
    '        </gml:LineString>' +
    '      </wfs:GEOMETRY>' +
    '    </wfs:roads>' +
    '  </gml:featureMember>' +
    '  </ogcwfs:FeatureCollection>';

  let featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;

  t.equal(
    featureInfo.features.length,
    1,
    'Parsing GML GetFeatureInfo response from Ionic succesfull'
  );

  t.equal(
    featureInfo.features[0].attributes.TILE_NAME,
    '126',
    'Attribute TILE_NAME contains the right value'
  );

  // read Geoserver response
  // taken from:
  /* http://demo.opengeo.org/geoserver/wms?service=WMS&request=GetFeatureInfo&layers=opengeo:roads&query_layers=opengeo:roads&format=image/png&version=1.1.1&styles=&bbox=-103.9,44.4,-103.7,44.5&srs=EPSG:4326&width=500&height=500&x=158&y=98&info_format=application/vnd.ogc.gml*/

  text =
    '<?xml version="1.0" encoding="UTF-8"?><wfs:FeatureCollection xmlns="http://www.opengis.net/wfs" xmlns:wfs="http://www.opengis.net/wfs" xmlns:opengeo="http://opengeo.org" xmlns:gml="http://www.opengis.net/gml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://opengeo.org http://demo.opengeo.org:80/geoserver/wfs?service=WFS&amp;version=1.0.0&amp;request=DescribeFeatureType&amp;typeName=opengeo:roads http://www.opengis.net/wfs http://demo.opengeo.org:80/geoserver/schemas/wfs/1.0.0/WFS-basic.xsd"><gml:boundedBy><gml:Box srsName="http://www.opengis.net/gml/srs/epsg.xml#26713"><gml:coordinates xmlns:gml="http://www.opengis.net/gml" decimal="." cs="," ts=" ">591943.9375,4925605 593045.625,4925845</gml:coordinates></gml:Box></gml:boundedBy><gml:featureMember><opengeo:roads fid="roads.90"><opengeo:cat>3</opengeo:cat><opengeo:label>secondary highway, hard surface</opengeo:label><opengeo:the_geom><gml:MultiLineString srsName="http://www.opengis.net/gml/srs/epsg.xml#26713"><gml:lineStringMember><gml:LineString><gml:coordinates xmlns:gml="http://www.opengis.net/gml" decimal="." cs="," ts=" ">593045.60746465,4925605.0059156 593024.32382915,4925606.79305411 592907.54863574,4925624.85647524 592687.35111096,4925670.76834012 592430.76279218,4925678.79393165 592285.97636109,4925715.70811767 592173.39165655,4925761.83511156 592071.1753393,4925793.95523514 591985.96972625,4925831.59842486 591943.98769455,4925844.93220071</gml:coordinates></gml:LineString></gml:lineStringMember></gml:MultiLineString></opengeo:the_geom></opengeo:roads></gml:featureMember></wfs:FeatureCollection>';

  featureInfo = (await parse(text, WMSFeatureInfoLoader)) as WMSFeatureInfo;

  t.equal(
    featureInfo.features.length,
    1,
    'Parsing GML GetFeatureInfo response from Geoserver succesfull'
  );

  t.equal(featureInfo.features[0].attributes.cat, '3', 'Attribute cat contains the right value');

  t.end();
});
