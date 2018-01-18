/**
 * @flow
 * @relayHash 78032161212ae4502fc6bb019f2373c2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AgencyListPageQueryResponse = {|
  +allAgencies: ?{| |};
|};
*/


/*
query AgencyListPageQuery {
  allAgencies {
    ...AgencyList_allAgencies
  }
}

fragment AgencyList_allAgencies on AgencyNodeConnection {
  edges {
    node {
      ...Agency_agency
      id
    }
  }
}

fragment Agency_agency on AgencyNode {
  id
  name
  url
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AgencyListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "AgencyNodeConnection",
        "name": "allAgencies",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AgencyList_allAgencies",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AgencyListPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AgencyListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "AgencyNodeConnection",
        "name": "allAgencies",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "AgencyNodeEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "AgencyNode",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "url",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AgencyListPageQuery {\n  allAgencies {\n    ...AgencyList_allAgencies\n  }\n}\n\nfragment AgencyList_allAgencies on AgencyNodeConnection {\n  edges {\n    node {\n      ...Agency_agency\n      id\n    }\n  }\n}\n\nfragment Agency_agency on AgencyNode {\n  id\n  name\n  url\n}\n"
};

module.exports = batch;
