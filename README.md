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
tiny
┌─────────┬──────────────────────┬───────────────┬────────────────────┐
│ (index) │         name         │   duration    │ serialialized_size │
├─────────┼──────────────────────┼───────────────┼────────────────────┤
│    0    │     'JSON_parse'     │ '0.029536 ms' │     '1.062 K'      │
│    1    │    'CBOR_decode'     │ '0.83707 ms'  │     '0.945 K'      │
│    2    │  'BSON_deserialize'  │ '1.587789 ms' │     '1.131 K'      │
│    3    │ 'MessagePack_decode' │ '0.682353 ms' │     '0.943 K'      │
└─────────┴──────────────────────┴───────────────┴────────────────────┘
medium
┌─────────┬──────────────────────┬───────────────┬────────────────────┐
│ (index) │         name         │   duration    │ serialialized_size │
├─────────┼──────────────────────┼───────────────┼────────────────────┤
│    0    │     'JSON_parse'     │ '0.067438 ms' │     '6.336 K'      │
│    1    │    'CBOR_decode'     │ '1.031592 ms' │     '5.622 K'      │
│    2    │  'BSON_deserialize'  │ '0.66015 ms'  │     '6.762 K'      │
│    3    │ 'MessagePack_decode' │ '1.14278 ms'  │      '5.61 K'      │
└─────────┴──────────────────────┴───────────────┴────────────────────┘
large
┌─────────┬──────────────────────┬───────────────┬────────────────────┐
│ (index) │         name         │   duration    │ serialialized_size │
├─────────┼──────────────────────┼───────────────┼────────────────────┤
│    0    │     'JSON_parse'     │ '0.283252 ms' │     '31.689 K'     │
│    1    │    'CBOR_decode'     │ '2.792721 ms' │     '28.125 K'     │
│    2    │  'BSON_deserialize'  │ '2.97489 ms'  │     '33.803 K'     │
│    3    │ 'MessagePack_decode' │ '2.147151 ms' │     '28.042 K'     │
└─────────┴──────────────────────┴───────────────┴────────────────────┘
extra-large
┌─────────┬──────────────────────┬────────────────┬────────────────────┐
│ (index) │         name         │    duration    │ serialialized_size │
├─────────┼──────────────────────┼────────────────┼────────────────────┤
│    0    │     'JSON_parse'     │ '8.723884 ms'  │    '541.044 K'     │
│    1    │    'CBOR_decode'     │ '15.989393 ms' │    '481.705 K'     │
│    2    │  'BSON_deserialize'  │ '18.387901 ms' │     '576.3 K'      │
│    3    │ 'MessagePack_decode' │ '17.360007 ms' │     '480.4 K'      │
└─────────┴──────────────────────┴────────────────┴────────────────────┘

```

### How to check locally:
```
npm start
```

Existing formats table: https://en.wikipedia.org/wiki/Comparison_of_data_serialization_formats


