/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type AgencyList_allAgencies = {|
  +edges: $ReadOnlyArray<?{|
    +node: ?{| |};
  |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AgencyList_allAgencies",
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
              "kind": "FragmentSpread",
              "name": "Agency_agency",
              "args": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AgencyNodeConnection"
};

module.exports = fragment;
