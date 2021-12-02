
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "googleroadmap_1": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "googleterrainmap_2": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "googlesatellite_3": {
            "type": "raster",
            "tiles": ["http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "COUNTY_BOUNDARY_4": {
            "type": "geojson",
            "data": json_COUNTY_BOUNDARY_4
        }
                    ,
        "STATE_BOUNDARY_5": {
            "type": "geojson",
            "data": json_STATE_BOUNDARY_5
        }
                    ,
        "roadmap_6": {
            "type": "raster",
            "tiles": ["https://www.google.ca/maps/place/Pennsylvania/@41.0993611,-79.8482194,647169m/data=!3m1!1e3!4m5!3m4!1s0x882d80261e32e589:0xc24621475022b43d!8m2!3d41.2033216!4d-77.1945247"],
            "tileSize": 256
        },
        "PAAbandoned_Orphan_WellRegistry_7": {
            "type": "geojson",
            "data": json_PAAbandoned_Orphan_WellRegistry_7
        }
                    ,
        "Pennsylvaniabuildings_8": {
            "type": "geojson",
            "data": json_Pennsylvaniabuildings_8
        }
                    ,
        "IntersectionMcKeanCountyBuildings_9": {
            "type": "geojson",
            "data": json_IntersectionMcKeanCountyBuildings_9
        }
                    ,
        "Intersectionmckeancountywells_10": {
            "type": "geojson",
            "data": json_Intersectionmckeancountywells_10
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_googleroadmap_1_1",
            "type": "raster",
            "source": "googleroadmap_1"
        },
        {
            "id": "lyr_googleterrainmap_2_2",
            "type": "raster",
            "source": "googleterrainmap_2"
        },
        {
            "id": "lyr_googlesatellite_3_3",
            "type": "raster",
            "source": "googlesatellite_3"
        },
        {
            "id": "lyr_COUNTY_BOUNDARY_4_0",
            "type": "line",
            "source": "COUNTY_BOUNDARY_4",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#b5e5b3'}
        }
,
        {
            "id": "lyr_STATE_BOUNDARY_5_0",
            "type": "line",
            "source": "STATE_BOUNDARY_5",
            "layout": {},
            "paint": {'line-width': 3.4285714285714284, 'line-opacity': 1.0, 'line-color': '#3579b1'}
        }
,
        {
            "id": "lyr_roadmap_6_6",
            "type": "raster",
            "source": "roadmap_6"
        },
        {
            "id": "lyr_PAAbandoned_Orphan_WellRegistry_7_0",
            "type": "circle",
            "source": "PAAbandoned_Orphan_WellRegistry_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#2b5b47', 'circle-opacity': 0.748, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#ffffff'}
        }
,
        {
            "id": "lyr_Pennsylvaniabuildings_8_0",
            "type": "fill",
            "source": "Pennsylvaniabuildings_8",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#729b6f'}
        }
,
        {
            "id": "lyr_IntersectionMcKeanCountyBuildings_9_0",
            "type": "fill",
            "source": "IntersectionMcKeanCountyBuildings_9",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#fbf7f3'}
        }
,
        {
            "id": "lyr_Intersectionmckeancountywells_10_0",
            "type": "circle",
            "source": "Intersectionmckeancountywells_10",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#db935c', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
],
}