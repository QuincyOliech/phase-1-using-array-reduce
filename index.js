const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
function reducer(totalBatteries, batteryBatch) {
  return totalBatteries + batteryBatch;
}
const totalBatteries = batteryBatches.reduce(reducer, 0);
