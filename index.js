const {
    performance,
    PerformanceObserver
} = require('perf_hooks');
const CBOR = require('cbor-js')
const BSON = require('bson')
const msgpack = require("msgpack-lite");

// objects import
const tinySizeMockData = require('./data-examples/tiny-size-mock.data')
const mediumSizeMockData = require('./data-examples/medium-size-mock.data')
const largeSizeMockData = require('./data-examples/large-size-mock.data')
const extraLargeSizeMockData = require('./data-examples/extra-large-size-mock.data')

const filesArr = [tinySizeMockData, mediumSizeMockData, largeSizeMockData, extraLargeSizeMockData]

// transform PerformanceEntry to human readable format
const measureTransform = (performanceEntry) => {
    const funcArg = performanceEntry[0]
    const serialialized_size = (Buffer.from(funcArg).length / 1000) + ' K'
    const duration = performanceEntry.duration + ' ms'
    const name = performanceEntry.name

    return { name, duration, serialialized_size }
}

// perf measure init
const CBOR_decode = arg =>  CBOR.decode(arg) // to have friendly name
const JSON_parse = arg => JSON.parse(arg) // to have friendly name
const BSON_deserialize = arg => BSON.deserialize(arg) // to have friendly name
const MessagePack_decode = arg => msgpack.decode(arg)
const wrappredCBORDecode = performance.timerify(CBOR_decode)
const wrappredJSONParse = performance.timerify(JSON_parse)
const wrappedBSONDeserialize = performance.timerify(BSON_deserialize)
const wrappedMsgDecode = performance.timerify(MessagePack_decode)

// perf measure observer
const obs = new PerformanceObserver((list, observer) => {
    console.table(list.getEntries().map(measureTransform))
    // console.log(list.getEntries())
    observer.disconnect();
});
obs.observe({ entryTypes: ['function'], buffered: true });


filesArr.forEach((data) => {
    const strData = JSON.stringify(data)
    const cborData = CBOR.encode(data)
    const bsonData = BSON.serialize(data)
    const msgData = msgpack.encode(data)

    wrappredJSONParse(strData)
    wrappredCBORDecode(cborData)
    wrappedBSONDeserialize(bsonData)
    wrappedMsgDecode(msgData)
});

