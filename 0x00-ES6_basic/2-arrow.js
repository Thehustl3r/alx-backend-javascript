const getNeighborhoodsList = () => {
    const neighborhoodsList = {
        sanFranciscoNeighborhoods : ['SOMA', 'Union Square'],
        addNeighborhood: function (newNeighborhood){
            this.sanFranciscoNeighborhoods.push(newNeighborhood);
            return this.sanFranciscoNeighborhoods;
        }
    };

    return neighborhoodsList;
  
  };

  export default getNeighborhoodsList;