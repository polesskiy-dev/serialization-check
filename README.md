# serialization-check
## This is a comparison between JSON-based formats that can be serialized to Binary

I compare 4 typical JSON files:
* tiny ~ 1K, ~50 lines
* medium ~6K, ~250 lines
* large ~30K, ~1300 lines
* extra-large ~500K, 22500 lines

Results are:
* serialized binary (Buffer) size in bytes
* deserialization time in ms

Test environment: *nodejs* v11, 
Performance test: nodejs *Performance Timing API* 

Tested formats: 
```
JSON (ethalon), CBOR, BSON, MessagePack
```

### Results

```

┌─────────┬──────────────────────┬────────────────┬────────────────────┐
│ (index) │         name         │    duration    │ serialialized_size │
├─────────┼──────────────────────┼────────────────┼────────────────────┤
│    0    │     'JSON_parse'     │ '0.029533 ms'  │     '1.062 K'      │
│    1    │    'CBOR_decode'     │ '0.895115 ms'  │     '0.945 K'      │
│    2    │  'BSON_deserialize'  │ '1.604417 ms'  │     '1.131 K'      │
│    3    │ 'MessagePack_decode' │ '0.683707 ms'  │     '0.943 K'      │
│    4    │     'JSON_parse'     │ '0.078708 ms'  │     '6.336 K'      │
│    5    │    'CBOR_decode'     │ '1.125475 ms'  │     '5.622 K'      │
│    6    │  'BSON_deserialize'  │  '0.66531 ms'  │     '6.762 K'      │
│    7    │ 'MessagePack_decode' │ '1.148859 ms'  │      '5.61 K'      │
│    8    │     'JSON_parse'     │ '0.269394 ms'  │     '31.689 K'     │
│    9    │    'CBOR_decode'     │ '2.610486 ms'  │     '28.125 K'     │
│   10    │  'BSON_deserialize'  │ '3.596119 ms'  │     '33.803 K'     │
│   11    │ 'MessagePack_decode' │ '2.501078 ms'  │     '28.042 K'     │
│   12    │     'JSON_parse'     │ '8.758497 ms'  │    '541.044 K'     │
│   13    │    'CBOR_decode'     │ '15.955803 ms' │    '481.705 K'     │
│   14    │  'BSON_deserialize'  │ '19.501056 ms' │     '576.3 K'      │
│   15    │ 'MessagePack_decode' │ '18.463013 ms' │     '480.4 K'      │
└─────────┴──────────────────────┴────────────────┴────────────────────┘

```

### How to check locally:
```
npm start
```

Existing formats table: https://en.wikipedia.org/wiki/Comparison_of_data_serialization_formats


