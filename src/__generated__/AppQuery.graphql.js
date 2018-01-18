/**
 * @flow
 * @relayHash 1dbf53315b6c26ce92e77a957c4383f2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +isLoggedIn: ?boolean;
|};
*/


/*
query AppQuery {
  isLoggedIn
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "isLoggedIn",
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "isLoggedIn",
        "storageKey": null
      }
    ]
  },
  "text": "query AppQuery {\n  isLoggedIn\n}\n"
};

module.exports = batch;
