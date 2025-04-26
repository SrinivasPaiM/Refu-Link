import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

const INDIA_TOPO_JSON = '/ind.topo.json';

const colorScale = scaleLinear()
  .domain([0, 1])
  .range(['#f0f9e8', '#0868ac']);

const SimilarityMap = ({ similarityScores = [] }) => {
  const handleMouseEnter = (geo, score) => {
    if (score !== undefined && geo?.properties?.name) {
      console.log(`${geo.properties.name}: ${(score * 100).toFixed(1)}%`);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [78.9629, 22.5937] // Centered on India
        }}
        style={{
          width: '100%',
          height: 'auto'
        }}
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              if (!geo?.properties?.name) {
                return null; // Skip geographies without a name
              }

              const stateName = geo.properties.name;
              const stateScore = similarityScores.find(
                score => score?.state?.toLowerCase() === stateName.toLowerCase()
              )?.score;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleMouseEnter(geo, stateScore)}
                  style={{
                    default: {
                      fill: stateScore !== undefined ? colorScale(stateScore) : '#eee',
                      stroke: '#fff',
                      strokeWidth: 0.5,
                      outline: 'none'
                    },
                    hover: {
                      fill: '#ffa500',
                      stroke: '#fff',
                      strokeWidth: 0.5,
                      outline: 'none'
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      
      {/* Color Legend */}
      <div
        style={{
          marginTop: '20px',
          width: '100%',
          height: '40px',
          position: 'relative'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '20px',
            background: `linear-gradient(to right, ${colorScale(0)}, ${colorScale(1)})`,
            borderRadius: '4px'
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '5px'
          }}
        >
          <span>0%</span>
          <span>Similarity</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default memo(SimilarityMap); 