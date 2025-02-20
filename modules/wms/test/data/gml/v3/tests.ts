// loaders.gl, MIT license

// @ts-nocheck

// Forked from https://github.com/chrelad/openlayers/blob/master/tests/Format/GML/v3.html
// under OpenLayers license (only used for test cases)
// See README.md in `./data` directory for full license text copy.

export const GML_V3_TESTS = {
  'v3/envelope.xml': `\
<gml:Envelope xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:lowerCorner>1 2</gml:lowerCorner>
    <gml:upperCorner>3 4</gml:upperCorner>
</gml:Envelope>
`,
  'v3/linearring.xml': `\
<gml:LinearRing xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
</gml:LinearRing>
`,
  'v3/linestring.xml': `\
<gml:LineString xmlns:gml="http://www.opengis.net/gml" srsName="foo">
  <gml:posList>1 2 3 4</gml:posList>
</gml:LineString>
`,
  'v3/curve.xml': `\
<gml:Curve xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:segments>
        <gml:LineStringSegment>
            <gml:posList>1 2 3 4</gml:posList>
        </gml:LineStringSegment>
    </gml:segments>
</gml:Curve>
`,
  'v3/multilinestring-plural.xml': `\
<gml:MultiLineString xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:lineStringMembers>
        <gml:LineString>
            <gml:posList>1 2 2 3</gml:posList>
        </gml:LineString>
        <gml:LineString>
            <gml:posList>3 4 4 5</gml:posList>
        </gml:LineString>
    </gml:lineStringMembers>
</gml:MultiLineString>
`,
  'v3/multilinestring-singular.xml': `\
<gml:MultiLineString xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:lineStringMember>
        <gml:LineString>
            <gml:posList>1 2 2 3</gml:posList>
        </gml:LineString>
    </gml:lineStringMember>
    <gml:lineStringMember>
        <gml:LineString>
            <gml:posList>3 4 4 5</gml:posList>
        </gml:LineString>
    </gml:lineStringMember>
</gml:MultiLineString>
`,
  'v3/multicurve-singular.xml': `\
<gml:MultiCurve xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:curveMember>
        <gml:LineString>
            <gml:posList>1 2 2 3</gml:posList>
        </gml:LineString>
    </gml:curveMember>
    <gml:curveMember>
        <gml:LineString>
            <gml:posList>3 4 4 5</gml:posList>
        </gml:LineString>
    </gml:curveMember>
</gml:MultiCurve>
`,
  'v3/multicurve-curve.xml': `\
<gml:MultiCurve xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:curveMember>
        <gml:Curve>
            <gml:segments>
                <gml:LineStringSegment>
                    <gml:posList>1 2 2 3</gml:posList>
                </gml:LineStringSegment>
            </gml:segments>
        </gml:Curve>
    </gml:curveMember>
    <gml:curveMember>
        <gml:Curve>
            <gml:segments>
                <gml:LineStringSegment>
                    <gml:posList>3 4 4 5</gml:posList>
                </gml:LineStringSegment>
            </gml:segments>
        </gml:Curve>
    </gml:curveMember>
</gml:MultiCurve>
`,
  'v3/multipoint-plural.xml': `\
<gml:MultiPoint xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:pointMembers>
        <gml:Point>
            <gml:pos>1 2</gml:pos>
        </gml:Point>
        <gml:Point>
            <gml:pos>2 3</gml:pos>
        </gml:Point>
        <gml:Point>
            <gml:pos>3 4</gml:pos>
        </gml:Point>
    </gml:pointMembers>
</gml:MultiPoint>
`,
  'v3/multipoint-singular.xml': `\
<gml:MultiPoint xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:pointMember>
        <gml:Point>
            <gml:pos>1 2</gml:pos>
        </gml:Point>
    </gml:pointMember>
    <gml:pointMember>
        <gml:Point>
            <gml:pos>2 3</gml:pos>
        </gml:Point>
    </gml:pointMember>
    <gml:pointMember>
        <gml:Point>
            <gml:pos>3 4</gml:pos>
        </gml:Point>
    </gml:pointMember>
</gml:MultiPoint>
`,
  'v3/multipolygon-plural.xml': `\
<gml:MultiPolygon xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:polygonMembers>
        <gml:Polygon>
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>2 3 4 5 6 7 2 3</gml:posList>
                </gml:LinearRing>
            </gml:interior>    
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>3 4 5 6 7 8 3 4</gml:posList>
                </gml:LinearRing>
            </gml:interior>
        </gml:Polygon>
        <gml:Polygon>
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
        </gml:Polygon>
    </gml:polygonMembers>
</gml:MultiPolygon>
`,
  'v3/multipolygon-singular.xml': `\
<gml:MultiPolygon xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:polygonMember>
        <gml:Polygon>
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>2 3 4 5 6 7 2 3</gml:posList>
                </gml:LinearRing>
            </gml:interior>    
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>3 4 5 6 7 8 3 4</gml:posList>
                </gml:LinearRing>
            </gml:interior>
        </gml:Polygon>
    </gml:polygonMember>
    <gml:polygonMember>
        <gml:Polygon>
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
        </gml:Polygon>
    </gml:polygonMember>
</gml:MultiPolygon>
`,
  'v3/multisurface-plural.xml': `\
<gml:MultiSurface xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:surfaceMembers>
        <gml:Polygon>
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>2 3 4 5 6 7 2 3</gml:posList>
                </gml:LinearRing>
            </gml:interior>    
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>3 4 5 6 7 8 3 4</gml:posList>
                </gml:LinearRing>
            </gml:interior>
        </gml:Polygon>
        <gml:Polygon>
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
        </gml:Polygon>
    </gml:surfaceMembers>
</gml:MultiSurface>
`,
  'v3/multisurface-singular.xml': `\
<gml:MultiSurface xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:surfaceMember>
        <gml:Polygon>
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>2 3 4 5 6 7 2 3</gml:posList>
                </gml:LinearRing>
            </gml:interior>    
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>3 4 5 6 7 8 3 4</gml:posList>
                </gml:LinearRing>
            </gml:interior>
        </gml:Polygon>
    </gml:surfaceMember>
    <gml:surfaceMember>
        <gml:Polygon>
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
        </gml:Polygon>
    </gml:surfaceMember>
</gml:MultiSurface>
`,
  'v3/multisurface-surface.xml': `\
<gml:MultiSurface xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:surfaceMember>
        <gml:Surface>
            <gml:patches>
                <gml:PolygonPatch interpolation="planar">
                    <gml:exterior>
                        <gml:LinearRing>
                            <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                        </gml:LinearRing>
                    </gml:exterior>
                    <gml:interior>
                        <gml:LinearRing>
                            <gml:posList>2 3 4 5 6 7 2 3</gml:posList>
                        </gml:LinearRing>
                    </gml:interior>    
                    <gml:interior>
                        <gml:LinearRing>
                            <gml:posList>3 4 5 6 7 8 3 4</gml:posList>
                        </gml:LinearRing>
                    </gml:interior>
                </gml:PolygonPatch>
            </gml:patches>
        </gml:Surface>
    </gml:surfaceMember>
    <gml:surfaceMember>
        <gml:Surface>
            <gml:patches>
                <gml:PolygonPatch interpolation="planar">
                    <gml:exterior>
                        <gml:LinearRing>
                            <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                        </gml:LinearRing>
                    </gml:exterior>
                </gml:PolygonPatch>
            </gml:patches>
        </gml:Surface>
    </gml:surfaceMember>
</gml:MultiSurface>
`,
  'v3/point.xml': `\
<gml:Point xmlns:gml="http://www.opengis.net/gml" srsName="foo">
  <gml:pos>1 2</gml:pos>
</gml:Point>
`,
  'v3/polygon.xml': `\
<gml:Polygon xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:exterior>
        <gml:LinearRing>
            <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
        </gml:LinearRing>
    </gml:exterior>
    <gml:interior>
        <gml:LinearRing>
            <gml:posList>2 3 4 5 6 7 2 3</gml:posList>
        </gml:LinearRing>
    </gml:interior>    
    <gml:interior>
        <gml:LinearRing>
            <gml:posList>3 4 5 6 7 8 3 4</gml:posList>
        </gml:LinearRing>
    </gml:interior>    
</gml:Polygon>
`,
  'v3/surface.xml': `\
<gml:Surface xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:patches>
        <gml:PolygonPatch interpolation="planar">
            <gml:exterior>
                <gml:LinearRing>
                    <gml:posList>1 2 3 4 5 6 1 2</gml:posList>
                </gml:LinearRing>
            </gml:exterior>
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>2 3 4 5 6 7 2 3</gml:posList>
                </gml:LinearRing>
            </gml:interior>    
            <gml:interior>
                <gml:LinearRing>
                    <gml:posList>3 4 5 6 7 8 3 4</gml:posList>
                </gml:LinearRing>
            </gml:interior>
        </gml:PolygonPatch>
    </gml:patches>
</gml:Surface>
`,
  'v3/topp-states-gml.xml': `\
<?xml version="1.0" encoding="UTF-8"?>
<gml:featureMembers xsi:schemaLocation="http://www.openplans.org/topp http://sigma.openplans.org:80/geoserver/wfs?service=WFS&amp;version=1.1.0&amp;request=DescribeFeatureType&amp;typeName=topp:states http://www.opengis.net/gml http://schemas.opengis.net/gml/3.2.1/gml.xsd" xmlns:topp="http://www.openplans.org/topp" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gml="http://www.opengis.net/gml"><topp:states fid="states.1"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>37.5101 -88.0711 37.4761 -88.0871 37.4421 -88.3111 37.4091 -88.3591 37.4201 -88.4191 37.4001 -88.4671 37.2961 -88.5111 37.2571 -88.5011 37.2051 -88.4501 37.1561 -88.4221 37.0981 -88.4501 37.0721 -88.4761 37.0681 -88.4901 37.0641 -88.5171 37.0721 -88.5591 37.1091 -88.6141 37.1351 -88.6881 37.1411 -88.7391 37.1521 -88.7461 37.2021 -88.8631 37.2181 -88.9321 37.2201 -88.9931 37.1851 -89.0651 37.1121 -89.1161 37.0931 -89.1461 37.0641 -89.1691 37.0251 -89.1741 36.9981 -89.1501 36.9881 -89.1291 36.9861 -89.1931 37.0281 -89.2101 37.0411 -89.2371 37.0871 -89.2641 37.0911 -89.2841 37.0851 -89.3031 37.0601 -89.3091 37.0271 -89.2641 37.0081 -89.2621 36.9991 -89.2821 37.0091 -89.3101 37.0491 -89.3821 37.0991 -89.3791 37.1371 -89.4231 37.1651 -89.4401 37.2241 -89.4681 37.2531 -89.4651 37.2561 -89.4891 37.2761 -89.5131 37.3041 -89.5131 37.3291 -89.5001 37.3391 -89.4681 37.3551 -89.4351 37.4111 -89.4271 37.4531 -89.4531 37.4911 -89.4941 37.5711 -89.5241 37.6151 -89.5131 37.6501 -89.5191 37.6791 -89.5131 37.6941 -89.5211 37.7061 -89.5811 37.7451 -89.6661 37.7831 -89.6751 37.8041 -89.6911 37.8401 -89.7281 37.9051 -89.8511 37.9051 -89.8611 37.8911 -89.8661 37.8751 -89.9001 37.8781 -89.9371 37.9111 -89.9781 37.9631 -89.9581 37.9691 -90.0101 37.9931 -90.0411 38.0321 -90.1191 38.0531 -90.1341 38.0881 -90.2071 38.1221 -90.2541 38.1661 -90.2891 38.1881 -90.3361 38.2341 -90.3641 38.3231 -90.3691 38.3651 -90.3581 38.3901 -90.3391 38.4271 -90.3011 38.5181 -90.2651 38.5321 -90.2611 38.5621 -90.2401 38.6101 -90.1831 38.6581 -90.1831 38.7001 -90.2021 38.7231 -90.1961 38.7731 -90.1631 38.7851 -90.1351 38.8001 -90.1211 38.8301 -90.1131 38.8531 -90.1321 38.9141 -90.2431 38.9241 -90.2781 38.9241 -90.3191 38.9621 -90.4131 38.9591 -90.4691 38.8911 -90.5301 38.8711 -90.5701 38.8801 -90.6271 38.9351 -90.6681 39.0371 -90.7061 39.0581 -90.7071 39.0931 -90.6901 39.1441 -90.7161 39.1951 -90.7181 39.2241 -90.7321 39.2471 -90.7381 39.2961 -90.7791 39.3501 -90.8501 39.4001 -90.9471 39.4441 -91.0361 39.4731 -91.0641 39.5281 -91.0931 39.5521 -91.1561 39.6001 -91.2031 39.6851 -91.3171 39.7241 -91.3671 39.7611 -91.3731 39.8031 -91.3811 39.8631 -91.4491 39.8851 -91.4501 39.9011 -91.4341 39.9211 -91.4301 39.9461 -91.4471 40.0051 -91.4871 40.0661 -91.5041 40.1341 -91.5161 40.2001 -91.5061 40.2511 -91.4981 40.3091 -91.4861 40.3711 -91.4481 40.3861 -91.4181 40.3921 -91.3851 40.4021 -91.3721 40.4471 -91.3851 40.5031 -91.3741 40.5281 -91.3821 40.5471 -91.4121 40.5721 -91.4111 40.6031 -91.3751 40.6391 -91.2621 40.6431 -91.2141 40.6561 -91.1621 40.6821 -91.1291 40.7051 -91.1191 40.7611 -91.0921 40.8331 -91.0881 40.8791 -91.0491 40.9231 -90.9831 40.9501 -90.9601 41.0701 -90.9541 41.1041 -90.9571 41.1441 -90.9901 41.1651 -91.0181 41.1761 -91.0561 41.2311 -91.1011 41.2671 -91.1021 41.3341 -91.0731 41.4011 -91.0551 41.4231 -91.0271 41.4311 -91.0001 41.4211 -90.9491 41.4441 -90.8441 41.4491 -90.7791 41.4501 -90.7081 41.4621 -90.6581 41.5091 -90.6001 41.5251 -90.5401 41.5271 -90.4541 41.5431 -90.4341 41.5671 -90.4231 41.5861 -90.3481 41.6021 -90.3391 41.6491 -90.3411 41.7221 -90.3261 41.7561 -90.3041 41.7811 -90.2551 41.8061 -90.1951 41.9301 -90.1541 41.9831 -90.1421 42.0331 -90.1501 42.0611 -90.1681 42.1031 -90.1661 42.1201 -90.1761 42.1221 -90.1911 42.1591 -90.2301 42.1971 -90.3231 42.2101 -90.3671 42.2421 -90.4071 42.2631 -90.4171 42.3401 -90.4271 42.3601 -90.4411 42.3881 -90.4911 42.4211 -90.5631 42.4601 -90.6051 42.4751 -90.6481 42.4941 -90.6511 42.5091 -90.6381 42.5081 -90.4191 42.5041 -89.9231 42.5031 -89.8341 42.4971 -89.4001 42.4971 -89.3591 42.4901 -88.9391 42.4901 -88.7641 42.4891 -88.7061 42.4911 -88.2971 42.4891 -88.1941 42.4891 -87.7971 42.3141 -87.8361 42.1561 -87.7601 42.0591 -87.6701 41.8471 -87.6121 41.7231 -87.5291 41.4691 -87.5321 41.3011 -87.5321 41.1731 -87.5311 41.0091 -87.5321 40.7451 -87.5321 40.4941 -87.5371 40.4831 -87.5351 40.1661 -87.5351 39.8871 -87.5351 39.6091 -87.5351 39.4771 -87.5381 39.3501 -87.5401 39.3381 -87.5971 39.3071 -87.6251 39.2971 -87.6101 39.2811 -87.6151 39.2581 -87.6061 39.2481 -87.5841 39.2081 -87.5881 39.1981 -87.5941 39.1961 -87.6071 39.1681 -87.6441 39.1461 -87.6701 39.1301 -87.6591 39.1131 -87.6621 39.1031 -87.6311 39.0881 -87.6301 39.0841 -87.6121 39.0621 -87.5851 38.9951 -87.5811 38.9941 -87.5911 38.9771 -87.5471 38.9631 -87.5331 38.9311 -87.5301 38.9041 -87.5391 38.8691 -87.5591 38.8571 -87.5501 38.7951 -87.5071 38.7761 -87.5191 38.7691 -87.5081 38.7361 -87.5081 38.6851 -87.5431 38.6721 -87.5881 38.6421 -87.6251 38.6221 -87.6281 38.5991 -87.6191 38.5931 -87.6401 38.5731 -87.6521 38.5471 -87.6721 38.5151 -87.6511 38.5001 -87.6531 38.5041 -87.6791 38.4811 -87.6921 38.4661 -87.7561 38.4571 -87.7581 38.4451 -87.7381 38.4171 -87.7481 38.3781 -87.7841 38.3521 -87.8341 38.2861 -87.8501 38.2851 -87.8631 38.3161 -87.8741 38.3151 -87.8831 38.3001 -87.8881 38.2811 -87.9141 38.3021 -87.9131 38.3041 -87.9251 38.2411 -87.9801 38.2341 -87.9861 38.2001 -87.9771 38.1711 -87.9321 38.1571 -87.9311 38.1361 -87.9501 38.1311 -87.9731 38.1031 -88.0181 38.0921 -88.0121 38.0961 -87.9641 38.0731 -87.9751 38.0541 -88.0341 38.0451 -88.0431 38.0381 -88.0411 38.0331 -88.0211 38.0081 -88.0291 37.9751 -88.0211 37.9561 -88.0421 37.9341 -88.0411 37.9291 -88.0641 37.944 -88.0781 37.9231 -88.084 37.9171 -88.0301 37.9051 -88.0261 37.8961 -88.0441 37.9061 -88.1001 37.8951 -88.1011 37.8671 -88.0751 37.8431 -88.0341 37.8271 -88.0421 37.8311 -88.0891 37.8171 -88.0861 37.8051 -88.0351 37.7351 -88.0721 37.7001 -88.1331 37.6601 -88.1591 37.6281 -88.1571 37.5831 -88.1341 37.5101 -88.0711</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Illinois</topp:STATE_NAME><topp:STATE_FIPS>17</topp:STATE_FIPS><topp:SUB_REGION>E N Cen</topp:SUB_REGION><topp:STATE_ABBR>IL</topp:STATE_ABBR><topp:LAND_KM>143986.61</topp:LAND_KM><topp:WATER_KM>1993.335</topp:WATER_KM><topp:PERSONS>1.1431E7</topp:PERSONS><topp:FAMILIES>2924880.0</topp:FAMILIES><topp:HOUSHOLD>4202240.0</topp:HOUSHOLD><topp:MALE>5552233.0</topp:MALE><topp:FEMALE>5878369.0</topp:FEMALE><topp:WORKERS>4199206.0</topp:WORKERS><topp:DRVALONE>3741715.0</topp:DRVALONE><topp:CARPOOL>652603.0</topp:CARPOOL><topp:PUBTRANS>538071.0</topp:PUBTRANS><topp:EMPLOYED>5417967.0</topp:EMPLOYED><topp:UNEMPLOY>385040.0</topp:UNEMPLOY><topp:SERVICE>1360159.0</topp:SERVICE><topp:MANUAL>828906.0</topp:MANUAL><topp:P_MALE>0.486</topp:P_MALE><topp:P_FEMALE>0.514</topp:P_FEMALE><topp:SAMP_POP>1747776.0</topp:SAMP_POP></topp:states><topp:states fid="states.2"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.9661 -77.0081 38.8891 -76.9111 38.7881 -77.0451 38.8131 -77.0351 38.8291 -77.0451 38.8381 -77.0401 38.8621 -77.0391 38.8861 -77.0671 38.9151 -77.0781 38.9321 -77.1221 38.9931 -77.0421 38.9661 -77.0081</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>District of Columbia</topp:STATE_NAME><topp:STATE_FIPS>11</topp:STATE_FIPS><topp:SUB_REGION>S Atl</topp:SUB_REGION><topp:STATE_ABBR>DC</topp:STATE_ABBR><topp:LAND_KM>159.055</topp:LAND_KM><topp:WATER_KM>17.991</topp:WATER_KM><topp:PERSONS>606900.0</topp:PERSONS><topp:FAMILIES>122087.0</topp:FAMILIES><topp:HOUSHOLD>249634.0</topp:HOUSHOLD><topp:MALE>282970.0</topp:MALE><topp:FEMALE>323930.0</topp:FEMALE><topp:WORKERS>229975.0</topp:WORKERS><topp:DRVALONE>106694.0</topp:DRVALONE><topp:CARPOOL>36621.0</topp:CARPOOL><topp:PUBTRANS>111422.0</topp:PUBTRANS><topp:EMPLOYED>303994.0</topp:EMPLOYED><topp:UNEMPLOY>23442.0</topp:UNEMPLOY><topp:SERVICE>65498.0</topp:SERVICE><topp:MANUAL>22407.0</topp:MANUAL><topp:P_MALE>0.466</topp:P_MALE><topp:P_FEMALE>0.534</topp:P_FEMALE><topp:SAMP_POP>72696.0</topp:SAMP_POP></topp:states><topp:states fid="states.3"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.5571 -75.7071 38.6491 -75.7111 38.8301 -75.7241 39.1411 -75.7521 39.2471 -75.7611 39.2951 -75.7641 39.3831 -75.7721 39.7231 -75.7911 39.7241 -75.7751 39.7741 -75.7451 39.8201 -75.6951 39.8381 -75.6441 39.8401 -75.5831 39.8261 -75.4701 39.7981 -75.4201 39.7891 -75.4121 39.7781 -75.4281 39.7631 -75.4601 39.7411 -75.4751 39.7191 -75.4761 39.7141 -75.4891 39.6121 -75.6101 39.5661 -75.5621 39.4631 -75.5901 39.3661 -75.5151 39.2571 -75.4021 39.0731 -75.3971 39.0121 -75.3241 38.9451 -75.3071 38.8081 -75.1901 38.7991 -75.0831 38.4491 -75.0451 38.4491 -75.0681 38.4501 -75.0931 38.4551 -75.3501 38.4631 -75.6991 38.5571 -75.7071</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Delaware</topp:STATE_NAME><topp:STATE_FIPS>10</topp:STATE_FIPS><topp:SUB_REGION>S Atl</topp:SUB_REGION><topp:STATE_ABBR>DE</topp:STATE_ABBR><topp:LAND_KM>5062.456</topp:LAND_KM><topp:WATER_KM>1385.022</topp:WATER_KM><topp:PERSONS>666168.0</topp:PERSONS><topp:FAMILIES>175867.0</topp:FAMILIES><topp:HOUSHOLD>247497.0</topp:HOUSHOLD><topp:MALE>322968.0</topp:MALE><topp:FEMALE>343200.0</topp:FEMALE><topp:WORKERS>247566.0</topp:WORKERS><topp:DRVALONE>258087.0</topp:DRVALONE><topp:CARPOOL>42968.0</topp:CARPOOL><topp:PUBTRANS>8069.0</topp:PUBTRANS><topp:EMPLOYED>335147.0</topp:EMPLOYED><topp:UNEMPLOY>13945.0</topp:UNEMPLOY><topp:SERVICE>87973.0</topp:SERVICE><topp:MANUAL>44140.0</topp:MANUAL><topp:P_MALE>0.485</topp:P_MALE><topp:P_FEMALE>0.515</topp:P_FEMALE><topp:SAMP_POP>102776.0</topp:SAMP_POP></topp:states><topp:states fid="states.4"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.4801 -79.2311 38.4371 -79.2721 38.4121 -79.3171 38.4621 -79.4861 38.5531 -79.5361 38.5921 -79.6421 38.5501 -79.6691 38.5201 -79.6651 38.5001 -79.6921 38.4301 -79.6841 38.3941 -79.7201 38.3511 -79.7331 38.3531 -79.7641 38.3141 -79.8001 38.2981 -79.8031 38.2841 -79.7861 38.2681 -79.7931 38.2501 -79.8311 38.1791 -79.9161 38.1621 -79.9101 38.1211 -79.9351 38.1031 -79.9281 38.0671 -79.9571 38.0381 -79.9661 37.9891 -80.0001 37.9551 -80.0551 37.9141 -80.1061 37.8911 -80.1181 37.8771 -80.1601 37.8601 -80.1721 37.8421 -80.1711 37.8021 -80.2231 37.7781 -80.2201 37.7571 -80.2541 37.7251 -80.2501 37.6821 -80.3031 37.6711 -80.2951 37.6521 -80.3051 37.6401 -80.3011 37.6401 -80.2541 37.6241 -80.2191 37.5961 -80.2461 37.5661 -80.3161 37.5331 -80.3261 37.5281 -80.3081 37.5361 -80.2801 37.5111 -80.2881 37.4911 -80.3471 37.4751 -80.3521 37.4651 -80.3881 37.4341 -80.4251 37.4221 -80.4741 37.4331 -80.4871 37.4601 -80.4881 37.4741 -80.5081 37.4691 -80.5421 37.4451 -80.5971 37.3881 -80.7051 37.3921 -80.7291 37.3871 -80.7461 37.3781 -80.7471 37.3711 -80.7631 37.3861 -80.7701 37.3911 -80.7991 37.4121 -80.7991 37.4231 -80.8501 37.3881 -80.8771 37.3501 -80.8481 37.3391 -80.8551 37.3011 -80.9341 37.2911 -80.9681 37.2961 -80.9781 37.3061 -80.9861 37.2851 -81.0251 37.2741 -81.1401 37.2401 -81.2231 37.2931 -81.3121 37.3381 -81.3581 37.3111 -81.3911 37.2821 -81.4031 37.2541 -81.4751 37.2521 -81.4951 37.2341 -81.5051 37.2061 -81.5561 37.2041 -81.6661 37.2351 -81.7011 37.2501 -81.7381 37.2721 -81.7521 37.2871 -81.7921 37.2791 -81.8151 37.2851 -81.8391 37.3061 -81.8581 37.3251 -81.8631 37.3401 -81.8971 37.3711 -81.9261 37.4151 -81.9201 37.4661 -81.9881 37.4821 -81.9761 37.4921 -81.9481 37.5061 -81.9351 37.5311 -81.9591 37.5431 -81.9761 37.5301 -82.0261 37.5511 -82.0491 37.5251 -82.0551 37.5481 -82.0841 37.5571 -82.1421 37.5651 -82.1461 37.5691 -82.1371 37.5901 -82.1311 37.5931 -82.1591 37.6401 -82.1851 37.6231 -82.2051 37.6561 -82.2381 37.6681 -82.2951 37.7441 -82.3291 37.7581 -82.3191 37.7841 -82.3391 37.8111 -82.4051 37.8721 -82.4211 37.8941 -82.4371 37.9221 -82.5001 37.9421 -82.4931 37.9541 -82.4801 37.9751 -82.4751 38.0151 -82.5241 38.1091 -82.5931 38.1461 -82.6461 38.1691 -82.6471 38.1781 -82.6131 38.1931 -82.6061 38.2381 -82.6161 38.2451 -82.5891 38.2551 -82.5741 38.2921 -82.5801 38.3071 -82.5721 38.3681 -82.5981 38.4121 -82.5861 38.4031 -82.5751 38.4001 -82.5471 38.4051 -82.4951 38.4301 -82.4151 38.4281 -82.3941 38.4411 -82.3291 38.4651 -82.3141 38.5791 -82.2901 38.5941 -82.2711 38.5841 -82.2131 38.5941 -82.1841 38.6321 -82.1731 38.6771 -82.1891 38.7101 -82.1841 38.7781 -82.2161 38.8041 -82.1971 38.8381 -82.1461 38.8991 -82.1391 38.9521 -82.1011 38.9771 -82.0851 38.9881 -82.0581 39.0141 -82.0431 39.0151 -81.9991 38.9921 -81.9751 38.9911 -81.9371 38.9841 -81.9271 38.9321 -81.8981 38.8941 -81.9311 38.8841 -81.9151 38.8731 -81.8921 38.8851 -81.8661 38.9371 -81.8411 38.9481 -81.8231 38.9231 -81.7831 38.9301 -81.7621 38.9681 -81.7811 39.0161 -81.7751 39.0441 -81.8131 39.0661 -81.8241 39.0761 -81.8191 39.0771 -81.7861 39.0941 -81.7531 39.1251 -81.7441 39.1751 -81.7591 39.2131 -81.7231 39.2191 -81.6981 39.2601 -81.6891 39.2701 -81.6671 39.2651 -81.5721 39.3321 -81.5571 39.3521 -81.5401 39.4061 -81.4651 39.4101 -81.4481 39.4051 -81.4341 39.3451 -81.3761 39.3531 -81.3381 39.3861 -81.2841 39.3881 -81.2371 39.4081 -81.2251 39.4151 -81.2001 39.4371 -81.1801 39.4671 -81.1171 39.4961 -81.0981 39.5321 -81.0371 39.5441 -81.0321 39.5811 -80.9831 39.6061 -80.9321 39.6071 -80.9121 39.6241 -80.8811 39.6621 -80.8721 39.6801 -80.8631 39.7031 -80.8321 39.7181 -80.8321 39.7361 -80.8561 39.7591 -80.8701 39.8081 -80.8191 39.8391 -80.8261 39.8561 -80.7981 39.8721 -80.7911 39.9041 -80.8121 39.9151 -80.8081 39.9191 -80.7961 39.9131 -80.7681 39.9211 -80.7591 39.9461 -80.7631 39.9831 -80.7391 40.0351 -80.7381 40.1541 -80.7021 40.1681 -80.7011 40.1941 -80.6781 40.2451 -80.6501 40.2761 -80.6141 40.3061 -80.6041 40.3731 -80.6091 40.3881 -80.6291 40.3981 -80.6281 40.4801 -80.6021 40.5041 -80.6251 40.5391 -80.6331 40.5681 -80.6681 40.5821 -80.6671 40.6131 -80.6371 40.6191 -80.6111 40.6151 -80.5741 40.6371 -80.5221 40.4781 -80.5241 40.4021 -80.5231 40.1621 -80.5261 40.0221 -80.5251 39.9581 -80.5241 39.7211 -80.5241 39.7191 -80.4291 39.7211 -79.9181 39.7211 -79.7651 39.7201 -79.4811 39.1971 -79.4901 39.2131 -79.4611 39.2111 -79.4491 39.2691 -79.3851 39.2911 -79.3461 39.3001 -79.2951 39.3251 -79.2801 39.3481 -79.2601 39.3931 -79.1631 39.4131 -79.1581 39.4161 -79.1311 39.4471 -79.1041 39.4641 -79.0961 39.4701 -79.1041 39.4701 -79.0701 39.4851 -79.0641 39.4831 -79.0491 39.4381 -78.9701 39.4601 -78.9551 39.5251 -78.8711 39.5631 -78.8381 39.5661 -78.8061 39.5851 -78.8221 39.6151 -78.7981 39.6301 -78.7981 39.6441 -78.7721 39.6261 -78.7671 39.6261 -78.7321 39.6211 -78.7301 39.6081 -78.7361 39.6011 -78.7741 39.5811 -78.7611 39.5761 -78.7321 39.5591 -78.7161 39.5361 -78.6661 39.5371 -78.6491 39.5291 -78.6371 39.5351 -78.6041 39.5201 -78.5641 39.5251 -78.5091 39.5191 -78.4811 39.5331 -78.4561 39.5481 -78.4461 39.5491 -78.4211 39.5801 -78.4621 39.5921 -78.4501 39.5871 -78.4041 39.6201 -78.4321 39.6141 -78.3841 39.6311 -78.3771 39.6321 -78.3571 39.6401 -78.3481 39.6181 -78.2731 39.6411 -78.2571 39.6581 -78.2291 39.6731 -78.2271 39.6751 -78.2041 39.6941 -78.1831 39.6751 -78.0941 39.6221 -78.0261 39.5981 -77.9951 39.6111 -77.9641 39.5851 -77.9451 39.5911 -77.9351 39.6141 -77.9471 39.6181 -77.9381 39.5961 -77.9031 39.6001 -77.8911 39.6161 -77.8881 39.6021 -77.8551 39.6051 -77.8421 39.5721 -77.8401 39.5651 -77.8531 39.5641 -77.8851 39.5571 -77.8901 39.5451 -77.8691 39.5141 -77.8641 39.5311 -77.8441 39.5251 -77.8351 39.5291 -77.8291 39.5111 -77.8251 39.5011 -77.8481 39.4931 -77.8251 39.4981 -77.7711 39.4801 -77.7991 39.4591 -77.7851 39.4631 -77.8041 39.4501 -77.7961 39.4391 -77.8041 39.4321 -77.8021 39.4251 -77.7571 39.4031 -77.7411 39.3961 -77.7371 39.3781 -77.7561 39.3601 -77.7451 39.3381 -77.7541 39.3261 -77.7501 39.3171 -77.7271 39.2841 -77.7591 39.2461 -77.7681 39.1961 -77.8051 39.1411 -77.8201 39.1321 -77.8301 39.2651 -78.0331 39.3911 -78.2291 39.4231 -78.2771 39.4561 -78.3471 39.3801 -78.3501 39.3611 -78.3651 39.3501 -78.3441 39.3411 -78.3411 39.2571 -78.4131 39.2441 -78.3991 39.2121 -78.4231 39.1971 -78.4241 39.1701 -78.4021 39.1481 -78.4301 39.1181 -78.4481 39.1111 -78.4851 39.0931 -78.5011 39.0571 -78.5361 39.0351 -78.5641 39.0231 -78.5491 39.0131 -78.5531 38.9671 -78.5981 38.9791 -78.6311 38.9501 -78.6471 38.9211 -78.6801 38.9041 -78.7191 38.9301 -78.7241 38.9291 -78.7371 38.9111 -78.7491 38.8801 -78.7931 38.8331 -78.8161 38.7631 -78.8661 38.8461 -78.9871 38.7991 -79.0331 38.7901 -79.0551 38.7611 -79.0561 38.7071 -79.0871 38.6591 -79.0881 38.6631 -79.1211 38.6581 -79.1271 38.4801 -79.2311</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>West Virginia</topp:STATE_NAME><topp:STATE_FIPS>54</topp:STATE_FIPS><topp:SUB_REGION>S Atl</topp:SUB_REGION><topp:STATE_ABBR>WV</topp:STATE_ABBR><topp:LAND_KM>62384.2</topp:LAND_KM><topp:WATER_KM>375.199</topp:WATER_KM><topp:PERSONS>1793477.0</topp:PERSONS><topp:FAMILIES>500259.0</topp:FAMILIES><topp:HOUSHOLD>688557.0</topp:HOUSHOLD><topp:MALE>861536.0</topp:MALE><topp:FEMALE>931941.0</topp:FEMALE><topp:WORKERS>661702.0</topp:WORKERS><topp:DRVALONE>493164.0</topp:DRVALONE><topp:CARPOOL>106918.0</topp:CARPOOL><topp:PUBTRANS>7237.0</topp:PUBTRANS><topp:EMPLOYED>671085.0</topp:EMPLOYED><topp:UNEMPLOY>71142.0</topp:UNEMPLOY><topp:SERVICE>205950.0</topp:SERVICE><topp:MANUAL>124172.0</topp:MANUAL><topp:P_MALE>0.48</topp:P_MALE><topp:P_FEMALE>0.52</topp:P_FEMALE><topp:SAMP_POP>317564.0</topp:SAMP_POP></topp:states><topp:states fid="states.5"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.6491 -75.7111 38.5571 -75.7071 38.4631 -75.6991 38.4551 -75.3501 38.4501 -75.0931 38.3691 -75.1551 38.2731 -75.1501 38.2011 -75.2621 38.0681 -75.3731 38.0161 -75.3721 37.9961 -75.6261 37.9701 -75.6481 37.9791 -75.8651 38.0971 -75.7691 38.1741 -75.8971 38.2311 -75.8381 38.2401 -75.8611 38.2631 -75.7941 38.2581 -75.8941 38.3571 -75.8721 38.3751 -75.8861 38.2821 -75.9491 38.2821 -75.9951 38.3211 -76.0201 38.2581 -76.0651 38.4361 -76.2941 38.4781 -76.2911 38.5431 -76.1921 38.5951 -76.2511 38.5711 -76.0311 38.6221 -76.0281 38.5911 -76.0461 38.6101 -76.0751 38.7071 -76.1241 38.7091 -76.1741 38.7621 -76.2231 38.7691 -76.2671 38.6791 -76.3371 38.6991 -76.3501 38.834 -76.2721 38.7651 -76.1951 38.7881 -76.1651 38.8851 -76.1141 38.8891 -76.0751 38.8981 -76.1021 38.9481 -76.0951 38.9201 -76.1131 38.9731 -76.1991 39.1181 -76.1111 39.0921 -76.2211 39.1301 -76.2381 39.2041 -76.2181 39.3211 -76.1121 39.3581 -76.0371 39.3791 -75.8491 39.3941 -75.9781 39.4711 -75.9521 39.5241 -75.9741 39.5691 -76.0311 39.5421 -76.0781 39.4011 -76.1541 39.3741 -76.2261 39.3931 -76.3641 39.2311 -76.3991 39.2421 -76.5311 39.2591 -76.6041 39.2311 -76.5651 39.1981 -76.5761 39.1801 -76.6071 39.1581 -76.5951 39.1961 -76.5631 39.1181 -76.4231 38.9081 -76.4721 38.7581 -76.5491 38.7091 -76.5251 38.5221 -76.5081 38.3911 -76.3851 38.3461 -76.4051 38.3201 -76.4211 38.3351 -76.4711 38.4101 -76.5201 38.4501 -76.6471 38.2131 -76.3431 38.0451 -76.3301 38.2221 -76.5771 38.2341 -76.7601 38.3911 -76.8641 38.2991 -76.9081 38.3311 -76.9731 38.4261 -77.0021 38.3901 -77.2201 38.4131 -77.2551 38.4871 -77.2771 38.6481 -77.1291 38.6771 -77.1251 38.7031 -77.0931 38.7151 -77.0811 38.7121 -77.0571 38.7181 -77.0461 38.7881 -77.0451 38.8891 -76.9111 38.9661 -77.0081 38.9931 -77.0421 38.9321 -77.1221 38.9641 -77.1521 38.9751 -77.2431 39.0271 -77.2551 39.0621 -77.3241 39.0681 -77.3461 39.0661 -77.4331 39.0801 -77.4591 39.1031 -77.4791 39.1161 -77.5131 39.1571 -77.5161 39.1761 -77.4781 39.2181 -77.4611 39.2291 -77.4641 39.2491 -77.4941 39.2681 -77.5421 39.2981 -77.5681 39.2991 -77.6161 39.3181 -77.6791 39.3171 -77.7271 39.3261 -77.7501 39.3381 -77.7541 39.3601 -77.7451 39.3781 -77.7561 39.3961 -77.7371 39.4031 -77.7411 39.4251 -77.7571 39.4321 -77.8021 39.4391 -77.8041 39.4501 -77.7961 39.4631 -77.8041 39.4591 -77.7851 39.4801 -77.7991 39.4981 -77.7711 39.4931 -77.8251 39.5011 -77.8481 39.5111 -77.8251 39.5291 -77.8291 39.5251 -77.8351 39.5311 -77.8441 39.5141 -77.8641 39.5451 -77.8691 39.5571 -77.8901 39.5641 -77.8851 39.5651 -77.8531 39.5721 -77.8401 39.6051 -77.8421 39.6021 -77.8551 39.6161 -77.8881 39.6001 -77.8911 39.5961 -77.9031 39.6181 -77.9381 39.6141 -77.9471 39.5911 -77.9351 39.5851 -77.9451 39.6111 -77.9641 39.5981 -77.9951 39.6221 -78.0261 39.6751 -78.0941 39.6941 -78.1831 39.6751 -78.2041 39.6731 -78.2271 39.6581 -78.2291 39.6411 -78.2571 39.6181 -78.2731 39.6401 -78.3481 39.6321 -78.3571 39.6311 -78.3771 39.6141 -78.3841 39.6201 -78.4321 39.5871 -78.4041 39.5921 -78.4501 39.5801 -78.4621 39.5491 -78.4211 39.5481 -78.4461 39.5331 -78.4561 39.5191 -78.4811 39.5251 -78.5091 39.5201 -78.5641 39.5351 -78.6041 39.5291 -78.6371 39.5371 -78.6491 39.5361 -78.6661 39.5591 -78.7161 39.5761 -78.7321 39.5811 -78.7611 39.6011 -78.7741 39.6081 -78.7361 39.6211 -78.7301 39.6261 -78.7321 39.6261 -78.7671 39.6441 -78.7721 39.6301 -78.7981 39.6151 -78.7981 39.5851 -78.8221 39.5661 -78.8061 39.5631 -78.8381 39.5251 -78.8711 39.4601 -78.9551 39.4381 -78.9701 39.4831 -79.0491 39.4851 -79.0641 39.4701 -79.0701 39.4701 -79.1041 39.4641 -79.0961 39.4471 -79.1041 39.4161 -79.1311 39.4131 -79.1581 39.3931 -79.1631 39.3481 -79.2601 39.3251 -79.2801 39.3001 -79.2951 39.2911 -79.3461 39.2691 -79.3851 39.2111 -79.4491 39.2131 -79.4611 39.1971 -79.4901 39.7201 -79.4811 39.7191 -79.3961 39.7221 -78.9301 39.7231 -78.8181 39.7231 -78.3851 39.7241 -78.3341 39.7251 -78.0961 39.7191 -77.4761 39.7191 -77.4641 39.7201 -77.2211 39.7201 -76.9971 39.7211 -76.7901 39.7201 -76.5701 39.7211 -76.2331 39.7221 -76.1391 39.7231 -75.7911 39.3831 -75.7721 39.2951 -75.7641 39.2471 -75.7611 39.1411 -75.7521 38.8301 -75.7241 38.6491 -75.7111</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.9071 -76.2931 38.9671 -76.2941 38.9561 -76.3391 38.9411 -76.3141 38.9121 -76.3221 38.9241 -76.3421 38.8751 -76.3291 38.8541 -76.3751 38.9581 -76.3561 39.0401 -76.2991 38.9781 -76.2481 38.9231 -76.2461 38.9491 -76.2731 38.9071 -76.2931</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.4491 -75.0681 38.4491 -75.0451 38.3221 -75.0871 38.4491 -75.0681</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.0271 -75.2701 38.0371 -75.2441 38.0941 -75.2091 38.2041 -75.1641 38.3201 -75.0941 38.1241 -75.1731 38.0281 -75.2421 38.0271 -75.2701</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Maryland</topp:STATE_NAME><topp:STATE_FIPS>24</topp:STATE_FIPS><topp:SUB_REGION>S Atl</topp:SUB_REGION><topp:STATE_ABBR>MD</topp:STATE_ABBR><topp:LAND_KM>25316.345</topp:LAND_KM><topp:WATER_KM>6188.794</topp:WATER_KM><topp:PERSONS>4781468.0</topp:PERSONS><topp:FAMILIES>1245814.0</topp:FAMILIES><topp:HOUSHOLD>1748991.0</topp:HOUSHOLD><topp:MALE>2318671.0</topp:MALE><topp:FEMALE>2462797.0</topp:FEMALE><topp:WORKERS>1783061.0</topp:WORKERS><topp:DRVALONE>1732837.0</topp:DRVALONE><topp:CARPOOL>376449.0</topp:CARPOOL><topp:PUBTRANS>202169.0</topp:PUBTRANS><topp:EMPLOYED>2481342.0</topp:EMPLOYED><topp:UNEMPLOY>111536.0</topp:UNEMPLOY><topp:SERVICE>586994.0</topp:SERVICE><topp:MANUAL>260308.0</topp:MANUAL><topp:P_MALE>0.485</topp:P_MALE><topp:P_FEMALE>0.515</topp:P_FEMALE><topp:SAMP_POP>684773.0</topp:SAMP_POP></topp:states><topp:states fid="states.6"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>37.6411 -102.0431 37.3861 -102.0411 36.9881 -102.0361 36.9981 -102.9971 36.9991 -103.0771 36.9941 -103.9931 36.9931 -105.1451 36.9921 -105.2121 36.9941 -105.7121 36.9921 -105.9911 36.9911 -106.4711 36.9891 -106.8601 36.9991 -106.8891 36.9971 -107.4101 36.9981 -107.4711 36.9991 -108.3711 36.9961 -109.0471 37.6301 -109.0441 37.8871 -109.0421 38.1521 -109.0421 38.2441 -109.0551 38.4941 -109.0531 39.3601 -109.0501 39.5181 -109.0521 39.6571 -109.0511 40.2101 -109.0501 40.6651 -109.0451 40.9981 -109.0471 41.0031 -107.9181 41.0001 -107.3031 40.9981 -106.8641 41.0011 -106.3281 41.0001 -106.2021 40.9961 -105.2781 40.9941 -104.9331 41.0031 -104.0511 40.9991 -103.5711 41.0001 -103.3821 40.9981 -102.6511 41.0001 -102.6201 40.9981 -102.0471 40.7431 -102.0461 40.6971 -102.0451 40.4311 -102.0471 40.3421 -102.0471 39.9981 -102.0511 39.5681 -102.0481 39.5621 -102.0481 39.1261 -102.0471 39.0361 -102.0481 38.6921 -102.0471 38.6151 -102.0471 38.2631 -102.0451 38.2531 -102.0451 37.7341 -102.0431 37.6411 -102.0431</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Colorado</topp:STATE_NAME><topp:STATE_FIPS>08</topp:STATE_FIPS><topp:SUB_REGION>Mtn</topp:SUB_REGION><topp:STATE_ABBR>CO</topp:STATE_ABBR><topp:LAND_KM>268659.501</topp:LAND_KM><topp:WATER_KM>960.364</topp:WATER_KM><topp:PERSONS>3294394.0</topp:PERSONS><topp:FAMILIES>854214.0</topp:FAMILIES><topp:HOUSHOLD>1282489.0</topp:HOUSHOLD><topp:MALE>1631295.0</topp:MALE><topp:FEMALE>1663099.0</topp:FEMALE><topp:WORKERS>1233023.0</topp:WORKERS><topp:DRVALONE>1216639.0</topp:DRVALONE><topp:CARPOOL>210274.0</topp:CARPOOL><topp:PUBTRANS>46983.0</topp:PUBTRANS><topp:EMPLOYED>1633281.0</topp:EMPLOYED><topp:UNEMPLOY>99438.0</topp:UNEMPLOY><topp:SERVICE>421079.0</topp:SERVICE><topp:MANUAL>181760.0</topp:MANUAL><topp:P_MALE>0.495</topp:P_MALE><topp:P_FEMALE>0.505</topp:P_FEMALE><topp:SAMP_POP>512677.0</topp:SAMP_POP></topp:states><topp:states fid="states.7"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>36.6551 -86.5101 36.6521 -86.7701 36.6501 -87.0681 36.6511 -87.1121 36.6491 -87.3461 36.6451 -87.6401 36.6441 -87.6931 36.6411 -87.8531 36.6691 -87.8701 36.6791 -88.0711 36.5821 -88.0411 36.5381 -88.0351 36.4961 -88.0421 36.4981 -88.4951 36.4991 -88.5121 36.4981 -88.8101 36.4991 -88.8261 36.4991 -88.8301 36.5021 -89.3461 36.5021 -89.4141 36.5101 -89.4181 36.6161 -89.3731 36.6251 -89.3631 36.6281 -89.3421 36.6221 -89.3221 36.5751 -89.2831 36.5691 -89.2411 36.5811 -89.2101 36.6311 -89.2001 36.6531 -89.1771 36.6711 -89.1671 36.7131 -89.1971 36.7271 -89.1961 36.7601 -89.1771 36.7591 -89.1511 36.7681 -89.1251 36.7921 -89.1251 36.8041 -89.1641 36.8291 -89.1731 36.8431 -89.1661 36.8661 -89.1291 36.9531 -89.1041 36.9771 -89.1071 36.9881 -89.1291 36.9981 -89.1501 37.0251 -89.1741 37.0641 -89.1691 37.0931 -89.1461 37.1121 -89.1161 37.1851 -89.0651 37.2201 -88.9931 37.2181 -88.9321 37.2021 -88.8631 37.1521 -88.7461 37.1411 -88.7391 37.1351 -88.6881 37.1091 -88.6141 37.0721 -88.5591 37.0641 -88.5171 37.0681 -88.4901 37.0721 -88.4761 37.0981 -88.4501 37.1561 -88.4221 37.2051 -88.4501 37.2571 -88.5011 37.2961 -88.5111 37.4001 -88.4671 37.4201 -88.4191 37.4091 -88.3591 37.4421 -88.3111 37.4761 -88.0871 37.5101 -88.0711 37.5831 -88.1341 37.6281 -88.1571 37.6601 -88.1591 37.7001 -88.1331 37.7351 -88.0721 37.8051 -88.0351 37.8011 -88.0111 37.7761 -87.9581 37.7991 -87.9391 37.8091 -87.9201 37.8381 -87.9101 37.8751 -87.9361 37.9041 -87.9341 37.9191 -87.9211 37.9241 -87.8991 37.8901 -87.8571 37.8781 -87.8231 37.8981 -87.7531 37.8941 -87.7281 37.8991 -87.7091 37.8971 -87.6791 37.8361 -87.6841 37.8281 -87.6511 37.8431 -87.6071 37.8641 -87.5931 37.8901 -87.5941 37.9231 -87.6271 37.9711 -87.6041 37.9151 -87.5041 37.9361 -87.4521 37.9341 -87.3871 37.8931 -87.3101 37.8701 -87.2721 37.8491 -87.2261 37.8381 -87.1751 37.8261 -87.1581 37.7891 -87.1311 37.7841 -87.1061 37.8071 -87.0711 37.9071 -87.0361 37.9241 -87.0131 37.9301 -86.9891 37.9371 -86.9311 37.9531 -86.9001 37.9861 -86.8631 37.9911 -86.8261 37.9781 -86.8021 37.8981 -86.7531 37.8941 -86.7281 37.9111 -86.6891 37.9131 -86.6681 37.9021 -86.6601 37.8601 -86.6701 37.8471 -86.6651 37.8451 -86.6451 37.8571 -86.6141 37.9211 -86.5981 37.9251 -86.5811 37.9211 -86.5411 37.9271 -86.5221 37.9421 -86.5161 37.9871 -86.5301 38.0181 -86.5271 38.0461 -86.5191 38.0511 -86.5031 38.0591 -86.4581 38.0751 -86.4421 38.0881 -86.4421 38.1111 -86.4741 38.1291 -86.4641 38.1291 -86.4521 38.1081 -86.4071 38.1231 -86.3931 38.1341 -86.3441 38.1431 -86.3351 38.1551 -86.3431 38.1671 -86.3871 38.1941 -86.3881 38.1931 -86.3641 38.1771 -86.3411 38.1501 -86.2971 38.0781 -86.2911 38.0581 -86.2771 38.0401 -86.2521 38.0171 -86.1901 38.0111 -86.1051 37.9661 -86.0521 37.9921 -86.0311 38.0011 -86.0061 38.0111 -85.9581 38.0331 -85.9301 38.0641 -85.9141 38.1791 -85.9121 38.2381 -85.8521 38.2761 -85.8391 38.2861 -85.8061 38.2821 -85.7861 38.2701 -85.7461 38.3001 -85.6811 38.3371 -85.6541 38.3831 -85.6431 38.4461 -85.6121 38.4711 -85.5071 38.5181 -85.4661 38.5361 -85.4321 38.5611 -85.4171 38.5841 -85.4241 38.6941 -85.4531 38.7241 -85.4461 38.7381 -85.4181 38.7361 -85.3351 38.7441 -85.2711 38.6951 -85.2051 38.6951 -85.1601 38.7141 -85.1191 38.7501 -85.0681 38.7641 -85.0251 38.7801 -84.9751 38.7931 -84.8181 38.8341 -84.8241 38.8661 -84.7871 38.8841 -84.7881 38.8971 -84.8031 38.9011 -84.8591 38.9091 -84.8751 38.9271 -84.8751 38.9541 -84.8461 38.9821 -84.8341 39.0051 -84.8441 39.0321 -84.8761 39.0501 -84.8901 39.0641 -84.8861 39.1031 -84.8271 39.1021 -84.8111 39.1061 -84.7891 39.1421 -84.7421 39.0891 -84.6671 39.0741 -84.6221 39.0701 -84.5931 39.0941 -84.5151 39.1071 -84.4921 39.1111 -84.4441 39.0841 -84.4251 39.0471 -84.4191 39.0351 -84.3911 39.0371 -84.3451 39.0141 -84.3131 38.9441 -84.2901 38.9171 -84.2611 38.8741 -84.2351 38.8121 -84.2281 38.7881 -84.1761 38.7651 -84.0881 38.7631 -84.0531 38.7771 -83.9621 38.7571 -83.9121 38.7441 -83.8571 38.7111 -83.8371 38.6931 -83.7901 38.6501 -83.7701 38.6351 -83.7121 38.6201 -83.6781 38.6231 -83.6551 38.6351 -83.6431 38.6641 -83.6331 38.6771 -83.6181 38.6961 -83.5261 38.6901 -83.5001 38.6631 -83.4531 38.6541 -83.3711 38.6311 -83.3301 38.6061 -83.3201 38.5961 -83.3061 38.5961 -83.2901 38.6091 -83.2721 38.6241 -83.2451 38.6091 -83.1821 38.6191 -83.1431 38.6641 -83.1111 38.6851 -83.0601 38.7141 -83.0271 38.7191 -82.9721 38.7461 -82.9211 38.7421 -82.8901 38.7181 -82.8731 38.6831 -82.8801 38.6521 -82.8601 38.6001 -82.8531 38.5711 -82.8271 38.5571 -82.8021 38.5521 -82.7421 38.5391 -82.6951 38.5021 -82.6691 38.4721 -82.6131 38.4121 -82.5861 38.3681 -82.5981 38.3071 -82.5721 38.2921 -82.5801 38.2551 -82.5741 38.2451 -82.5891 38.2381 -82.6161 38.1931 -82.6061 38.1781 -82.6131 38.1691 -82.6471 38.1461 -82.6461 38.1091 -82.5931 38.0151 -82.5241 37.9751 -82.4751 37.9541 -82.4801 37.9421 -82.4931 37.9221 -82.5001 37.8941 -82.4371 37.8721 -82.4211 37.8111 -82.4051 37.7841 -82.3391 37.7581 -82.3191 37.7441 -82.3291 37.6681 -82.2951 37.6561 -82.2381 37.6231 -82.2051 37.6401 -82.1851 37.5931 -82.1591 37.5901 -82.1311 37.5691 -82.1371 37.5651 -82.1461 37.5571 -82.1421 37.5481 -82.0841 37.5251 -82.0551 37.5511 -82.0491 37.5301 -82.0261 37.5431 -81.9761 37.5311 -81.9591 37.3041 -82.2891 37.2601 -82.3531 37.2501 -82.4061 37.1991 -82.5501 37.1931 -82.5681 37.1091 -82.7191 37.0931 -82.7211 37.0751 -82.7091 37.0651 -82.7201 37.0331 -82.7231 37.0051 -82.8121 36.9741 -82.8661 36.9321 -82.8601 36.8931 -82.8781 36.8631 -82.9501 36.8581 -83.0461 36.8501 -83.0681 36.7791 -83.1281 36.7511 -83.1241 36.7391 -83.1381 36.7341 -83.2031 36.7091 -83.3211 36.6881 -83.3851 36.6721 -83.4041 36.6611 -83.4601 36.6611 -83.5301 36.6161 -83.6461 36.5981 -83.6751 36.5841 -83.6951 36.5911 -83.9351 36.5921 -84.0061 36.5951 -84.2541 36.5951 -84.2561 36.6051 -84.7811 36.6051 -84.7911 36.6201 -84.9981 36.6251 -85.2721 36.6261 -85.3001 36.6181 -85.4371 36.6261 -85.7851 36.6331 -85.9801 36.6431 -86.1991 36.6501 -86.4151 36.6551 -86.5101</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>36.4981 -89.5331 36.5181 -89.5661 36.5411 -89.5681 36.5571 -89.5561 36.5641 -89.5301 36.5591 -89.4931 36.5471 -89.4811 36.5251 -89.4711 36.5041 -89.4811 36.4981 -89.4751 36.4981 -89.5331</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Kentucky</topp:STATE_NAME><topp:STATE_FIPS>21</topp:STATE_FIPS><topp:SUB_REGION>E S Cen</topp:SUB_REGION><topp:STATE_ABBR>KY</topp:STATE_ABBR><topp:LAND_KM>103961.904</topp:LAND_KM><topp:WATER_KM>1772.542</topp:WATER_KM><topp:PERSONS>4551524.0</topp:PERSONS><topp:FAMILIES>1237346.0</topp:FAMILIES><topp:HOUSHOLD>1718663.0</topp:HOUSHOLD><topp:MALE>2195130.0</topp:MALE><topp:FEMALE>2356394.0</topp:FEMALE><topp:WORKERS>1656590.0</topp:WORKERS><topp:DRVALONE>1502949.0</topp:DRVALONE><topp:CARPOOL>273091.0</topp:CARPOOL><topp:PUBTRANS>48158.0</topp:PUBTRANS><topp:EMPLOYED>1970934.0</topp:EMPLOYED><topp:UNEMPLOY>148125.0</topp:UNEMPLOY><topp:SERVICE>556744.0</topp:SERVICE><topp:MANUAL>361621.0</topp:MANUAL><topp:P_MALE>0.482</topp:P_MALE><topp:P_FEMALE>0.518</topp:P_FEMALE><topp:SAMP_POP>646517.0</topp:SAMP_POP></topp:states><topp:states fid="states.8"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>37.0011 -95.0711 37.0001 -95.4061 37.0001 -95.5251 36.9981 -95.7851 37.0001 -95.9571 36.9981 -96.0051 37.0001 -96.5181 37.0001 -96.7481 36.9991 -97.1371 36.9961 -97.4651 36.9981 -97.8031 36.9981 -98.1041 36.9991 -98.3461 36.9981 -98.5391 36.9981 -98.9991 36.9941 -99.4371 36.9951 -99.5441 36.9951 -99.9981 36.9971 -100.0881 36.9971 -100.6331 36.9961 -100.9501 36.9971 -101.0711 36.9961 -101.5531 36.9881 -102.0241 36.9881 -102.0361 37.3861 -102.0411 37.6411 -102.0431 37.7341 -102.0431 38.2531 -102.0451 38.2631 -102.0451 38.6151 -102.0471 38.6921 -102.0471 39.0361 -102.0481 39.1261 -102.0471 39.5621 -102.0481 39.5681 -102.0481 39.9981 -102.0511 40.0011 -101.4061 40.0011 -101.3211 40.0001 -100.7541 39.9991 -100.7341 40.0001 -100.1901 40.0001 -100.1801 40.0021 -99.6271 39.9991 -99.1771 39.9981 -99.0641 39.9981 -98.7201 39.9971 -98.5041 39.9981 -98.2631 39.9981 -97.9291 39.9991 -97.8161 39.9971 -97.3611 39.9961 -96.9071 39.9941 -96.8011 39.9941 -96.4531 39.9941 -96.2401 39.9951 -96.0001 39.9931 -95.7801 39.9921 -95.3291 39.9991 -95.3081 39.9421 -95.2401 39.9381 -95.2071 39.9101 -95.1931 39.9081 -95.1501 39.8691 -95.1001 39.8661 -95.0621 39.8771 -95.0331 39.8961 -95.0211 39.9001 -94.9641 39.8961 -94.9371 39.8491 -94.9361 39.8331 -94.9231 39.8281 -94.8981 39.8171 -94.8881 39.7931 -94.8991 39.7821 -94.9331 39.7751 -94.9341 39.7571 -94.9211 39.7601 -94.8761 39.7541 -94.8701 39.7391 -94.8771 39.7261 -94.9051 39.7271 -94.9301 39.7361 -94.9521 39.7321 -94.9611 39.6841 -94.9781 39.6611 -95.0281 39.6251 -95.0551 39.5861 -95.0531 39.5601 -95.1081 39.5321 -95.1011 39.4851 -95.0471 39.4621 -95.0401 39.4391 -94.9851 39.4111 -94.9581 39.3811 -94.9251 39.3801 -94.8981 39.3401 -94.9111 39.3231 -94.9071 39.2861 -94.8801 39.2611 -94.8331 39.2111 -94.8201 39.1961 -94.7891 39.1711 -94.7301 39.1741 -94.6751 39.1581 -94.6461 39.1511 -94.6121 39.1411 -94.6001 39.1121 -94.6071 39.0441 -94.6091 38.8371 -94.6121 38.7371 -94.6121 38.4711 -94.6181 38.3921 -94.6181 38.0551 -94.6171 38.0301 -94.6161 37.6791 -94.6191 37.6501 -94.6181 37.3601 -94.6181 37.3271 -94.6181 37.0601 -94.6201 36.9961 -94.6201 37.0001 -95.0321 37.0011 -95.0711</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Kansas</topp:STATE_NAME><topp:STATE_FIPS>20</topp:STATE_FIPS><topp:SUB_REGION>W N Cen</topp:SUB_REGION><topp:STATE_ABBR>KS</topp:STATE_ABBR><topp:LAND_KM>211921.641</topp:LAND_KM><topp:WATER_KM>1188.865</topp:WATER_KM><topp:PERSONS>2477574.0</topp:PERSONS><topp:FAMILIES>658600.0</topp:FAMILIES><topp:HOUSHOLD>944726.0</topp:HOUSHOLD><topp:MALE>1214645.0</topp:MALE><topp:FEMALE>1262929.0</topp:FEMALE><topp:WORKERS>907383.0</topp:WORKERS><topp:DRVALONE>928575.0</topp:DRVALONE><topp:CARPOOL>135598.0</topp:CARPOOL><topp:PUBTRANS>7585.0</topp:PUBTRANS><topp:EMPLOYED>1172214.0</topp:EMPLOYED><topp:UNEMPLOY>57772.0</topp:UNEMPLOY><topp:SERVICE>346339.0</topp:SERVICE><topp:MANUAL>166429.0</topp:MANUAL><topp:P_MALE>0.49</topp:P_MALE><topp:P_FEMALE>0.51</topp:P_FEMALE><topp:SAMP_POP>453411.0</topp:SAMP_POP></topp:states><topp:states fid="states.9"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>36.5461 -79.1441 36.5491 -79.2171 36.5471 -79.5101 36.5471 -79.7171 36.5451 -80.0241 36.5471 -80.0481 36.5511 -80.4351 36.5571 -80.6111 36.5631 -80.8381 36.5651 -80.9031 36.5721 -81.3451 36.5891 -81.6691 36.6071 -81.6521 36.6111 -81.8291 36.6131 -81.9181 36.5951 -81.9291 36.5951 -82.1541 36.5931 -82.2161 36.5911 -82.2961 36.5911 -82.6101 36.5901 -82.8491 36.5911 -82.9861 36.5881 -83.2111 36.5891 -83.2481 36.6001 -83.2751 36.5981 -83.4641 36.5981 -83.6751 36.6161 -83.6461 36.6611 -83.5301 36.6611 -83.4601 36.6721 -83.4041 36.6881 -83.3851 36.7091 -83.3211 36.7341 -83.2031 36.7391 -83.1381 36.7511 -83.1241 36.7791 -83.1281 36.8501 -83.0681 36.8581 -83.0461 36.8631 -82.9501 36.8931 -82.8781 36.9321 -82.8601 36.9741 -82.8661 37.0051 -82.8121 37.0331 -82.7231 37.0651 -82.7201 37.0751 -82.7091 37.0931 -82.7211 37.1091 -82.7191 37.1931 -82.5681 37.1991 -82.5501 37.2501 -82.4061 37.2601 -82.3531 37.3041 -82.2891 37.5311 -81.9591 37.5061 -81.9351 37.4921 -81.9481 37.4821 -81.9761 37.4661 -81.9881 37.4151 -81.9201 37.3711 -81.9261 37.3401 -81.8971 37.3251 -81.8631 37.3061 -81.8581 37.2851 -81.8391 37.2791 -81.8151 37.2871 -81.7921 37.2721 -81.7521 37.2501 -81.7381 37.2351 -81.7011 37.2041 -81.6661 37.2061 -81.5561 37.2341 -81.5051 37.2521 -81.4951 37.2541 -81.4751 37.2821 -81.4031 37.3111 -81.3911 37.3381 -81.3581 37.2931 -81.3121 37.2401 -81.2231 37.2741 -81.1401 37.2851 -81.0251 37.3061 -80.9861 37.2961 -80.9781 37.2911 -80.9681 37.3011 -80.9341 37.3391 -80.8551 37.3501 -80.8481 37.3881 -80.8771 37.4231 -80.8501 37.4121 -80.7991 37.3911 -80.7991 37.3861 -80.7701 37.3711 -80.7631 37.3781 -80.7471 37.3871 -80.7461 37.3921 -80.7291 37.3881 -80.7051 37.4451 -80.5971 37.4691 -80.5421 37.4741 -80.5081 37.4601 -80.4881 37.4331 -80.4871 37.4221 -80.4741 37.4341 -80.4251 37.4651 -80.3881 37.4751 -80.3521 37.4911 -80.3471 37.5111 -80.2881 37.5361 -80.2801 37.5281 -80.3081 37.5331 -80.3261 37.5661 -80.3161 37.5961 -80.2461 37.6241 -80.2191 37.6401 -80.2541 37.6401 -80.3011 37.6521 -80.3051 37.6711 -80.2951 37.6821 -80.3031 37.7251 -80.2501 37.7571 -80.2541 37.7781 -80.2201 37.8021 -80.2231 37.8421 -80.1711 37.8601 -80.1721 37.8771 -80.1601 37.8911 -80.1181 37.9141 -80.1061 37.9551 -80.0551 37.9891 -80.0001 38.0381 -79.9661 38.0671 -79.9571 38.1031 -79.9281 38.1211 -79.9351 38.1621 -79.9101 38.1791 -79.9161 38.2501 -79.8311 38.2681 -79.7931 38.2841 -79.7861 38.2981 -79.8031 38.3141 -79.8001 38.3531 -79.7641 38.3511 -79.7331 38.3941 -79.7201 38.4301 -79.6841 38.5001 -79.6921 38.5201 -79.6651 38.5501 -79.6691 38.5921 -79.6421 38.5531 -79.5361 38.4621 -79.4861 38.4121 -79.3171 38.4371 -79.2721 38.4801 -79.2311 38.6581 -79.1271 38.6631 -79.1211 38.6591 -79.0881 38.7071 -79.0871 38.7611 -79.0561 38.7901 -79.0551 38.7991 -79.0331 38.8461 -78.9871 38.7631 -78.8661 38.8331 -78.8161 38.8801 -78.7931 38.9111 -78.7491 38.9291 -78.7371 38.9301 -78.7241 38.9041 -78.7191 38.9211 -78.6801 38.9501 -78.6471 38.9791 -78.6311 38.9671 -78.5981 39.0131 -78.5531 39.0231 -78.5491 39.0351 -78.5641 39.0571 -78.5361 39.0931 -78.5011 39.1111 -78.4851 39.1181 -78.4481 39.1481 -78.4301 39.1701 -78.4021 39.1971 -78.4241 39.2121 -78.4231 39.2441 -78.3991 39.2571 -78.4131 39.3411 -78.3411 39.3501 -78.3441 39.3611 -78.3651 39.3801 -78.3501 39.4561 -78.3471 39.4231 -78.2771 39.3911 -78.2291 39.2651 -78.0331 39.1321 -77.8301 39.1411 -77.8201 39.1961 -77.8051 39.2461 -77.7681 39.2841 -77.7591 39.3171 -77.7271 39.3181 -77.6791 39.2991 -77.6161 39.2981 -77.5681 39.2681 -77.5421 39.2491 -77.4941 39.2291 -77.4641 39.2181 -77.4611 39.1761 -77.4781 39.1571 -77.5161 39.1161 -77.5131 39.1031 -77.4791 39.0801 -77.4591 39.0661 -77.4331 39.0681 -77.3461 39.0621 -77.3241 39.0271 -77.2551 38.9751 -77.2431 38.9641 -77.1521 38.9321 -77.1221 38.9151 -77.0781 38.8861 -77.0671 38.8621 -77.0391 38.8381 -77.0401 38.8291 -77.0451 38.8131 -77.0351 38.7881 -77.0451 38.7181 -77.0461 38.7121 -77.0571 38.7151 -77.0811 38.7031 -77.0931 38.6771 -77.1251 38.6481 -77.1291 38.6221 -77.1971 38.6601 -77.1941 38.6501 -77.2271 38.5011 -77.3031 38.4361 -77.3381 38.3621 -77.2891 38.3431 -77.3211 38.3311 -77.2401 38.3751 -77.0541 38.2801 -76.9991 38.2021 -76.9361 38.1201 -76.5951 38.0741 -76.5491 38.0251 -76.5581 38.0031 -76.5731 38.0121 -76.5241 37.9561 -76.3671 37.8901 -76.2591 37.8501 -76.2511 37.7981 -76.3241 37.7191 -76.3091 37.7001 -76.3571 37.6771 -76.3231 37.6221 -76.3441 37.6561 -76.5071 37.7701 -76.5801 37.7961 -76.6311 37.9161 -76.7711 37.9191 -76.8181 37.7981 -76.7321 37.7741 -76.6811 37.6411 -76.5691 37.5511 -76.3141 37.5251 -76.3481 37.5521 -76.5121 37.5151 -76.4341 37.5151 -76.3551 37.3901 -76.2541 37.3301 -76.2751 37.3341 -76.3001 37.3931 -76.3391 37.4571 -76.4461 37.4181 -76.4631 37.4121 -76.4171 37.3731 -76.4031 37.3771 -76.4551 37.2931 -76.3921 37.2551 -76.4611 37.4121 -76.6531 37.4181 -76.7041 37.3711 -76.6691 37.2911 -76.5951 37.2071 -76.4241 37.1521 -76.4121 37.1731 -76.3961 37.1461 -76.3631 37.1771 -76.3371 37.1221 -76.2851 37.1071 -76.3951 37.0741 -76.2781 37.0201 -76.2931 36.9901 -76.3841 36.9651 -76.4261 37.0671 -76.5311 37.0881 -76.5151 37.1171 -76.5641 37.0801 -76.5681 37.1321 -76.6241 37.1781 -76.6101 37.2251 -76.6481 37.2321 -76.6971 37.1931 -76.7461 37.2401 -76.7951 37.2431 -76.8571 37.3221 -76.8751 37.2591 -76.8781 37.2361 -76.9411 37.2011 -76.9001 37.2071 -76.7971 37.1501 -76.7291 37.1971 -76.6851 37.1471 -76.6711 37.0541 -76.6651 37.0241 -76.5771 36.9941 -76.6131 37.0061 -76.5551 36.9611 -76.4891 36.9121 -76.5171 36.9191 -76.4821 36.8951 -76.4861 36.8411 -76.5601 36.7951 -76.5611 36.8691 -76.5071 36.9011 -76.4101 36.9131 -76.3481 36.8601 -76.3411 36.8351 -76.3941 36.8261 -76.4011 36.8451 -76.3171 36.8281 -76.2921 36.9421 -76.3071 36.9621 -76.2841 36.9351 -76.2021 36.9041 -76.1911 36.9311 -76.1181 36.9231 -75.9951 36.5551 -75.8781 36.5561 -75.9011 36.5991 -75.8921 36.7211 -75.9501 36.5561 -75.9981 36.5561 -76.0271 36.6031 -76.0611 36.5561 -76.0451 36.5571 -76.1271 36.5561 -76.3301 36.5551 -76.4971 36.5551 -76.5631 36.5541 -76.9211 36.5541 -76.9241 36.5561 -77.1771 36.5531 -77.3201 36.5531 -77.7631 36.5521 -77.8981 36.5521 -78.0511 36.5451 -78.3211 36.5411 -78.4581 36.5461 -78.7371 36.5431 -78.7961 36.5461 -79.1441</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.0271 -75.2701 38.0281 -75.2421 37.9621 -75.2981 37.8881 -75.3391 37.8751 -75.3861 37.9011 -75.3441 37.9001 -75.3781 37.9181 -75.3461 38.0271 -75.2701</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>37.5521 -75.8671 37.5611 -75.9411 37.5851 -75.9291 37.5801 -75.8871 37.5921 -75.9051 37.7111 -75.7991 37.7891 -75.7821 37.8241 -75.6961 37.8581 -75.6861 37.9301 -75.7331 37.9411 -75.6581 37.9701 -75.6481 37.9961 -75.6261 38.0161 -75.3721 37.6971 -75.6171 37.6771 -75.5891 37.5891 -75.6991 37.5591 -75.6501 37.5581 -75.7271 37.5101 -75.7561 37.4931 -75.7051 37.4691 -75.8131 37.4261 -75.8201 37.4081 -75.7901 37.4181 -75.8261 37.3671 -75.8971 37.1421 -75.9311 37.1261 -75.9701 37.3081 -76.0181 37.4841 -75.9341 37.4791 -75.9651 37.5211 -75.9541 37.5561 -75.9301 37.5521 -75.8671</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Virginia</topp:STATE_NAME><topp:STATE_FIPS>51</topp:STATE_FIPS><topp:SUB_REGION>S Atl</topp:SUB_REGION><topp:STATE_ABBR>VA</topp:STATE_ABBR><topp:LAND_KM>102537.328</topp:LAND_KM><topp:WATER_KM>4263.82</topp:WATER_KM><topp:PERSONS>6180651.0</topp:PERSONS><topp:FAMILIES>1627615.0</topp:FAMILIES><topp:HOUSHOLD>2289067.0</topp:HOUSHOLD><topp:MALE>3030948.0</topp:MALE><topp:FEMALE>3149703.0</topp:FEMALE><topp:WORKERS>2343200.0</topp:WORKERS><topp:DRVALONE>2278600.0</topp:DRVALONE><topp:CARPOOL>499251.0</topp:CARPOOL><topp:PUBTRANS>125792.0</topp:PUBTRANS><topp:EMPLOYED>3025109.0</topp:EMPLOYED><topp:UNEMPLOY>141926.0</topp:UNEMPLOY><topp:SERVICE>777181.0</topp:SERVICE><topp:MANUAL>420070.0</topp:MANUAL><topp:P_MALE>0.49</topp:P_MALE><topp:P_FEMALE>0.51</topp:P_FEMALE><topp:SAMP_POP>898089.0</topp:SAMP_POP></topp:states><topp:states fid="states.10"><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>36.9531 -89.1041 36.8661 -89.1291 36.8431 -89.1661 36.8291 -89.1731 36.8041 -89.1641 36.7921 -89.1251 36.7681 -89.1251 36.7591 -89.1511 36.7601 -89.1771 36.7271 -89.1961 36.7131 -89.1971 36.6711 -89.1671 36.6531 -89.1771 36.6311 -89.2001 36.5811 -89.2101 36.5691 -89.2411 36.5751 -89.2831 36.6221 -89.3221 36.6281 -89.3421 36.6251 -89.3631 36.6161 -89.3731 36.5101 -89.4181 36.5021 -89.4141 36.4561 -89.4481 36.4451 -89.4701 36.4651 -89.4911 36.4981 -89.4751 36.5041 -89.4811 36.5251 -89.4711 36.5471 -89.4811 36.5591 -89.4931 36.5641 -89.5301 36.5571 -89.5561 36.5411 -89.5681 36.5181 -89.5661 36.4981 -89.5331 36.4711 -89.5161 36.4401 -89.5451 36.4011 -89.5201 36.3551 -89.5191 36.3451 -89.5441 36.3541 -89.6051 36.3341 -89.6221 36.3081 -89.6061 36.2801 -89.5421 36.2641 -89.5351 36.2571 -89.5411 36.2401 -89.6181 36.2541 -89.6701 36.2521 -89.6941 36.2401 -89.6951 36.2201 -89.6761 36.1831 -89.6181 36.1521 -89.5891 36.1291 -89.5891 36.0991 -89.6671 36.0821 -89.6781 36.0251 -89.6881 35.9991 -89.7211 35.9961 -89.9631 35.9911 -90.2831 35.9891 -90.3781 36.0911 -90.3151 36.1151 -90.2841 36.1181 -90.2631 36.1371 -90.2341 36.1611 -90.2321 36.1721 -90.2191 36.1961 -90.1611 36.2121 -90.1311 36.2571 -90.1091 36.2721 -90.0661 36.3001 -90.0491 36.3251 -90.0671 36.3621 -90.0501 36.3821 -90.0521 36.3971 -90.0801 36.4041 -90.1161 36.4221 -90.1231 36.4531 -90.1171 36.4571 -90.1371 36.4911 -90.1501 36.4921 -90.2241 36.4901 -90.5811 36.4891 -90.8041 36.4871 -91.1331 36.4911 -91.4111 36.4901 -91.4521 36.4901 -91.6881 36.4911 -92.1271 36.4911 -92.1461 36.4901 -92.5221 36.4891 -92.7771 36.4891 -92.8521 36.4901 -93.2971 36.4901 -93.3281 36.4891 -93.5961 36.4891 -93.8571 36.4901 -94.0801 36.4891 -94.6171 36.6701 -94.6201 36.7631 -94.6211 36.9961 -94.6201 37.0601 -94.6201 37.3271 -94.6181 37.3601 -94.6181 37.6501 -94.6181 37.6791 -94.6191 38.0301 -94.6161 38.0551 -94.6171 38.3921 -94.6181 38.4711 -94.6181 38.7371 -94.6121 38.8371 -94.6121 39.0441 -94.6091 39.1121 -94.6071 39.1411 -94.6001 39.1511 -94.6121 39.1581 -94.6461 39.1741 -94.6751 39.1711 -94.7301 39.1961 -94.7891 39.2111 -94.8201 39.2611 -94.8331 39.2861 -94.8801 39.3231 -94.9071 39.3401 -94.9111 39.3801 -94.8981 39.3811 -94.9251 39.4111 -94.9581 39.4391 -94.9851 39.4621 -95.0401 39.4851 -95.0471 39.5321 -95.1011 39.5601 -95.1081 39.5861 -95.0531 39.6251 -95.0551 39.6611 -95.0281 39.6841 -94.9781 39.7321 -94.9611 39.7361 -94.9521 39.7271 -94.9301 39.7261 -94.9051 39.7391 -94.8771 39.7541 -94.8701 39.7601 -94.8761 39.7571 -94.9211 39.7751 -94.9341 39.7821 -94.9331 39.7931 -94.8991 39.8171 -94.8881 39.8281 -94.8981 39.8331 -94.9231 39.8491 -94.9361 39.8961 -94.9371 39.9001 -94.9641 39.8961 -95.0211 39.8771 -95.0331 39.8661 -95.0621 39.8691 -95.1001 39.9081 -95.1501 39.9101 -95.1931 39.9381 -95.2071 39.9421 -95.2401 39.9991 -95.3081 40.0241 -95.3441 40.0281 -95.3701 40.0431 -95.3901 40.0481 -95.4131 40.0801 -95.4031 40.0951 -95.3841 40.1151 -95.3921 40.1311 -95.4221 40.1731 -95.4601 40.2131 -95.4661 40.2261 -95.4761 40.2661 -95.5461 40.3091 -95.5951 40.3091 -95.6461 40.3221 -95.6451 40.3311 -95.6171 40.3461 -95.6151 40.3581 -95.6331 40.3961 -95.6361 40.4851 -95.6951 40.5121 -95.6841 40.5301 -95.6571 40.5581 -95.6621 40.5651 -95.6751 40.5611 -95.6871 40.5241 -95.6911 40.5321 -95.7361 40.5491 -95.7631 40.5891 -95.7671 40.5841 -95.3821 40.5811 -95.2171 40.5771 -94.9201 40.5751 -94.6391 40.5741 -94.4841 40.5701 -94.2381 40.5741 -94.0171 40.5781 -93.7861 40.5801 -93.5621 40.5801 -93.3701 40.5841 -93.1001 40.5891 -92.7171 40.5911 -92.6461 40.5991 -92.3611 40.6001 -92.1921 40.6081 -91.9461 40.6091 -91.7411 40.5931 -91.7161 40.5811 -91.6891 40.5511 -91.6911 40.5321 -91.6221 40.5041 -91.6161 40.4841 -91.5851 40.4631 -91.5791 40.4551 -91.5331 40.4411 -91.5381 40.4351 -91.5291 40.4101 -91.5271 40.4051 -91.5001 40.3901 -91.4901 40.3901 -91.4761 40.3711 -91.4481 40.3091 -91.4861 40.2511 -91.4981 40.2001 -91.5061 40.1341 -91.5161 40.0661 -91.5041 40.0051 -91.4871 39.9461 -91.4471 39.9211 -91.4301 39.9011 -91.4341 39.8851 -91.4501 39.8631 -91.4491 39.8031 -91.3811 39.7611 -91.3731 39.7241 -91.3671 39.6851 -91.3171 39.6001 -91.2031 39.5521 -91.1561 39.5281 -91.0931 39.4731 -91.0641 39.4441 -91.0361 39.4001 -90.9471 39.3501 -90.8501 39.2961 -90.7791 39.2471 -90.7381 39.2241 -90.7321 39.1951 -90.7181 39.1441 -90.7161 39.0931 -90.6901 39.0581 -90.7071 39.0371 -90.7061 38.9351 -90.6681 38.8801 -90.6271 38.8711 -90.5701 38.8911 -90.5301 38.9591 -90.4691 38.9621 -90.4131 38.9241 -90.3191 38.9241 -90.2781 38.9141 -90.2431 38.8531 -90.1321 38.8301 -90.1131 38.8001 -90.1211 38.7851 -90.1351 38.7731 -90.1631 38.7231 -90.1961 38.7001 -90.2021 38.6581 -90.1831 38.6101 -90.1831 38.5621 -90.2401 38.5321 -90.2611 38.5181 -90.2651 38.4271 -90.3011 38.3901 -90.3391 38.3651 -90.3581 38.3231 -90.3691 38.2341 -90.3641 38.1881 -90.3361 38.1661 -90.2891 38.1221 -90.2541 38.0881 -90.2071 38.0531 -90.1341 38.0321 -90.1191 37.9931 -90.0411 37.9691 -90.0101 37.9631 -89.9581 37.9111 -89.9781 37.8781 -89.9371 37.8751 -89.9001 37.8911 -89.8661 37.9051 -89.8611 37.9051 -89.8511 37.8401 -89.7281 37.8041 -89.6911 37.7831 -89.6751 37.7451 -89.6661 37.7061 -89.5811 37.6941 -89.5211 37.6791 -89.5131 37.6501 -89.5191 37.6151 -89.5131 37.5711 -89.5241 37.4911 -89.4941 37.4531 -89.4531 37.4111 -89.4271 37.3551 -89.4351 37.3391 -89.4681 37.3291 -89.5001 37.3041 -89.5131 37.2761 -89.5131 37.2561 -89.4891 37.2531 -89.4651 37.2241 -89.4681 37.1651 -89.4401 37.1371 -89.4231 37.0991 -89.3791 37.0491 -89.3821 37.0091 -89.3101 36.9991 -89.2821 37.0081 -89.2621 37.0271 -89.2641 37.0601 -89.3091 37.0851 -89.3031 37.0911 -89.2841 37.0871 -89.2641 37.0411 -89.2371 37.0281 -89.2101 36.9861 -89.1931 36.9881 -89.1291 36.9771 -89.1071 36.9531 -89.1041</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Missouri</topp:STATE_NAME><topp:STATE_FIPS>29</topp:STATE_FIPS><topp:SUB_REGION>W N Cen</topp:SUB_REGION><topp:STATE_ABBR>MO</topp:STATE_ABBR><topp:LAND_KM>178445.951</topp:LAND_KM><topp:WATER_KM>2100.115</topp:WATER_KM><topp:PERSONS>5117073.0</topp:PERSONS><topp:FAMILIES>1368334.0</topp:FAMILIES><topp:HOUSHOLD>1961206.0</topp:HOUSHOLD><topp:MALE>2464315.0</topp:MALE><topp:FEMALE>2652758.0</topp:FEMALE><topp:WORKERS>1861192.0</topp:WORKERS><topp:DRVALONE>1816079.0</topp:DRVALONE><topp:CARPOOL>312042.0</topp:CARPOOL><topp:PUBTRANS>47129.0</topp:PUBTRANS><topp:EMPLOYED>2367395.0</topp:EMPLOYED><topp:UNEMPLOY>155388.0</topp:UNEMPLOY><topp:SERVICE>659782.0</topp:SERVICE><topp:MANUAL>386746.0</topp:MANUAL><topp:P_MALE>0.482</topp:P_MALE><topp:P_FEMALE>0.518</topp:P_FEMALE><topp:SAMP_POP>864999.0</topp:SAMP_POP></topp:states></gml:featureMembers>
`,
  'v3/topp-states-wfs.xml': `\
<?xml version="1.0" encoding="UTF-8"?>
<wfs:FeatureCollection numberOfFeatures="3" timeStamp="2008-09-12T00:24:21.013-04:00" xsi:schemaLocation="http://www.openplans.org/topp http://sigma.openplans.org:80/geoserver/wfs?service=WFS&amp;version=1.1.0&amp;request=DescribeFeatureType&amp;typeName=topp:states http://www.opengis.net/wfs http://sigma.openplans.org:80/geoserver/schemas/wfs/1.1.0/wfs.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:opengeo="http://open-geo.com" xmlns:tiger="http://www.census.gov" xmlns:wfs="http://www.opengis.net/wfs" xmlns:topp="http://www.openplans.org/topp" xmlns:seb="http://seb.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ows="http://www.opengis.net/ows" xmlns:gml="http://www.opengis.net/gml" xmlns:xlink="http://www.w3.org/1999/xlink"><gml:featureMembers><topp:states gml:id="states.1"><gml:boundedBy><gml:Envelope srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:lowerCorner>36.986 -91.516</gml:lowerCorner><gml:upperCorner>42.509 -87.507</gml:upperCorner></gml:Envelope></gml:boundedBy><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>37.511 -88.071 37.476 -88.087 37.442 -88.311 37.409 -88.359 37.421 -88.419 37.401 -88.467 37.296 -88.511 37.257 -88.501 37.205 -88.451 37.156 -88.422 37.098 -88.451 37.072 -88.476 37.068 -88.491 37.064 -88.517 37.072 -88.559 37.109 -88.614 37.135 -88.688 37.141 -88.739 37.152 -88.746 37.202 -88.863 37.218 -88.932 37.221 -88.993 37.185 -89.065 37.112 -89.116 37.093 -89.146 37.064 -89.169 37.025 -89.174 36.998 -89.151 36.988 -89.129 36.986 -89.193 37.028 -89.211 37.041 -89.237 37.087 -89.264 37.091 -89.284 37.085 -89.303 37.061 -89.309 37.027 -89.264 37.008 -89.262 36.999 -89.282 37.009 -89.311 37.049 -89.382 37.099 -89.379 37.137 -89.423 37.165 -89.441 37.224 -89.468 37.253 -89.465 37.256 -89.489 37.276 -89.513 37.304 -89.513 37.329 -89.501 37.339 -89.468 37.355 -89.435 37.411 -89.427 37.453 -89.453 37.491 -89.494 37.571 -89.524 37.615 -89.513 37.651 -89.519 37.679 -89.513 37.694 -89.521 37.706 -89.581 37.745 -89.666 37.783 -89.675 37.804 -89.691 37.841 -89.728 37.905 -89.851 37.905 -89.861 37.891 -89.866 37.875 -89.901 37.878 -89.937 37.911 -89.978 37.963 -89.958 37.969 -90.011 37.993 -90.041 38.032 -90.119 38.053 -90.134 38.088 -90.207 38.122 -90.254 38.166 -90.289 38.188 -90.336 38.234 -90.364 38.323 -90.369 38.365 -90.358 38.391 -90.339 38.427 -90.301 38.518 -90.265 38.532 -90.261 38.562 -90.241 38.611 -90.183 38.658 -90.183 38.701 -90.202 38.723 -90.196 38.773 -90.163 38.785 -90.135 38.801 -90.121 38.831 -90.113 38.853 -90.132 38.914 -90.243 38.924 -90.278 38.924 -90.319 38.962 -90.413 38.959 -90.469 38.891 -90.531 38.871 -90.571 38.881 -90.627 38.935 -90.668 39.037 -90.706 39.058 -90.707 39.093 -90.691 39.144 -90.716 39.195 -90.718 39.224 -90.732 39.247 -90.738 39.296 -90.779 39.351 -90.851 39.401 -90.947 39.444 -91.036 39.473 -91.064 39.528 -91.093 39.552 -91.156 39.601 -91.203 39.685 -91.317 39.724 -91.367 39.761 -91.373 39.803 -91.381 39.863 -91.449 39.885 -91.451 39.901 -91.434 39.921 -91.431 39.946 -91.447 40.005 -91.487 40.066 -91.504 40.134 -91.516 40.201 -91.506 40.251 -91.498 40.309 -91.486 40.371 -91.448 40.386 -91.418 40.392 -91.385 40.402 -91.372 40.447 -91.385 40.503 -91.374 40.528 -91.382 40.547 -91.412 40.572 -91.411 40.603 -91.375 40.639 -91.262 40.643 -91.214 40.656 -91.162 40.682 -91.129 40.705 -91.119 40.761 -91.092 40.833 -91.088 40.879 -91.049 40.923 -90.983 40.951 -90.961 41.071 -90.954 41.104 -90.957 41.144 -90.991 41.165 -91.018 41.176 -91.056 41.231 -91.101 41.267 -91.102 41.334 -91.073 41.401 -91.055 41.423 -91.027 41.431 -91.001 41.421 -90.949 41.444 -90.844 41.449 -90.779 41.451 -90.708 41.462 -90.658 41.509 -90.601 41.525 -90.541 41.527 -90.454 41.543 -90.434 41.567 -90.423 41.586 -90.348 41.602 -90.339 41.649 -90.341 41.722 -90.326 41.756 -90.304 41.781 -90.255 41.806 -90.195 41.931 -90.154 41.983 -90.142 42.033 -90.151 42.061 -90.168 42.103 -90.166 42.121 -90.176 42.122 -90.191 42.159 -90.231 42.197 -90.323 42.211 -90.367 42.242 -90.407 42.263 -90.417 42.341 -90.427 42.361 -90.441 42.388 -90.491 42.421 -90.563 42.461 -90.605 42.475 -90.648 42.494 -90.651 42.509 -90.638 42.508 -90.419 42.504 -89.923 42.503 -89.834 42.497 -89.401 42.497 -89.359 42.491 -88.939 42.491 -88.764 42.489 -88.706 42.491 -88.297 42.489 -88.194 42.489 -87.797 42.314 -87.836 42.156 -87.761 42.059 -87.671 41.847 -87.612 41.723 -87.529 41.469 -87.532 41.301 -87.532 41.173 -87.531 41.009 -87.532 40.745 -87.532 40.494 -87.537 40.483 -87.535 40.166 -87.535 39.887 -87.535 39.609 -87.535 39.477 -87.538 39.351 -87.541 39.338 -87.597 39.307 -87.625 39.297 -87.611 39.281 -87.615 39.258 -87.606 39.248 -87.584 39.208 -87.588 39.198 -87.594 39.196 -87.607 39.168 -87.644 39.146 -87.671 39.131 -87.659 39.113 -87.662 39.103 -87.631 39.088 -87.631 39.084 -87.612 39.062 -87.585 38.995 -87.581 38.994 -87.591 38.977 -87.547 38.963 -87.533 38.931 -87.531 38.904 -87.539 38.869 -87.559 38.857 -87.551 38.795 -87.507 38.776 -87.519 38.769 -87.508 38.736 -87.508 38.685 -87.543 38.672 -87.588 38.642 -87.625 38.622 -87.628 38.599 -87.619 38.593 -87.641 38.573 -87.652 38.547 -87.672 38.515 -87.651 38.501 -87.653 38.504 -87.679 38.481 -87.692 38.466 -87.756 38.457 -87.758 38.445 -87.738 38.417 -87.748 38.378 -87.784 38.352 -87.834 38.286 -87.851 38.285 -87.863 38.316 -87.874 38.315 -87.883 38.301 -87.888 38.281 -87.914 38.302 -87.913 38.304 -87.925 38.241 -87.981 38.234 -87.986 38.201 -87.977 38.171 -87.932 38.157 -87.931 38.136 -87.951 38.131 -87.973 38.103 -88.018 38.092 -88.012 38.096 -87.964 38.073 -87.975 38.054 -88.034 38.045 -88.043 38.038 -88.041 38.033 -88.021 38.008 -88.029 37.975 -88.021 37.956 -88.042 37.934 -88.041 37.929 -88.064 37.944 -88.078 37.923 -88.084 37.917 -88.031 37.905 -88.026 37.896 -88.044 37.906 -88.101 37.895 -88.101 37.867 -88.075 37.843 -88.034 37.827 -88.042 37.831 -88.089 37.817 -88.086 37.805 -88.035 37.735 -88.072 37.701 -88.133 37.661 -88.159 37.628 -88.157 37.583 -88.134 37.511 -88.071</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Illinois</topp:STATE_NAME><topp:STATE_FIPS>17</topp:STATE_FIPS><topp:SUB_REGION>E N Cen</topp:SUB_REGION><topp:STATE_ABBR>IL</topp:STATE_ABBR><topp:LAND_KM>143986.61</topp:LAND_KM><topp:WATER_KM>1993.335</topp:WATER_KM><topp:PERSONS>1.143E7</topp:PERSONS><topp:FAMILIES>2924880.0</topp:FAMILIES><topp:HOUSHOLD>4202240.0</topp:HOUSHOLD><topp:MALE>5552233.0</topp:MALE><topp:FEMALE>5878369.0</topp:FEMALE><topp:WORKERS>4199206.0</topp:WORKERS><topp:DRVALONE>3741715.0</topp:DRVALONE><topp:CARPOOL>652603.0</topp:CARPOOL><topp:PUBTRANS>538071.0</topp:PUBTRANS><topp:EMPLOYED>5417967.0</topp:EMPLOYED><topp:UNEMPLOY>385040.0</topp:UNEMPLOY><topp:SERVICE>1360159.0</topp:SERVICE><topp:MANUAL>828906.0</topp:MANUAL><topp:P_MALE>0.486</topp:P_MALE><topp:P_FEMALE>0.514</topp:P_FEMALE><topp:SAMP_POP>1747776.0</topp:SAMP_POP></topp:states><topp:states gml:id="states.2"><gml:boundedBy><gml:Envelope srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:lowerCorner>38.788 -77.122</gml:lowerCorner><gml:upperCorner>38.993 -76.911</gml:upperCorner></gml:Envelope></gml:boundedBy><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.966 -77.008 38.889 -76.911 38.788 -77.045 38.813 -77.035 38.829 -77.045 38.838 -77.041 38.862 -77.039 38.886 -77.067 38.915 -77.078 38.932 -77.122 38.993 -77.042 38.966 -77.008</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>District of Columbia</topp:STATE_NAME><topp:STATE_FIPS>11</topp:STATE_FIPS><topp:SUB_REGION>S Atl</topp:SUB_REGION><topp:STATE_ABBR>DC</topp:STATE_ABBR><topp:LAND_KM>159.055</topp:LAND_KM><topp:WATER_KM>17.991</topp:WATER_KM><topp:PERSONS>606900.0</topp:PERSONS><topp:FAMILIES>122087.0</topp:FAMILIES><topp:HOUSHOLD>249634.0</topp:HOUSHOLD><topp:MALE>282970.0</topp:MALE><topp:FEMALE>323930.0</topp:FEMALE><topp:WORKERS>229975.0</topp:WORKERS><topp:DRVALONE>106694.0</topp:DRVALONE><topp:CARPOOL>36621.0</topp:CARPOOL><topp:PUBTRANS>111422.0</topp:PUBTRANS><topp:EMPLOYED>303994.0</topp:EMPLOYED><topp:UNEMPLOY>23442.0</topp:UNEMPLOY><topp:SERVICE>65498.0</topp:SERVICE><topp:MANUAL>22407.0</topp:MANUAL><topp:P_MALE>0.466</topp:P_MALE><topp:P_FEMALE>0.534</topp:P_FEMALE><topp:SAMP_POP>72696.0</topp:SAMP_POP></topp:states><topp:states gml:id="states.3"><gml:boundedBy><gml:Envelope srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:lowerCorner>38.449 -75.791</gml:lowerCorner><gml:upperCorner>39.841 -75.045</gml:upperCorner></gml:Envelope></gml:boundedBy><topp:the_geom><gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:surfaceMember><gml:Polygon><gml:exterior><gml:LinearRing><gml:posList>38.557 -75.707 38.649 -75.711 38.831 -75.724 39.141 -75.752 39.247 -75.761 39.295 -75.764 39.383 -75.772 39.723 -75.791 39.724 -75.775 39.774 -75.745 39.821 -75.695 39.838 -75.644 39.841 -75.583 39.826 -75.471 39.798 -75.421 39.789 -75.412 39.778 -75.428 39.763 -75.461 39.741 -75.475 39.719 -75.476 39.714 -75.489 39.612 -75.611 39.566 -75.562 39.463 -75.591 39.366 -75.515 39.257 -75.402 39.073 -75.397 39.012 -75.324 38.945 -75.307 38.808 -75.191 38.799 -75.083 38.449 -75.045 38.449 -75.068 38.451 -75.093 38.455 -75.351 38.463 -75.699 38.557 -75.707</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon></gml:surfaceMember></gml:MultiSurface></topp:the_geom><topp:STATE_NAME>Delaware</topp:STATE_NAME><topp:STATE_FIPS>10</topp:STATE_FIPS><topp:SUB_REGION>S Atl</topp:SUB_REGION><topp:STATE_ABBR>DE</topp:STATE_ABBR><topp:LAND_KM>5062.456</topp:LAND_KM><topp:WATER_KM>1385.022</topp:WATER_KM><topp:PERSONS>666168.0</topp:PERSONS><topp:FAMILIES>175867.0</topp:FAMILIES><topp:HOUSHOLD>247497.0</topp:HOUSHOLD><topp:MALE>322968.0</topp:MALE><topp:FEMALE>343200.0</topp:FEMALE><topp:WORKERS>247566.0</topp:WORKERS><topp:DRVALONE>258087.0</topp:DRVALONE><topp:CARPOOL>42968.0</topp:CARPOOL><topp:PUBTRANS>8069.0</topp:PUBTRANS><topp:EMPLOYED>335147.0</topp:EMPLOYED><topp:UNEMPLOY>13945.0</topp:UNEMPLOY><topp:SERVICE>87973.0</topp:SERVICE><topp:MANUAL>44140.0</topp:MANUAL><topp:P_MALE>0.485</topp:P_MALE><topp:P_FEMALE>0.515</topp:P_FEMALE><topp:SAMP_POP>102776.0</topp:SAMP_POP></topp:states></gml:featureMembers></wfs:FeatureCollection>
`,
  'v2/point-coord.xml': `\
<gml:Point xmlns:gml="http://www.opengis.net/gml" srsName="foo">
  <gml:coord>
    <gml:X>1</gml:X>
    <gml:Y>2</gml:Y>
  </gml:coord>
</gml:Point>
`,
  'v2/point-coordinates.xml': `\
<gml:Point xmlns:gml="http://www.opengis.net/gml" srsName="foo">
  <gml:coordinates decimal="." cs="," ts=" ">1,2</gml:coordinates>
</gml:Point>
`,
  'v2/linestring-coord.xml': `\
<gml:LineString xmlns:gml="http://www.opengis.net/gml" srsName="foo">
  <gml:coord>
    <gml:X>1</gml:X>
    <gml:Y>2</gml:Y>
  </gml:coord>
  <gml:coord>
    <gml:X>3</gml:X>
    <gml:Y>4</gml:Y>
  </gml:coord>
</gml:LineString>
`,
  'v2/linestring-coordinates.xml': `\
<gml:LineString xmlns:gml="http://www.opengis.net/gml" srsName="foo">
  <gml:coordinates decimal="." cs="," ts=" ">1,2 3,4</gml:coordinates>
</gml:LineString>
`,
  'v2/multipoint-coord.xml': `\
<gml:MultiPoint xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:pointMember>
        <gml:Point>
            <gml:coord>
                <gml:X>1</gml:X>
                <gml:Y>2</gml:Y>
            </gml:coord>
        </gml:Point>
    </gml:pointMember>
    <gml:pointMember>
        <gml:Point>
            <gml:coord>
                <gml:X>2</gml:X>
                <gml:Y>3</gml:Y>
            </gml:coord>
        </gml:Point>
    </gml:pointMember>
    <gml:pointMember>
        <gml:Point>
            <gml:coord>
                <gml:X>3</gml:X>
                <gml:Y>4</gml:Y>
            </gml:coord>
        </gml:Point>
    </gml:pointMember>
</gml:MultiPoint>
`,
  'v2/multipoint-coordinates.xml': `\
<gml:MultiPoint xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:pointMember>
        <gml:Point>
            <gml:coordinates decimal="." cs="," ts=" ">1,2</gml:coordinates>
        </gml:Point>
    </gml:pointMember>
    <gml:pointMember>
        <gml:Point>
            <gml:coordinates decimal="." cs="," ts=" ">2,3</gml:coordinates>
        </gml:Point>
    </gml:pointMember>
    <gml:pointMember>
        <gml:Point>
            <gml:coordinates decimal="." cs="," ts=" ">3,4</gml:coordinates>
        </gml:Point>
    </gml:pointMember>
</gml:MultiPoint>
`,
  'v2/multilinestring-coord.xml': `\
<gml:MultiLineString xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:lineStringMember>
        <gml:LineString>
            <gml:coord>
                <gml:X>1</gml:X>
                <gml:Y>2</gml:Y>
            </gml:coord>
            <gml:coord>
                <gml:X>2</gml:X>
                <gml:Y>3</gml:Y>
            </gml:coord>
        </gml:LineString>
    </gml:lineStringMember>
    <gml:lineStringMember>
        <gml:LineString>
            <gml:coord>
                <gml:X>3</gml:X>
                <gml:Y>4</gml:Y>
            </gml:coord>
            <gml:coord>
                <gml:X>4</gml:X>
                <gml:Y>5</gml:Y>
            </gml:coord>
        </gml:LineString>
    </gml:lineStringMember>
</gml:MultiLineString>
`,
  'v2/multilinestring-coordinates.xml': `\
<gml:MultiLineString xmlns:gml="http://www.opengis.net/gml" srsName="foo">
    <gml:lineStringMember>
        <gml:LineString>
            <gml:coordinates decimal="." cs="," ts=" ">1,2 2,3</gml:coordinates>
        </gml:LineString>
    </gml:lineStringMember>
    <gml:lineStringMember>
        <gml:LineString>
            <gml:coordinates decimal="." cs="," ts=" ">3,4 4,5</gml:coordinates>
        </gml:LineString>
    </gml:lineStringMember>
</gml:MultiLineString>
`,
  'v3/repeated-name.xml': `\
    <?xml version="1.0" encoding="UTF-8"?>
    <wfs:FeatureCollection numberOfFeatures="1" timeStamp="2010-01-29T15:10:38.921-07:00"
            xsi:schemaLocation="http://medford.opengeo.org http://localhost:8080/geoserver/wfs?service=WFS&amp;version=1.1.0&amp;request=DescribeFeatureType&amp;typeName=medford%3Azoning http://www.opengis.net/wfs http://localhost:8080/geoserver/schemas/wfs/1.1.0/wfs.xsd"
            xmlns:ogc="http://www.opengis.net/ogc"
            xmlns:wfs="http://www.opengis.net/wfs"
            xmlns:medford="http://opengeo.org/#medford"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:ows="http://www.opengis.net/ows"
            xmlns:gml="http://www.opengis.net/gml"
            xmlns:xlink="http://www.w3.org/1999/xlink">
        <gml:featureMembers>
            <medford:zoning gml:id="zoning.1">
                <medford:the_geom>
                    <gml:MultiSurface srsName="urn:x-ogc:def:crs:EPSG:4326">
                        <gml:surfaceMember>
                            <gml:Polygon>
                                <gml:exterior>
                                    <gml:LinearRing>
                                        <gml:posList>42.397027571297585 -122.88465674265922 42.39702893980587 -122.88509730796012 42.397029086785146 -122.88511582432085 42.39702379767053 -122.88528111596624 42.39748517484964 -122.88529300380065 42.39748473847452 -122.88509914138723 42.39748482219041 -122.8849959517568 42.397485082635576 -122.8846741899541 42.3974853307826 -122.88436529392652 42.39702663751206 -122.88435664014142 42.397027571297585 -122.88465674265922</gml:posList>
                                    </gml:LinearRing>
                                </gml:exterior>
                            </gml:Polygon>
                        </gml:surfaceMember>
                    </gml:MultiSurface>
                </medford:the_geom>
                <medford:objectid>1</medford:objectid>
                <medford:cityzone>YES</medford:cityzone>
                <medford:zoning>I-L</medford:zoning>
                <medford:revdate>2004-04-12T00:00:00-06:00</medford:revdate>
                <medford:finord></medford:finord>
                <medford:filenum></medford:filenum>
                <medford:acres>0.95741118624</medford:acres>
                <medford:misc></medford:misc>
                <medford:shape_leng>835.705330224</medford:shape_leng>
                <medford:perimeter>835.705330224</medford:perimeter>
                <medford:area>41704.8312728</medford:area>
                <medford:shape_le_1>835.705330224</medford:shape_le_1>
                <medford:shape_area>41704.8312728</medford:shape_area>
                <medford:hectares>0.38745056079</medford:hectares>
            </medford:zoning>
        </gml:featureMembers>
    </wfs:FeatureCollection>
    `
};
